import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: {
      title: "ログイン",
      description: "Corpus にログイン。アカウントは近日公開予定です。「探索」はアカウントなしで使えます。",
    },
    signUp: {
      title: "アカウントを作成",
      description: "Corpus のアカウントを作成。アカウントは近日公開予定です。「探索」はアカウントなしで使えます。",
    },
    forgotPassword: {
      title: "パスワードの再設定",
      description: "Corpus のパスワードを再設定。アカウントは近日公開予定です。「探索」はアカウントなしで使えます。",
    },
  },

  shell: {
    back: "サイトに戻る",
    disclaimer: "Corpus は解剖学を学ぶためのものであり、医学的な助言ではありません。",
    helpLink: "ヘルプ",
  },

  notice: {
    title: "アカウントは近日公開予定です。",
    body: "学ぶためにアカウントは必要ありません。「探索」のすべての機能はアカウントなしで使えます。",
    action: "「探索」を開く",
  },

  fields: {
    name: { label: "名前" },
    email: { label: "メールアドレス" },
    password: { label: "パスワード" },
    newPassword: { label: "パスワード", hint: "{min} 文字以上。" },
    confirmPassword: { label: "パスワード（確認）" },
  },

  passwordToggle: {
    show: "表示",
    hide: "隠す",
    showLabel: "パスワードを表示",
    hideLabel: "パスワードを隠す",
  },

  errors: {
    summary: "確認が必要な項目があります。各項目の下のメッセージをご確認ください。",
    nameRequired: "名前を入力してください。",
    emailRequired: "メールアドレスを入力してください。",
    emailInvalid: "name@example.com の形式でメールアドレスを入力してください。",
    passwordRequired: "パスワードを入力してください。",
    passwordTooShort: "{min} 文字以上で入力してください。",
    confirmRequired: "パスワードをもう一度入力してください。",
    confirmMismatch: "2つのパスワードが一致しません。",
  },

  signIn: {
    eyebrow: "ログイン",
    title: "おかえりなさい。",
    lede: "人体の探索を続けましょう。",
    submit: "ログイン",
    busy: "ログイン中…",
    forgot: "パスワードをお忘れですか？",
    switchPrompt: "Corpus は初めてですか？",
    switchAction: "アカウントを作成",
    unavailable: {
      title: "ログインはまだご利用いただけません。",
      body: "Corpus のアカウントはまだ開発中のため、何も送信・保存されていません。入力したパスワードはフォームから消去されました。",
    },
  },

  signUp: {
    eyebrow: "アカウントを作成",
    title: "探索をはじめよう。",
    lede: "Corpus のアカウントを作成して、あなたの解剖学の学びを積み重ねましょう。",
    submit: "アカウントを作成",
    busy: "作成中…",
    switchPrompt: "すでにアカウントをお持ちですか？",
    switchAction: "ログイン",
    unavailable: {
      title: "アカウントはまだ作成できません。",
      body: "Corpus のアカウントはまだ開発中のため、何も送信・保存されていません。入力したパスワードはフォームから消去されました。",
    },
  },

  forgotPassword: {
    eyebrow: "パスワードをお忘れの方",
    title: "パスワードを再設定する。",
    lede: "メールアドレスを入力してください。Corpus に戻れるようお手伝いします。",
    submit: "再設定リンクを送信",
    busy: "送信中…",
    switchPrompt: "思い出しましたか？",
    switchAction: "ログインに戻る",
    unavailable: {
      title: "パスワードの再設定はまだご利用いただけません。",
      body: "Corpus のアカウントはまだ開発中のため、再設定するパスワードはありません。メールは送信されておらず、何も保存されていません。",
    },
  },

  status: {
    exploreAction: "「探索」へ進む",
  },

  plates: {
    label: "解剖図版",
    marked: "示した構造：{structure}",
    note: "学習用に簡略化したイラストです。",
    signIn: {
      number: "図版 I",
      view: "外観",
      alt: "ヒトの心臓の水彩スケッチ。上方に大動脈と大血管が立ち上がっている",
    },
    signUp: {
      number: "図版 II",
      view: "側面観",
      alt: "横から見たヒトの脳の水彩スケッチ。下に小脳と脳幹がある",
    },
    forgotPassword: {
      number: "図版 III",
      view: "前面観",
      alt: "肺の水彩スケッチ。気管が枝分かれする気道へと分かれている",
    },
  },
};
