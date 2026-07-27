import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { CoursesView } from "@/components/lwu/CoursesView";

export const metadata: Metadata = { title: "Courses" };

export default async function CoursesPage({ searchParams }: { searchParams: Promise<{ filter?: string }> }) {
  const { filter } = await searchParams;
  return <div><Breadcrumbs current="Courses" /><h1 className="text-2xl font-bold tracking-[-.02em] text-[#0B2D5C] sm:text-3xl">Courses</h1><CoursesView initialTab={filter === "in-progress" ? "in-progress" : "all"} /></div>;
}
