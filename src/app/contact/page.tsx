import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_420px]">
      <div className="rounded-3xl bg-rice p-8">
        <p className="font-black uppercase tracking-wide text-flame">Contact</p>
        <h1 className="mt-3 text-5xl font-black leading-none text-navy">Talk to ZettoGo.</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Questions about pickup, delivery, catering, or your packed lunch box? Email the ZettoGo team and we will help.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a className="rounded-xl bg-flame px-6 py-4 text-center font-black text-white shadow-glow" href="mailto:zettogo2026@gmail.com">
            zettogo2026@gmail.com
          </a>
          <Link className="rounded-xl border border-orange-200 bg-white px-6 py-4 text-center font-black text-navy" href="/order">
            Start an order
          </Link>
        </div>
      </div>
      <aside className="h-fit rounded-3xl border border-orange-100 bg-white p-6 shadow-glow">
        <h2 className="text-2xl font-black text-navy">Contact details</h2>
        <div className="mt-5 space-y-4 text-slate-700">
          <div className="rounded-2xl bg-orange-50 p-4">
            <strong className="block text-ink">Email</strong>
            <a className="mt-1 block font-black text-flame" href="mailto:zettogo2026@gmail.com">zettogo2026@gmail.com</a>
          </div>
          <div className="rounded-2xl bg-rice p-4">
            <strong className="block text-ink">Best for</strong>
            <p className="mt-1">Order help, store questions, catering, partnerships, and general support.</p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-4">
            <strong className="block text-ink">Box lunch promise</strong>
            <p className="mt-1">Small box $14, big box $18, packed hot and full.</p>
          </div>
        </div>
      </aside>
    </section>
  );
}
