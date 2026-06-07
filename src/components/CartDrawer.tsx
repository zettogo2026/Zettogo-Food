"use client";

import Link from "next/link";
import { money, summarizeCart } from "@/lib/cart";
import { useCart } from "./CartProvider";

export function CartDrawer() {
  const { items, updateQuantity, removeItem, fulfillment } = useCart();
  const summary = summarizeCart(items, fulfillment);

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-glow">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-black text-navy">Your cart</h2>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-navy">{items.length} lines</span>
      </div>
      {items.length === 0 ? (
        <div className="rounded-xl bg-slate-50 p-5 text-sm text-slate-600">
          Your cart is empty. Add a $14 small box, $18 big box, or crispy side to get started.
        </div>
      ) : (
        <div className="space-y-4">
          {items.map((item) => (
            <div key={`${item.id}-${item.notes ?? ""}`} className="border-b border-slate-100 pb-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-ink">{item.name}</h3>
                  {item.notes ? <p className="text-xs text-slate-500">{item.notes}</p> : null}
                  <p className="text-sm font-bold text-slate-600">{money(item.price)}</p>
                </div>
                <button className="text-sm font-bold text-flame focus-ring" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                  Remove
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <button className="h-9 w-9 rounded-lg border border-slate-200 font-black focus-ring" onClick={() => updateQuantity(item.id, item.quantity - 1)} aria-label={`Decrease ${item.name}`}>
                  -
                </button>
                <span className="w-8 text-center font-black">{item.quantity}</span>
                <button className="h-9 w-9 rounded-lg border border-slate-200 font-black focus-ring" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label={`Increase ${item.name}`}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 space-y-2 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><strong>{money(summary.subtotal)}</strong></div>
        <div className="flex justify-between"><span>Tax</span><strong>{money(summary.tax)}</strong></div>
        <div className="flex justify-between"><span>Delivery</span><strong>{money(summary.deliveryFee)}</strong></div>
        <div className="flex justify-between text-lg"><span className="font-black">Total</span><strong>{money(summary.total)}</strong></div>
      </div>
      <Link href="/checkout" className="mt-5 flex w-full items-center justify-center rounded-xl bg-navy px-5 py-4 font-black text-white focus-ring">
        Checkout
      </Link>
    </aside>
  );
}
