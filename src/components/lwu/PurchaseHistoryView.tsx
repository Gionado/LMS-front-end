"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Download, Eye, PackageCheck, ReceiptText, Search, WalletCards, X } from "lucide-react";
import { formatRupiah, purchases } from "@/data/lwu";
import { getDemoPurchases } from "@/lib/demoPurchase";
import type { Purchase } from "@/types/lwu";

const statusStyle = {
  Successful: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
  Pending: "bg-amber-50 text-amber-700 ring-amber-600/10",
  Refunded: "bg-slate-100 text-slate-600 ring-slate-600/10",
};

export function PurchaseHistoryView() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All status");
  const [type, setType] = useState("All products");
  const [selected, setSelected] = useState<Purchase | null>(null);
  const [toast, setToast] = useState("");
  const [records, setRecords] = useState<Purchase[]>(purchases);

  const filtered = useMemo(() => records.filter((purchase) => {
    const matchesQuery = `${purchase.invoice} ${purchase.productName}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (status === "All status" || purchase.status === status) && (type === "All products" || purchase.productType === type);
  }), [records, query, status, type]);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setRecords([...getDemoPurchases(), ...purchases]));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  const successfulTotal = records.filter((purchase) => purchase.status === "Successful").reduce((total, purchase) => total + purchase.amount, 0);
  const summary = [
    { label: "Total purchases", value: records.length.toString(), icon: WalletCards, color: "bg-sky-50 text-[#155EAA]" },
    { label: "Successful", value: records.filter((purchase) => purchase.status === "Successful").length.toString(), icon: PackageCheck, color: "bg-emerald-50 text-emerald-700" },
    { label: "Total spent", value: formatRupiah(successfulTotal), icon: ReceiptText, color: "bg-violet-50 text-violet-700" },
  ];

  const receipt = () => {
    setToast("Receipt is ready to download.");
    setSelected(null);
    setTimeout(() => setToast(""), 2400);
  };

  return (
    <>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {summary.map(({ label, value, icon: Icon, color }) => <article key={label} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-slate-500">{label}</p><p className="mt-2 text-xl font-bold text-[#0B2D5C] sm:text-2xl">{value}</p></div><span className={`grid h-10 w-10 place-items-center rounded-lg ${color}`}><Icon size={19} /></span></div></article>)}
      </div>

      <div className="mt-5 grid gap-3 rounded-xl border border-slate-200 bg-white p-4 md:grid-cols-[minmax(0,1fr)_160px_160px]">
        <label className="relative"><span className="sr-only">Search purchases</span><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100" placeholder="Search transactions" /></label>
        <label className="relative"><span className="sr-only">Filter purchase status</span><select value={status} onChange={(event) => setStatus(event.target.value)} className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-10 text-sm font-medium text-slate-600 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"><option>All status</option><option>Successful</option><option>Pending</option><option>Refunded</option></select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} /></label>
        <label className="relative"><span className="sr-only">Filter product type</span><select value={type} onChange={(event) => setType(event.target.value)} className="h-11 w-full appearance-none rounded-lg border border-slate-200 bg-white pl-3 pr-10 text-sm font-medium text-slate-600 outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"><option>All products</option><option>Course</option><option>Ebook</option></select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} /></label>
      </div>

      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left"><thead className="border-b border-slate-200 bg-slate-50 text-[10px] font-semibold uppercase tracking-[.1em] text-slate-500"><tr><th className="px-5 py-4">Invoice</th><th className="px-5 py-4">Product</th><th className="px-5 py-4">Type</th><th className="px-5 py-4">Date</th><th className="px-5 py-4">Amount</th><th className="px-5 py-4">Status</th><th className="px-5 py-4 text-right">Action</th></tr></thead><tbody className="divide-y divide-slate-100 text-sm">{filtered.map((purchase) => <tr key={purchase.id} className="hover:bg-slate-50"><td className="px-5 py-4 font-medium text-[#155EAA]">{purchase.invoice}</td><td className="max-w-[240px] px-5 py-4"><p className="truncate font-medium text-slate-700">{purchase.productName}</p></td><td className="px-5 py-4 text-slate-500">{purchase.productType}</td><td className="px-5 py-4 text-slate-500">{purchase.purchaseDate}</td><td className="px-5 py-4 font-medium text-slate-700">{formatRupiah(purchase.amount)}</td><td className="px-5 py-4"><span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[purchase.status]}`}>{purchase.status}</span></td><td className="px-5 py-4 text-right"><button onClick={() => setSelected(purchase)} className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-[#155EAA] hover:bg-sky-50"><Eye size={14} />Details</button></td></tr>)}</tbody></table></div>
        {!filtered.length && <div className="py-14 text-center"><ReceiptText className="mx-auto text-slate-300" size={36} /><h2 className="mt-3 font-semibold text-[#0B2D5C]">No transactions found</h2><p className="mt-1 text-sm text-slate-500">Try another search or filter.</p></div>}
        <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-500">{filtered.length} of {records.length} transactions</div>
      </div>

      {selected && <div className="fixed inset-0 z-[70] grid place-items-center bg-[#071E3E]/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="purchase-title" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium text-[#155EAA]">Transaction details</p><h2 id="purchase-title" className="mt-1 text-xl font-semibold text-[#0B2D5C]">{selected.invoice}</h2></div><button aria-label="Close transaction details" onClick={() => setSelected(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500"><X size={18} /></button></div><div className="mt-5 rounded-xl bg-slate-50 p-4"><p className="text-xs text-slate-400">Product</p><p className="mt-1 font-semibold text-slate-800">{selected.productName}</p><dl className="mt-4 grid grid-cols-2 gap-4 text-sm"><div><dt className="text-xs text-slate-400">Date</dt><dd className="mt-1 font-medium text-slate-700">{selected.purchaseDate}</dd></div><div><dt className="text-xs text-slate-400">Type</dt><dd className="mt-1 font-medium text-slate-700">{selected.productType}</dd></div><div><dt className="text-xs text-slate-400">Amount</dt><dd className="mt-1 font-medium text-slate-700">{formatRupiah(selected.amount)}</dd></div><div><dt className="text-xs text-slate-400">Status</dt><dd><span className={`mt-1 inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ring-1 ring-inset ${statusStyle[selected.status]}`}>{selected.status}</span></dd></div></dl></div><button onClick={receipt} disabled={selected.status !== "Successful"} className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0B2D5C] text-sm font-semibold text-white disabled:bg-slate-200 disabled:text-slate-400"><Download size={16} />{selected.status === "Successful" ? "Download Receipt" : "Receipt unavailable"}</button></div></div>}
      {toast && <div role="status" className="fixed bottom-5 right-5 z-[80] max-w-[calc(100vw-2.5rem)] rounded-lg bg-[#0B2D5C] px-4 py-3 text-sm text-white shadow-xl">{toast}</div>}
    </>
  );
}
