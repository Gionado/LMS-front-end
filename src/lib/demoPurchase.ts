import type { Purchase } from "@/types/lwu";

export type DemoProduct = {
  id: string;
  title: string;
  type: "Course" | "Ebook";
  price: number;
};

const OWNED_KEY = "lwu-owned-products";
const PURCHASES_KEY = "lwu-demo-purchases";

export const getProductKey = (type: DemoProduct["type"], id: string) => `${type}:${id}`;

export function getPurchasedProductKeys() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(OWNED_KEY) ?? "[]") as string[];
  } catch {
    return [];
  }
}

export function getDemoPurchases() {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(PURCHASES_KEY) ?? "[]") as Purchase[];
  } catch {
    return [];
  }
}

export function completeDemoPurchase(product: DemoProduct) {
  const key = getProductKey(product.type, product.id);
  const owned = Array.from(new Set([...getPurchasedProductKeys(), key]));
  localStorage.setItem(OWNED_KEY, JSON.stringify(owned));

  const existing = getDemoPurchases();
  if (!existing.some((purchase) => purchase.id === key)) {
    const purchase: Purchase = {
      id: key,
      invoice: `INV-LWU-DEMO-${String(existing.length + 1).padStart(3, "0")}`,
      productName: product.title,
      productType: product.type,
      purchaseDate: new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "long", year: "numeric" }).format(new Date()),
      amount: product.price,
      status: "Successful",
    };
    localStorage.setItem(PURCHASES_KEY, JSON.stringify([purchase, ...existing]));
  }

  return owned;
}
