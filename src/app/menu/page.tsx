import { MenuCard } from "@/components/MenuCard";
import { mealTypes, menuItems } from "@/lib/data";

export default function MenuPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6">
      <div className="mb-8 rounded-3xl bg-rice p-6">
        <p className="font-black uppercase tracking-wide text-flame">Menu</p>
        <h1 className="mt-2 text-4xl font-black text-navy">Explore the ZettoGo hot bar</h1>
        <p className="mt-3 max-w-2xl text-slate-600">Start with a $14 small box or $18 big box, then add rice, noodles, mains, crispy bites, and drinks.</p>
      </div>
      <div className="mb-8 flex gap-3 overflow-x-auto pb-2">
        {mealTypes.map((category) => (
          <a key={category.id} href={`#${category.id}`} className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-black text-navy">
            {category.name}
          </a>
        ))}
      </div>
      {mealTypes.map((category) => {
        const items = menuItems.filter((item) => item.category === category.id || (category.id === "a-la-carte" && item.category === "a-la-carte"));
        if (["bowl", "plate", "bigger-plate", "family-meal"].includes(category.id)) return null;
        return (
          <div key={category.id} id={category.id} className="mb-12 scroll-mt-28">
            <h2 className="mb-4 text-2xl font-black text-ink">{category.name}</h2>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => <MenuCard key={item.id} item={item} />)}
            </div>
          </div>
        );
      })}
    </section>
  );
}
