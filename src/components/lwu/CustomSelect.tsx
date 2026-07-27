"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Check, ChevronDown, type LucideIcon } from "lucide-react";

export function CustomSelect({ label, value, options, onChange, icon: Icon, className = "" }: { label: string; value: string; options: readonly string[]; onChange: (value: string) => void; icon?: LucideIcon; className?: string }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("pointerdown", closeOutside);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("pointerdown", closeOutside);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <span className="sr-only">{label}</span>
      <button type="button" aria-haspopup="listbox" aria-expanded={open} aria-controls={listboxId} onClick={() => setOpen((current) => !current)} className={`flex h-11 w-full items-center rounded-xl border bg-white text-sm font-semibold text-slate-600 outline-none transition ${open ? "border-sky-400 ring-4 ring-sky-100" : "border-slate-200 hover:border-slate-300"} ${Icon ? "pl-3.5" : "pl-3"} pr-3.5`}>
        {Icon && <Icon className="mr-2.5 shrink-0 text-slate-400" size={17} />}
        <span className="truncate">{value}</span>
        <ChevronDown className={`ml-auto shrink-0 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} size={16} />
      </button>
      {open && (
        <div id={listboxId} role="listbox" aria-label={label} className="absolute left-0 top-full z-50 mt-2 w-full min-w-max rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_14px_35px_rgba(15,23,42,.14)]">
          {options.map((option) => {
            const selected = option === value;
            return <button key={option} type="button" role="option" aria-selected={selected} onClick={() => { onChange(option); setOpen(false); }} className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition ${selected ? "bg-[#0B2D5C] font-semibold text-white" : "text-slate-600 hover:bg-slate-50"}`}><span>{option}</span>{selected && <Check className="ml-auto" size={15} />}</button>;
          })}
        </div>
      )}
    </div>
  );
}
