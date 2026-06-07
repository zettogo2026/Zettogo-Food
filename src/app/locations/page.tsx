import { stores } from "@/lib/data";

export default function LocationsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8 rounded-3xl bg-rice p-6">
        <p className="font-black uppercase tracking-wide text-flame">Locations</p>
        <h1 className="mt-2 text-4xl font-black text-navy">Choose your ZettoGo store</h1>
        <p className="mt-3 text-slate-600">Pickup and delivery availability varies by store.</p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {stores.map((store) => (
          <article key={store.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-black text-ink">{store.name}</h2>
            <p className="mt-2 text-slate-600">{store.address}</p>
            <div className="mt-5 space-y-2 text-sm">
              <p><strong>Hours:</strong> {store.hours}</p>
              <p><strong>Delivery range:</strong> {store.range}</p>
              <p><strong>Delivery fee:</strong> ${store.fee}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
