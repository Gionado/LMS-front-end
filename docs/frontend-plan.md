# Perencanaan Frontend LMS Dashboard — Learning With Us

## 1. Tujuan Proyek

Membuat prototype frontend **Learning Management System (LMS)** untuk pengguna dengan role **Student**. Website harus terlihat profesional, responsif, mudah digunakan, dan tetap selaras dengan identitas Learning With Us sebagai platform pembelajaran online.

Berdasarkan situs resminya, Learning With Us menekankan pembelajaran yang **100% online dan fleksibel**, dukungan yang personal, serta program seperti **IELTS, TOEFL, Business English, dan Self-development Course**. Karena itu, isi mock data dan visual dashboard akan diarahkan ke pengalaman belajar bahasa Inggris dan pengembangan diri.

Proyek hanya mencakup frontend. Tidak diperlukan backend, database, pembayaran asli, maupun autentikasi server.

---

## 2. Scope Wajib

Halaman yang dibuat:

1. **Login**
2. **Dashboard**
3. **Course**
4. **Ebook**
5. **Purchase History**

Komponen wajib yang harus terlihat:

- Sidebar
- Header atau top navigation
- Breadcrumbs
- Search
- Table
- Card
- Badge/status
- Progress bar
- Responsive navigation
- Empty state atau not-found state sederhana
- Loading state sederhana bila sempat

---

## 3. Bahasa dan Teknologi

### Bahasa pemrograman

- **TypeScript**
- HTML melalui JSX/TSX
- CSS melalui Tailwind CSS

### Framework dan library

- **Next.js dengan App Router**
- **React**
- **Tailwind CSS**
- **Lucide React** untuk ikon
- `next/font` untuk font
- Opsional: `clsx` untuk className kondisional

### Alasan pemilihan

Next.js cocok karena menyediakan routing berbasis folder sehingga setiap halaman LMS dapat dipisahkan dengan rapi. Setup resminya juga sudah mendukung TypeScript, Tailwind CSS, ESLint, dan App Router. TypeScript membantu menjaga struktur data course, ebook, dan transaksi tetap konsisten.

Tailwind dipilih agar proses styling dan responsive design dapat dikerjakan dengan cepat dalam batas waktu 24 jam. Lucide dipilih karena menyediakan ikon SVG yang konsisten dan ringan untuk React.

### Bahasa antarmuka

Gunakan **bahasa Inggris** untuk seluruh label antarmuka agar konsisten dengan website utama Learning With Us.

Contoh:

- Welcome back
- Continue Learning
- My Courses
- Browse Courses
- Ebook Library
- Purchase History
- Search courses
- View Details
- Download Ebook
- Completed
- In Progress
- Payment Successful

---

## 4. Identitas Visual

> Warna berikut merupakan adaptasi visual dari website, booklet, dan logo Learning With Us, bukan klaim sebagai brand guideline resmi.

### Palet warna

| Fungsi | Warna |
|---|---|
| Primary Navy | `#0B2D5C` |
| Primary Blue | `#155EAA` |
| Light Blue | `#38A9E0` |
| Soft Background | `#F5F8FC` |
| Card Background | `#FFFFFF` |
| Main Text | `#172033` |
| Secondary Text | `#64748B` |
| Border | `#E2E8F0` |
| Success | `#16A34A` |
| Warning | `#D97706` |
| Error | `#DC2626` |

### Gradient

Untuk tombol utama atau elemen brand:

```css
background: linear-gradient(135deg, #155EAA 0%, #38A9E0 100%);
```

Gradient sebaiknya hanya digunakan pada:

- Tombol utama
- Active menu indicator
- Banner dashboard
- Progress highlight tertentu

Jangan memakai gradient pada terlalu banyak komponen agar tampilan tetap profesional.

### Tipografi

- Heading: **Poppins**
- Body dan tabel: **Inter**

Alternatif yang lebih sederhana adalah memakai Inter untuk seluruh website.

### Gaya visual

- Modern, bersih, dan akademis
- Sudut card sekitar `12–16px`
- Shadow tipis, bukan shadow berat
- Ruang putih cukup luas
- Ilustrasi tidak terlalu ramai
- Warna biru sebagai identitas utama
- Informasi penting ditampilkan melalui card dan progress indicator

---

## 5. Struktur Navigasi

### Sidebar desktop

Urutan menu:

1. Dashboard
2. My Courses
3. Ebooks
4. Purchase History

Bagian bawah sidebar:

- Help Center
- Settings
- Logout

### Header

Elemen header:

- Mobile menu button
- Page title atau breadcrumbs
- Global search
- Notification icon
- Student avatar
- Student name

