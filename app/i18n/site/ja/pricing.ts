import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Corpus の料金 — 解剖学の学習",
    description:
      "Corpus なら、基本的な解剖学を 3D で無料で探索でき、アカウントも不要です。Corpus Plus と教育プランは開発中で、料金はまだ決まっていません。",
  },

  hero: {
    eyebrow: "料金",
    titleLead: "人体を探索する。",
    titleRest: "どこまで深めるかは、あなた次第。",
    lede: "基本的な解剖学は、アカウントも支払いも不要で、今すぐ無料で探索できます。Corpus Plus と教育プランはまだ開発中のため、どちらも料金は決まっていません。",
    primary: "探索をはじめる",
    secondary: "プランを比較する",
    plate: {
      label: "図版：{organ}の断面",
      alt: "層が見えるように切り取った皮膚の水彩画。表面、毛包・腺・血管を含む真皮、その下の黄色い脂肪",
      caption: "表面から、その下の脂肪まで。同じ層が 3D モデルにもラベル付けされていて、無料で探索できます。",
    },
  },

  plans: {
    title: "プラン",
    summary: "現在ご利用いただけるプランはひとつ。ほかの2つは開発中です。",
    numberLabel: "プラン {number}",
    learnMore: "{plan}の詳細",
    items: {
      free: {
        name: "無料プラン",
        tagline: "基本的な解剖学を探索する。",
        price: "無料",
        priceNote: "アカウント不要",
        description: "現時点での「探索」のすべてを、最新のブラウザがあれば誰でも利用できます。",
        listHeading: "現在含まれるもの",
        list: {
          organs: "心臓や脳から皮膚まで、{organCount} 種類の臓器を 3D で",
          viewer: "回転とズームに加え、単独表示・断面・レイヤー表示",
          hotspots: "ラベル付きの {structureCount} の構造。それぞれにラテン語の用語つき",
          cards: "組織、はたらき、疾患、比較についての学習カード",
          quiz: "モデル上で構造を探すラベルクイズ",
          languages: "{languageCount} 言語で読める臓器の説明",
        },
        cta: "探索をはじめる",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "今後の学習機能やパーソナライズ機能で、さらに深く。",
        price: "料金未定",
        priceNote: "開発中",
        description: "基本のコレクションより先へ進み、学んだ内容を振り返りたい人のために計画しています。",
        listHeading: "検討していること",
        list: {
          depth: "現在の臓器にとどまらない、人体のより多くの部位",
          study: "探索したことを練習し、記憶に定着させるためのツール",
          guidance: "3D モデルの横に表示される、ガイド付きの解説",
          progress: "すでに学んだ内容に戻るための手段",
        },
        cta: "詳しく見る",
      },
      education: {
        name: "教育プラン",
        tagline: "Corpus を教育と学習の現場へ。",
        price: "料金未定",
        priceNote: "開発中",
        description: "授業や講座に Corpus を取り入れたい教員や学校のために計画しています。",
        listHeading: "検討していること",
        list: {
          classroom: "クラス全体で同時に Corpus を使う方法",
          teaching: "解剖学の授業の準備と進行のサポート",
          practice: "学生のグループで一緒に取り組める練習",
        },
        cta: "詳しく見る",
      },
    },
    plannedNote:
      "開発中のプランは方向性を示すものであり、約束ではありません。機能、時期、料金はいずれも決まっておらず、このページで購入できるものはありません。",
  },

  comparison: {
    eyebrow: "比較",
    title: "各プランに含まれるもの。",
    lede: "無料プランの列は、現在の Corpus を示しています。ほかの2つの列は開発中のプランで、変更される可能性があります。",
    caption: "プラン別の機能。無料プランは現在提供中、Corpus Plus と教育プランは開発中です。",
    featureHeading: "機能",
    status: {
      available: "提供中",
      planned: "計画中",
      undecided: "未定",
      unavailable: "利用不可",
      otherPlan: "対象外",
    },
    rows: {
      exploration: {
        name: "3D 解剖学の探索",
        free: "回転、ズーム、単独表示、断面、レイヤー",
        plus: "無料プランのすべて",
        education: "無料プランのすべて",
      },
      library: {
        name: "臓器ライブラリ",
        free: "{organCount} 種類の臓器、検索つき",
        plus: "人体のより多くの部位",
        education: "無料プランのすべて",
      },
      structures: {
        name: "解剖学的構造",
        free: "ラテン語の用語つき、ラベル付きの {structureCount} の構造",
        plus: "無料プランのすべて",
        education: "無料プランのすべて",
      },
      learning: {
        name: "インタラクティブな学習",
        free: "組織、はたらき、疾患、比較についての学習カード",
        plus: "より深い学習ツール",
        education: "授業で使える教材",
      },
      practice: {
        name: "練習",
        free: "3D モデル上のラベルクイズ",
        plus: "練習方法の拡充",
        education: "クラス全体での練習",
      },
      guidance: {
        name: "AI ガイド",
        free: "現在の Corpus に AI 機能はありません",
        plus: "モデルの横に表示されるガイド付きの解説",
        education: "このプランでは未定",
      },
      progress: {
        name: "個人の進捗",
        free: "進捗は次の訪問まで保存されません",
        plus: "学んだ内容に戻るための手段",
        education: "このプランでは未定",
      },
      educators: {
        name: "教育者向けツール",
        free: "現在、教育者向けツールはありません",
        plus: "代わりに教育プランで計画中",
        education: "授業の準備と進行のサポート",
      },
    },
  },

  collection: {
    eyebrow: "無料プランに含まれるもの",
    title: "誰にでも開かれた、無料のコレクション。",
    lede: "各臓器に、3D モデル、図版イラスト、ラベル付きの構造があります。選ぶと「探索」で開きます。",
    plateLabel: "図版 {number}",
    structures: "ラベル付きの構造：{count}",
    openOrgan: "{organ}：「探索」で開く",
    footnote:
      "モデルとイラストは学習用に簡略化した表現であり、臨床的な参考資料ではありません。Corpus のいかなる内容も医学的な助言ではありません。",
  },

  faq: {
    eyebrow: "よくある質問",
    title: "率直な問いに、率直な答えを。",
    items: {
      account: {
        q: "アカウントは必要ですか？",
        a: "いいえ。ログインせずに「探索」を開いて、すぐに始められます。",
      },
      payments: {
        q: "Corpus Plus や教育プランの料金を今支払えますか？",
        a: "いいえ。どちらのプランもまだ提供されておらず、料金も決まっていません。また、Corpus は現在いかなる支払いも受け付けていません。プランの準備が整ったら、ここでお知らせします。",
      },
      classroom: {
        q: "今、授業で Corpus を使えますか？",
        a: "はい。「探索」は無料でアカウントも不要なので、学生は最新のブラウザで開くことができます。クラス向けや教育者向けのツールはまだ利用できません。",
      },
    },
  },

  closing: {
    eyebrow: "はじめる",
    titleLead: "どこから始めるか迷ったら。",
    titleRest: "まずは無料で解剖学を探索しよう。",
    cta: "Corpus を探索する",
    imageAlt: "顕微鏡で見た皮膚の水彩画。ピンク色の層状の表皮の下に、よりゆるやかで波打つ真皮の組織がある",
    caption: "顕微鏡で見た{organ}：{tissue}",
  },
};
