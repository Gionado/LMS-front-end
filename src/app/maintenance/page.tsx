import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Construction } from "lucide-react";
import { BrandMark } from "@/components/lwu/BrandMark";

export const metadata: Metadata = { title: "Under Maintenance" };

export default function MaintenancePage() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5F8FC] p-6 text-center">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[52px] border-amber-100/75" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rotate-12 rounded-[4rem] bg-amber-500/[.05]" />
      <div className="relative mb-12"><BrandMark /></div>
      <div className="relative w-full max-w-lg overflow-hidden rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[0_20px_60px_rgba(11,45,92,.1)] sm:px-12">
        <div className="relative">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-amber-50 text-amber-600"><Construction size={30} /></span>
          <p className="mt-6 text-sm font-black uppercase tracking-[.2em] text-amber-600">Maintenance</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.03em] text-[#0B2D5C]">This page is under maintenance</h1>
          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">We&apos;re making a few improvements. Please check back again soon.</p>
          <Link href="/dashboard" className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-[#0B2D5C] px-5 text-sm font-extrabold text-white hover:bg-[#155EAA]"><ArrowLeft size={16} />Back to dashboard</Link>
        </div>
      </div>
    </main>
  );
}
