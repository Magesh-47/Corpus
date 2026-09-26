import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "Tentang Corpus — Sanggar Anatomi",
    description:
      "Mengapa Corpus memperlakukan anatomi sebagai bahasa visual: organ 3D, lembar lukisan, dan terminologi Latin, dibuat untuk mempelajari tubuh dengan mengamati, mengutak-atik, dan mengingat kembali, dalam {count} bahasa.",
  },

  plate: "Lembar {number}",

  hero: {
    eyebrow: "Tentang Corpus",
    titleFirst: "Anatomi adalah bahasa visual.",
    titleSecond: "Kami membangun tempat untuk mempelajarinya.",
    contents: "Daftar isi",
    lede: "Corpus adalah sanggar anatomi: organ 3D, lembar lukisan, dan nama Latin yang presisi, disusun agar Anda dapat mempelajari tubuh dengan mengamatinya dari dekat.",
    alt: "Lukisan cat air otak manusia dilihat dari sisi kiri, dengan otak kecil dan batang otak di bawahnya.",
  },

  depth: {
    label: "Kedalaman",
    titleFirst: "Tubuh terlalu rumit",
    titleSecond: "untuk dipelajari sebagai gambar datar.",
    intro: "Selama beberapa generasi, anatomi diajarkan melalui diagram, atlas, daftar, dan label.",
    valuable: "Alat-alat itu berharga.",
    turn: "Namun tubuh tidak datar.",
    truths: {
      overlap: "Struktur saling tumpang tindih.",
      connect: "Sistem saling terhubung.",
      space: "Organ menempati ruang.",
      form: "Bentuk mengubah fungsi.",
    },
    close: "Corpus dibangun di atas kenyataan itu.",
    caption: "Di dalam tubuh, dan sebagai organ utuh.",
    bodyAlt: "Figur tubuh manusia dalam cat air dengan kedua paru-paru tergambar di dada, dan lingkaran perbesaran yang memperlihatkan gugusan kantong udara.",
    organAlt: "Lukisan cat air kedua paru-paru, dengan trakea yang bercabang menjadi saluran-saluran napas.",
  },

  atelier: {
    label: "Nama",
    title: "Sanggar Anatomi",
    meaning: "Sanggar, atau atelier, adalah ruang kerja dan studio seorang seniman.",
    body: "Corpus memperlakukan anatomi sebagai sesuatu yang Anda kerjakan, bukan sekadar sesuatu yang Anda baca.",
    verbsTitle: "Di dalam sanggar",
    verbs: {
      observe: { verb: "Anda mengamati.", note: "Putar model dan dekati." },
      manipulate: { verb: "Anda membedah.", note: "Isolasi sebuah organ atau buat potongan melintang." },
      compare: { verb: "Anda membandingkan.", note: "Letakkan satu organ di samping organ lain." },
      question: { verb: "Anda bertanya.", note: "Pilih sebuah struktur untuk melihat nama dan perannya." },
      practice: { verb: "Anda berlatih.", note: "Temukan setiap struktur saat diminta, lalu periksa diri Anda." },
    },
    studioAlt:
      "Meja studi yang digambar: sketsa pensil jantung tersemat di atasnya, dan sepasang ginjal yang dilukis di atas meja putar, diberi label dengan garis penunjuk dan nama Latinnya.",
  },

  principles: {
    label: "Prinsip",
    lines: {
      science: "Sains lebih dulu.",
      story: "Cerita kemudian.",
      visuals: "Visual selalu.",
    },
    columns: {
      scientific: {
        label: "Ilmiah",
        title: "Berlandaskan struktur dan terminologi anatomi.",
        body: "Struktur diberi nama menurut Terminologia Anatomica, standar internasional untuk istilah anatomi.",
      },
      visual: {
        label: "Visual",
        title: "Dirancang untuk pemahaman spasial.",
        body: "Organ adalah model yang bisa Anda putar, potong, dan bandingkan, bukan sekadar satu tampilan cetak.",
      },
      educational: {
        label: "Edukatif",
        title: "Dibangun di atas penjelajahan aktif dan mengingat kembali.",
        body: "Anda sendiri yang menemukan struktur pada model, dan langsung tahu apakah Anda benar.",
      },
    },
    note: "Model dan ilustrasi adalah representasi edukatif yang disederhanakan. Corpus untuk belajar, bukan saran medis.",
  },

  world: {
    label: "Bahasa",
    title: "Dibangun untuk dunia.",
    body: {
      languages:
        "Anatomi di Jelajahi, dari nama dan deskripsi organ hingga setiap label struktur, tersedia dalam {count} bahasa.",
      scripts:
        "Dalam bahasa Arab, seluruh tata letak dibaca dari kanan ke kiri. Bahasa Tionghoa, Jepang, dan Korea ditata dengan huruf yang dibuat khusus untuk aksaranya.",
      latin:
        "Di bawah setiap bahasa ada istilah Latin yang sama. Istilah itulah yang membuat mahasiswa di Kairo dan mahasiswa di Seoul menunjuk struktur yang sama, apa pun sebutan mereka untuknya.",
      honest:
        "Penerjemahan adalah pekerjaan cermat yang terus berjalan, dan beberapa bahasa akan terasa lebih alami daripada yang lain selama kami menyempurnakannya.",
    },
    namesTitle: "Satu struktur, {count} nama",
    namesCaption: "Jantung, sebagaimana Jelajahi menamainya dalam setiap bahasa. Istilah Latinnya tetap sama.",
  },

  closing: {
    titleFirst: "Kami sedang membangun cara yang lebih baik",
    titleSecond: "untuk melihat tubuh manusia.",
    cta: "Jelajahi Corpus",
  },
};