### Mobile

- Sidebar berubah menjadi drawer
- Search dapat disederhanakan menjadi icon atau full-width field
- Table memakai horizontal scroll
- Statistik dashboard berubah dari 4 kolom menjadi 1 atau 2 kolom

---

## 6. Detail Setiap Halaman

## 6.1 Login

### Tujuan

Memberikan halaman masuk yang sederhana dan memperkenalkan identitas Learning With Us.

### Layout

Desktop:

- Kiri: hero section, logo, tagline, dan visual pembelajaran
- Kanan: form login

Mobile:

- Form berada di tengah
- Hero visual diperkecil atau disembunyikan

### Komponen

- Logo Learning With Us
- Heading `Welcome Back`
- Subtitle `Continue your learning journey with Learning With Us`
- Email input
- Password input
- Show/hide password
- Remember me
- Forgot password
- Login button
- Error message
- Demo account information

### Interaksi frontend

- Validasi email kosong atau format tidak valid
- Validasi password kosong
- Setelah berhasil, arahkan ke `/dashboard`
- Simpan status login sederhana di `localStorage`
- Tombol logout menghapus localStorage

Contoh demo:

```txt
Email: student@lwu.com
Password: student123
```

---

## 6.2 Dashboard

### Tujuan

Memberikan ringkasan aktivitas belajar yang langsung dapat dipahami student.

### Bagian utama

#### Welcome banner

- `Good morning, Gionado`
- Pesan singkat untuk melanjutkan pembelajaran
- Tombol `Continue Learning`
- Ilustrasi student atau abstract education graphic

#### Statistic cards

- Courses Enrolled
- Courses Completed
- Learning Hours
- Ebooks Owned

#### Continue learning

Tampilkan 2–3 course:

- IELTS Preparation
- Business English Essentials
- Leadership and Personal Effectiveness

Setiap card memiliki:

- Thumbnail
- Nama course
- Instructor
- Progress
- Jumlah lesson
- Tombol continue

#### Upcoming schedule

- Speaking Practice
- Business Presentation Workshop
- IELTS Writing Review

#### Recent activity

- Completed lesson
- Downloaded ebook
- Purchased course

### Komponen

- Welcome banner
- Statistic card
- Course progress card
- Schedule list
- Recent activity list
- Progress bar
- Badge

---

## 6.3 Course

### Nama halaman

Gunakan `My Courses` sebagai nama halaman utama.

### Tujuan

Menampilkan course yang dimiliki student dan memudahkan pencarian serta filtering.

### Elemen

- Breadcrumb `Home / My Courses`
- Heading
- Search bar
- Filter category
- Filter progress
- Tabs:
  - All Courses
  - In Progress
  - Completed
- Course grid

### Isi course card

- Thumbnail
- Category
- Course title
- Instructor
- Lesson count
- Duration
- Progress bar
- Status badge
- Tombol `Continue Course` atau `View Course`

### Mock course

1. IELTS Preparation Masterclass
2. Business English Essentials
3. TOEFL Preparation Program
4. Leadership Fundamentals
5. Negotiation Skills
6. Emotional Intelligence at Work

### Bonus bila waktu cukup

Buat halaman detail:

```txt
/courses/[id]
```

Isi halaman detail:

- Course overview
- Learning progress
- Module accordion
- Lesson status
- Instructor information
- Tombol continue lesson

Halaman detail bukan prioritas utama apabila waktu terbatas.

---

## 6.4 Ebook

### Tujuan

Menampilkan koleksi ebook yang dimiliki student.

### Elemen

- Breadcrumb
- Heading
- Search
- Category filter
- Grid/list toggle opsional
- Ebook cards

### Isi ebook card

- Cover
- Title
- Author
- Category
- Page count
- File type
- Tombol `Read Now`
- Tombol `Download`

### Mock ebook

1. IELTS Writing Task 2 Guide
2. Business English Vocabulary
3. TOEFL Practice Workbook
4. Practical Leadership Handbook
5. Effective Negotiation Guide
6. Building Emotional Intelligence

### Interaksi frontend

- Search berdasarkan judul
- Filter berdasarkan kategori
- Modal detail ebook
- Tombol download menampilkan toast simulasi
- Tidak perlu file ebook asli

---

## 6.5 Purchase History

### Tujuan

Memperlihatkan riwayat pembelian course dan ebook secara jelas.

### Elemen

- Breadcrumb
- Heading
- Search transaksi
- Filter status
- Filter jenis produk
- Purchase summary cards
- Transaction table

### Kolom tabel

