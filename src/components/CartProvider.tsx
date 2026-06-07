"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { CART_KEY, type CartItem } from "@/lib/cart";
import type { MenuItem } from "@/lib/data";

type Fulfillment = "pickup" | "delivery";

type CartContextValue = {
  items: CartItem[];
  fulfillment: Fulfillment;
  setFulfillment: (method: Fulfillment) => void;
  addItem: (item: MenuItem | CartItem, notes?: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  count: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup");

  useEffect(() => {
    const saved = window.localStorage.getItem(CART_KEY);
    if (saved) {
      try {
        setItems(JSON.parse(saved) as CartItem[]);
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    function addItem(item: MenuItem | CartItem, notes?: string) {
      setItems((current) => {
        const existing = current.find((line) => line.id === item.id && line.notes === notes);
        if (existing) {
          return current.map((line) => (line === existing ? { ...line, quantity: line.quantity + 1 } : line));
        }
        return [
          ...current,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            calories: item.calories,
            notes,
            quantity: "quantity" in item ? item.quantity : 1
          }
        ];
      });
    }

    function updateQuantity(id: string, quantity: number) {
      setItems((current) =>
        current.flatMap((item) => {
          if (item.id !== id) return item;
          if (quantity <= 0) return [];
          return { ...item, quantity };
        })
      );
    }

    function removeItem(id: string) {
      setItems((current) => current.filter((item) => item.id !== id));
    }

    return {
      items,
      fulfillment,
      setFulfillment,
      addItem,
      updateQuantity,
      removeItem,
      clearCart: () => setItems([]),
      count: items.reduce((sum, item) => sum + item.quantity, 0)
    };
  }, [items, fulfillment]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
