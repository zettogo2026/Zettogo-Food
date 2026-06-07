import { menuItems, type MenuItem } from "./data";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  calories: number;
  notes?: string;
};

export type CartSummary = {
  subtotal: number;
  tax: number;
  deliveryFee: number;
  discount: number;
  total: number;
};

export const CART_KEY = "zettogo-cart";

export function findMenuItem(id: string): MenuItem | undefined {
  return menuItems.find((item) => item.id === id);
}

export function summarizeCart(items: CartItem[], fulfillment: "pickup" | "delivery" = "pickup", promo = ""): CartSummary {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.0875;
  const deliveryFee = fulfillment === "delivery" && subtotal > 0 ? 3.99 : 0;
  const discount = promo.trim().toUpperCase() === "WOK10" ? subtotal * 0.1 : 0;
  return {
    subtotal,
    tax,
    deliveryFee,
    discount,
    total: Math.max(0, subtotal + tax + deliveryFee - discount)
  };
}

export function money(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}
