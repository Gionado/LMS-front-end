"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, CreditCard, LockKeyhole } from "lucide-react";
import { formatRupiah } from "@/data/lwu";
import type { DemoProduct } from "@/lib/demoPurchase";
import { CustomSelect } from "./CustomSelect";

const methods = ["E-wallet", "Bank transfer", "Virtual account"] as const;

export function PaymentView({ product, initialMethod }: { product: DemoProduct; initialMethod: string }) {
  const [method, setMethod] = useState(methods.includes(initialMethod as (typeof methods)[number]) ? initialMethod : "E-wallet");
  const [provider, setProvider] = useState("GoPay");

  const changeMethod = (nextMethod: string) => {
    setMethod(nextMethod);
    setProvider(nextMethod === "E-wallet" ? "GoPay" : nextMethod === "Bank transfer" ? "BCA" : "BCA Virtual Account");
  };

  const backHref = product.type === "Course" ? "/courses" : "/ebooks";

  return (
    <div>
      <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-semibold text-[#155EAA] hover:underline">
        <ArrowLeft size={16} /> Back to {product.type === "Course" ? "Courses" : "Ebooks"}
      </Link>
      <h1 className="mt-4 text-2xl font-bold tracking-[-.02em] text-[#0B2D5C] sm:text-3xl">Payment</h1>

      <div className="mt-5 grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-5">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-[#155EAA]"><CreditCard size={21} /></span>
            <div><h2 className="font-bold text-[#0B2D5C]">Payment details</h2><p className="mt-0.5 text-xs text-slate-500">Choose a method and complete the demo form.</p></div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-semibold text-slate-700">Payment method</label>
            <CustomSelect label="Payment method" value={method} options={methods} onChange={changeMethod} />
          </div>

          {method === "E-wallet" && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label className="mb-2 block text-sm font-semibold text-slate-700">E-wallet provider</label><CustomSelect label="E-wallet provider" value={provider} options={["GoPay", "OVO", "DANA"]} onChange={setProvider} /></div>
              <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Phone number</span><input required inputMode="numeric" pattern="[0-9]*" maxLength={15} onInput={(event) => { event.currentTarget.value = event.currentTarget.value.replace(/\D/g, ""); }} placeholder="08xxxxxxxxxx" className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100" /></label>
            </div>
          )}

          {method === "Bank transfer" && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label className="mb-2 block text-sm font-semibold text-slate-700">Bank</label><CustomSelect label="Bank" value={provider} options={["BCA", "Bank Mandiri", "BNI", "Other"]} onChange={setProvider} /></div>
              <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Account holder name</span><input required placeholder="Full name" className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100" /></label>
            </div>
          )}

          {method === "Virtual account" && (
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div><label className="mb-2 block text-sm font-semibold text-slate-700">Virtual account bank</label><CustomSelect label="Virtual account bank" value={provider} options={["BCA Virtual Account", "Mandiri Virtual Account", "BNI Virtual Account", "Other"]} onChange={setProvider} /></div>
              <label className="block"><span className="mb-2 block text-sm font-semibold text-slate-700">Billing name</span><input required placeholder="Full name" className="h-11 w-full rounded-xl border border-slate-200 px-3.5 text-sm outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100" /></label>
            </div>
          )}

          <div className="mt-5 flex items-center gap-2 rounded-xl bg-emerald-50 px-3.5 py-3 text-xs text-emerald-700"><CheckCircle2 size={16} />Frontend demo - no real payment will be processed.</div>
          <button type="button" className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0B2D5C] text-sm font-bold text-white transition hover:bg-[#155EAA] active:scale-[.99]"><LockKeyhole size={16} />Pay Now</button>
        </section>

        <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <h2 className="font-bold text-[#0B2D5C]">Order summary</h2>
          <div className="mt-4 rounded-xl bg-slate-50 p-4"><p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#155EAA]">{product.type}</p><p className="mt-2 text-sm font-semibold leading-5 text-slate-800">{product.title}</p></div>
          <div className="mt-5 flex items-center justify-between border-b border-slate-100 pb-4 text-sm"><span className="text-slate-500">Price</span><span className="font-semibold text-slate-700">{formatRupiah(product.price)}</span></div>
          <div className="flex items-center justify-between pt-4"><span className="font-semibold text-[#0B2D5C]">Total</span><span className="text-xl font-bold text-[#0B2D5C]">{formatRupiah(product.price)}</span></div>
        </aside>
      </div>
    </div>
  );
}
