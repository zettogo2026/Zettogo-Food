"use client";

import { useMemo, useState } from "react";
import { menuItems, mealTypes, type CategoryId } from "@/lib/data";
import { money } from "@/lib/cart";
import { useCart } from "./CartProvider";

const sides = menuItems.filter((item) => ["fried-rice", "chow-mein"].includes(item.id));
const entrees = menuItems.filter((item) => item.category === "a-la-carte" && !["fried-rice", "chow-mein"].includes(item.id));

export function MealBuilder({ initial = "plate" as CategoryId }) {
  const [mealId, setMealId] = useState<CategoryId>(initial);
  const [side, setSide] = useState(sides[0]?.id ?? "");
  const [selectedEntrees, setSelectedEntrees] = useState<string[]>([]);
  const { addItem } = useCart();
  const meal = mealTypes.find((item) => item.id === mealId) ?? mealTypes[1];
  const entreeLimit = mealId === "bowl" ? 2 : mealId === "plate" ? 4 : mealId === "bigger-plate" ? 5 : 4;

  const selectionLabel = useMemo(() => {
    const names = [
      menuItems.find((item) => item.id === side)?.name,
      ...selectedEntrees.map((id) => menuItems.find((item) => item.id === id)?.name)
    ].filter(Boolean);
    return names.join(" + ");
  }, [side, selectedEntrees]);

  function toggleEntree(id: string) {
    setSelectedEntrees((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= entreeLimit) return [...current.slice(1), id];
      return [...current, id];
    });
  }

  return (
    <section className="rounded-3xl bg-rice p-4 sm:p-6">
      <div className="mb-5">
        <p className="text-sm font-black uppercase tracking-wide text-flame">Pack your box</p>
        <h2 className="text-3xl font-black text-navy">Choose a size, then fill it up</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {mealTypes.slice(0, 4).map((type) => (
          <button key={type.id} onClick={() => setMealId(type.id)} className={`rounded-2xl border p-4 text-left focus-ring ${mealId === type.id ? "border-navy bg-white shadow-glow" : "border-slate-200 bg-white"}`} aria-pressed={mealId === type.id}>
            <span className="text-lg font-black">{type.name}</span>
            <span className="mt-1 block text-sm text-slate-600">{type.structure}</span>
            <span className="mt-3 block font-black text-flame">{money(type.price)}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div>
          <h3 className="mb-3 font-black text-ink">Choose your base</h3>
          <div className="grid gap-3">
            {sides.map((item) => (
              <label key={item.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <input type="radio" checked={side === item.id} onChange={() => setSide(item.id)} />
                <span className="font-bold">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-black text-ink">Pick up to {entreeLimit} hot bar items</h3>
          <div className="grid gap-3">
            {entrees.slice(0, 5).map((item) => (
              <label key={item.id} className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">
                <input type="checkbox" checked={selectedEntrees.includes(item.id)} onChange={() => toggleEntree(item.id)} />
                <span className="font-bold">{item.name}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <button
        className="mt-6 w-full rounded-xl bg-flame px-5 py-4 font-black text-white disabled:bg-slate-300"
        disabled={!side || selectedEntrees.length === 0}
        onClick={() =>
          addItem(
            { id: `combo-${mealId}-${Date.now()}`, name: meal.name, price: meal.price, calories: 850, quantity: 1 },
            selectionLabel
          )
        }
        aria-label={`Add packed ${meal.name} to cart`}
      >
        Add packed {meal.name} - {money(meal.price)}
      </button>
    </section>
  );
}
