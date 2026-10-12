# Portofolio Next.js

Portofolio dengan Next.js (App Router, JavaScript). Tanpa library UI atau CSS tambahan,
jadi bundle tetap kecil.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Mengisi konten

Semua teks ada di `data/site.js`. Cari tanda `[` untuk menemukan placeholder
(nama perusahaan, kampus, tautan, angka hasil proyek). Ganti juga `site.url`
dan `site.email`.

## Menulis proyek dengan STAR

Tiap proyek di `projects` punya blok `star`:

- `situation`: konteks dan masalah.
- `task`: tanggung jawabmu.
- `action`: daftar langkah yang kamu kerjakan sendiri.
- `result`: dampak. Tulis angka (waktu hemat, jumlah pengguna, error turun) kalau ada.

## Catatan performa

- Semua section adalah Server Component. Hanya `Navbar` (menu mobile) dan `StarTabs` yang memakai JavaScript klien.
- Font memakai `next/font`, di-host sendiri saat build, tanpa permintaan ke Google saat pengunjung membuka situs.
- Tidak ada gambar besar. Jika menambah foto, pakai `next/image` dengan `priority` hanya untuk gambar di layar pertama.
- Tanpa animasi saat gulir; `prefers-reduced-motion` dihormati.

## Deploy

Push ke GitHub lalu import ke Vercel. Tidak perlu konfigurasi tambahan.
