// Semua teks portofolio ada di file ini.
// Cari tanda "[" untuk menemukan bagian yang masih placeholder dan perlu kamu isi.

export const site = {
  name: "Syahwa Wahyu",
  role: "Software Engineer",
  title: "Syahwa Wahyu | Software Engineer",
  description:
    "Portofolio Syahwa Wahyu, software engineer yang membangun aplikasi Laravel dan PostgreSQL dengan antarmuka yang cepat dan responsif.",
  url: "https://namadomainkamu.com",
  email: "syahwawahyus@gmail.com",
  headline:
    "Syahwa Wahyu | Portofolio ",
  intro:
    "Saya Syahwa Wahyu, mahasiswa S1 Informatika di Institut Teknologi Sains dan Kesehatan RS dr Soepraoen Malang yang mengerjakan sistem pelaporan, platform, dan aplikasi kasir dengan Laravel dan PostgreSQL.",
  links: {
    github: "https://github.com/swaa-dot",
    linkedin: "https://www.linkedin.com/in/syahwa-wahyu-a81616330/?isSelfProfile=true",
    whatsapp: "https://wa.me/6281231973100",
  },
};

export const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#proyek", label: "Proyek" },
  { href: "#keahlian", label: "Keahlian" },
  { href: "#pengalaman", label: "Pengalaman" },
  { href: "#kontak", label: "Kontak" },
];

export const about = {
  paragraphs: [
    "Saya mengerjakan sisi backend dan frontend dalam satu alur: dari rancangan database di PostgreSQL, endpoint API, sampai tampilan yang dirender dengan Blade, Tailwind CSS, dan Alpine.js.",
    "Saya suka pekerjaan yang hasilnya langsung dipakai orang, misalnya dasbor untuk memantau mitra, ekspor laporan, atau struk kasir. Saya terbiasa menulis test dan koleksi Postman supaya fitur mudah diverifikasi.",
  ],
  facts: [
    { label: "Fokus", value: "Next.js dan PostgreSQL" },
    { label: "Frontend", value: "Blade, Tailwind CSS, Alpine.js, Vite" },
    { label: "Mobile", value: "Flutter" },
    { label: "Bahasa", value: "Indonesia, English A2 - Elementary" },
  ],
};

