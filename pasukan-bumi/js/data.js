/* Data materi, pengembang, quiz, dan permainan dipisahkan agar mudah diedit. */
const DEVELOPERS = ["Zacky Akbar Ramadhan","Aulya Zalfa Khairun Nisa","Stevie Putri Andini","Ananta Nur Fajri Al Mu'iz","Aditiya Galang Saputra","Juhar Nashota Dika","Cicik Auliya Rosyidah"];
const LEARNING_GOALS = [
  "Memahami konsep ekologi, tingkatan organisasi kehidupan, serta aliran energi dalam ekosistem.",
  "Mengidentifikasi keanekaragaman hayati serta persebaran flora dan fauna di Indonesia.",
  "Menganalisis dampak aktivitas manusia dan upaya konservasi lingkungan."
];
const MATERIALS = {
  ecology:{title:"Pengaruh Lingkungan terhadap Makhluk Hidup", pages:[
    {heading:"Pengertian Ekosistem",icon:"🌱",text:"Ekosistem adalah kesatuan antara makhluk hidup (biotik) dan lingkungan tak hidup (abiotik) yang saling berinteraksi. Hubungan ini membuat ekosistem menjadi sebuah sistem yang saling bergantung.",bullets:["Biotik: tumbuhan, hewan, manusia, jamur, dan mikroorganisme.","Abiotik: air, tanah, udara, cahaya matahari, suhu, dan mineral.","Contoh: di sawah, padi memanfaatkan cahaya dan air; belalang memakan padi; katak dapat memakan belalang."]},
    {heading:"Organisasi Kehidupan & Aliran Energi",icon:"🔎",text:"Makhluk hidup tersusun dalam tingkatan organisasi. Dalam ekosistem, energi mengalir melalui hubungan makan dan dimakan. Produsen menyimpan energi matahari, lalu energi berpindah kepada konsumen.",bullets:["Individu → populasi → komunitas → ekosistem.","Produsen: tumbuhan yang membuat makanan.","Konsumen: organisme yang memperoleh energi dengan memakan organisme lain.","Pengurai membantu mengembalikan unsur hara ke lingkungan."]}
  ]},
  biodiversity:{title:"Keanekaragaman Hayati Indonesia",pages:[
    {heading:"Keanekaragaman Flora & Fauna",icon:"🦜",text:"Indonesia memiliki keanekaragaman hayati yang tinggi. Berbagai tumbuhan dan hewan hidup di lingkungan yang berbeda, mulai dari hutan tropis hingga wilayah pesisir.",bullets:["Keanekaragaman hayati mencakup variasi makhluk hidup.","Flora adalah tumbuhan; fauna adalah hewan.","Habitat dan kondisi lingkungan memengaruhi jenis organisme yang dapat hidup."]},
    {heading:"Persebaran Fauna & Bioma",icon:"🗺️",text:"Fauna Indonesia secara umum dikelompokkan menjadi wilayah Asiatis, Peralihan (Wallacea), dan Australis. Bentang alam Indonesia juga mencakup hutan hujan tropis, savana, pantai, dan padang rumput.",bullets:["Asiatis: antara lain gajah dan harimau di wilayah Indonesia bagian barat.","Peralihan: antara lain komodo dan anoa.","Australis: antara lain kasuari dan cenderawasih.","Bioma memiliki kondisi lingkungan khas yang membentuk komunitas organisme."]}
  ]},
  humans:{title:"Aktivitas Manusia terhadap Ekosistem",pages:[
    {heading:"Aktivitas Manusia & Dampaknya",icon:"🌏",text:"Kegiatan manusia dapat menjaga atau mengubah keseimbangan ekosistem. Dampaknya bergantung pada cara sumber daya digunakan dan bagaimana limbah dikelola.",bullets:["Deforestasi mengurangi habitat dan dapat meningkatkan erosi.","Pencemaran air, tanah, dan udara mengganggu kehidupan organisme.","Penggunaan pupuk secara berlebihan dapat mencemari perairan dan memicu eutrofikasi."]},
    {heading:"Menjaga dan Memulihkan Ekosistem",icon:"♻️",text:"Upaya konservasi membantu melindungi keanekaragaman hayati dan menjaga sumber daya alam agar dapat digunakan secara berkelanjutan.",bullets:["Reboisasi dan pemulihan habitat.","Mengurangi sampah serta memilah dan mendaur ulang.","Menggunakan air dan energi dengan bijak.","Melindungi kawasan konservasi dan satwa liar."]}
  ]}
};
const QUIZZES = {
  ecology:[
    {q:"Tanaman yang mendapatkan cukup air dan sinar matahari tumbuh lebih subur dibanding tanaman yang kekurangan. Kesimpulan yang tepat adalah…",options:["Pertumbuhan tanaman hanya dipengaruhi jenis tanah","Kondisi lingkungan memengaruhi pertumbuhan tumbuhan","Semua tanaman dapat tumbuh tanpa air","Sinar matahari tidak dibutuhkan tumbuhan"],answer:1,explain:"Air dan cahaya matahari merupakan faktor abiotik yang memengaruhi pertumbuhan tanaman."},
    {q:"Sekumpulan ikan dari beberapa jenis yang hidup bersama tumbuhan air di sebuah kolam membentuk…",options:["Individu","Populasi","Komunitas","Organisme tunggal"],answer:2,explain:"Komunitas terdiri dari populasi berbagai jenis makhluk hidup yang berada di suatu tempat."},
    {q:"Pada rantai makanan rumput → belalang → katak → ular → elang, jika populasi belalang menurun drastis, dampak yang mungkin terjadi adalah…",options:["Populasi katak meningkat karena makanan bertambah","Populasi rumput cenderung meningkat karena berkurangnya belalang","Populasi ular langsung meningkat","Populasi rumput langsung habis"],answer:1,explain:"Belalang yang berkurang akan memakan lebih sedikit rumput, sehingga rumput dapat meningkat; katak juga berpotensi kekurangan makanan."}
  ],
  biodiversity:[
    {q:"Indonesia memiliki keanekaragaman hayati yang tinggi. Salah satu faktor pendukungnya adalah…",options:["Indonesia memiliki empat musim ekstrem","Indonesia berada di wilayah tropis dengan kondisi lingkungan beragam","Indonesia hanya memiliki satu jenis ekosistem","Semua wilayah Indonesia memiliki iklim yang sama"],answer:1,explain:"Letak tropis dan kondisi wilayah yang beragam mendukung kekayaan flora dan fauna Indonesia."},
    {q:"Rafflesia merupakan tumbuhan yang hanya ditemukan secara alami di wilayah tertentu. Istilah untuk organisme dengan persebaran terbatas seperti ini adalah…",options:["Kepunahan","Pencemaran","Spesies endemik","Kompetisi"],answer:2,explain:"Spesies endemik memiliki persebaran alami terbatas pada wilayah tertentu."},
    {q:"Menurut pembagian persebaran fauna Indonesia, tiga wilayah utama yang dikenal adalah…",options:["Utara, selatan, dan tengah","Barat laut, timur laut, dan selatan","Asiatis, peralihan, dan Australis","Tropis, subtropis, dan kutub"],answer:2,explain:"Fauna Indonesia dibagi secara umum menjadi wilayah Asiatis, Peralihan (Wallacea), dan Australis."}
  ],
  humans:[
    {q:"Hutan dibuka secara besar-besaran untuk dijadikan lahan perkebunan. Dampak yang paling mungkin terjadi adalah…",options:["Habitat organisme bertambah luas","Keanekaragaman hayati meningkat otomatis","Habitat organisme rusak dan keanekaragaman hayati menurun","Semua hewan mudah menyesuaikan diri"],answer:2,explain:"Pembukaan hutan dapat menghilangkan habitat dan mengurangi keanekaragaman hayati."},
    {q:"Petani menggunakan pupuk kimia secara berlebihan di lahan pertanian. Pupuk terbawa air hujan ke danau dan memicu pertumbuhan alga secara berlebihan. Peristiwa tersebut disebut…",options:["Fotosintesis","Eutrofikasi","Transpirasi","Denitrifikasi"],answer:1,explain:"Eutrofikasi terjadi saat perairan menerima nutrien berlebih sehingga alga tumbuh pesat."},
    {q:"Warga membuang sampah dan limbah rumah tangga langsung ke sungai. Analisis yang paling tepat adalah…",options:["Kualitas air menurun dan organisme perairan dapat terganggu","Air sungai menjadi lebih bersih","Semua organisme sungai mendapat makanan tambahan","Keseimbangan ekosistem tidak berubah"],answer:0,explain:"Sampah dan limbah dapat mencemari air, mengganggu organisme, dan mengubah keseimbangan ekosistem."}
  ]
};
const GAME_FOOD = [{label:"Matahari",emoji:"☀️",id:"sun"},{label:"Rumput",emoji:"🌿",id:"grass"},{label:"Belalang",emoji:"🦗",id:"grasshopper"},{label:"Katak",emoji:"🐸",id:"frog"},{label:"Ular",emoji:"🐍",id:"snake"}];
const GAME_BIO = [{label:"Harimau",emoji:"🐅",region:"Asiatis"},{label:"Gajah",emoji:"🐘",region:"Asiatis"},{label:"Komodo",emoji:"🦎",region:"Peralihan"},{label:"Anoa",emoji:"🐃",region:"Peralihan"},{label:"Cenderawasih",emoji:"🦜",region:"Australis"},{label:"Kasuari",emoji:"🦤",region:"Australis"}];
