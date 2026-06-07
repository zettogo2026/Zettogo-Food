"use client";

import { useEffect, useState } from "react";
import { MealBuilder } from "@/components/MealBuilder";
import { CartDrawer } from "@/components/CartDrawer";
import { stores, type CategoryId } from "@/lib/data";
import { useCart } from "@/components/CartProvider";

export default function OrderPage() {
  const [initialMeal, setInitialMeal] = useState<CategoryId>("plate");
  const { fulfillment, setFulfillment } = useCart();

  useEffect(() => {
    const meal = new URLSearchParams(window.location.search).get("meal") as CategoryId | null;
    if (meal) setInitialMeal(meal);
  }, []);

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_360px]">
      <div className="space-y-6">
        <div className="rounded-3xl bg-rice p-5">
          <p className="font-black uppercase tracking-wide text-flame">Order</p>
          <h1 className="mt-2 text-4xl font-black text-navy">Pack your ZettoGo box</h1>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {(["pickup", "delivery"] as const).map((method) => (
              <button key={method} onClick={() => setFulfillment(method)} className={`rounded-2xl border p-5 text-left font-black capitalize ${fulfillment === method ? "border-navy bg-white text-navy shadow-glow" : "border-slate-200 bg-white"}`} aria-pressed={fulfillment === method}>
                {method === "pickup" ? "Pickup" : "Delivery"}
                <span className="mt-1 block text-sm font-medium normal-case text-slate-600">{method === "pickup" ? "Order ahead and grab your packed box hot." : "Get a full box delivered to your door."}</span>
              </button>
            ))}
          </div>
        </div>
        {fulfillment === "pickup" ? <PickupPanel /> : <DeliveryPanel />}
        <MealBuilder initial={initialMeal} />
      </div>
      <div className="hidden lg:block"><CartDrawer /></div>
    </section>
  );
}

function PickupPanel() {
  return (
    <div className="grid gap-3 rounded-3xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
      <label className="grid gap-2 font-bold">Store
        <select className="rounded-xl border border-slate-200 px-4 py-3">
          {stores.map((store) => <option key={store.id}>{store.name} - {store.address}</option>)}
        </select>
      </label>
      <label className="grid gap-2 font-bold">Pickup time
        <select className="rounded-xl border border-slate-200 px-4 py-3">
          <option>ASAP - 12 min</option><option>12:30 PM</option><option>1:00 PM</option><option>6:15 PM</option>
        </select>
      </label>
    </div>
  );
}

function DeliveryPanel() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5">
      <label className="grid gap-2 font-bold">Delivery address
        <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Street address, apartment, city" />
      </label>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-blue-50 p-4"><strong>Delivery fee</strong><span className="block text-slate-600">$3.99 estimated</span></div>
        <div className="rounded-2xl bg-orange-50 p-4"><strong>ETA</strong><span className="block text-slate-600">28-35 minutes</span></div>
      </div>
    </div>
  );
}
