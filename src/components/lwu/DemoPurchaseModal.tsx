"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ChevronDown, ShoppingCart, X } from "lucide-react";
import { formatRupiah } from "@/data/lwu";
import { completeDemoPurchase, type DemoProduct } from "@/lib/demoPurchase";

export function DemoPurchaseModal({ product, onClose, onPurchased }: { product: DemoProduct | null; onClose: () => void; onPurchased: (product: DemoProduct, ownedKeys: string[]) => void }) {
  const [payment, setPayment] = useState("E-wallet");

  useEffect(() => {
    if (!product) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [product, onClose]);

  if (!product) return null;

  const confirm = () => {
    const ownedKeys = completeDemoPurchase(product);
    onPurchased(product, ownedKeys);
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

        <label className="mt-5 block text-sm font-medium text-slate-700">
          Payment method
          <span className="relative mt-2 block"><select value={payment} onChange={(event) => setPayment(event.target.value)} className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-10 text-sm text-slate-600 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"><option>E-wallet</option><option>Bank transfer</option><option>Virtual account</option></select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} /></span>
        </label>

        <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-700"><CheckCircle2 size={15} />Frontend demo - no real payment.</div>
        <button type="button" onClick={confirm} className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#0B2D5C] text-sm font-semibold text-white hover:bg-[#155EAA]"><ShoppingCart size={16} />Confirm Purchase</button>
      </div>
    </div>
  );
}
