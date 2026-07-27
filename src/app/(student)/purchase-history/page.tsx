import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { PurchaseHistoryView } from "@/components/lwu/PurchaseHistoryView";

export const metadata: Metadata = { title: "Purchase History" };
export default function PurchaseHistoryPage() { return <div><Breadcrumbs current="Purchase History" /><h1 className="text-3xl font-black tracking-[-.035em] text-[#0B2D5C]">Purchase History</h1><p className="mt-2 text-sm text-slate-500">Review your course and ebook transactions in one place.</p><PurchaseHistoryView /></div>; }
