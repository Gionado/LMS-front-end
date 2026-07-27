import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaymentView } from "@/components/lwu/PaymentView";
import { courses, ebooks } from "@/data/lwu";
import type { DemoProduct } from "@/lib/demoPurchase";

export const metadata: Metadata = { title: "Payment" };

export default async function PaymentPage({ searchParams }: { searchParams: Promise<{ type?: string; id?: string; method?: string }> }) {
  const { type, id, method = "E-wallet" } = await searchParams;
  const item = type === "Course" ? courses.find((course) => course.id === id) : type === "Ebook" ? ebooks.find((ebook) => ebook.id === id) : undefined;

  if (!item || (type !== "Course" && type !== "Ebook")) notFound();

  const product: DemoProduct = { id: item.id, title: item.title, type, price: item.price };
  return <PaymentView product={product} initialMethod={method} />;
}
