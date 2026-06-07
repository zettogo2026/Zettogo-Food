"use client";

import Link from "next/link";
import { CartIcon, SearchIcon } from "./Icons";
import { useCart } from "./CartProvider";

export function AppShell({ children }: { children: React.ReactNode }) {
  const { count } = useCart();
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav className="mx-auto flex min-h-24 w-full max-w-7xl items-center gap-3 px-4 sm:px-6">
          <Link href="/" className="mr-auto flex items-center gap-2 focus-ring" aria-label="ZettoGo home">
            <img src="/images/zettogo-logo.png" alt="ZettoGo" className="h-16 w-auto max-w-[210px] object-contain sm:h-20 sm:max-w-[270px]" />
          </Link>
          <div className="hidden items-center gap-5 text-sm font-bold text-slate-800 md:flex">
            <Link href="/menu">Menu</Link>
            <Link href="/order">Order Now</Link>
            <Link href="/locations">Locations</Link>
            <Link href="/account">Member</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <Link href="/menu" className="grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white text-ink shadow-sm focus-ring" aria-label="Search menu">
            <SearchIcon />
          </Link>
          <Link href="/cart" className="relative grid h-12 w-12 place-items-center rounded-lg border border-slate-200 bg-white text-ink shadow-sm focus-ring" aria-label={`Cart with ${count} items`}>
            <CartIcon />
            {count > 0 ? <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-flame px-1 text-xs font-black text-white">{count}</span> : null}
          </Link>
          <Link href="/login" className="hidden text-sm font-bold text-slate-800 sm:inline-flex">Sign In</Link>
          <Link href="/order" className="rounded-lg bg-flame px-4 py-3 text-sm font-black text-white shadow-glow focus-ring">Order Now</Link>
        </nav>
      </header>
      <main className="pb-24 md:pb-0">{children}</main>
      <footer className="border-t border-orange-100 bg-rice px-4 py-8 sm:px-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 text-sm text-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <strong className="text-lg font-black text-navy">ZettoGo</strong>
            <p className="mt-1">Packed Chinese lunch boxes for pickup and delivery.</p>
          </div>
          <a className="font-black text-flame focus-ring" href="mailto:zettogo2026@gmail.com" aria-label="Email ZettoGo">
            zettogo2026@gmail.com
          </a>
        </div>
      </footer>
      <MobileCartButton />
    </>
  );
}

function MobileCartButton() {
  const { count } = useCart();
  return (
    <Link href="/cart" className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-between rounded-xl bg-flame px-5 py-4 font-black text-white shadow-glow md:hidden" aria-label={`Open cart with ${count} items`}>
      <span>View cart</span>
      <span className="rounded-full bg-white px-3 py-1 text-navy">{count} items</span>
    </Link>
  );
}
