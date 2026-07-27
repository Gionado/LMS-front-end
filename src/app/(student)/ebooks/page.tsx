import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { EbooksView } from "@/components/lwu/EbooksView";

export const metadata: Metadata = { title: "Ebooks" };
export default function EbooksPage() { return <div><Breadcrumbs current="Ebooks" /><h1 className="text-2xl font-bold tracking-[-.02em] text-[#0B2D5C] sm:text-3xl">Ebook Library</h1><EbooksView /></div>; }
