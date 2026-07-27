import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { PurchaseHistoryView } from "@/components/lwu/PurchaseHistoryView";

export const metadata: Metadata = { title: "Purchase History" };
export default function PurchaseHistoryPage() { return <div><Breadcrumbs current="Purchase History" /><h1 className="text-2xl font-bold tracking-[-.02em] text-[#0B2D5C] sm:text-3xl">Purchase History</h1><PurchaseHistoryView /></div>; }
