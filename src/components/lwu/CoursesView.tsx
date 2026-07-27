"use client";

import { useMemo, useState } from "react";
import { BookOpen, Search, SlidersHorizontal } from "lucide-react";
import { courses } from "@/data/lwu";
import type { CourseStatus } from "@/types/lwu";
import { CourseCard } from "./CourseCard";

type Tab = "all" | CourseStatus;

export function CoursesView() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [tab, setTab] = useState<Tab>("all");
  const filtered = useMemo(() => courses.filter((course) => {
    const matchesQuery = `${course.title} ${course.instructor} ${course.category}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (category === "All categories" || course.category === category) && (tab === "all" || course.status === tab);
  }), [query, category, tab]);

  return (
    <>
      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row">
          <label className="relative min-w-0 flex-1"><span className="sr-only">Search courses</span><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="Search by course, instructor, or category" /></label>
          <label className="relative"><span className="sr-only">Filter by category</span><SlidersHorizontal className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} /><select value={category} onChange={(event) => setCategory(event.target.value)} className="h-11 min-w-52 appearance-none rounded-xl border border-slate-200 bg-white pl-10 pr-8 text-sm font-semibold text-slate-600 outline-none focus:border-sky-400 focus:ring-4 focus:ring-sky-100"><option>All categories</option><option>IELTS</option><option>TOEFL</option><option>Business English</option><option>Self Development</option></select></label>
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Course progress filters">{([ ["all", "All Courses"], ["in-progress", "In Progress"], ["completed", "Completed"], ["not-started", "Not Started"] ] as [Tab, string][]).map(([value, label]) => <button key={value} role="tab" aria-selected={tab === value} onClick={() => setTab(value)} className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-bold transition ${tab === value ? "bg-[#0B2D5C] text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>{label}</button>)}</div>
      </div>
      <div className="mt-5 flex items-center justify-between"><p className="text-sm font-semibold text-slate-500">Showing <span className="font-extrabold text-[#0B2D5C]">{filtered.length}</span> courses</p></div>
      {filtered.length ? <div className="mt-4 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">{filtered.map((course) => <CourseCard key={course.id} course={course} />)}</div> : <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center"><BookOpen className="mx-auto text-slate-300" size={40} /><h2 className="mt-4 font-extrabold text-[#0B2D5C]">No courses found</h2><p className="mt-2 text-sm text-slate-500">Try a different search term or filter.</p><button onClick={() => { setQuery(""); setCategory("All categories"); setTab("all"); }} className="mt-5 rounded-xl bg-[#0B2D5C] px-4 py-2.5 text-sm font-bold text-white">Clear filters</button></div>}
    </>
  );
}
