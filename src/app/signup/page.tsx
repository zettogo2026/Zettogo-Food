import Link from "next/link";

export default function SignUpPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_460px]">
      <div className="rounded-3xl bg-gradient-to-br from-navy to-blue-600 p-8 text-white">
        <p className="font-black uppercase tracking-wide text-blue-100">Sign up</p>
        <h1 className="mt-3 text-5xl font-black">Join ZettoGo Member Deals.</h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-blue-100">Create an account to save favorites, track orders, and reorder your packed boxes faster.</p>
      </div>
      <form action="/account" className="grid h-fit gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-glow">
        <label className="grid gap-2 font-bold">Name<input required className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Your name" /></label>
        <label className="grid gap-2 font-bold">Email<input required type="email" className="rounded-xl border border-slate-200 px-4 py-3" placeholder="you@example.com" /></label>
        <label className="grid gap-2 font-bold">Password<input required type="password" className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Create a password" /></label>
        <button className="rounded-xl bg-navy px-5 py-4 font-black text-white">Create account</button>
        <Link href="/login" className="text-center font-bold text-navy">Already have an account?</Link>
      </form>
    </section>
  );
}
