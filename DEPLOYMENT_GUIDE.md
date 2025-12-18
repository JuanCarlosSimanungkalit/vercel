# Para Buzzer - Influencer Booking Platform

Fullstack application untuk booking influencer, dioptimasi untuk deployment di Vercel.

## 📋 Project Structure

```
├── frontend/          # React + Vite frontend
├── backend/           # Node.js + Express backend
├── api/               # Vercel Serverless Functions
├── vercel.json        # Vercel configuration
└── package.json       # Root package.json
```

## 🚀 Local Development

### Prerequisites
- Node.js 18+
- npm atau yarn
- Supabase account (untuk database)

### Setup

1. **Clone repository**
```bash
git clone <repository-url>
cd para-buzzer
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**

Backend (.env):
```bash
cp backend/.env.example backend/.env
```
Isi dengan nilai Supabase Anda:
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
FRONTEND_URL=http://localhost:3000
```

Frontend (.env.local):
```bash
cp frontend/.env.example frontend/.env.local
```
Isi dengan nilai Supabase dan API URL:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_API_URL=http://localhost:5000/api
```

4. **Run development server**
```bash
npm run dev
```

Frontend akan berjalan di: http://localhost:5173
Backend akan berjalan di: http://localhost:5000

## 🌐 Deployment ke Vercel

### Step 1: Siapkan Repository di GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Step 2: Deployment
1. Buka [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Pilih repository Anda
4. Configure project:
   - **Framework Preset**: Other
   - **Root Directory**: ./
   - **Build Command**: `cd frontend && npm run build`
   - **Output Directory**: `frontend/dist`

### Step 3: Environment Variables
Di Vercel Dashboard, tambahkan environment variables:

**Backend (Supabase)**
- `SUPABASE_URL`: [value dari Supabase]
- `SUPABASE_KEY`: [value dari Supabase]
- `FRONTEND_URL`: https://your-app.vercel.app
- `JWT_SECRET`: [generate strong secret]

**Frontend (Supabase)**
- `VITE_SUPABASE_URL`: [sama dengan backend]
- `VITE_SUPABASE_ANON_KEY`: [value dari Supabase]
- `VITE_API_URL`: /api (relative path, Vercel handle routing)

### Step 4: Deploy
Click "Deploy" - Vercel akan otomatis build dan deploy aplikasi Anda.

## 📝 API Structure

Backend API tersedia di `/api`:
- `/api/auth` - Authentication routes
- `/api/admin` - Admin routes
- `/api/influencer` - Influencer routes
- `/api/influencers` - Influencer list
- `/api/reviews` - Review routes
- `/api/bookings` - Booking routes
- `/api/chats` - Chat routes

## 🔒 Environment Variables Required

### Backend
- `SUPABASE_URL` - Supabase project URL
- `SUPABASE_KEY` - Supabase service role key
- `FRONTEND_URL` - URL frontend untuk CORS
- `JWT_SECRET` - Secret untuk JWT tokens
- `NODE_ENV` - production atau development
- `PORT` - Port untuk backend (default: 5000)

### Frontend
- `VITE_SUPABASE_URL` - Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Supabase anon key
- `VITE_API_URL` - API base URL (default: /api)

## 📦 Build Output

- Frontend: `frontend/dist/`
- Backend: Dijalankan sebagai Vercel Serverless Functions di `/api/`

## ✅ Checklist Pre-Deployment

- [ ] Semua environment variables sudah dikonfigurasi
- [ ] Supabase database sudah setup
- [ ] Database migrations sudah dijalankan
- [ ] API endpoints sudah ditest locally
- [ ] Frontend build berhasil (`npm run build` di folder frontend)
- [ ] .env files tidak di-commit ke git

## 🐛 Troubleshooting

**Masalah: API calls return 404**
- Pastikan `VITE_API_URL` di frontend benar
- Vercel Functions harus di `/api` directory
- Check Vercel logs untuk error

**Masalah: CORS errors**
- Pastikan `FRONTEND_URL` di backend sudah benar
- Vercel auto-handle CORS untuk API requests ke `/api`

**Masalah: Database connection**
- Vercel Functions dapat connect ke Supabase tanpa masalah
- Check `SUPABASE_URL` dan `SUPABASE_KEY` sudah benar

## 📚 Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Express.js Guide](https://expressjs.com/)
- [React + Vite Guide](https://vitejs.dev/)

## 📧 Support

Untuk pertanyaan atau issue, hubungi tim development.

---

**Happy Coding! 🎉**
