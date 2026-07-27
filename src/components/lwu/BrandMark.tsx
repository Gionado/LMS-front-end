import Image from "next/image";
import Link from "next/link";

export function BrandMark({ compact = false, dark = false, stacked = false }: { compact?: boolean; dark?: boolean; stacked?: boolean }) {
  return (
    <Link href="/dashboard" className={`inline-flex items-center ${stacked ? "flex-col gap-2.5 text-center" : "gap-3"}`} aria-label="Learning With Us dashboard">
      <span className={`relative shrink-0 overflow-hidden rounded-full ring-2 ${stacked ? "h-14 w-14" : "h-11 w-11"} ${dark ? "ring-white/35 shadow-[0_0_0_4px_rgba(255,255,255,.08)]" : "ring-[#155EAA]/20 shadow-[0_4px_14px_rgba(11,45,92,.18)]"}`}>
        <Image src="/brand/lwu-logo.png" alt="Learning With Us logo" fill sizes={stacked ? "56px" : "44px"} className="object-cover" priority />
      </span>
      {!compact && <span className={`text-lg font-semibold tracking-[-.015em] ${dark ? "text-white" : "text-[#0B2D5C]"}`}>Learning With Us</span>}
    </Link>
  );
}
