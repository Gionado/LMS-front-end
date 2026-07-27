import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/lwu/Breadcrumbs";
import { CoursesView } from "@/components/lwu/CoursesView";

export const metadata: Metadata = { title: "My Courses" };
export default function CoursesPage() { return <div><Breadcrumbs current="My Courses" /><h1 className="text-3xl font-black tracking-[-.035em] text-[#0B2D5C]">My Courses</h1><p className="mt-2 text-sm text-slate-500">Explore your learning library and keep making progress.</p><CoursesView /></div>; }
