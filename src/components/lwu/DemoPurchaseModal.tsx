"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, X } from "lucide-react";
import { formatRupiah } from "@/data/lwu";
import type { DemoProduct } from "@/lib/demoPurchase";

export function DemoPurchaseModal({ product, onClose }: { product: DemoProduct | null; onClose: () => void }) {
  const router = useRouter();

  useEffect(() => {
    if (!product) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [product, onClose]);

  if (!product) return null;

  const confirm = () => {
    const params = new URLSearchParams({ type: product.type, id: product.id });
    router.push(`/payment?${params.toString()}`);
  };

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-[#071E3E]/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="checkout-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div><p className="text-xs font-semibold text-[#155EAA]">Demo checkout</p><h2 id="checkout-title" className="mt-1 text-xl font-semibold text-[#0B2D5C]">Purchase {product.type}</h2></div>
          <button type="button" aria-label="Close checkout" onClick={onClose} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500"><X size={18} /></button>
        </div>

        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <p className="text-sm font-semibold text-slate-800">{product.title}</p>
          <p className="mt-2 text-xl font-bold text-[#0B2D5C]">{formatRupiah(product.price)}</p>
        </div>

        <button type="button" onClick={confirm} className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0B2D5C] text-sm font-semibold text-white hover:bg-[#155EAA]"><ShoppingCart size={16} />Continue to Payment</button>
      </div>
    </div>
  );
}
