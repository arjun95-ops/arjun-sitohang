#!/bin/bash

# Script untuk mencari lokasi file gambar yang digunakan dalam project Next.js
# Usage: ./find-images.sh

echo "🔍 Mencari file gambar yang digunakan dalam project..."
echo "=================================================="

echo ""
echo "📸 Mencari Foto Profil..."
echo "------------------------"

# Cari di komponen yang umum mengandung foto profil
echo "🔎 Mencari di komponen Hero..."
grep -r "profile\|avatar\|photo" src/components/hero* --include="*.tsx" --include="*.ts" 2>/dev/null | head -5

echo ""
echo "🔎 Mencari di komponen About..."
grep -r "profile\|avatar\|photo" src/components/about* --include="*.tsx" --include="*.ts" 2>/dev/null | head -5

echo ""
echo "🔎 Mencari di Navbar..."
grep -r "profile\|avatar\|photo" src/components/nav* --include="*.tsx" --include="*.ts" 2>/dev/null | head -5

echo ""
echo "🔎 Mencari di Constants..."
grep -r "profile\|avatar\|photo" src/constants* --include="*.js" --include="*.ts" 2>/dev/null | head -5

echo ""
echo "🎨 Mencari di semua file TypeScript/React..."
grep -r "profile\|avatar\|photo" src/ --include="*.tsx" --include="*.ts" 2>/dev/null | head -10

echo ""
echo "🔧 Mencari Favicon..."
echo "-------------------"

# Cari favicon di layout files
echo "🔎 Mencari di layout files..."
grep -r "favicon\|icon" app/layout* --include="*.tsx" --include="*.ts" 2>/dev/null | head -5

echo ""
echo "📁 Mencari file gambar di folder public..."
echo "----------------------------------------"

if [ -d "public" ]; then
    echo "📂 Folder public ditemukan. Isinya:"
    find public/ -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" -o -name "*.webp" -o -name "*.ico" \) | sort
else
    echo "❌ Folder public tidak ditemukan"
fi

echo ""
echo "📋 Rekomendasi File untuk Diganti:"
echo "---------------------------------"

# Cari file yang mungkin adalah foto profil
if [ -d "public" ]; then
    echo "📸 Kemungkinan file foto profil:"
    find public/ -type f \( -name "*profile*" -o -name "*avatar*" -o -name "*photo*" \) 2>/dev/null
    
    echo ""
    echo "🔧 Kemungkinan file favicon:"
    find public/ -type f \( -name "*favicon*" -o -name "icon.*" \) 2>/dev/null
fi

echo ""
echo "✅ Pencarian selesai!"
echo ""
echo "💡 Tips:"
echo "1. Perhatikan nama file yang ditemukan di atas"
echo "2. Buat file baru dengan nama yang SAMA PERSIS"
echo "3. Timpa file lama dengan file baru"
echo "4. Restart server: npm run dev"