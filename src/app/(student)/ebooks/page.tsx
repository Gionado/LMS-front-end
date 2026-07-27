import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { EbooksView } from "@/components/lwu/EbooksView";

export const metadata: Metadata = { title: "Ebooks" };
export default function EbooksPage() { return <div><Breadcrumbs current="Ebooks" /><h1 className="text-3xl font-black tracking-[-.035em] text-[#0B2D5C]">Ebook Library</h1><p className="mt-2 text-sm text-slate-500">Your reading collection for learning beyond the classroom.</p><EbooksView /></div>; }
