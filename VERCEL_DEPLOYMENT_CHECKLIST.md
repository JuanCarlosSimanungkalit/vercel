# ✅ Pre-Deployment Checklist untuk Vercel

## 1. Project Structure
- [x] `/api` directory dengan Vercel Functions
- [x] `/frontend` directory dengan React + Vite
- [x] `/backend` directory dengan Express server logic
- [x] `vercel.json` dikonfigurasi untuk serverless
- [x] Root `package.json` sudah ada

## 2. Environment Variables

### Persiapan
- [ ] Buat file `backend/.env` dari template `backend/.env.example`
- [ ] Buat file `frontend/.env.local` dari template `frontend/.env.local`

### Backend Environment Variables (di `backend/.env`)
```
SUPABASE_URL=https://[your-project].supabase.co
SUPABASE_KEY=[your-service-role-key]
FRONTEND_URL=http://localhost:3000
JWT_SECRET=[generate-strong-secret-here]
```

### Frontend Environment Variables (di `frontend/.env.local` untuk local, atau di Vercel dashboard untuk production)
```
VITE_SUPABASE_URL=https://[your-project].supabase.co
VITE_SUPABASE_ANON_KEY=[your-anon-key]
VITE_API_URL=http://localhost:5000/api  # Local, change to /api for production
```

## 3. Local Testing

```bash
# Install dependencies
npm install

# Test frontend build
cd frontend
npm run build

# Test frontend locally
npm run dev

# Di terminal lain, test backend
cd backend
npm run dev
```

- [ ] Frontend membangun tanpa error
- [ ] Frontend berjalan di http://localhost:5173
- [ ] Backend berjalan di http://localhost:5000
- [ ] API calls dari frontend ke backend working
- [ ] CORS tidak ada error di console

## 4. Code Quality Checks

```bash
# Check linting
cd frontend
npm run lint

# Check build
npm run build
```

- [ ] Tidak ada critical errors
- [ ] Tidak ada console errors

## 5. API Routes Test

```bash
# Test endpoint
curl http://localhost:5000/api/health
```

Seharusnya response:
```json
{"status": "Backend is running"}
```

- [ ] Health check endpoint working
- [ ] Semua routes accessible

## 6. GitHub Setup

```bash
# Initialize git (jika belum)
git init
git add .
git commit -m "Initial commit: fullstack app ready for Vercel"
git branch -M main
git remote add origin https://github.com/your-username/para-buzzer.git
git push -u origin main
```

- [ ] Kode sudah di-push ke GitHub
- [ ] Repository is public (untuk Vercel access)
- [ ] No .env files committed (cek .gitignore)

## 7. Vercel Configuration

1. Masuk ke https://vercel.com
2. Click "Add New Project"
3. Select repository "para-buzzer"
4. Configure Build Settings:
   - Framework Preset: `Other`
   - Build Command: `cd frontend && npm run build`
   - Output Directory: `frontend/dist`
   - Root Directory: `./`

5. Add Environment Variables:
   - `SUPABASE_URL`
   - `SUPABASE_KEY`
   - `FRONTEND_URL` = `https://your-domain.vercel.app`
   - `JWT_SECRET` = `[strong-random-string]`
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

- [ ] Project created di Vercel
- [ ] Environment variables sudah di-set
- [ ] Build command benar
- [ ] Output directory benar

## 8. Deployment

- [ ] Deploy button di-click di Vercel dashboard
- [ ] Build process completed successfully
- [ ] No build errors di Vercel logs
- [ ] Deployment successful

## 9. Post-Deployment Testing

1. Buka URL Vercel (https://your-app.vercel.app)
2. Test functionality:
   - [ ] Frontend loads without errors
   - [ ] Navigation working
   - [ ] API calls working (check network tab)
   - [ ] No 404 errors for API routes
   - [ ] Form submissions working

## 10. Database & Auth

- [ ] Supabase connection working (check Supabase logs)
- [ ] Database queries execute successfully
- [ ] Authentication flow working
- [ ] JWT tokens generating properly

## 11. Production Monitoring

- [ ] Vercel Analytics enabled
- [ ] Error logging configured
- [ ] Monitor Vercel dashboard untuk performance
- [ ] Check database quotas dan usage

## Common Issues & Solutions

### Issue: "Cannot GET /api/health"
**Solution**: Vercel Functions di `/api` perlu proper routing di `api/app.js`

### Issue: CORS Errors
**Solution**: Pastikan `FRONTEND_URL` di backend environment variables benar

### Issue: 404 on API Routes
**Solution**: Check `[...slug].js` files di `/api` routes - pastikan semua routes ada

### Issue: Supabase Connection Error
**Solution**: Verifikasi `SUPABASE_URL` dan `SUPABASE_KEY` di environment variables

### Issue: Frontend cannot find API
**Solution**: Frontend harus menggunakan `/api` (relative path) atau environment variable `VITE_API_URL`

---

## Next Steps Setelah Deployment

1. Setup domain custom (jika perlu)
2. Setup SSL certificate (auto oleh Vercel)
3. Setup backup strategy untuk database
4. Setup monitoring dan alerting
5. Create post-deployment documentation

---

**Last Updated**: December 18, 2025
**Status**: ✅ Ready for Deployment
