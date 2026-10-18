# Flora Coffee - Tugas 2 Pemrograman Web

Aplikasi web menu kafe sederhana yang dibuat dengan **Node.js, Express, dan EJS** menggunakan konsep Server-Side Rendering (SSR). Data menu berasal dari array JavaScript lokal, tanpa database.

## Identitas

- **Nama:** Ardelia Naenda Ahmadi
- **NIM:** 42530022
- **Mata Kuliah:** Pemrograman Web
- **Tema:** A (Daftar Menu Kafe)

## Video Penjelasan

[[https://youtu.be/92vU9r5_vOw?si=nbwiA0jOaKSIA3Os]]

## Fitur

- Halaman daftar menu dengan filter kategori memakai Query Parameter, contoh `/?kategori=kopi`
- Halaman detail menu memakai Route Parameter, contoh `/menu/3`
- Halaman "Data Tidak Ditemukan" (status 404) untuk ID yang tidak ada
- Template EJS modular dengan partials (navbar dan footer)
- Tampilan responsif dengan desain bernuansa krem dan cokelat

## Cara Menjalankan

1. Pastikan Node.js sudah terpasang.
2. Install dependensi:
```
   npm install
```
3. Jalankan server:
```
   node app.js
```
4. Buka `http://localhost:3000` di browser.

## Struktur Folder

```
├── app.js              # Server Express dan routing
├── data/menu.js        # Data menu (array objek)
├── views/              # Template EJS
│   ├── partials/       # Navbar dan footer
│   ├── index.ejs       # Halaman daftar menu
│   ├── detail.ejs      # Halaman detail menu
│   └── notfound.ejs    # Halaman data tidak ditemukan
└── public/             # File statis (CSS dan gambar)
```

## Teknologi

Node.js, Express, EJS, HTML, CSS
