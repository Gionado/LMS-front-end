import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-3 flex items-center gap-1.5 text-xs font-medium text-slate-500">
      <Link href="/dashboard" className="transition hover:text-[#155EAA]">Home</Link>
      <ChevronRight size={14} aria-hidden="true" />
      <span className="text-slate-800" aria-current="page">{current}</span>
    </nav>
  );
}
