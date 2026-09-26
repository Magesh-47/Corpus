import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — 芸術家のように解剖学を学ぶ",
    description:
      "精緻な 3D で人体を探索。心臓、脳、肺などの臓器を回転させ、表面の奥をのぞき、その内部の構造について理解度をチェックできます。",
  },

  hero: {
    eyebrow: "解剖学を、新たな視点で",
    title: "芸術家のように\n解剖学を学ぶ。",
    lede: "精緻な 3D 解剖モデルで人体を探索し、表面の奥にある構造を見つけ、図解を超えた理解を築きましょう。",
    primary: "人体を探索する",
    secondary: "Corpus を知る",
    supportingLabel: "Corpus とは",
    supporting: {
      anatomy: "3D 解剖学",
      visual: "ビジュアル学習",
      languages: "多言語対応",
    },
    plate: {
      number: "図版 I",
      view: "前外側面観",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "頭部・頸部・胸部の浅層筋。",
      alt: "皮膚を取り除いた解剖学的な胸像。顔、首、肩、胸の浅層筋が見える。頭は片側に向き、やや上を仰いでいる。",
      legendLabel: "この図版に示した構造",
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
    title: "解剖アトリエ",
    line: "人体を、三次元のシステムとして探索する。",
  },

  philosophy: {
    eyebrow: "理念",
    title: "解剖学は、\n平面で覚える\nものではない。",
    lede: "人体は立体的で、互いにつながり合い、絶えず動いています。Corpus は解剖学を、見て、探索して、理解できるものに変えます。",
    steps: {
      see: {
        label: "見る",
        title: "表面の奥をのぞく。",
        body: "人体を平面の図に押し込めるのではなく、構造を空間のなかで探索します。",
        alt: "「探索」の 3D 心臓。側面が見えるように回転させ、上部から大血管が立ち上がっている。",
        caption: "「探索」で回転させた心臓。",
      },
      understand: {
        label: "理解する",
        title: "点と点をつなぐ。",
        body: "ひとつの構造から、そのはたらき、位置関係、血液供給、組織、臨床的背景へと理解を広げます。",
        alt: "横から見た脳の水彩イラスト。",
        caption: "「探索」で脳とともに表示される内容。",
        facets: {
          function: "はたらき",
          bloodSupply: "血液供給",
          tissue: "組織",
          clinical: "臨床的背景",
        },
      },
      remember: {
        label: "覚える",
        title: "知識を、使えるものに。",
        body: "識別し、探索し、思い出すことで、自分の理解を確かめます。",
        alt: "肺と気管の水彩イラスト。4つの構造に番号が付いている。",
        caption: "静止したラベリング用のシート。「探索」では、名前を示された構造を 3D モデル上で探します。",
        blank: "この構造の名前は？",
        answers: "答え",
      },
    },
  },

  collection: {
    eyebrow: "コレクション",
    title: "人体の、\nどこからでも。",
    lede: "私たちを人間たらしめている構造を探索しましょう。心臓のリズムから、脳の建築まで。",
    explore: "探索",
    lines: {
      heart: "循環器系の中心にある、筋肉のポンプ。",
      brain: "神経系の司令塔。",
      lungs: "酸素が血液に入り、二酸化炭素が血液から出ていく器官。",
      liver: "数百もの重要なはたらきを担う、代謝の要。",
      kidneys: "体内環境の組成を調整するフィルター。",
      eyeball: "光を視覚情報に変える感覚器官。",
    },
    more: "「探索」にはほかに、{organs}もあります。",
    note: "イラストと 3D モデルは、学習用に簡略化した表現です。",
  },

  explore: {
    title: "解剖学は、\n見るだけでなく\n探索するもの。",
    lede: "回転させる。単独表示する。構造をたどる。すべてのつながりを見る。",
    cta: "解剖アトラスを開く",
    still: "「探索」の静止画",
    alt: "「探索」の 3D 心臓を正面から見たところ。選択できる構造が点で示されている。",
    caption: "モデル上の点は、それぞれがひとつの構造です。選ぶと、その名前と役割が表示されます。",
    controlsLabel: "ビューアの操作",
  },

  features: {
    eyebrow: "ビューアの中で",
    title: "標本を、\nあらゆる角度から。",
    items: {
      rotate: {
        label: "回転",
        line: "あらゆる角度から構造を見る。",
        body: "ドラッグしてモデルを回し、学んでいる部分をズームで拡大します。",
        alt: "背面が見えるように回転させた 3D 心臓。",
      },
      isolate: {
        label: "単独表示",
        line: "大切なものに集中する。",
        body: "周囲をいったん脇に置き、ひとつの臓器だけをじっくり観察します。",
        alt: "単独で浮かぶ 3D の眼。後ろから視神経がのびている。",
      },
      section: {
        label: "断面",
        line: "表面の奥にあるものを理解する。",
        body: "断面をモデルに通して、その形を切り口から読み取ります。",
        alt: "断面で半分に切られた 3D 心臓。",
      },
      compare: {
        label: "比較",
        line: "関係のなかで解剖学を見る。",
        body: "臓器を並べて、役割と大きさを比べます。",
        alt: "並べて表示した 3D の脳と心臓。",
      },
    },
    note: "「探索」の 3D ビューアから切り出した静止画です。",
  },

  story: {
    title: "人体はシステム。\n図解の寄せ集め\nではない。",
    body: "Corpus は、個々の臓器から、人体をはたらかせている関係へと理解を広げる手助けをします。",
    alt: "胸の中の位置関係どおりに組み合わせた 3D の肺と心臓。気管、左右の肺、心臓、大動脈にラベルが付いている。",
    caption: "「探索」のモデルから組み合わせた心臓と肺。位置は簡略化しています。",
    legendLabel: "この構成図でラベルを付けた構造",
  },

  practice: {
    eyebrow: "能動的な想起",
    title: "見て、知る。\nそして確かめる。",
    lede: "解剖学のラベリングや識別のチャレンジで、探索を能動的な想起へとつなげます。",
    cta: "理解度チェック",
    identify: "識別",
    alt: "「探索」の 3D 脳。4つの構造に 1〜4 の番号が付いている。",
    caption: "「探索」のラベルクイズの静止画。モデル上の構造を選んで答えます。",
  },

  ai: {
    eyebrow: "今後の予定",
    title: "図解が答えられない\n問いに、ガイドを。",
    lede: "Corpus では、構造を説明し、概念どうしをつなぎ、探索を導き、対話を通して学びを助ける AI 解剖学ガイドを設計しています。",
    exampleLabel: "やりとりの例",
    you: "あなた",
    corpus: "Corpus",
    question: "なぜ左心室は右心室より壁が厚いのですか？",
    answer: "左心室は体循環に血液を送り出すため、右心室よりもはるかに高い圧力を生み出す必要があるからです。",
    status: "開発中",
    disclaimer: "これは文章による例であり、実際に動くアシスタントではありません。対話できるガイドはまだありません。",
  },

  languages: {
    eyebrow: "12 言語",
    title: "考える言葉で、\n解剖学を。",
    lede: "Corpus は世界中の学習者のためにつくられています。多言語のインターフェースと、ラテン語の用語に根ざした共通の解剖学用語を備えています。",
    wallLabel: "12 の言語で読む Corpus",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "アラビア語は右から左へ読み、インターフェースもそれに合わせて左右が反転します。",
    latinNote: "ラテン語名は、どの言語でも変わりません。",
  },

  rigor: {
    title: "探索したい美しさ。\n信頼できる正確さ。",
    lede: "Corpus は、ビジュアルによるストーリーテリングに、解剖学用語、構造化されたデータ、医学的根拠に基づく教育コンテンツを組み合わせています。",
    pillars: {
      accuracy: {
        title: "解剖学的な正確さ",
        body: "構造は、確立された解剖学用語に基づいています。",
      },
      knowledge: {
        title: "構造化された知識",
        body: "すべての構造が、文脈となる情報とつながっています。",
      },
      clarity: {
        title: "視覚的な明快さ",
        body: "複雑な解剖学を、余計な複雑さを加えずに示します。",
      },
    },
    entry: {
      label: "Corpus における構造の一例",
      term: "Terminologia Anatomica",
      name: "名称",
      organ: "臓器",
      role: "役割",
    },
    note: "Corpus は教育のためのものであり、医学的な助言ではありません。",
  },

  audience: {
    eyebrow: "好奇心のある人のために",
    title: "ひとつの人体。\n学び方はさまざま。",
    groups: {
      students: {
        title: "学生",
        body: "ばらばらのラベルを暗記するのではなく、空間的な理解を築きます。",
        cta: "学生として探索する",
      },
      educators: {
        title: "教育者",
        body: "インタラクティブな視覚的探索で、解剖学を教室に持ち込みます。",
        cta: "教育者の方へ",
      },
      curious: {
        title: "好奇心旺盛な人",
        body: "人体を探索しましょう。それが、この世界で最も驚くべき存在のひとつだから。",
        cta: "探索をはじめる",
      },
    },
  },

  closing: {
    title: "人体という傑作。",
    line: "見る目を養おう。",
    cta: "人体を探索する",
  },
};
