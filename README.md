`Nama : Dias Rachma Rosalina`

`NIM : 2341727003`

`Link Vercel`

https://09-nextjs-database-zeta.vercel.app/

# Praktikum 1: Setup Database dan Fetching Data

Berhasil deploy di server Vercel

![Screenshot (236)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/74d00f0d-2847-4336-b1bb-6547260597ce)

`Soal 1. Jelaskan apa yang telah Anda pelajari?`
Dengan memanfaatkan Vercel, pengembang dapat dengan mudah membangun, mendeploy, dan mengelola situs web serta aplikasi front-end. Setiap kali pengembang membuat perubahan pada proyek dan mengirimkannya ke repositori git, Vercel akan secara otomatis mendeteksi perubahan tersebut dan melakukan deploy baru hanya dalam hitungan detik. Ini memungkinkan pengembang untuk langsung melihat perubahan mereka di lingkungan produksi dengan cepat dan tanpa kesulitan.

`Soal 2 : Membuat basis data Postgres`

![Screenshot (237)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/74a11d48-0472-412e-ab40-ad6033f33397)

Vercel juga bisa digunakan untuk membuat database. Dalam praktikum ini, kita telah mencoba membuat database Postgres. Untuk mengakses database tersebut, kita membuat file .env yang berisi kode dari Vercel. Kemudian, file .env tersebut ditambahkan ke file .gitignore agar saat kita mengunggah ke GitHub, kode dalam .env tidak terbaca.

`Soal 3. Melakukan seed ke basis data`

![npm run seed](https://github.com/diasrachma/09-nextjs-database/assets/112748414/34821dbc-db0b-4bef-ace3-0f3269ec25b1)

Awalnya error, namun setelah menginstallnya terlebih dahulu dengan perintah npm i --save dotenv
dan npm i --save bcrypt serta mengubah kode di seed.js menjadi seperti ini: require('./data.js') berhasil melakukan seed ke basis data

`Soal 4. Menjelajah Basis Data`
Buka akun vercel , cek pada sidenav klik Data kemudian akan melihat tabel berisi : users, customers, invoices, dan revenue

![Screenshot (238)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/da9f8e85-9690-4746-94a0-e1e8afbdc1b2)

Eksekusi Query SQL 

![Screenshot (239)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/48781088-6141-4a40-8664-dbb801a489d4)

Perintah SQL tersebut digunakan untuk mengambil data dari dua tabel, yaitu invoices dan customers, dan mengembalikan daftar nama pelanggan serta jumlah tagihan tertentu

# Praktikum 1: Fetching Data
Membuat global Query (Model) dan menambahkan kode yang ada.

![modul global](https://github.com/diasrachma/09-nextjs-database/assets/112748414/0175358d-3246-454a-9289-0ee7cd546a59)

`Jawaban soal 5`

![Screenshot (234)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/c2d1e1d0-8f20-4789-ba9e-3cfae5266315)

Setelah menambahkan kode di setiap komponen maka hasil dashboard akan muncul

`Fetching Data untuk Komponen RevenueChart`
src\app\page.tsx

![Screenshot 2024-05-15 122142](https://github.com/diasrachma/09-nextjs-database/assets/112748414/d0855aa7-97b4-4407-9e29-55bd15818e9f)

`Jawaban soal 6`

![Screenshot 2024-05-15 121821](https://github.com/diasrachma/09-nextjs-database/assets/112748414/2b8e72ad-b909-45c2-9455-77dddf3d4493)

halaman React yang menampilkan sebuah dashboard dengan chart

`Soal 7. Fetching Data untuk komponen LatestInvoices`

untuk profile gambar

![public](https://github.com/diasrachma/09-nextjs-database/assets/112748414/89741460-6025-4d9d-bcdb-7c667e47172d)

Buka src\app\page.tsx kemudian lakukan import komponen LatestInvoices, lalu hapus comment pada komponen LatestInvoices di dalam fungsi Page(). Hasilnya akan melihat 5 data yang diambil dari basis data (bagian Latest Invoices).

![soal7](https://github.com/diasrachma/09-nextjs-database/assets/112748414/61a78537-eb49-42a9-adfc-8efe6fad97ad)

# Tugas Praktikum

src\app\page.tsx

![Screenshot (242)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/b14e8ca3-5c76-4cc9-be6f-53959f844497)

src\app\components\molecules\card.tsx

![Screenshot (241)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/d4d02be7-98d5-4ffc-9f20-47e5a24fca07)

Hasil

![Screenshot (235)](https://github.com/diasrachma/09-nextjs-database/assets/112748414/f223c99f-2cb6-4709-9378-82c7547500ae)

Perhatikan fungsi fetchCardData() (pada file src\model\query.tsx) dari soal nomor 1. Jelaskan maksud kode dan kueri yang dilakukan dalam fungsi tersebut!

`kode tersebut adalah serangkaian fungsi yang digunakan untuk mengambil data dari database PostgreSQL. Ada fungsi-fungsi untuk mengambil data pendapatan, tagihan terbaru, data kartu dashboard, tagihan yang difilter, halaman tagihan, pelanggan, pelanggan yang difilter, dan pengguna berdasarkan alamat email. Semua fungsi ini menggunakan modul @vercel/postgres untuk berinteraksi dengan database dan ada juga penggunaan fungsi formatCurrency() untuk mengubah format mata uang.`

`Link Vercel`

https://09-nextjs-database-zeta.vercel.app/

