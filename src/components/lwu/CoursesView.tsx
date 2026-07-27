"use client";

import { useEffect, useMemo, useState } from "react";
import { BookOpen, Search, SlidersHorizontal } from "lucide-react";
import { courses } from "@/data/lwu";
import { getProductKey, getPurchasedProductKeys } from "@/lib/demoPurchase";
import type { Course, CourseStatus } from "@/types/lwu";
import { CourseCard } from "./CourseCard";
import { CustomSelect } from "./CustomSelect";
import { DemoPurchaseModal } from "./DemoPurchaseModal";

type Tab = "all" | "owned" | "available" | Exclude<CourseStatus, "not-started">;

export function CoursesView({ initialTab = "all" }: { initialTab?: Tab }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All categories");
  const [tab, setTab] = useState<Tab>(initialTab);
  const [ownedKeys, setOwnedKeys] = useState<string[]>([]);
  const [buying, setBuying] = useState<Course | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setOwnedKeys(getPurchasedProductKeys()));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const catalog = useMemo(() => courses.map((course) => ({ ...course, owned: course.owned || ownedKeys.includes(getProductKey("Course", course.id)) })), [ownedKeys]);
  const filtered = useMemo(() => catalog.filter((course) => {
    const matchesQuery = `${course.title} ${course.instructor} ${course.category}`.toLowerCase().includes(query.toLowerCase());
    const matchesTab = tab === "all" || (tab === "owned" ? course.owned : tab === "available" ? !course.owned : course.owned && course.status === tab);
    return matchesQuery && (category === "All categories" || course.category === category) && matchesTab;
  }), [catalog, query, category, tab]);

  return (
    <>
      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <div className="flex flex-col gap-3 lg:flex-row">
          <label className="relative min-w-0 flex-1"><span className="sr-only">Search courses</span><Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} /><input value={query} onChange={(event) => setQuery(event.target.value)} className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-100" placeholder="Search by course, instructor, or category" /></label>
          <CustomSelect label="Filter courses by category" value={category} options={["All categories", "IELTS", "TOEFL", "Business English", "Self Development"]} onChange={setCategory} icon={SlidersHorizontal} className="w-full lg:w-52" />
        </div>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Course filters">
          {([ ["all", "All Courses"], ["owned", "Owned"], ["available", "Available to Buy"], ["in-progress", "In Progress"], ["completed", "Completed"] ] as [Tab, string][]).map(([value, label]) => <button key={value} role="tab" aria-selected={tab === value} onClick={() => setTab(value)} className={`shrink-0 rounded-lg px-3.5 py-2 text-xs font-bold transition ${tab === value ? "bg-[#0B2D5C] text-white" : "bg-slate-50 text-slate-500 hover:bg-slate-100"}`}>{label}</button>)}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between"><p className="text-sm text-slate-500">{filtered.length} courses</p></div>
      {filtered.length ? <div className="mt-4 grid gap-5 md:grid-cols-2 2xl:grid-cols-3">{filtered.map((course) => <CourseCard key={course.id} course={course} onBuy={setBuying} />)}</div> : <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center"><BookOpen className="mx-auto text-slate-300" size={40} /><h2 className="mt-4 font-extrabold text-[#0B2D5C]">No courses found</h2><p className="mt-2 text-sm text-slate-500">Try a different search term or filter.</p><button onClick={() => { setQuery(""); setCategory("All categories"); setTab("all"); }} className="mt-5 rounded-xl bg-[#0B2D5C] px-4 py-2.5 text-sm font-bold text-white">Clear filters</button></div>}
      <DemoPurchaseModal product={buying ? { id: buying.id, title: buying.title, type: "Course", price: buying.price } : null} onClose={() => setBuying(null)} />
    </>
  );
}