| Kolom | Contoh |
|---|---|
| Invoice | `INV-LWU-2026-001` |
| Product | IELTS Preparation Masterclass |
| Type | Course |
| Purchase Date | 18 July 2026 |
| Amount | Rp499,000 |
| Status | Successful |
| Action | View Detail |

### Status

- Successful
- Pending
- Refunded

### Interaksi frontend

- Search berdasarkan invoice atau product
- Filter status
- Filter product type
- Detail transaksi melalui modal
- Tombol `Download Receipt` hanya simulasi
- Pagination frontend sederhana bila diperlukan

Pada layar kecil, tabel memakai horizontal scrolling dan tetap mempertahankan header yang jelas.

---

## 7. Komponen Reusable

Komponen sebaiknya tidak ditulis ulang pada setiap halaman.

```txt
components/
├── layout/
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── MobileSidebar.tsx
│   └── DashboardLayout.tsx
├── navigation/
│   └── Breadcrumbs.tsx
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── SearchInput.tsx
│   ├── ProgressBar.tsx
│   ├── Modal.tsx
│   ├── EmptyState.tsx
│   └── Avatar.tsx
├── course/
│   ├── CourseCard.tsx
│   └── CourseFilter.tsx
├── ebook/
│   └── EbookCard.tsx
└── purchase/
    ├── PurchaseTable.tsx
    └── PurchaseDetailModal.tsx
```

---

## 8. Struktur Folder

```txt
learning-with-us-lms/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx
│   ├── login/
│   │   └── page.tsx
│   └── (student)/
│       ├── layout.tsx
│       ├── dashboard/
│       │   └── page.tsx
│       ├── courses/
│       │   └── page.tsx
│       ├── ebooks/
│       │   └── page.tsx
│       └── purchase-history/
│           └── page.tsx
├── components/
├── data/
│   ├── courses.ts
│   ├── ebooks.ts
│   ├── purchases.ts
│   └── dashboard.ts
├── types/
│   └── index.ts
├── lib/
│   ├── utils.ts
│   └── format.ts
├── public/
│   ├── brand/
│   ├── courses/
│   ├── ebooks/
│   ├── avatars/
│   └── illustrations/
└── README.md
```

Route group `(student)` tidak muncul di URL, tetapi membantu mengelompokkan halaman yang memakai layout dashboard yang sama.

---

## 9. Struktur Data Mock

### Course

```ts
export interface Course {
  id: string;
  title: string;
  category: "IELTS" | "TOEFL" | "Business English" | "Self Development";
  instructor: string;
  thumbnail: string;
  totalLessons: number;
  completedLessons: number;
  duration: string;
  progress: number;
  status: "not-started" | "in-progress" | "completed";
}
```

### Ebook

```ts
export interface Ebook {
  id: string;
  title: string;
  author: string;
  category: string;
  cover: string;
  pages: number;
  fileType: "PDF";
}
```

### Purchase

```ts
export interface Purchase {
  id: string;
  invoice: string;
  productName: string;
  productType: "Course" | "Ebook";
  purchaseDate: string;
  amount: number;
  status: "Successful" | "Pending" | "Refunded";
}
```

---

## 10. Aset yang Digunakan

## Aset wajib

### 1. Logo

Gunakan logo Learning With Us dari:

- Booklet rekrutmen yang diberikan
- Website resmi Learning With Us
- Akun media sosial resmi, jika resolusinya lebih baik

Simpan sebagai:

```txt
/public/brand/lwu-logo.png
```

Pastikan background logo transparan atau tampil baik pada sidebar putih/navy.

### 2. Course thumbnails

Buat thumbnail konsisten dengan ukuran dan komposisi yang sama.

Topik:

- IELTS
- TOEFL
- Business English
- Leadership
- Negotiation
- Emotional Intelligence

Sumber yang aman:

- Unsplash
- Pexels
- Ilustrasi buatan sendiri menggunakan bentuk abstrak
- Canva dengan aset bebas pakai

Agar lebih konsisten, lebih baik memakai gambar yang diberi overlay biru dan label kategori daripada enam gaya foto yang berbeda.

### 3. Ebook covers

Tidak perlu mengambil cover buku asli. Buat cover mock sederhana menggunakan:

- Background gradient
- Judul ebook
- Ikon kecil
- Logo LWU
- Nama kategori

Cara ini menghindari masalah hak cipta dan membuat visual lebih konsisten.

### 4. Icons

Gunakan `lucide-react`.

Rekomendasi ikon:

