import Link from "next/link";
import { CartDrawer } from "@/components/CartDrawer";

export default function CartPage() {
  return (
    <section className="mx-auto grid w-full max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_420px]">
      <div className="rounded-3xl bg-rice p-6">
        <p className="font-black uppercase tracking-wide text-flame">Cart</p>
        <h1 className="mt-2 text-4xl font-black text-navy">Review your order</h1>
        <p className="mt-3 max-w-xl text-slate-600">Update quantities, remove items, or head to checkout when your meal is ready.</p>
        <Link href="/menu" className="mt-6 inline-flex rounded-xl border border-slate-200 bg-white px-5 py-3 font-black text-navy">Keep ordering</Link>
      </div>
      <CartDrawer />
    </section>
  );
}
