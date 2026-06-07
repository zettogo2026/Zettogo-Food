import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/components/CartProvider";
import { AppShell } from "@/components/AppShell";

export const metadata: Metadata = {
  title: "ZettoGo",
  description: "Chinese boxed lunch ordering for pickup and delivery."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <AppShell>{children}</AppShell>
        </CartProvider>
      </body>
    </html>
  );
}
