# Portfolio Website — Haris Rusnanda, S.Kom

Personal website & portfolio profesional modern untuk membangun personal branding dan mendukung kebutuhan pencarian kerja sebagai:
* **IoT Engineer**
* **IT Support & Network Specialist**
* **Software Developer**

Dibangun menggunakan stack modern:
- **React 19**
- **Tailwind CSS v4**
- **Vite 8**
- **Lucide Icons**
- **JetBrains Mono & Inter Fonts**

---

## 🚀 Menjalankan Project Secara Lokal

1. **Install Dependensi** (jika clone pertama kali):
   ```bash
   npm install
   ```

2. **Jalankan Server Development**:
   ```bash
   npm run dev
   ```
   Buka browser di `http://localhost:5173` untuk melihat website.

3. **Build untuk Produksi**:
   ```bash
   npm run build
   ```
   Folder `dist/` siap untuk di-deploy ke hosting (Vercel, Netlify, Cloudflare Pages, atau GitHub Pages).

---

## ✏️ Cara Mengubah / Menyesuaikan Konten

Semua data profil, project, riwayat pendidikan, pengalaman kerja, kontak, dan keahlian telah dipusatkan dalam satu file konfigurasi yang mudah diedit:

👉 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

### Hal-hal penting yang perlu Anda ganti dengan data asli Anda:
1. **Kontak & Media Sosial**:
   - `email`: Ganti dengan alamat email aktif Anda.
   - `phone`: Ganti dengan nomor handphone / WhatsApp Anda.
   - `whatsappUrl`: Ganti dengan link WhatsApp Anda (misal `https://wa.me/628xxxxxxxxxx`).
   - `linkedin`: Ganti dengan link profil LinkedIn Anda.
   - `github`: Ganti dengan link profil GitHub Anda.
   - `resumeUrl`: Letakkan file PDF CV Anda di folder `public/` (misal `public/cv-haris-rusnanda.pdf`) lalu arahkan ke `/cv-haris-rusnanda.pdf`.

2. **Pendidikan & Pengalaman**:
   - Ganti nama institusi kampus, tahun lulus, dan pencapaian tugas akhir Anda.
   - Perbarui daftar perusahaan/tempat magang serta tanggung jawab riil Anda.

3. **Project & Studi Kasus**:
   - Tambahkan atau sesuaikan daftar project IoT, IT Support, atau Web yang pernah Anda kerjakan beserta link repositori GitHub-nya.

---

## 🎨 Konsep & Filosofi Desain

- **Dark Theme Modern**: Menggunakan palette warna deep dark (`#080d1a` dan `#0f172a`) dengan aksen biru profesional (`#3b82f6` dan `#0284c7`).
- **Clean & Minimalist**: Tampilan bersih, terstruktur, tanpa animasi berlebihan yang mengganggu.
- **Developer & Technical Vibe**: Dilengkapi *Interactive System Console*, matriks keahlian berstandar industri, dan breakdown masalah-solusi (*Problem-Solution-Tech Stack*) pada setiap project.
- **Recruiter-Friendly**: Dilengkapi ringkasan metrik, role filter toggle yang memudahkan recruiter meninjau spesialisasi tertentu, dan tombol kontak cepat.
