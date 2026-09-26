import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — Belajar Anatomi seperti Seorang Seniman",
    description:
      "Jelajahi tubuh manusia dalam 3D yang terperinci: putar jantung, otak, paru-paru, dan organ lainnya, lihat apa yang ada di balik permukaan, dan uji diri Anda tentang struktur di dalamnya.",
  },

  hero: {
    eyebrow: "Anatomi, dibayangkan ulang",
    title: "Belajar anatomi\nseperti seniman.",
    lede: "Jelajahi tubuh manusia melalui anatomi 3D yang terperinci, temukan struktur di balik permukaan, dan bangun pemahaman yang melampaui diagram.",
    primary: "Jelajahi tubuh",
    secondary: "Kenali Corpus",
    supportingLabel: "Apa itu Corpus",
    supporting: {
      anatomy: "Anatomi 3D",
      visual: "Belajar visual",
      languages: "Multibahasa",
    },
    plate: {
      number: "Lembar I",
      view: "Tampak anterolateral",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "Otot-otot superfisial kepala, leher, dan dada.",
      alt: "Patung dada anatomis tanpa kulit yang memperlihatkan otot-otot superfisial wajah, leher, bahu, dan dada. Kepalanya menoleh ke satu sisi dan sedikit mendongak.",
      legendLabel: "Struktur yang ditandai pada lembar ini",
      structures: {
        temporalis: "M. temporalis",
        sternocleidomastoid: "M. sternocleidomastoideus",
        deltoid: "M. deltoideus",
        pectoralisMajor: "M. pectoralis major",
      },
    },
  },

  transition: {
    number: "01",
    title: "Sanggar Anatomi",
    line: "Jelajahi tubuh sebagai sistem tiga dimensi.",
  },

  philosophy: {
    eyebrow: "Filosofi",
    title: "Anatomi tidak untuk\ndihafal secara datar.",
    lede: "Tubuh itu tiga dimensi, saling terhubung, dan selalu bergerak. Corpus mengubah anatomi menjadi sesuatu yang bisa Anda lihat, jelajahi, dan pahami.",
    steps: {
      see: {
        label: "Lihat",
        title: "Tengok di balik permukaan.",
        body: "Jelajahi struktur secara spasial, alih-alih menyederhanakan tubuh menjadi diagram datar.",
        alt: "Jantung 3D dari Jelajahi, diputar hingga tampak sisinya, dengan pembuluh-pembuluh besar menjulang dari bagian atasnya.",
        caption: "Jantung, diputar di Jelajahi.",
      },
      understand: {
        label: "Pahami",
        title: "Hubungkan bagian-bagiannya.",
        body: "Bergeraklah dari sebuah struktur ke fungsinya, hubungannya, pasokan darahnya, jaringannya, dan konteks klinisnya.",
        alt: "Ilustrasi cat air otak dilihat dari samping.",
        caption: "Yang ditampilkan Jelajahi di samping otak.",
        facets: {
          function: "Fungsi",
          bloodSupply: "Pasokan darah",
          tissue: "Jaringan",
          clinical: "Konteks klinis",
        },
      },
      remember: {
        label: "Ingat",
        title: "Jadikan pengetahuan aktif.",
        body: "Uji diri Anda dengan mengenali, menjelajah, dan mengingat kembali.",
        alt: "Ilustrasi cat air paru-paru dan trakea, dengan empat struktur yang ditandai angka.",
        caption: "Lembar penamaan statis. Di Jelajahi, Anda menemukan setiap struktur yang disebut pada model 3D.",
        blank: "Namai struktur ini",
        answers: "Jawaban",
      },
    },
  },

  collection: {
    eyebrow: "Koleksi",
    title: "Mulailah dari bagian tubuh mana pun.",
    lede: "Jelajahi struktur yang menjadikan kita manusia — dari irama jantung hingga arsitektur otak.",
    explore: "Jelajahi",
    lines: {
      heart: "Pompa berotot di pusat sistem peredaran darah.",
      brain: "Pusat kendali sistem saraf.",
      lungs: "Organ tempat oksigen masuk ke darah dan karbon dioksida keluar darinya.",
      liver: "Pusat metabolisme dengan ratusan fungsi penting.",
      kidneys: "Penyaring yang mengatur komposisi lingkungan internal tubuh.",
      eyeball: "Organ indra yang mengubah cahaya menjadi informasi visual.",
    },
    more: "Juga ada di Jelajahi: {organs}.",
    note: "Ilustrasi dan model 3D adalah representasi edukatif yang disederhanakan.",
  },

  explore: {
    title: "Jangan hanya melihat anatomi.\nJelajahilah.",
    lede: "Putar. Isolasi. Ikuti strukturnya. Lihat bagaimana semuanya terhubung.",
    cta: "Buka atlas anatomi",
    still: "Cuplikan dari Jelajahi",
    alt: "Jantung 3D di Jelajahi, dilihat dari depan, dengan titik-titik yang menandai struktur yang bisa dipilih.",
    caption: "Setiap titik pada model adalah struktur yang bisa Anda pilih untuk melihat nama dan perannya.",
    controlsLabel: "Di penampil",
  },

  features: {
    eyebrow: "Di dalam penampil",
    title: "Setiap sudut spesimen.",
    items: {
      rotate: {
        label: "Putar",
        line: "Lihat struktur dari segala sudut.",
        body: "Seret untuk memutar model, dan perbesar bagian yang sedang Anda pelajari.",
        alt: "Jantung 3D diputar hingga tampak permukaan belakangnya.",
      },
      isolate: {
        label: "Isolasi",
        line: "Fokus pada yang penting.",
        body: "Singkirkan sekelilingnya dan pelajari satu organ secara tersendiri.",
        alt: "Mata 3D melayang sendiri, dengan saraf optik keluar dari bagian belakangnya.",
      },
      section: {
        label: "Potongan melintang",
        line: "Pahami apa yang ada di balik permukaan.",
        body: "Lewatkan bidang potong melalui model dan baca bentuknya dari samping.",
        alt: "Jantung 3D terbelah dua oleh bidang potong.",
      },
      compare: {
        label: "Bandingkan",
        line: "Lihat anatomi melalui hubungannya.",
        body: "Letakkan satu organ di samping organ lain untuk membandingkan peran dan skalanya.",
        alt: "Otak dan jantung 3D ditampilkan berdampingan.",
      },
    },
    note: "Cuplikan diambil dari penampil 3D di Jelajahi.",
  },

  story: {
    title: "Tubuh adalah sebuah sistem,\nbukan kumpulan diagram.",
    body: "Corpus membantu Anda beralih dari organ satu per satu ke hubungan-hubungan yang membuat tubuh bekerja.",
    alt: "Paru-paru dan jantung 3D disusun bersama seperti letaknya di dalam dada, dengan label trakea, kedua paru, jantung, dan aorta.",
    caption: "Jantung dan paru-paru, disusun dari model-model di Jelajahi. Posisinya disederhanakan.",
    legendLabel: "Struktur yang diberi label dalam komposisi ini",
  },

  practice: {
    eyebrow: "Mengingat aktif",
    title: "Lihatlah.\nLalu buktikan Anda tahu.",
    lede: "Ubah penjelajahan menjadi latihan mengingat aktif lewat tantangan penamaan dan pengenalan anatomi.",
    cta: "Uji diri Anda",
    identify: "Kenali",
    alt: "Otak 3D dari Jelajahi dengan empat struktur yang ditandai angka 1 sampai 4.",
    caption: "Cuplikan kuis penamaan di Jelajahi, tempat Anda menjawab dengan memilih struktur pada model.",
  },

  ai: {
    eyebrow: "Berikutnya",
    title: "Pemandu untuk pertanyaan\nyang tak terjawab diagram.",
    lede: "Corpus sedang dirancang bersama pemandu anatomi berbasis AI yang dapat menjelaskan struktur, menghubungkan konsep, memandu penjelajahan, dan membantu Anda belajar lewat percakapan.",
    exampleLabel: "Contoh percakapan",
    you: "Anda",
    corpus: "Corpus",
    question: "Mengapa bilik kiri lebih tebal daripada bilik kanan?",
    answer:
      "Bilik kiri memompa darah ke peredaran darah sistemik, sehingga harus menghasilkan tekanan yang jauh lebih tinggi daripada bilik kanan.",
    status: "Sedang dikembangkan",
    disclaimer: "Contoh tertulis, bukan asisten yang aktif. Belum ada pemandu yang bisa diajak bicara.",
  },

  languages: {
    eyebrow: "12 bahasa",
    title: "Anatomi dalam bahasa\npikiran Anda.",
    lede: "Corpus dibuat untuk pelajar di seluruh dunia, dengan antarmuka multibahasa dan kosakata anatomi bersama yang berakar pada terminologi Latin.",
    wallLabel: "Corpus dalam dua belas bahasa",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "Bahasa Arab dibaca dari kanan ke kiri, dan antarmukanya ikut dicerminkan.",
    latinNote: "Nama Latinnya sama dalam setiap bahasa.",
  },

  rigor: {
    title: "Cukup indah untuk dijelajahi.\nCukup presisi untuk dipercaya.",
    lede: "Corpus memadukan penceritaan visual dengan terminologi anatomi, data terstruktur, dan konten edukatif yang berlandaskan ilmu kedokteran.",
    pillars: {
      accuracy: {
        title: "Akurasi anatomi",
        body: "Struktur berlandaskan terminologi anatomi yang baku.",
      },
      knowledge: {
        title: "Pengetahuan terstruktur",
        body: "Setiap struktur terhubung dengan informasi kontekstual.",
      },
      clarity: {
        title: "Kejelasan visual",
        body: "Anatomi yang rumit disajikan tanpa kerumitan yang tak perlu.",
      },
    },
    entry: {
      label: "Sebuah struktur di Corpus",
      term: "Terminologia Anatomica",
      name: "Nama",
      organ: "Organ",
      role: "Peran",
    },
    note: "Corpus untuk pendidikan. Bukan saran medis.",
  },

  audience: {
    eyebrow: "Dibuat untuk yang ingin tahu",
    title: "Satu tubuh.\nBanyak cara mempelajarinya.",
    groups: {
      students: {
        title: "Pelajar",
        body: "Bangun pemahaman spasial alih-alih menghafal label yang terpisah-pisah.",
        cta: "Jelajahi sebagai pelajar",
      },
      educators: {
        title: "Pendidik",
        body: "Hadirkan anatomi di kelas melalui penjelajahan visual yang interaktif.",
        cta: "Untuk pendidik",
      },
      curious: {
        title: "Yang ingin tahu",
        body: "Jelajahi tubuh manusia semata karena ia salah satu hal paling menakjubkan yang pernah ada.",
        cta: "Mulai menjelajah",
      },
    },
  },

  closing: {
    title: "Tubuh adalah sebuah mahakarya.",
    line: "Belajarlah melihatnya.",
    cta: "Jelajahi tubuh",
  },
};
