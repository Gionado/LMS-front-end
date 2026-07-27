import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";
import { BrandMark } from "@/components/lwu/BrandMark";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#F5F8FC] p-6 text-center">
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[52px] border-sky-100" />
      <div className="absolute -bottom-24 -left-16 h-72 w-72 rotate-12 rounded-[4rem] bg-[#0B2D5C]/[.04]" />
      <div className="relative mb-12"><BrandMark /></div>
      <div className="relative w-full max-w-lg rounded-[2rem] border border-slate-200 bg-white px-6 py-12 shadow-[0_20px_60px_rgba(11,45,92,.1)] sm:px-12">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-sky-50 text-[#155EAA]"><SearchX size={30} /></span>
        <p className="mt-6 text-sm font-black tracking-[.2em] text-[#38A9E0]">404</p>
        <h1 className="mt-2 text-3xl font-black tracking-[-.03em] text-[#0B2D5C]">This page took a study break</h1>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">The page you&apos;re looking for doesn&apos;t exist or may have moved.</p>
        <Link href="/dashboard" className="mt-7 inline-flex h-11 items-center gap-2 rounded-xl bg-[#0B2D5C] px-5 text-sm font-extrabold text-white hover:bg-[#155EAA]"><ArrowLeft size={16} />Back to dashboard</Link>
      </div>
    </div>
  );
}
