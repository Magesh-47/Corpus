import type { SiteDictionary } from "..";

export const howItWorks: SiteDictionary["howItWorks"] = {
  meta: {
    title: "Cara Kerja Corpus — Jelajahi Anatomi dalam 3D",
    description:
      "Pilih organ, putar model 3D-nya, baca letak, pasokan darah, dan fungsinya, lalu uji diri Anda dengan menemukan struktur-strukturnya. Beginilah cara belajar di Corpus.",
  },

  hero: {
    eyebrow: "Cara kerja",
    title: {
      see: "Lihat.",
      explore: "Jelajahi.",
      understand: "Pahami.",
      remember: "Ingat.",
    },
    lede: "Corpus mengubah anatomi menjadi pengalaman visual yang aktif.",
    body: "Lima langkah, satu organ setiap kali. Empat langkah pertama sudah bisa dilakukan di Jelajahi saat ini. Langkah kelima masih akan datang.",
    contentsLabel: "Lima langkah",
  },

  steps: {
    see: {
      name: "Lihat",
      title: "Mulailah dari keseluruhan.",
      line: "Pilih organ dan lihat bentuknya sebelum memikirkan labelnya.",
      body:
        "Jelajahi dibuka dengan pustaka sembilan organ, dari jantung dan otak hingga pankreas dan kulit. Pilih satu, dan organ itu tampil utuh. Struktur-strukturnya ditandai dengan titik-titik kecil, dan namanya menunggu sampai Anda memintanya.",
      plateLabel: "Lembar I",
      caption: "{organ}, dilihat utuh. Salah satu dari sembilan organ di pustaka Jelajahi.",
      alt: "Studi cat air jantung manusia dilihat dari depan, dengan aorta melengkung di atasnya",
    },
    explore: {
      name: "Jelajahi",
      title: "Bergeraklah menembus strukturnya.",
      line: "Putar, perbesar, isolasi, dan amati hubungan anatomisnya.",
      body:
        "Setiap organ adalah model 3D. Seret untuk memutarnya, gulir atau cubit untuk mendekat, dan pilih sebuah titik untuk menamai struktur di bawahnya. Isolasi, potongan melintang, dan lapisan masing-masing mengubah cara Anda melihat bentuk yang sama.",
      viewerLabel: "Penampil 3D",
      controlsLabel: "Kontrol penampil",
      controls: {
        rotate: { name: "Putar", note: "Seret" },
        zoom: { name: "Perbesar", note: "Gulir atau cubit" },
        isolate: { name: "Isolasi", note: "Hanya organnya" },
        section: { name: "Potongan melintang", note: "Belah dan lihat" },
      },
      caption: "Cuplikan dari penampil 3D di Jelajahi. Label kontrolnya digambar di sini sebagai ilustrasi.",
      alt: "Model 3D jantung di penampil Jelajahi, dilihat dari depan di atas alas, dengan titik-titik kecil berwarna yang menandai struktur bernama",
    },
    understand: {
      name: "Pahami",
      title: "Hubungkan struktur dengan fungsi.",
      line: "Jelajahi pasokan darah, letak, fungsi, jaringan, dan konteks klinis.",
      body:
        "Di samping model, panel informasi menjelaskan apa organ itu dan apa yang dilakukannya. Kartu belajar membawa Anda lebih jauh: jaringan di bawah mikroskop, perbandingan dengan organ lain, tempat ia bekerja di dalam tubuh, dan penyakit yang sering menyerangnya.",
      panelLabel: "Panel informasi",
      facts: {
        size: "Ukuran",
        location: "Letak",
        bloodSupply: "Pasokan darah",
        function: "Fungsi",
        tissue: "Jaringan",
      },
      conditionsLabel: "Konteks klinis",
      caption: "{organ}: fakta dari panel informasi dan kartu belajar di Jelajahi.",
      organAlt: "Studi cat air paru-paru, dengan trakea yang bercabang menjadi dua bronkus utama",
      tissueAlt: "Tampilan mikroskop berbentuk lingkaran yang memperlihatkan alveolus, kantong-kantong udara kecil di paru-paru",
    },
    practice: {
      name: "Latihan",
      title: "Uji apa yang baru saja Anda jelajahi.",
      line: "Kenali struktur dan latih ingatan secara aktif.",
      body:
        "Mulai kuis penamaan, dan model akan diam. Corpus menyebut sebuah struktur dan Anda menemukannya pada model. Jika meleset, Anda akan ditunjukkan letak jawaban yang benar, dan setiap putaran diakhiri dengan skor Anda serta kesempatan mencoba lagi dengan urutan baru.",
      prompt: "Temukan",
      hint: "Pilih titik yang sesuai",
      caption: "Ilustrasi kuis penamaan di Jelajahi, tempat Anda memilih titik-titik pada model 3D itu sendiri.",
      alt: "Studi cat air otak dengan empat struktur bernomor dan label kosong, serta perintah untuk menemukan {structure}",
    },
    remember: {
      name: "Ingat",
      title: "Kembali ke hal yang penting.",
      line:
        "Pengalaman Corpus di masa depan akan membantu Anda meninjau kembali struktur, percakapan, dan bagian yang perlu lebih diperhatikan.",
      body:
        "Bagian ini belum ada. Corpus tidak menyimpan apa yang telah Anda pelajari, jadi setiap kunjungan ke Jelajahi dimulai dari awal. Untuk sementara, mengulang kuis penamaan adalah cara untuk kembali ke sebuah struktur.",
      futureLabel: "Direncanakan",
      future: {
        structures: "Struktur untuk ditinjau kembali",
        conversations: "Percakapan untuk dilanjutkan",
        attention: "Bagian yang perlu lebih diperhatikan",
      },
    },
  },

  closing: {
    titleStart: "Belajar anatomi seharusnya terasa",
    titleEnd: "seperti menemukan sesuatu.",
    action: "Masuki sanggar anatomi",
  },
};
