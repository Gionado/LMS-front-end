export type CourseStatus = "not-started" | "in-progress" | "completed";

export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  category: "IELTS" | "TOEFL" | "Business English" | "Self Development";
  instructor: string;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  progress: number;
  status: CourseStatus;
  tone: "sky" | "navy" | "orange" | "mint" | "violet" | "rose";
  owned: boolean;
  price: number;
}

export interface Ebook {
  id: string;
  title: string;
  author: string;
  category: string;
  pages: number;
  fileType: "PDF";
  tone: "sky" | "navy" | "orange" | "mint" | "violet" | "rose";
  owned: boolean;
  price: number;
}

export interface Purchase {
  id: string;
  invoice: string;
  productName: string;
  productType: "Course" | "Ebook";
  purchaseDate: string;
  amount: number;
  status: "Successful" | "Pending" | "Refunded";
}
