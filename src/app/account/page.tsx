import Link from "next/link";
import { menuItems, seededOrders } from "@/lib/data";

export default function AccountPage() {
  const points = 428;
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-3xl bg-navy p-6 text-white">
          <p className="font-black uppercase tracking-wide text-blue-100">Member perks</p>
          <h1 className="mt-3 text-4xl font-black">{points} points</h1>
          <p className="mt-3 text-blue-100">Save favorites, reorder recent boxes, and get member-only lunch deals.</p>
          <div className="mt-6 rounded-2xl bg-white/10 p-4">
            <div className="h-3 overflow-hidden rounded-full bg-white/20"><div className="h-full w-3/4 rounded-full bg-gold" /></div>
            <p className="mt-2 text-sm font-bold">72 points until your next $5 reward</p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex items-center justify-between"><h2 className="text-2xl font-black text-navy">Recent orders</h2><Link href="/order" className="font-black text-navy">Order again</Link></div>
          <div className="mt-4 grid gap-3">
            {seededOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-2xl bg-rice p-4">
                <div><strong>{order.id}</strong><p className="text-sm text-slate-600">{order.method} · {order.time}</p></div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-black text-navy">{order.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-black text-navy">Favorite dishes</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {menuItems.filter((item) => item.popular).slice(0, 3).map((item) => (
            <Link key={item.id} href="/menu" className="rounded-2xl border border-slate-200 bg-white p-5">
              <span className="font-black">{item.name}</span>
              <span className="mt-2 block text-sm text-slate-600">{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
