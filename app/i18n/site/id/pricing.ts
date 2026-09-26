import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Harga Corpus — Belajar Anatomi",
    description:
      "Jelajahi anatomi inti dalam 3D bersama Corpus secara gratis, tanpa perlu akun. Corpus Plus dan Edukasi sedang dikembangkan dan belum memiliki harga.",
  },

  hero: {
    eyebrow: "Harga",
    titleLead: "Jelajahi tubuh.",
    titleRest: "Pilih seberapa dalam Anda ingin melangkah.",
    lede: "Anatomi inti bisa dijelajahi gratis hari ini, tanpa akun dan tanpa pembayaran. Corpus Plus dan Edukasi masih dikembangkan, jadi keduanya belum memiliki harga.",
    primary: "Mulai menjelajah",
    secondary: "Bandingkan paket",
    plate: {
      label: "Lembar: {organ}, dalam potongan",
      alt: "Balok kulit dalam cat air yang dipotong untuk memperlihatkan lapisannya: permukaan, dermis dengan folikel rambut, kelenjar, dan pembuluh darah, serta lemak kuning di bawahnya",
      caption: "Dari permukaan hingga lemak di bawahnya. Lapisan yang sama diberi label pada model 3D, bebas dijelajahi.",
    },
  },

  plans: {
    title: "Paket",
    summary: "Satu paket tersedia hari ini. Dua lainnya sedang dikembangkan.",
    numberLabel: "Paket {number}",
    learnMore: "Selengkapnya tentang {plan}",
    items: {
      free: {
        name: "Gratis",
        tagline: "Jelajahi anatomi inti.",
        price: "Tanpa biaya",
        priceNote: "Tidak perlu akun",
        description: "Pengalaman Jelajahi selengkapnya seperti saat ini, terbuka bagi siapa saja yang memiliki peramban modern.",
        listHeading: "Sudah termasuk",
        list: {
          organs: "{organCount} organ dalam 3D, dari jantung dan otak hingga kulit",
          viewer: "Putar dan perbesar, dengan tampilan isolasi, potongan melintang, dan lapisan",
          hotspots: "{structureCount} struktur berlabel, masing-masing dengan istilah Latinnya",
          cards: "Kartu belajar tentang jaringan, fungsi, penyakit, dan perbandingan",
          quiz: "Kuis penamaan yang meminta Anda menemukan struktur pada model",
          languages: "Deskripsi organ dalam {languageCount} bahasa",
        },
        cta: "Mulai menjelajah",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "Melangkah lebih dalam dengan fitur belajar dan personalisasi di masa depan.",
        price: "Belum ada harga",
        priceNote: "Sedang dikembangkan",
        description: "Direncanakan bagi mereka yang ingin melangkah lebih jauh dari koleksi inti dan kembali ke apa yang telah dipelajari.",
        listHeading: "Yang sedang kami jajaki",
        list: {
          depth: "Lebih banyak bagian tubuh, di luar organ yang tersedia saat ini",
          study: "Alat untuk membantu Anda berlatih dan mengingat apa yang Anda jelajahi",
          guidance: "Penjelasan terpandu di samping model 3D",
          progress: "Cara untuk kembali ke apa yang sudah Anda pelajari",
        },
        cta: "Selengkapnya",
      },
      education: {
        name: "Edukasi",
        tagline: "Hadirkan Corpus di lingkungan belajar-mengajar.",
        price: "Belum ada harga",
        priceNote: "Sedang dikembangkan",
        description: "Direncanakan bagi guru dan sekolah yang ingin menghadirkan Corpus dalam pelajaran atau mata kuliah.",
        listHeading: "Yang sedang kami jajaki",
        list: {
          classroom: "Cara menggunakan Corpus bersama satu kelas sekaligus",
          teaching: "Dukungan untuk menyiapkan dan memimpin pelajaran anatomi",
          practice: "Latihan yang bisa dikerjakan bersama oleh sekelompok siswa",
        },
        cta: "Selengkapnya",
      },
    },
    plannedNote: "Paket yang sedang dikembangkan adalah arah, bukan janji. Fitur, waktu, dan harganya belum ditentukan, dan tidak ada apa pun di halaman ini yang bisa dibeli.",
  },

  comparison: {
    eyebrow: "Bandingkan",
    title: "Isi setiap paket.",
    lede: "Kolom Gratis menggambarkan Corpus seperti saat ini. Dua kolom lainnya menggambarkan paket yang sedang dikembangkan dan dapat berubah.",
    caption: "Fitur per paket. Gratis tersedia sekarang; Corpus Plus dan Edukasi sedang dikembangkan.",
    featureHeading: "Fitur",
    status: {
      available: "Tersedia sekarang",
      planned: "Direncanakan",
      undecided: "Belum diputuskan",
      unavailable: "Tidak tersedia",
      otherPlan: "Tidak di paket ini",
    },
    rows: {
      exploration: {
        name: "Penjelajahan anatomi 3D",
        free: "Putar, perbesar, isolasi, potongan melintang, dan lapisan",
        plus: "Semua yang ada di Gratis",
        education: "Semua yang ada di Gratis",
      },
      library: {
        name: "Pustaka organ",
        free: "{organCount} organ, dengan pencarian",
        plus: "Lebih banyak bagian tubuh",
        education: "Semua yang ada di Gratis",
      },
      structures: {
        name: "Struktur anatomi",
        free: "{structureCount} struktur berlabel dengan istilah Latin",
        plus: "Semua yang ada di Gratis",
        education: "Semua yang ada di Gratis",
      },
      learning: {
        name: "Belajar interaktif",
        free: "Kartu belajar tentang jaringan, fungsi, penyakit, dan perbandingan",
        plus: "Alat belajar yang lebih mendalam",
        education: "Materi untuk digunakan dalam pelajaran",
      },
      practice: {
        name: "Latihan",
        free: "Kuis penamaan pada model 3D",
        plus: "Lebih banyak cara berlatih",
        education: "Latihan untuk satu kelas",
      },
      guidance: {
        name: "Panduan AI",
        free: "Corpus belum memiliki fitur AI saat ini",
        plus: "Penjelasan terpandu di samping model",
        education: "Belum diputuskan untuk paket ini",
      },
      progress: {
        name: "Kemajuan pribadi",
        free: "Kemajuan tidak disimpan antarkunjungan",
        plus: "Cara untuk kembali ke apa yang telah Anda pelajari",
        education: "Belum diputuskan untuk paket ini",
      },
      educators: {
        name: "Alat untuk pendidik",
        free: "Belum ada alat untuk pendidik saat ini",
        plus: "Direncanakan untuk Edukasi",
        education: "Dukungan untuk menyiapkan dan memimpin pelajaran",
      },
    },
  },

  collection: {
    eyebrow: "Termasuk dalam Gratis",
    title: "Koleksi gratis, terbuka untuk semua.",
    lede: "Setiap organ memiliki model 3D, lembar ilustrasi, dan struktur berlabel. Pilih salah satu untuk membukanya di Jelajahi.",
    plateLabel: "Lembar {number}",
    structures: "Struktur berlabel: {count}",
    openOrgan: "{organ}: buka di Jelajahi",
    footnote: "Model dan ilustrasi adalah representasi edukatif yang disederhanakan, bukan rujukan klinis, dan tidak ada apa pun di Corpus yang merupakan saran medis.",
  },

  faq: {
    eyebrow: "Pertanyaan",
    title: "Ditanya lugas, dijawab lugas.",
    items: {
      account: {
        q: "Apakah saya perlu akun?",
        a: "Tidak. Anda bisa membuka Jelajahi dan langsung mulai, tanpa masuk.",
      },
      payments: {
        q: "Bisakah saya membayar Corpus Plus atau Edukasi sekarang?",
        a: "Tidak. Kedua paket itu belum tersedia, harganya belum ditetapkan, dan saat ini Corpus tidak menerima pembayaran dalam bentuk apa pun. Jika sebuah paket sudah siap, penjelasannya akan dimuat di sini.",
      },
      classroom: {
        q: "Bisakah saya memakai Corpus di kelas sekarang?",
        a: "Bisa. Jelajahi gratis dan tidak memerlukan akun, sehingga siswa dapat membukanya di peramban modern. Alat untuk kelas dan pendidik belum tersedia.",
      },
    },
  },

  closing: {
    eyebrow: "Mulai",
    titleLead: "Bingung harus mulai dari mana?",
    titleRest: "Mulailah menjelajahi anatomi secara gratis.",
    cta: "Jelajahi Corpus",
    imageAlt: "Cat air kulit di bawah mikroskop: epidermis berlapis berwarna merah muda di atas jaringan dermis yang lebih longgar dan bergelombang",
    caption: "{organ} di bawah mikroskop: {tissue}",
  },
};
