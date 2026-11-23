# PASUKAN BUMI 🌿
Multimedia pembelajaran interaktif IPA kelas VII: ekologi, keanekaragaman hayati Indonesia, dan aktivitas manusia terhadap ekosistem.

## Jalankan project
1. Extract folder `pasukan-bumi` (jika dari ZIP).
2. Buka folder ini melalui VS Code (`File > Open Folder`).
3. Install extension **Live Server** jika belum tersedia.
4. Klik kanan `index.html` → **Open with Live Server**.
5. Aplikasi dibuka di browser. Klik **Mulai Petualangan**.

Project ini tidak membutuhkan backend, npm, atau framework.

## Fitur
- Scene Home, profil 7 pengembang, menu, petunjuk, CP/ATP.
- 3 topik materi, halaman bertahap, narasi menggunakan browser Speech Synthesis.
- Quiz 3 soal per materi, feedback jawaban, skor dihitung dari jawaban aktual.
- Dua mini game drag & drop; dapat drag dengan mouse atau tap item kemudian tap target.
- Halaman hasil quiz, retry, ulangi materi, dan scene penutup.
- Audio efek klik dan ambience sintetis ringan melalui Web Audio API.

## Aset lokal
Belum ada file musik hutan, foto/ilustrasi, narasi rekaman, maupun video MP4 yang disertakan dalam storyboard. UI memakai emoji dan ilustrasi CSS agar tetap berfungsi tanpa aset eksternal.
- Untuk video, tempatkan MP4 milik kelompok di `assets/video/` dan sesuaikan bagian placeholder video di `js/app.js`.
- Audio ambience saat ini sintetis (bukan rekaman alam). Jika tersedia audio lokal, integrasikan sebagai audio file pada `js/audio.js`.
- Folder assets disiapkan untuk penambahan gambar, audio, dan video lokal.

## Struktur
```
index.html
css/ (style.css, animation.css, responsive.css)
js/ (app.js, navigation.js, quiz.js, dragdrop.js, audio.js, data.js)
assets/ (images/, audio/, video/)
```
## Edit materi dan soal
- Materi: `js/data.js` pada object `MATERIALS`.
- Quiz: `js/data.js` pada object `QUIZZES`. `answer` memakai indeks 0-3.
- Nama anggota: array `DEVELOPERS` di `js/data.js`.
- Game: `GAME_FOOD` dan `GAME_BIO` di `js/data.js`.

## Catatan storyboard
Storyboard 45 scene disatukan ke scene renderer agar lebih mudah dikelola. Scene quiz feedback benar/salah dan hasil remedial dibuat dinamis, tetapi alur dan konten utamanya tetap mengikuti storyboard. Quiz disajikan 3 soal per materi.
