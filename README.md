# 🧠 AI Learning Insight
**A25-CS229 | Dicoding x Accenture Capstone Project**

> Platform pembelajaran digital interaktif yang memanfaatkan AI untuk memberikan insight personal terhadap performa belajar pengguna.

---

## 🧩 Deskripsi Proyek
**AI Learning Insight** bertujuan menghadirkan solusi pembelajaran digital yang interaktif, adaptif, dan personal.  
Platform ini membantu pengguna memahami performa belajarnya melalui analisis AI, memberikan rekomendasi strategi belajar yang sesuai dengan gaya belajar masing-masing individu, serta menampilkan visualisasi progres untuk menjaga motivasi belajar.

---

## 🎯 Tujuan & Fitur Utama

### 🔹 Fitur Machine Learning
- **Learning Style Classification** – Menentukan gaya belajar pengguna (visual, auditori, kinestetik, atau campuran).  
- **Personalized Feedback Generator** – Memberikan saran belajar sesuai gaya dan performa pengguna.  
- **Progress Prediction & Motivation Tracker** – Memprediksi peningkatan performa dan memberikan pesan motivasional.  
- **Engagement Score Analyzer** – Mengukur keterlibatan pengguna selama belajar digital.

### 🔹 Fitur React & Back-End
- RESTful API dengan **Node.js + Hapi.js**
- Integrasi hasil analisis **AI model (.json & .bin)**
- Dashboard interaktif menggunakan **React.js + Recharts**
- Visualisasi progres & insight belajar
- Koneksi database menggunakan **PostgreSQL**

---

## 🗂️ Struktur Proyek
```
ai-learning-insight/
├── backend/
│   ├── src/
│   │   └── routes/
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   ├── package.json
│   └── vite.config.js
├── docs/
│   └── project-plan.pdf
└── README.md
```

---

## 🧰 Tech Stack

| Layer | Tools / Framework | Keterangan |
|-------|--------------------|-------------|
| **Frontend** | React.js, Vite, Tailwind CSS, Recharts | UI Dashboard & Visualisasi |
| **Backend** | Node.js, Hapi.js | API & Integrasi Model AI |
| **Database** | PostgreSQL | Penyimpanan data pengguna & aktivitas |
| **AI / ML** | Python, Scikit-learn, Pandas, Numpy | Analisis gaya belajar & prediksi progres |
| **Dev Tools** | Git, GitHub, Postman, VSCode | Kolaborasi & pengujian API |

---

## ⚙️ Setup Environment

### 1️⃣ Clone Repository
```bash
git clone https://github.com/<username>/ai-learning-insight.git
cd ai-learning-insight
```

### 2️⃣ Setup Backend
```bash
cd backend
npm install
cp .env.example .env
npm run start
```

### 3️⃣ Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

### 4️⃣ Jalankan PostgreSQL
Pastikan database `ai_learning_db` aktif dan dikonfigurasi sesuai `.env`.

---

## 🚀 Cara Menjalankan Proyek
1. Jalankan backend (API) di port 5000  
2. Jalankan frontend (React) di port 5173  
3. Buka browser ke `http://localhost:5173`  
4. Dashboard akan menampilkan data dummy dari API (sementara sebelum integrasi model AI selesai)

---

## 👥 Kontributor Tim

| Nama | Learning Path | Peran |
|------|----------------|-------|
| **Selena Hans** | Machine Learning | Personalized Feedback & Motivation Tracker |
| **Karyn Felicia Siaoman** | Machine Learning | Learning Style Classification & Engagement Score |
| **Dwiky Juniardi** | React & Back-End with AI | Backend Development & AI Integration |
| **Nofi Ardiman Widjaya** | React & Back-End with AI | Frontend (Dashboard & Data Visualization) |
| **Raka Putra Ramadhan** | React & Back-End with AI | Frontend (UI & Navigasi) |

---

## 📄 Lisensi
Proyek ini dibuat sebagai bagian dari **Dicoding Capstone Project** dan hanya digunakan untuk keperluan pembelajaran.  
© 2025 AI Learning Insight Team – All Rights Reserved.
