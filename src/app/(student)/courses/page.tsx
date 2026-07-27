import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { CoursesView } from "@/components/lwu/CoursesView";

export const metadata: Metadata = { title: "My Courses" };
export default function CoursesPage() { return <div><Breadcrumbs current="My Courses" /><h1 className="text-2xl font-bold tracking-[-.02em] text-[#0B2D5C] sm:text-3xl">My Courses</h1><CoursesView /></div>; }
