import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: { title: "Masuk", description: "Masuk ke Corpus. Akun segera hadir; Jelajahi bisa digunakan tanpa akun." },
    signUp: {
      title: "Buat akun",
      description: "Buat akun Corpus. Akun segera hadir; Jelajahi bisa digunakan tanpa akun.",
    },
    forgotPassword: {
      title: "Atur ulang kata sandi",
      description: "Atur ulang kata sandi Corpus Anda. Akun segera hadir; Jelajahi bisa digunakan tanpa akun.",
    },
  },

  shell: {
    back: "Kembali ke situs",
    disclaimer: "Corpus untuk belajar anatomi. Bukan saran medis.",
    helpLink: "Bantuan",
  },

  notice: {
    title: "Akun segera hadir.",
    body: "Anda tidak memerlukannya untuk belajar. Semua yang ada di Jelajahi bisa digunakan tanpa akun.",
    action: "Buka Jelajahi",
  },

  fields: {
    name: { label: "Nama" },
    email: { label: "Alamat email" },
    password: { label: "Kata sandi" },
    newPassword: { label: "Kata sandi", hint: "Minimal {min} karakter." },
    confirmPassword: { label: "Konfirmasi kata sandi" },
  },

  passwordToggle: {
    show: "Tampilkan",
    hide: "Sembunyikan",
    showLabel: "Tampilkan kata sandi",
    hideLabel: "Sembunyikan kata sandi",
  },

  errors: {
    summary: "Beberapa isian perlu diperbaiki. Periksa pesan di bawah setiap kolom.",
    nameRequired: "Masukkan nama Anda.",
    emailRequired: "Masukkan alamat email Anda.",
    emailInvalid: "Masukkan alamat email dengan format name@example.com.",
    passwordRequired: "Masukkan kata sandi Anda.",
    passwordTooShort: "Gunakan minimal {min} karakter.",
    confirmRequired: "Masukkan kata sandi Anda sekali lagi.",
    confirmMismatch: "Kedua kata sandi tidak cocok.",
  },

  signIn: {
    eyebrow: "Masuk",
    title: "Selamat datang kembali.",
    lede: "Lanjutkan menjelajahi tubuh manusia.",
    submit: "Masuk",
    busy: "Sedang masuk…",
    forgot: "Lupa kata sandi?",
    switchPrompt: "Baru di Corpus?",
    switchAction: "Buat akun",
    unavailable: {
      title: "Fitur masuk belum tersedia.",
      body: "Akun Corpus masih dibangun, jadi tidak ada yang dikirim atau disimpan. Kata sandi Anda telah dihapus dari formulir.",
    },
  },

  signUp: {
    eyebrow: "Buat akun",
    title: "Mulai menjelajah.",
    lede: "Buat akun Corpus Anda dan bangun kebiasaan belajar anatomi.",
    submit: "Buat akun",
    busy: "Membuat akun…",
    switchPrompt: "Sudah punya akun?",
    switchAction: "Masuk",
    unavailable: {
      title: "Akun belum bisa dibuat.",
      body: "Akun Corpus masih dibangun, jadi tidak ada yang dikirim atau disimpan. Kata sandi Anda telah dihapus dari formulir.",
    },
  },

  forgotPassword: {
    eyebrow: "Lupa kata sandi",
    title: "Atur ulang kata sandi Anda.",
    lede: "Masukkan email Anda dan kami akan membantu Anda kembali masuk ke Corpus.",
    submit: "Kirim tautan atur ulang",
    busy: "Mengirim…",
    switchPrompt: "Sudah ingat?",
    switchAction: "Kembali ke halaman masuk",
    unavailable: {
      title: "Atur ulang kata sandi belum tersedia.",
      body: "Akun Corpus masih dibangun, jadi belum ada kata sandi untuk diatur ulang. Tidak ada email yang dikirim dan tidak ada yang disimpan.",
    },
  },

  status: {
    exploreAction: "Lanjut ke Jelajahi",
  },

  plates: {
    label: "Lembar anatomi",
    marked: "Ditandai: {structure}",
    note: "Ilustrasi edukatif yang disederhanakan.",
    signIn: {
      number: "Lembar I",
      view: "Tampak luar",
      alt: "Studi cat air jantung manusia, dengan aorta dan pembuluh-pembuluh besar menjulang di atasnya",
    },
    signUp: {
      number: "Lembar II",
      view: "Tampak samping",
      alt: "Studi cat air otak manusia dilihat dari samping, dengan otak kecil dan batang otak di bawahnya",
    },
    forgotPassword: {
      number: "Lembar III",
      view: "Tampak depan",
      alt: "Studi cat air paru-paru, dengan trakea yang bercabang menjadi saluran-saluran napas",
    },
  },
};
