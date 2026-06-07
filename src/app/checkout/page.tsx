"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { money, summarizeCart } from "@/lib/cart";
import { useCart } from "@/components/CartProvider";

export default function CheckoutPage() {
  const router = useRouter();
  const { items, fulfillment, clearCart } = useCart();
  const [promo, setPromo] = useState("");
  const [error, setError] = useState("");
  const summary = summarizeCart(items, fulfillment, promo);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (items.length === 0) {
      setError("Your cart is empty. Add an item before checkout.");
      return;
    }
    const orderId = `ZG-${Math.floor(1000 + Math.random() * 9000)}`;
    window.localStorage.setItem("zettogo-last-order", JSON.stringify({ orderId, fulfillment, total: summary.total }));
    clearCart();
    router.push("/order-success");
  }

  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_380px]">
      <form onSubmit={submit} className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6">
        <div><p className="font-black uppercase tracking-wide text-flame">Checkout</p><h1 className="mt-2 text-4xl font-black text-navy">Confirm your details</h1></div>
        {error ? <div role="alert" className="rounded-xl bg-red-50 p-4 font-bold text-red-700">{error}</div> : null}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 font-bold">Name<input required className="rounded-xl border border-slate-200 px-4 py-3" /></label>
          <label className="grid gap-2 font-bold">Phone<input required className="rounded-xl border border-slate-200 px-4 py-3" /></label>
          <label className="grid gap-2 font-bold sm:col-span-2">Email<input type="email" required className="rounded-xl border border-slate-200 px-4 py-3" /></label>
        </div>
        <fieldset className="grid gap-3">
          <legend className="font-black">Payment method</legend>
          <label className="rounded-xl border border-slate-200 p-4"><input name="payment" type="radio" defaultChecked /> Credit Card</label>
          <label className="rounded-xl border border-slate-200 p-4"><input name="payment" type="radio" /> Pay at Store</label>
        </fieldset>
        <button className="w-full rounded-xl bg-navy px-5 py-4 font-black text-white">Place order</button>
      </form>
      <aside className="h-fit rounded-3xl bg-rice p-6">
        <h2 className="text-2xl font-black text-navy">Order summary</h2>
        <label className="mt-4 grid gap-2 font-bold">Promo code
          <input value={promo} onChange={(event) => setPromo(event.target.value)} className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Try WOK10" />
        </label>
        <div className="mt-5 space-y-2 text-sm">
          <div className="flex justify-between"><span>Subtotal</span><strong>{money(summary.subtotal)}</strong></div>
          <div className="flex justify-between"><span>Tax</span><strong>{money(summary.tax)}</strong></div>
          <div className="flex justify-between"><span>Delivery</span><strong>{money(summary.deliveryFee)}</strong></div>
          <div className="flex justify-between"><span>Discount</span><strong>-{money(summary.discount)}</strong></div>
          <div className="flex justify-between text-xl"><span className="font-black">Total</span><strong>{money(summary.total)}</strong></div>
        </div>
      </aside>
    </section>
  );
}
