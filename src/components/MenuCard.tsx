"use client";

import { money } from "@/lib/cart";
import type { MenuItem } from "@/lib/data";
import { useCart } from "./CartProvider";
import { FlameIcon } from "./Icons";

export function MenuCard({ item }: { item: MenuItem }) {
  const { addItem } = useCart();
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className={`relative h-44 overflow-hidden ${item.image}`}>
        {item.photo ? <img src={item.photo} alt="" className="h-full w-full object-cover" /> : null}
        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black text-navy shadow-sm">{item.badge ?? (item.new ? "New" : "Fresh")}</div>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-black text-ink">{item.name}</h3>
          <strong className="text-navy">{money(item.price)}</strong>
        </div>
        <p className="min-h-12 text-sm leading-6 text-slate-600">{item.description}</p>
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="rounded-full bg-slate-100 px-2 py-1">{item.calories} cal</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-flame">
            <FlameIcon /> {item.spice === 0 ? "Mild" : `${item.spice}/3`}
          </span>
          {item.allergens.slice(0, 2).map((tag) => (
            <span key={tag} className="rounded-full bg-blue-50 px-2 py-1 text-navy">{tag}</span>
          ))}
        </div>
        <button onClick={() => addItem(item)} className="w-full rounded-xl bg-flame px-4 py-3 font-black text-white focus-ring" aria-label={`Add ${item.name} to cart`}>
          Add
        </button>
      </div>
    </article>
  );
}
