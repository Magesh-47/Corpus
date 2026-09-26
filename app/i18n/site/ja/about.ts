import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "Corpus について — 解剖アトリエ",
    description:
      "Corpus が解剖学を視覚の言語として扱う理由。3D の臓器、彩色図版、ラテン語の用語で、見て、手を動かし、思い出しながら人体を学ぶ。{count} 言語に対応。",
  },

  plate: "図版 {number}",

  hero: {
    eyebrow: "Corpus について",
    titleFirst: "解剖学は、視覚の言語だ。",
    titleSecond: "それを学ぶ場所をつくった。",
    contents: "目次",
    lede: "Corpus は解剖アトリエです。3D の臓器、彩色図版、正確なラテン語名を、じっくり見ることで人体を学べるように配置しています。",
    alt: "左側から見たヒトの脳の水彩画。下に小脳と脳幹が見える。",
  },

  depth: {
    label: "奥行き",
    titleFirst: "人体は、平面の図で学ぶには",
    titleSecond: "あまりにも複雑だ。",
    intro: "何世代にもわたり、解剖学は図解、アトラス、一覧、ラベルによって教えられてきました。",
    valuable: "それらは価値ある道具です。",
    turn: "けれども、人体は平面ではありません。",
    truths: {
      overlap: "構造は重なり合う。",
      connect: "器官系はつながり合う。",
      space: "臓器は空間を占める。",
      form: "形がはたらきを変える。",
    },
    close: "Corpus は、その現実を土台につくられています。",
    caption: "体のなかで、そして臓器全体として。",
    bodyAlt: "胸の中に左右の肺を描いた人体の水彩画。拡大した円の中に、房状に集まった肺胞が見える。",
    organAlt: "左右の肺の水彩画。気管が枝分かれする気道へと分かれている。",
  },

  atelier: {
    label: "名前",
    title: "解剖アトリエ",
    meaning: "アトリエとは、工房やスタジオのこと。",
    body: "Corpus は解剖学を、ただ読むものではなく、手を動かして取り組むものとして扱います。",
    verbsTitle: "アトリエでは",
    verbs: {
      observe: { verb: "観察する。", note: "モデルを回し、近づいて見る。" },
      manipulate: { verb: "操作する。", note: "臓器を単独表示し、断面で切る。" },
      compare: { verb: "比較する。", note: "臓器を並べて比べる。" },
      question: { verb: "問いかける。", note: "構造を選んで、その名前と役割を見る。" },
      practice: { verb: "練習する。", note: "問われた構造を探し、自分で確かめる。" },
    },
    studioAlt:
      "描かれた作業台。心臓の鉛筆スケッチがピンで留められ、回転台には彩色された一対の腎臓が置かれ、引き出し線とラテン語名でラベルが付いている。",
  },

  principles: {
    label: "原則",
    lines: {
      science: "まず、科学。",
      story: "次に、物語。",
      visuals: "いつも、視覚。",
    },
    columns: {
      scientific: {
        label: "科学的",
        title: "解剖学的な構造と用語に基づく。",
        body: "構造は、解剖学用語の国際基準である Terminologia Anatomica に従って命名しています。",
      },
      visual: {
        label: "視覚的",
        title: "空間的な理解を軸に設計。",
        body: "臓器は、印刷された一枚の図ではなく、回し、断面を見て、比較できるモデルです。",
      },
      educational: {
        label: "教育的",
        title: "能動的な探索と想起を軸に構築。",
        body: "モデル上の構造を自分で探し、正解かどうかをすぐに確かめられます。",
      },
    },
    note: "モデルとイラストは、学習用に簡略化した表現です。Corpus は学習のためのものであり、医学的な助言ではありません。",
  },

  world: {
    label: "言語",
    title: "世界のために。",
    body: {
      languages:
        "「探索」の解剖学コンテンツは、臓器の名前や説明から構造のラベルひとつひとつまで、{count} 言語で利用できます。",
      scripts:
        "アラビア語では、レイアウト全体が右から左へと流れます。中国語、日本語、韓国語は、それぞれの文字のためにつくられた書体で組まれています。",
      latin:
        "どの言語の下にも、同じラテン語の用語があります。カイロの学生とソウルの学生が、それぞれどう呼んでいても、同じ構造を指し示せるのはそのためです。",
      honest:
        "翻訳は丁寧さを要する、終わりのない作業です。改善を続けるあいだ、言語によって読みやすさに差が出ることがあります。",
    },
    namesTitle: "ひとつの構造、{count} の名前",
    namesCaption: "「探索」が各言語で呼ぶ心臓の名前。ラテン語の用語は変わりません。",
  },

  closing: {
    titleFirst: "人体を見るための、",
    titleSecond: "よりよい方法をつくっている。",
    cta: "Corpus を探索する",
  },
};
