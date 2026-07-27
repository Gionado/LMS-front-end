import Link from "next/link";

export function BrandMark({ compact = false, dark = false }: { compact?: boolean; dark?: boolean }) {
  return (
    <Link href="/dashboard" className="inline-flex items-center gap-3" aria-label="Learning With Us dashboard">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#38A9E0] to-[#155EAA] text-sm font-extrabold text-white shadow-[0_8px_22px_rgba(56,169,224,.28)]">LW</span>
      {!compact && (
        <span className={`leading-tight ${dark ? "text-white" : "text-[#0B2D5C]"}`}>
          <span className="block text-[15px] font-extrabold tracking-[-.02em]">Learning With Us</span>
          <span className={`block text-[10px] font-semibold uppercase tracking-[.18em] ${dark ? "text-sky-200" : "text-slate-500"}`}>Learn · Grow · Thrive</span>
        </span>
      )}
    </Link>
  );
}
