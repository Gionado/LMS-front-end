import type { Course, Ebook, Purchase } from "@/types/lwu";

export const courses: Course[] = [
  { id: "ielts-masterclass", title: "IELTS Preparation Masterclass", shortTitle: "IELTS", category: "IELTS", instructor: "Nadia Prameswari", totalLessons: 32, completedLessons: 22, duration: "18h 40m", progress: 68, status: "in-progress", tone: "sky", owned: true, price: 499000 },
  { id: "business-english", title: "Business English Essentials", shortTitle: "BUSINESS", category: "Business English", instructor: "Adrian Mahesa", totalLessons: 24, completedLessons: 11, duration: "12h 15m", progress: 46, status: "in-progress", tone: "navy", owned: true, price: 399000 },
  { id: "toefl-program", title: "TOEFL Preparation Program", shortTitle: "TOEFL", category: "TOEFL", instructor: "Salsa Wijaya", totalLessons: 28, completedLessons: 28, duration: "15h 30m", progress: 100, status: "completed", tone: "mint", owned: true, price: 449000 },
  { id: "leadership-fundamentals", title: "Leadership Fundamentals", shortTitle: "LEAD", category: "Self Development", instructor: "Dimas Hartono", totalLessons: 18, completedLessons: 7, duration: "9h 20m", progress: 39, status: "in-progress", tone: "orange", owned: true, price: 349000 },
  { id: "negotiation-skills", title: "Negotiation Skills", shortTitle: "NEGOTIATE", category: "Self Development", instructor: "Maya Kusuma", totalLessons: 16, completedLessons: 0, duration: "8h 10m", progress: 0, status: "not-started", tone: "violet", owned: true, price: 349000 },
  { id: "emotional-intelligence", title: "Emotional Intelligence at Work", shortTitle: "EQ", category: "Self Development", instructor: "Raka Pratama", totalLessons: 20, completedLessons: 20, duration: "10h 45m", progress: 100, status: "completed", tone: "rose", owned: true, price: 299000 },
  { id: "english-job-interview", title: "English for Job Interviews", shortTitle: "INTERVIEW", category: "Business English", instructor: "Alya Putri", totalLessons: 14, completedLessons: 0, duration: "7h 30m", progress: 0, status: "not-started", tone: "sky", owned: false, price: 329000 },
  { id: "presentation-skills", title: "Confident Presentation Skills", shortTitle: "PRESENT", category: "Self Development", instructor: "Fajar Nugraha", totalLessons: 12, completedLessons: 0, duration: "6h 15m", progress: 0, status: "not-started", tone: "orange", owned: false, price: 279000 },
  { id: "personal-effectiveness", title: "Personal Effectiveness", shortTitle: "EFFECTIVE", category: "Self Development", instructor: "Nisa Rahma", totalLessons: 15, completedLessons: 0, duration: "8h", progress: 0, status: "not-started", tone: "violet", owned: false, price: 249000 },
];

export const ebooks: Ebook[] = [
  { id: "ielts-writing", title: "IELTS Writing Task 2 Guide", author: "Learning With Us Academic Team", category: "IELTS", pages: 86, fileType: "PDF", tone: "sky", owned: true, price: 89000 },
  { id: "business-vocabulary", title: "Business English Vocabulary", author: "Adrian Mahesa", category: "Business English", pages: 124, fileType: "PDF", tone: "navy", owned: true, price: 79000 },
  { id: "toefl-workbook", title: "TOEFL Practice Workbook", author: "Salsa Wijaya", category: "TOEFL", pages: 158, fileType: "PDF", tone: "mint", owned: true, price: 69000 },
  { id: "leadership-handbook", title: "Practical Leadership Handbook", author: "Dimas Hartono", category: "Self Development", pages: 102, fileType: "PDF", tone: "orange", owned: true, price: 79000 },
  { id: "negotiation-guide", title: "Effective Negotiation Guide", author: "Maya Kusuma", category: "Self Development", pages: 74, fileType: "PDF", tone: "violet", owned: true, price: 69000 },
  { id: "emotional-intelligence-book", title: "Building Emotional Intelligence", author: "Raka Pratama", category: "Self Development", pages: 96, fileType: "PDF", tone: "rose", owned: true, price: 75000 },
  { id: "interview-answer-guide", title: "Winning Job Interview Answers", author: "Alya Putri", category: "Business English", pages: 68, fileType: "PDF", tone: "sky", owned: false, price: 59000 },
  { id: "presentation-playbook", title: "The Presentation Playbook", author: "Fajar Nugraha", category: "Self Development", pages: 82, fileType: "PDF", tone: "orange", owned: false, price: 65000 },
  { id: "productive-habits", title: "Productive Habits Workbook", author: "Nisa Rahma", category: "Self Development", pages: 90, fileType: "PDF", tone: "violet", owned: false, price: 55000 },
];

export const purchases: Purchase[] = [
  { id: "1", invoice: "INV-LWU-2026-001", productName: "IELTS Preparation Masterclass", productType: "Course", purchaseDate: "18 July 2026", amount: 499000, status: "Successful" },
  { id: "2", invoice: "INV-LWU-2026-002", productName: "Business English Essentials", productType: "Course", purchaseDate: "02 July 2026", amount: 399000, status: "Successful" },
  { id: "3", invoice: "INV-LWU-2026-003", productName: "Practical Leadership Handbook", productType: "Ebook", purchaseDate: "21 June 2026", amount: 79000, status: "Successful" },
  { id: "4", invoice: "INV-LWU-2026-004", productName: "Negotiation Skills", productType: "Course", purchaseDate: "12 June 2026", amount: 349000, status: "Pending" },
  { id: "5", invoice: "INV-LWU-2026-005", productName: "TOEFL Practice Workbook", productType: "Ebook", purchaseDate: "29 May 2026", amount: 69000, status: "Refunded" },
  { id: "6", invoice: "INV-LWU-2026-006", productName: "Emotional Intelligence at Work", productType: "Course", purchaseDate: "08 May 2026", amount: 299000, status: "Successful" },
];

export const formatRupiah = (amount: number) =>
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(amount);
