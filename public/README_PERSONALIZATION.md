# 📁 Folder Structure untuk Personalisasi

## Struktur Folder yang Harus Dibuat

```
public/
├── images/
│   ├── profile.jpg      ← Foto profil baru Anda (simpan di sini)
│   └── favicon.png      ← Favicon PNG (opsional)
├── favicon.ico          ← Favicon ICO (simpan di sini)
├── apple-icon.png      ← Favicon untuk iOS (opsional)
└── logo.svg            ← Logo SVG (sudah ada)
```

## File yang Perlu Diedit

### 1. Foto Profil
**File**: `src/constants/index.js`  
**Baris**: 5  
**Sekarang**: `image: "https://i.imgur.com/uMwYkju.jpeg"`  
**Menjadi**: `image: "/images/profile.jpg"`

### 2. Favicon (Opsional)
**File**: `app/layout.tsx`  
**Cek bagian metadata untuk icon**

## Cara Paling Mudah

1. **Upload foto profil baru** ke `public/images/profile.jpg`
2. **Upload favicon baru** ke `public/favicon.ico`
3. **Edit `src/constants/index.js`** baris ke-5
4. **Restart server**: `npm run dev`

## Test URL

Setelah mengganti file, test URL berikut:
- Foto Profil: `http://localhost:3000/images/profile.jpg`
- Favicon: `http://localhost:3000/favicon.ico`

## Quick Commands

```bash
# Buat folder images (sudah dibuat)
mkdir -p public/images

# Restart development server
npm run dev

# Clear cache browser (Ctrl+Shift+R)
```

## Tips

- **Format foto profil**: JPG atau PNG, ukuran 400x400px
- **Format favicon**: ICO (32x32px) atau PNG (512x512px)
- **Kompres gambar** dengan TinyPNG sebelum digunakan
- **Selalu restart server** setelah mengganti file