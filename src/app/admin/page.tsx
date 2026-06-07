import { mealTypes, menuItems, seededOrders, stores } from "@/lib/data";
import { money } from "@/lib/cart";

const statuses = ["Pending", "Preparing", "Ready", "Completed", "Cancelled"];

export default function AdminPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8 rounded-3xl bg-ink p-6 text-white">
        <p className="font-black uppercase tracking-wide text-gold">Admin</p>
        <h1 className="mt-2 text-4xl font-black">ZettoGo operations</h1>
        <p className="mt-3 text-slate-300">Manage menu items, categories, orders, stores, delivery range, and fees.</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-3xl border border-slate-200 bg-white p-5">
          <div className="mb-4 flex items-center justify-between"><h2 className="text-2xl font-black text-navy">Menu manager</h2><button className="rounded-xl bg-navy px-4 py-2 font-black text-white">Add item</button></div>
          <div className="grid gap-3">
            {menuItems.slice(0, 6).map((item) => (
              <div key={item.id} className="grid gap-3 rounded-2xl bg-rice p-4 sm:grid-cols-[1fr_auto]">
                <div><strong>{item.name}</strong><p className="text-sm text-slate-600">{item.category} · {item.calories} cal · {item.allergens.join(", ") || "no major allergens"}</p></div>
                <div className="flex items-center gap-2"><span className="font-black">{money(item.price)}</span><button className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold">Edit</button><button className="rounded-lg bg-red-50 px-3 py-2 text-sm font-bold text-red-700">Delete</button></div>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-2xl font-black text-navy">Order board</h2>
          <div className="grid gap-3">
            {seededOrders.map((order) => (
              <div key={order.id} className="rounded-2xl bg-rice p-4">
                <div className="flex items-center justify-between"><strong>{order.id}</strong><span>{money(order.total)}</span></div>
                <label className="mt-3 grid gap-2 text-sm font-bold">Status<select className="rounded-xl border border-slate-200 px-3 py-2">{statuses.map((status) => <option key={status}>{status}</option>)}</select></label>
              </div>
            ))}
          </div>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-2xl font-black text-navy">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {mealTypes.map((category) => <span key={category.id} className="rounded-full bg-blue-50 px-3 py-2 text-sm font-black text-navy">{category.name}</span>)}
          </div>
        </section>
        <section className="rounded-3xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-2xl font-black text-navy">Store settings</h2>
          <div className="grid gap-3">
            {stores.map((store) => (
              <div key={store.id} className="rounded-2xl bg-rice p-4">
                <strong>{store.name}</strong>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  <label className="grid gap-1 text-sm font-bold">Hours<input defaultValue={store.hours} className="rounded-lg border border-slate-200 px-3 py-2" /></label>
                  <label className="grid gap-1 text-sm font-bold">Range<input defaultValue={store.range} className="rounded-lg border border-slate-200 px-3 py-2" /></label>
                  <label className="grid gap-1 text-sm font-bold">Fee<input defaultValue={`$${store.fee}`} className="rounded-lg border border-slate-200 px-3 py-2" /></label>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