// Setiap proyek ditulis dengan pendekatan STAR:
// situation = konteks masalah, task = tanggung jawabmu,
// action = langkah yang kamu ambil (daftar), result = dampak terukur.
export const projects = [
  {
    slug: "blue-cycle-gas",
    title: "Blue Cycle Gas",
    status: "Selesai",
    summary:
      "Sistem pelaporan keberlanjutan dengan dasbor mitra dan ekspor laporan PDF.",
    stack: ["Laravel", "PostgreSQL", "Sanctum", "Blade", "Tailwind CSS", "Alpine.js"],
    links: { live: "", repo: "" },
    star: {
      situation:
        "Data keberlanjutan dari para mitra perlu dikumpulkan dan disajikan sebagai laporan, sementara pemantauan mitra dan status pesanan membutuhkan dasbor yang mudah dibaca. [Sesuaikan dengan konteks asli proyek.]",
      task:
        "Membangun API dan dasbor mitra, mengamankan autentikasi, serta menyediakan ekspor laporan yang bisa diuji.",
      action: [
        "Menyelesaikan kompatibilitas Laravel Sanctum dengan primary key UUID lewat model token kustom dan trait HasUuidApiTokens.",
        "Membuat endpoint pengaturan admin (profil dan ganti password) dengan trait ApiResponse agar format respons seragam.",
        "Membangun tabel mitra dengan paginasi, sortir, dan filter memakai komponen Blade x-filter-select yang bisa dipakai ulang.",
        "Menambahkan badge status pesanan berlabel bahasa Indonesia dan modal Lihat Semua dengan filter di sisi klien.",
        "Menyusun koleksi Postman untuk endpoint ekspor dan memperbaiki perbedaan SQLite dan PostgreSQL di feature test.",
      ],
      result:
        "Autentikasi berbasis UUID berjalan stabil, dasbor mitra dapat difilter dan diurutkan, dan endpoint ekspor punya test yang bisa dijalankan ulang.",
    },
  },
  {
    slug: "ecosky",
    title: "EcoSky",
    status: "Selesai",
    summary:
      "Platform ekonomi sirkular untuk pengelolaan minyak jelantah dan kemitraan hospitality di Bali.",
    stack: ["Laravel", "PostgreSQL", "dompdf", "Excel export", "WhatsApp Cloud API", "Alpine.js"],
    links: { live: "", repo: "" },
    star: {
      situation:
        "Platform membutuhkan laporan ESG dan karbon untuk mitra hospitality, serta jalur kontak yang cepat bagi calon mitra. [Sesuaikan dengan konteks asli proyek.]",
      task:
        "Membangun modul laporan dengan data master, menyediakan ekspor PDF dan Excel, dan menghubungkan CTA situs ke WhatsApp Business.",
      action: [
        "Membangun modul Reports Engine beserta endpoint Master Data API.",
        "Membuat ekspor laporan ESG dan karbon dalam PDF (dompdf) dan Excel (maatwebsite/excel).",
        "Mengintegrasikan WhatsApp Business Cloud API untuk alur CTA, dengan tombol WhatsApp mengambang berbasis Blade dan Alpine.js.",
        "Memperbaiki data terstruktur JSON-LD untuk SEO dan merapikan logika statistik bersama di controller.",
      ],
      result:
        "Mitra bisa mengunduh laporan ESG dan karbon dalam dua format, dan calon mitra bisa menghubungi tim lewat satu klik.",
    },
  },
  {
    slug: "pos-kasir",
    title: "Sistem kasir POS",
    status: "Sedang dikerjakan",
    summary:
      "Aplikasi kasir Laravel dan Flutter dengan alur uang muka (DP), pelunasan, dan edit pesanan.",
    stack: ["Laravel", "Flutter", "Blade", "ESC/POS"],
    links: { live: "", repo: "" },
    star: {
      situation:
        "Outlet menerima pesanan dengan uang muka dan perlu melunasi atau menambah item pada pesanan lama, lengkap dengan struk yang rapi. [Sesuaikan dengan konteks asli proyek.]",
      task:
        "Menyediakan struk DP di web dan mobile, mendukung mode pelunasan dan edit pesanan, serta mengatur fitur per outlet.",
      action: [
        "Membuat template struk DP di Blade dengan branding outlet, PPN, pembulatan, dan informasi revisi atau pelunasan.",
        "Menambahkan mode pelunasan dan mode tambah item ke pesanan lama pada layar POS Flutter, dengan konfigurasi pajak per outlet.",
        "Membawa struk DP ke aplikasi mobile dengan tampilan bergaya thermal agar sama dengan struk web.",
        "Merencanakan pencetakan lewat printer Bluetooth ESC/POS dan mengaktifkan fitur per outlet lewat feature flag.",
      ],
      result:
        "Alur DP, pelunasan, dan edit pesanan sudah tertangani dalam satu aplikasi, dan struk mobile mengikuti tampilan struk web. Pencetakan thermal masih dalam pengerjaan. [Tambahkan hasil terukur jika sudah dipakai di outlet.]",
    },
  },
];

export const skills = [
  { group: "Backend", items: ["Express", "Laravel", "REST API", "Laravel Sanctum", "PostgreSQL"] },
  { group: "Frontend", items: ["Blade", "Tailwind CSS", "Alpine.js", "Vite", "JavaScript", "Next.js"] },
  { group: "Mobile", items: ["Flutter"] },
  { group: "Alat bantu", items: ["Git", "Postman", "Excel export", "Feature test"] },
];

export const experience = [
  {
    role: "Software Engineer magang",
    org: "Kreasi Bali Sasmita",
    period: "Januari 2026 sampai Juni 2026",
    points: [
      "Membangun fitur aplikasi Laravel dan PostgreSQL untuk sistem pelaporan.",
      "Menyusun antarmuka dengan Blade, Tailwind CSS, dan Alpine.js.",
      "Menulis feature test dan koleksi Postman untuk endpoint API.",
    ],
  },
];

export const education = [
  {
    role: "S1 Informatika",
    org: "Institut Teknologi Sains dan Kesehatan RS dr Soepraoen Malang",
    period: "2023 sampai 2027",
    points: ["IPK: 3.8/4.0", "Organisasi: Himpunan Mahasiswa Informatika sebagai anggota divisi PDD"],
  },
];
