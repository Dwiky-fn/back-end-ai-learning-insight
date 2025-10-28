# 🤝 Panduan Kontribusi – AI Learning Insight

Halo kontributor! 👋  
Dokumen ini menjelaskan panduan kerja tim untuk mengembangkan proyek **AI Learning Insight (A25-CS229)** secara konsisten dan terstruktur.

---

## 📦 Struktur Utama Branch

| Branch | Deskripsi | Catatan |
|---------|------------|----------|
| `main` | Branch utama, berisi versi stabil proyek | Hanya di-merge setelah code review |
| `feature/frontend` | Pengembangan fitur Front-End (React + Vite) | Untuk tim React |
| `feature/backend` | Pengembangan fitur Back-End (Node.js + Hapi) | Untuk tim Back-End |
| `feature/ml` | Pengembangan model Machine Learning | Untuk tim ML |
| `docs/...` | Dokumentasi proyek | README, API Docs, dan panduan lainnya |

---

## 🌿 Konvensi Penamaan Branch

Gunakan format berikut:
```
<tipe>/<deskripsi-singkat>
```

### Jenis Prefix:
| Prefix | Kegunaan | Contoh |
|---------|-----------|---------|
| `feature/` | Fitur baru | `feature/backend-auth`, `feature/frontend-dashboard` |
| `fix/` | Perbaikan bug | `fix/frontend-validation` |
| `refactor/` | Restrukturisasi kode | `refactor/ml-pipeline` |
| `docs/` | Perubahan dokumentasi | `docs/update-readme` |
| `chore/` | Maintenance/config | `chore/update-dependencies` |
| `test/` | Eksperimen atau testing | `test/api-performance` |

> 💡 Gunakan huruf kecil dan tanda hubung (-) untuk pemisah kata.

---

## 🧾 Format Commit Message

Gunakan pola commit berikut agar log Git mudah dibaca:
```
<type>(<scope>): <deskripsi>
```

Contoh:
```
feat(frontend): add user dashboard component
fix(backend): correct login API response
docs(readme): update setup instructions
```

### Jenis Commit:
| Type | Arti |
|------|------|
| `feat` | Fitur baru |
| `fix` | Memperbaiki bug |
| `docs` | Dokumentasi |
| `style` | Perubahan tampilan/UI |
| `refactor` | Refactor kode tanpa ubah fungsionalitas |
| `test` | Penambahan atau perbaikan test |
| `chore` | Perubahan kecil atau konfigurasi |

---

## 🔄 Workflow Kontribusi

1️⃣ **Buat branch baru**
```bash
git checkout main
git pull origin main
git checkout -b feature/frontend-dashboard
```

2️⃣ **Lakukan perubahan**
- Pastikan perubahan kamu spesifik untuk satu fitur/tujuan.
- Tes kode lokal sebelum commit.

3️⃣ **Commit perubahan**
```bash
git add .
git commit -m "feat(frontend): implement dashboard layout"
```

4️⃣ **Push ke GitHub**
```bash
git push origin feature/frontend-dashboard
```

5️⃣ **Buat Pull Request (PR)**
- Tujuan PR → `main`
- Isi deskripsi singkat fitur/bug
- Tambahkan checklist:
  - [ ] Sudah dites lokal
  - [ ] Tidak merusak fitur lain
  - [ ] Sudah mengikuti konvensi commit
  - [ ] Sudah diperiksa lint/style (kalau ada)

---

## 👀 Code Review Guidelines
- Minimal 1 reviewer dari tim lain (misal frontend → direview backend atau ML).
- Gunakan komentar yang membangun.
- Hindari merge tanpa review kecuali urgent (gunakan prefix `hotfix/` jika darurat).

---

## ⚙️ Tools & Style
- **Frontend:** React, Vite, TailwindCSS  
- **Backend:** Node.js (Hapi.js), PostgreSQL  
- **ML:** Python (Scikit-learn, Pandas)  
- Gunakan `.env.example` untuk konfigurasi environment  
- Pastikan file baru memiliki dokumentasi singkat di atas fungsi utama  

---

## 🧩 Tips Tambahan
- Jalankan `npm run lint` (jika tersedia) sebelum push.  
- Gunakan komentar `TODO:` jika ada pekerjaan yang belum selesai.  
- Hindari file berukuran besar di repo (upload ke storage eksternal bila perlu).  

---

Terima kasih sudah berkontribusi di proyek **AI Learning Insight!**  
💙 Semangat membangun platform pembelajaran AI yang bermanfaat!
