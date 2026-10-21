# Xsrazy Landing Page

**Live: https://xsrazy.web.id**

Situs ini adalah halaman utama personal Xsrazy di domain xsrazy.web.id, pintu masuk ke semua project dan web yang dia kelola. Dari halaman ini pengunjung bisa mengenal profilnya dan menuju ke layanan-layanannya yang lain, seperti Micro Tools Hub, TikBulk, Temp-mail, CekTag dan MyRobs Store.

## Isi Web

- **Hero:** perkenalan singkat dan identitas pemilik situs.
- **Profil:** ringkasan tentang Xsrazy dan aktivitasnya sebagai content creator dan editor media sosial.
- **Daftar project dan web:** kartu-kartu berisi layanan yang dikelola, masing-masing dengan tautan ke domainnya.
- **Portofolio:** konten portofolio dirender dari file `portfolio.tsx`.
- **Tautan sosial dan kontak:** jalan cepat menuju akun media sosial dan alamat email.

Seluruh isi tampil dalam satu halaman (single page) yang dirender oleh `app/page.tsx`.

## Frontend

- Next.js (App Router) dengan React dan TypeScript.
- Styling memakai Tailwind CSS, dengan komponen bergaya shadcn (`components.json`, folder `components/` dan `hooks/`, utilitas di `lib/`).
- Aset gambar dan ikon berada di folder `public/`, gaya global di `app/globals.css` dan folder `styles/`.

## Backend

- Tidak ada backend khusus dan tidak ada database. Situs ini murni frontend yang dirender Next.js dan di-deploy di Vercel.
- Domain www.xsrazy.web.id diarahkan (redirect 308) ke domain utama xsrazy.web.id, sesuai aturan satu domain kanonik untuk semua project.

## Struktur Project

```
app/            page.tsx (satu halaman), layout.tsx, globals.css
components/     Komponen UI
portfolio.tsx   Konten portofolio
lib/, hooks/    Utilitas dan custom hooks
public/         Aset statis
```