| Kebutuhan | Ikon |
|---|---|
| Dashboard | `LayoutDashboard` |
| Course | `BookOpen` |
| Ebook | `Library` |
| Purchase | `ReceiptText` |
| Search | `Search` |
| Notification | `Bell` |
| Logout | `LogOut` |
| Settings | `Settings` |
| Calendar | `CalendarDays` |
| Clock | `Clock3` |
| Download | `Download` |
| Completed | `CircleCheck` |
| Menu | `Menu` |

### 5. Avatar

Gunakan avatar netral atau foto placeholder lokal. Jangan mengambil foto orang tanpa izin.

Simpan sebagai:

```txt
/public/avatars/student-avatar.png
```

### 6. Dashboard illustration

Gunakan ilustrasi belajar online sederhana atau buat komposisi sendiri dari:

- Laptop
- Buku
- Graduation cap
- Abstract shapes
- Brand gradient

Ilustrasi hanya sebagai pendukung. Jangan sampai mengurangi keterbacaan banner.

---

## 11. Setup Awal

```bash
npx create-next-app@latest learning-with-us-lms
cd learning-with-us-lms
npm install lucide-react clsx
npm run dev
```

Pilihan setup:

```txt
TypeScript: Yes
ESLint: Yes
Tailwind CSS: Yes
src directory: Optional
App Router: Yes
Import alias: @/*
```

Tidak perlu menginstal library chart apabila statistik bisa dibuat dengan card dan progress bar biasa.

---

## 12. Fitur Frontend yang Memberikan Nilai Tambah

Prioritaskan fitur yang memperlihatkan kemampuan frontend tanpa membuat scope terlalu besar.

### Prioritas tinggi

- Responsive sidebar
- Active navigation state
- Search yang benar-benar berfungsi
- Filter yang benar-benar berfungsi
- Modal transaction detail
- Login validation
- Progress bar dinamis
- Empty state
- Toast feedback
- Layout rapi di desktop dan mobile

### Bonus

- Dark mode
- Course detail
- Skeleton loading
- Sort transaction
- Pagination
- Download receipt mock
- Theme animation

Jangan mengerjakan bonus sebelum seluruh requirement wajib selesai.

---

## 13. Accessibility dan Responsive Design

Checklist dasar:

- Semua input memiliki label
- Button icon memiliki `aria-label`
- Kontras teks dan background jelas
- Focus state keyboard terlihat
- Sidebar dapat dibuka dan ditutup melalui keyboard
- Jangan menyampaikan status hanya melalui warna
- Gambar memiliki `alt`
- Table dapat di-scroll pada mobile
- Heading mengikuti urutan semantik
- Layout diuji pada lebar sekitar:
  - 375px
  - 768px
  - 1024px
  - 1440px

---

## 14. Rencana Pengerjaan 24 Jam

| Tahap | Estimasi |
|---|---:|
| Research, sitemap, dan wireframe kasar | 1 jam |
| Setup project dan design token | 1 jam |
| Shared layout, sidebar, header, breadcrumbs | 3 jam |
| Login page dan validasi | 2 jam |
| Dashboard | 3 jam |
| Course page dan filter | 3 jam |
| Ebook page dan filter | 2 jam |
| Purchase History dan modal | 3 jam |
| Responsive refinement | 2 jam |
| Testing, bug fixing, dan content polish | 2 jam |
| README, GitHub, dan deployment | 1 jam |
| Buffer | 1 jam |

Total target sekitar 23 jam termasuk buffer. Waktu istirahat tetap perlu diatur agar kualitas implementasi tidak menurun.

---

## 15. Urutan Implementasi

1. Setup Next.js, Tailwind, font, dan warna.
2. Buat layout dashboard.
3. Buat sidebar dan header.
4. Buat komponen UI umum.
5. Buat data mock.
6. Kerjakan Login.
7. Kerjakan Dashboard.
8. Kerjakan Course.
9. Kerjakan Ebook.
10. Kerjakan Purchase History.
11. Tambahkan interaksi search/filter/modal.
12. Perbaiki responsive design.
13. Periksa accessibility.
14. Jalankan lint dan build.
15. Deploy ke Vercel.
16. Uji link deployment dalam mode incognito.

---

## 16. Checklist Sebelum Submit

### Requirement

- [ ] Login tersedia
- [ ] Dashboard tersedia
- [ ] Course tersedia
- [ ] Ebook tersedia
- [ ] Purchase History tersedia
- [ ] Sidebar tersedia
- [ ] Header tersedia
- [ ] Breadcrumbs tersedia
- [ ] Search tersedia
- [ ] Table tersedia

### Functionality

