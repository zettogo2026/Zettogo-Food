import Link from "next/link";
import { mealTypes, menuItems } from "@/lib/data";
import { MenuCard } from "@/components/MenuCard";

export default function HomePage() {
  const featured = menuItems.filter((item) => item.popular || item.new).slice(0, 3);

  return (
    <>
      <section className="bg-[radial-gradient(circle_at_top,#fff2c2_0,#fff8ea_32%,#fff_70%)]">
        <div className="mx-auto grid min-h-[calc(100vh-80px)] w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex rounded-full border border-orange-200 bg-white px-3 py-2 text-sm font-black text-flame shadow-sm">
              Chinese lunch boxes packed to the top
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-none text-ink sm:text-7xl">
              Fill the box. Eat until full.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              ZettoGo serves hot Chinese combo boxes for pickup and delivery. Choose a $14 small box or $18 big box, then pack it with rice, noodles, mains, crispy sides, and all the flavor it can hold.
            </p>
            <div className="grid gap-3 sm:flex">
              <Link href="/order?meal=bowl" className="rounded-xl bg-flame px-6 py-4 text-center font-black text-white shadow-glow">
                $14 Small Box
              </Link>
              <Link href="/order?meal=plate" className="rounded-xl border border-orange-200 bg-white px-6 py-4 text-center font-black text-navy">
                $18 Big Box
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-orange-100 bg-white p-3 shadow-glow">
            <div className="relative overflow-hidden rounded-2xl">
              <img src="/images/hero-rice-box.png" alt="A packed Chinese takeout rice box" className="h-[420px] w-full object-cover" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-white/95 p-4 shadow-lg">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-black text-flame">Today&apos;s deal</p>
                    <h2 className="text-2xl font-black text-ink">Pack-it-full lunch box</h2>
                  </div>
                  <span className="rounded-full bg-gold px-4 py-2 font-black text-navy">$14 / $18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="font-black uppercase tracking-wide text-flame">Box sizes</p>
            <h2 className="text-3xl font-black text-navy">Two simple prices, serious portions</h2>
          </div>
          <Link href="/menu" className="hidden font-black text-navy sm:inline-flex">View menu</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mealTypes.slice(0, 4).map((meal) => (
            <Link key={meal.id} href={`/order?meal=${meal.id}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="text-xl font-black text-ink">{meal.name}</span>
              <span className="mt-2 block text-sm text-slate-600">{meal.structure}</span>
              <span className="mt-5 inline-flex rounded-full bg-orange-50 px-3 py-1 text-sm font-black text-flame">Pack a box</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6">
        <div className="mb-6">
          <p className="font-black uppercase tracking-wide text-flame">Hot bar favorites</p>
          <h2 className="text-3xl font-black text-navy">Load your box with these</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((item) => <MenuCard key={item.id} item={item} />)}
        </div>
      </section>
    </>
  );
}
