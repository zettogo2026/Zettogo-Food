"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function OrderSuccessPage() {
  const [order, setOrder] = useState<{ orderId: string; fulfillment: string; total: number } | null>(null);
  useEffect(() => {
    const saved = window.localStorage.getItem("zettogo-last-order");
    setOrder(saved ? JSON.parse(saved) : { orderId: "ZG-2048", fulfillment: "pickup", total: 0 });
  }, []);

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6">
      <div className="rounded-3xl bg-rice p-8 text-center">
        <p className="font-black uppercase tracking-wide text-flame">Order placed</p>
        <h1 className="mt-3 text-4xl font-black text-navy">Your box is being packed.</h1>
        <p className="mt-4 text-slate-600">Order number</p>
        <p className="text-3xl font-black text-ink">{order?.orderId ?? "ZG-2048"}</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white p-5"><strong>Estimated time</strong><span className="block text-slate-600">{order?.fulfillment === "delivery" ? "28-35 min" : "12-18 min"}</span></div>
          <div className="rounded-2xl bg-white p-5"><strong>Method</strong><span className="block capitalize text-slate-600">{order?.fulfillment ?? "pickup"}</span></div>
        </div>
        <Link href="/account" className="mt-7 inline-flex rounded-xl bg-navy px-6 py-4 font-black text-white">View my orders</Link>
      </div>
    </section>
  );
}
