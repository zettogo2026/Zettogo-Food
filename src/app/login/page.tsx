import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_440px]">
      <div className="rounded-3xl bg-rice p-8">
        <p className="font-black uppercase tracking-wide text-flame">Sign in</p>
        <h1 className="mt-3 text-5xl font-black text-navy">Welcome back to ZettoGo.</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-slate-600">Sign in to see member perks, recent orders, saved favorites, and faster checkout.</p>
      </div>
      <form action="/account" className="grid h-fit gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-glow">
        <label className="grid gap-2 font-bold">Email<input required type="email" className="rounded-xl border border-slate-200 px-4 py-3" placeholder="you@example.com" /></label>
        <label className="grid gap-2 font-bold">Password<input required type="password" className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Password" /></label>
        <button className="rounded-xl bg-navy px-5 py-4 font-black text-white">Sign In</button>
        <Link href="/signup" className="text-center font-bold text-navy">Create an account</Link>
      </form>
    </section>
  );
}