- [ ] Login validation berjalan
- [ ] Navigation tidak memiliki broken link
- [ ] Search course berjalan
- [ ] Search ebook berjalan
- [ ] Search purchase berjalan
- [ ] Filter berjalan
- [ ] Modal dapat dibuka dan ditutup
- [ ] Logout berjalan
- [ ] Tidak ada error di console

### Visual dan responsive

- [ ] Konsisten dengan warna Learning With Us
- [ ] Card memiliki spacing konsisten
- [ ] Mobile sidebar berjalan
- [ ] Table dapat dilihat pada mobile
- [ ] Tidak ada elemen keluar layar
- [ ] Semua gambar memiliki ukuran yang konsisten

### Deployment

- [ ] Repository GitHub dapat dibuka
- [ ] README menjelaskan stack dan fitur
- [ ] `npm run build` berhasil
- [ ] Link Vercel dapat dibuka
- [ ] Semua aset muncul pada production
- [ ] Link diuji melalui incognito

---

## 17. Isi README Repository

README sebaiknya memuat:

```txt
# Learning With Us Student LMS Dashboard

A responsive frontend LMS dashboard created as a web development case study for Learning With Us.

## Features
- Student login
- Learning dashboard
- Course progress
- Ebook library
- Purchase history
- Search and filtering
- Responsive sidebar

## Tech Stack
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

## Demo
Deployment link

## Local Setup
npm install
npm run dev

## Notes
This project is a frontend prototype and uses mock data.
```

Tambahkan screenshot dashboard pada README apabila masih ada waktu.

---

## 18. Hasil Akhir yang Disarankan

Versi minimum yang kuat sebaiknya memiliki:

- Lima halaman lengkap
- Satu layout dashboard konsisten
- Data mock yang relevan dengan Learning With Us
- Search dan filter yang benar-benar bekerja
- Tampilan responsive
- Kode TypeScript yang terstruktur
- Deploy berhasil tanpa broken asset
- UI terlihat dibuat khusus untuk LWU, bukan template dashboard generik

Hal yang paling penting bukan jumlah animasi atau fitur bonus, tetapi **kelengkapan requirement, konsistensi desain, kualitas interaksi, responsive layout, dan kerapian kode**.

---

## 19. Catatan Implementasi (28 Juli 2026)

Implementasi menggunakan folder `free-nextjs-admin-dashboard-main` sebagai basis karena stack-nya paling sesuai dengan rencana: Next.js App Router, TypeScript, React, dan Tailwind CSS. Folder `flowbite-admin-dashboard-main` tetap dipertahankan sebagai referensi komponen, tetapi tidak dipakai sebagai basis karena menggunakan Hugo.

Penyesuaian dari rencana awal:

- Route utama diarahkan ke `/login`, kemudian dashboard student berada di `/dashboard`.
- Lima halaman wajib telah dipetakan ke `/login`, `/dashboard`, `/courses`, `/ebooks`, dan `/purchase-history`.
- Course detail `/courses/[id]` ikut dikerjakan agar tombol course tidak menjadi tautan buntu.
- Identitas visual dibuat khusus untuk LWU melalui sidebar navy, aksen light blue, warna cream sebagai aksen pendamping, dan artwork course/ebook berbasis CSS agar konsisten serta bebas isu lisensi gambar.
- Ikon menggunakan `lucide-react` sesuai rencana.
- Autentikasi tetap berupa simulasi frontend menggunakan `localStorage`.
- Referensi LearnHouse dipakai pada tingkat pola produk: course sebagai unit belajar utama, progress yang terlihat jelas, dan aksi melanjutkan pembelajaran yang menonjol. UI tidak menyalin tampilan LearnHouse.

Status implementasi saat ini:

- [x] Login dan validasi demo
- [x] Dashboard student
- [x] Course search, filter, empty state, dan detail course
- [x] Ebook search, filter, modal detail, dan toast download
- [x] Purchase search, filter, table responsive, modal, dan receipt simulation
- [x] Sidebar desktop dan mobile drawer
- [x] Breadcrumbs, cards, badges, progress bar, table, search, dan empty state
- [x] Responsive layout dan accessibility dasar
- [ ] Integrasi backend/database
- [ ] Autentikasi server
- [ ] Pembayaran dan download asli

---

## Referensi Riset

- [Learning With Us — Official Website](https://learningwithus-lwu.com/)
- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Installation](https://nextjs.org/docs/app/getting-started/installation)
- [Tailwind CSS Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Lucide Icons](https://github.com/lucide-icons/lucide)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [Vercel Next.js Deployment](https://vercel.com/docs/frameworks/full-stack/nextjs)
