import type { SiteDictionary } from "..";

export const help: SiteDictionary["help"] = {
  meta: {
    title: "Bantuan Corpus — Panduan Belajar Anatomi",
    description:
      "Cara menggunakan Corpus: putar dan perbesar model organ 3D, baca strukturnya, uji diri Anda, ganti bahasa, dan temukan jawaban lugas untuk pertanyaan umum.",
  },

  hero: {
    eyebrow: "Bantuan",
    title: "Kenali seluk-beluk Corpus.",
    plate: {
      alt: "Studi cat air mata manusia, dengan otot-otot penggeraknya dan saraf optik di belakangnya",
    },
  },

  search: {
    label: "Apa yang bisa kami bantu temukan?",
    placeholder: "Coba “perbesar” atau “titik”",
    clear: "Hapus pencarian",
    resultsLabel: "Hasil pencarian",
    count: "Hasil: {count}",
    more: "Menampilkan {shown} hasil pertama. Semua pertanyaan yang cocok juga ditampilkan di bawah.",
    kind: {
      question: "Pertanyaan",
      guide: "Panduan",
    },
    empty: {
      title: "Tidak ada yang cocok dengan “{query}”.",
      body: "Coba kata yang lebih pendek atau berbeda, atau telusuri panduan di bawah.",
    },
    faqStatus: "Menampilkan {count} dari {total} pertanyaan yang cocok dengan pencarian Anda.",
    faqEmpty: "Tidak ada pertanyaan yang cocok dengan pencarian Anda.",
    showAll: "Tampilkan semua pertanyaan",
  },

  categories: {
    heading: "Telusuri menurut topik",
    items: {
      gettingStarted: { label: "Memulai", line: "Pelajari dasar-dasarnya." },
      viewer: { label: "Penampil 3D", line: "Pelajari cara menavigasi anatomi." },
      exploring: { label: "Menjelajah", line: "Temukan organ dan struktur." },
      practice: { label: "Latihan", line: "Pahami penamaan dan mengingat kembali." },
      languages: { label: "Bahasa", line: "Ganti bahasa Corpus Anda." },
      account: { label: "Akun", line: "Kelola akun Anda." },
    },
  },

  gettingStarted: {
    title: "Beberapa menit pertama Anda",
    intro: "Corpus berjalan di peramban web Anda. Tidak ada yang perlu dipasang dan tidak ada akun yang perlu dibuat.",
    steps: {
      open: {
        title: "Buka Jelajahi",
        body: "Pilih “{explore}” di navigasi utama. Jantung ditampilkan lebih dulu.",
      },
      choose: {
        title: "Pilih organ",
        body: "Pilih organ dari pustaka di samping model. Di ponsel, buka pustaka dari bagian atas layar.",
      },
      look: {
        title: "Amati dari dekat",
        body: "Seret untuk memutar model, perbesar, dan pilih titik-titiknya untuk membaca nama setiap struktur.",
      },
      test: {
        title: "Uji diri Anda",
        body: "Jika sudah siap, mulai kuis dan temukan setiap struktur berdasarkan namanya.",
      },
    },
    cta: "Buka Jelajahi",
  },

  viewer: {
    title: "Putar, perbesar, dan baca model",
    intro: "Setiap organ adalah model 3D yang bisa Anda amati dari segala sisi, dengan tetikus, layar sentuh, atau papan ketik.",
    columns: {
      action: "Tindakan",
      pointer: "Tetikus atau panel sentuh",
      touch: "Layar sentuh",
      keyboard: "Papan ketik",
    },
    controls: {
      rotate: {
        action: "Memutar model",
        pointer: "Seret di atas model",
        touch: "Seret dengan satu jari",
        keyboard: "Tombol panah kiri dan kanan",
      },
      zoom: {
        action: "Memperbesar dan memperkecil",
        pointer: "Gulir, atau gunakan alat “{zoom}”",
        touch: "Cubit dengan dua jari",
        keyboard: "Tombol plus dan minus",
      },
      read: {
        action: "Membaca struktur",
        pointer: "Klik sebuah titik",
        touch: "Ketuk sebuah titik",
        keyboard: "Pembaca layar dapat membacakan setiap struktur dari daftar di samping model.",
      },
      close: {
        action: "Menutup label",
        pointer: "Klik titik itu lagi, atau di mana saja",
        touch: "Ketuk tombol tutup pada label",
        keyboard: "Tombol Escape",
      },
    },
    keyboardNote: "Kontrol papan ketik berfungsi setelah model mendapat fokus: tekan Tab hingga model terpilih.",
    toolsTitle: "Alat penampil",
    tools: {
      rotate: "Memulai atau menghentikan putaran otomatis yang lambat. Sakelar “{autoRotate}” melakukan hal yang sama.",
      zoom: "Mendekatkan tampilan satu langkah ke model.",
      isolate: "Memudarkan alas pajangan, sehingga organ tampil sendiri.",
      section: "Memotong model untuk memperlihatkan bagian dalamnya.",
      layers: "Menampilkan model sebagai kerangka kawat, memperlihatkan jaring (mesh) penyusunnya.",
      compare: "Membandingkan peran utama dan ukuran organ dengan organ kedua.",
      reset: "Mengembalikan model ke tampilan awal dan menutup label yang sedang terbuka.",
    },
    trouble:
      "Jika model tidak muncul, peramban Anda memerlukan grafis 3D (WebGL). Perbarui peramban, pastikan akselerasi perangkat keras aktif, lalu muat ulang halaman.",
  },

  exploring: {
    title: "Organ, fakta, dan kartu belajar",
    intro: "Corpus memuat {count} organ. Masing-masing terbuka dengan model 3D di tengah dan faktanya di samping.",
    parts: {
      library: {
        title: "Pustaka organ",
        body: "Mencantumkan setiap organ beserta sistem tubuhnya. Ketik di kotak pencarian di bagian atas Jelajahi untuk menyaringnya.",
      },
      panel: {
        title: "Panel informasi",
        body: "Menyajikan ukuran, berat, letak, pasokan darah, dan fungsi organ, catatan medis, serta satu fakta yang mudah diingat.",
      },
      cards: {
        title: "Kartu belajar",
        body: "Membuka jaringan mikroskopis organ, perbandingan, animasi singkat, penyakit umum, dan letaknya di dalam tubuh.",
      },
    },
    catalogueTitle: "Buka organ secara langsung",
    catalogueLink: "Buka {organ} di Jelajahi",
    clinical:
      "Catatan klinis menunjukkan mengapa anatomi itu penting. Catatan ini bukan untuk mendiagnosis atau mengobati siapa pun. Jika Anda mengkhawatirkan kesehatan Anda, bicarakan dengan dokter.",
  },

  practice: {
    title: "Uji diri Anda pada model",
    intro: "Latihan berlangsung pada model itu sendiri. Kuis penamaan meminta Anda menemukan setiap struktur yang disebut pada organ yang sedang Anda lihat.",
    steps: {
      start: "Buka sebuah organ dan pilih “{quiz}”. Model berhenti berputar, sehingga titik-titiknya tetap diam.",
      find: "Corpus menyebut satu struktur setiap kali. Klik atau ketuk titik yang menurut Anda sesuai.",
      feedback: "Jawaban yang benar membawa Anda ke pertanyaan berikutnya. Jika meleset, Corpus menunjukkan struktur yang Anda pilih dan menandai yang benar.",
      finish: "Setiap struktur ditanyakan sekali, dengan urutan baru di setiap putaran. Di akhir, Anda akan melihat skor Anda.",
    },
    note: "Skor kuis tidak disimpan. Skor dihapus saat Anda meninggalkan halaman atau memilih organ lain.",
    exampleCaption: "Contoh pertanyaan dari kuis jantung, seperti yang muncul di atas model.",
  },

  languages: {
    title: "Membaca Corpus dalam bahasa Anda",
    intro: "Corpus tersedia dalam {count} bahasa. Di Jelajahi, nama organ, deskripsi, label struktur, dan kontrol diterjemahkan ke dalam setiap bahasa tersebut.",
    switchBody:
      "Pilih bahasa di bagian bawah halaman mana pun, atau dari menu bahasa di bagian atas Jelajahi. Anda tetap berada di halaman yang sedang dibaca.",
    rtl: "Bahasa Arab dibaca dari kanan ke kiri, dan seluruh tata letak ikut dicerminkan. Halaman yang belum diterjemahkan ditampilkan dalam bahasa Inggris.",
    listLabel: "Bahasa yang tersedia",
    current: "Bahasa saat ini",
  },

  account: {
    title: "Akun segera hadir",
    body: "Formulir masuk, daftar, dan atur ulang kata sandi sudah tersedia, tetapi akun belum ada. Formulir itu menyatakannya dengan jelas, dan apa pun yang Anda masukkan tidak dikirim.",
    saved: "Anda tidak memerlukan akun: semua yang ada di Jelajahi bisa digunakan tanpa akun. Tidak ada yang disimpan antarkunjungan.",
    cta: "Mulai menjelajah",
  },

  faqHeading: "Pertanyaan umum",
  faq: {
    whatIs: {
      q: "Apa itu Corpus?",
      a: "Corpus adalah atlas anatomi interaktif. Anda menjelajahi model 3D organ manusia, membaca nama struktur di dalamnya, dan menguji diri sambil belajar.",
    },
    exploreOrgan: {
      q: "Bagaimana cara menjelajahi sebuah organ?",
      a: "Buka Jelajahi dan pilih organ dari pustaka. Putar modelnya, pilih titik-titiknya untuk membaca setiap struktur, dan buka kartu di bawah penampil untuk belajar lebih jauh.",
    },
    rotate: {
      q: "Bagaimana cara memutar model?",
      a: "Seret model dengan tetikus atau satu jari. Dengan papan ketik, tekan Tab hingga model mendapat fokus, lalu gunakan tombol panah kiri dan kanan. Pilih “{reset}” untuk kembali ke tampilan awal.",
    },
    zoom: {
      q: "Bagaimana cara memperbesar?",
      a: "Gunakan roda gulir atau panel sentuh, cubit dengan dua jari di layar sentuh, atau pilih alat “{zoom}”. Tombol plus dan minus juga berfungsi saat model mendapat fokus.",
    },
    hotspots: {
      q: "Apa itu titik interaktif?",
      a: "Titik interaktif (hotspot) adalah titik-titik pada model. Masing-masing menandai sebuah struktur: pilih salah satu untuk melihat nama dan deskripsi singkatnya.",
    },
    isolate: {
      q: "Apa fungsi “Isolasi”?",
      a: "Alat “{isolate}” memudarkan alas pajangan sehingga organ tampil sendiri. Pilih lagi untuk memunculkan kembali alasnya.",
    },
    languages: {
      q: "Bahasa apa saja yang didukung?",
      a: "Corpus tersedia dalam {count} bahasa: {list}.",
    },
    mobile: {
      q: "Apakah Corpus bisa digunakan di ponsel?",
      a: "Bisa, di peramban web modern pada ponsel dan tablet. Seret dengan satu jari untuk memutar model, cubit untuk memperbesar, dan ketuk sebuah titik untuk membacanya.",
    },
    medical: {
      q: "Apakah Corpus merupakan saran medis?",
      a: "Bukan. Corpus untuk belajar anatomi. Corpus tidak memberikan saran medis, diagnosis, atau pengobatan. Jika Anda mengkhawatirkan kesehatan Anda, hubungi dokter. Dalam keadaan darurat, hubungi nomor darurat setempat.",
    },
    accuracy: {
      q: "Seberapa akurat anatominya?",
      a: "Model dan ilustrasi adalah representasi edukatif yang disederhanakan. Keduanya menunjukkan bentuk umum setiap organ dan letak struktur utamanya, bukan setiap detailnya. Nama struktur mengikuti Terminologia Anatomica, standar internasional.",
    },
    createAccount: {
      q: "Bagaimana cara membuat akun?",
      a: "Akun segera hadir. Formulir pendaftaran sudah tersedia, tetapi belum bisa membuat akun dan apa pun yang Anda masukkan tidak dikirim. Anda tidak memerlukan akun untuk menggunakan Jelajahi.",
    },
    resetPassword: {
      q: "Bagaimana cara mengatur ulang kata sandi?",
      a: "Akun belum ada, jadi tidak ada kata sandi yang perlu diatur ulang. Formulir atur ulang disiapkan untuk nanti; saat ini formulir itu tidak mengirim email apa pun.",
    },
  },
  faqLinks: {
    explore: "Buka Jelajahi",
    report: "Laporkan kesalahan",
  },

  contact: {
    title: "Masih butuh bantuan?",
    body: "Kami membangun Corpus dengan cermat. Jika ada yang tidak berfungsi sebagaimana mestinya, beri tahu kami.",
    cta: "Hubungi dukungan",
    ctaDescription: "Membuka pelacak isu publik proyek ini di GitHub pada tab baru.",
    note: "Laporan bersifat publik dan memerlukan akun GitHub gratis. Mohon jangan sertakan informasi pribadi atau kesehatan.",
  },
};
