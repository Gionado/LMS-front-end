"use client";

import { useEffect, useMemo, useState } from "react";
import { BookMarked, Download, Eye, FileText, Search, X } from "lucide-react";
import { ebooks } from "@/data/lwu";
import type { Ebook } from "@/types/lwu";

const tones = {
  sky: "from-[#0D6CAD] to-[#38A9E0]",
  navy: "from-[#071E3E] to-[#155EAA]",
  orange: "from-[#E87833] to-[#F3AB58]",
  mint: "from-[#11847A] to-[#5EC4A8]",
  violet: "from-[#6544A5] to-[#9B7BD6]",
  rose: "from-[#B34B6B] to-[#E0839D]",
};

export function EbooksView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [selected, setSelected] = useState<Ebook | null>(null);
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => ebooks.filter((ebook) => {
    const matchesQuery = `${ebook.title} ${ebook.author}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (category === "All categories" || ebook.category === category);
  }), [query, category]);

  useEffect(() => {
    if (!selected) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [selected]);

  const download = (title: string) => {
    setToast(`${title} is ready to download.`);
    setTimeout(() => setToast(""), 2400);
  };

  return (
    <>
      <div className="mt-5 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row">
        <label className="relative flex-1"><span className="sr-only">Search ebooks</span><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-sky-400 focus:bg-white focus:ring-2 focus:ring-sky-100" placeholder="Search ebooks" /></label>
        <select aria-label="Filter ebooks by category" value={category} onChange={(event) => setCategory(event.target.value)} className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-600 outline-none focus:border-sky-400"><option>All categories</option><option>IELTS</option><option>TOEFL</option><option>Business English</option><option>Self Development</option></select>
      </div>

      {filtered.length ? (
        <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {filtered.map((ebook) => <article key={ebook.id} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:border-slate-300"><div className={`relative aspect-[4/5] overflow-hidden rounded-lg bg-gradient-to-br ${tones[ebook.tone]} p-5 text-white`}><div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-[18px] border-white/10" /><span className="text-[9px] font-semibold uppercase tracking-[.2em] text-white/70">Learning With Us</span><h2 className="relative mt-12 max-w-[90%] text-xl font-bold leading-tight">{ebook.title}</h2><span className="absolute bottom-5 left-5 text-[10px] font-semibold uppercase tracking-[.14em] text-white/75">{ebook.category}</span></div><div className="pt-4"><h3 className="line-clamp-1 text-sm font-semibold text-slate-800">{ebook.title}</h3><p className="mt-1 line-clamp-1 text-xs text-slate-500">{ebook.author}</p><div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400"><FileText size={14} /><span>{ebook.pages} pages</span><span>·</span><span>{ebook.fileType}</span></div><div className="mt-4 grid grid-cols-2 gap-2"><button onClick={() => setSelected(ebook)} className="flex h-9 items-center justify-center gap-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50"><Eye size={14} />Details</button><button onClick={() => download(ebook.title)} className="flex h-9 items-center justify-center gap-1.5 rounded-lg bg-[#0B2D5C] text-xs font-medium text-white hover:bg-[#155EAA]"><Download size={14} />Download</button></div></div></article>)}
        </div>
      ) : (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-white py-14 text-center"><BookMarked className="mx-auto text-slate-300" size={36} /><h2 className="mt-3 font-semibold text-[#0B2D5C]">No ebooks found</h2><p className="mt-1 text-sm text-slate-500">Try another search or category.</p></div>
      )}

      {selected && <div className="fixed inset-0 z-[70] grid place-items-center bg-[#071E3E]/55 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="ebook-title" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between gap-4"><div><p className="text-xs font-medium text-[#155EAA]">Ebook details</p><h2 id="ebook-title" className="mt-1 text-xl font-semibold text-[#0B2D5C]">{selected.title}</h2></div><button aria-label="Close ebook details" onClick={() => setSelected(null)} className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-slate-500"><X size={18} /></button></div><dl className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 text-sm"><div><dt className="text-xs text-slate-400">Author</dt><dd className="mt-1 font-medium text-slate-700">{selected.author}</dd></div><div><dt className="text-xs text-slate-400">Category</dt><dd className="mt-1 font-medium text-slate-700">{selected.category}</dd></div><div><dt className="text-xs text-slate-400">Length</dt><dd className="mt-1 font-medium text-slate-700">{selected.pages} pages</dd></div><div><dt className="text-xs text-slate-400">Format</dt><dd className="mt-1 font-medium text-slate-700">{selected.fileType}</dd></div></dl><button onClick={() => { download(selected.title); setSelected(null); }} className="mt-5 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#0B2D5C] text-sm font-semibold text-white"><Download size={16} />Download Ebook</button></div></div>}
      {toast && <div role="status" className="fixed bottom-5 right-5 z-[80] max-w-[calc(100vw-2.5rem)] rounded-lg bg-[#0B2D5C] px-4 py-3 text-sm text-white shadow-xl">{toast}</div>}
    </>
  );
}
