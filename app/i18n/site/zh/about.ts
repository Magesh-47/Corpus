import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "关于 Corpus — 解剖工作室",
    description:
      "Corpus 为何把解剖学当作一种视觉语言：3D 器官、手绘图版与拉丁术语，让你通过观察、动手与回忆来学习人体，支持 {count} 种语言。",
  },

  plate: "图版 {number}",

  hero: {
    eyebrow: "关于 Corpus",
    titleFirst: "解剖学是一种视觉语言。",
    titleSecond: "我们为此建造了一个学习的地方。",
    contents: "目录",
    lede: "Corpus 是一间解剖工作室：3D 器官、手绘图版与精确的拉丁名称，经过精心编排，让你通过细致观察来学习人体。",
    alt: "从左侧看的人脑水彩画，下方是小脑与脑干。",
  },

  depth: {
    label: "深度",
    titleFirst: "人体太过复杂，",
    titleSecond: "无法只凭一幅平面图来学习。",
    intro: "世世代代以来，解剖学一直借助图示、图谱、列表与标签来教授。",
    valuable: "这些工具很有价值。",
    turn: "但人体并不是平面的。",
    truths: {
      overlap: "结构彼此重叠。",
      connect: "系统相互连接。",
      space: "器官占据空间。",
      form: "形态改变功能。",
    },
    close: "Corpus 正是围绕这一现实而构建的。",
    caption: "在人体之中，以及作为一个完整的器官。",
    bodyAlt: "人体水彩画，胸腔内画出两肺，一个放大的圆圈显示成簇的肺泡。",
    organAlt: "两肺的水彩画，气管分出层层分支的气道。",
  },

  atelier: {
    label: "名字",
    title: "解剖工作室",
    meaning: "名字中的 Atelier，意为工坊或画室。",
    body: "Corpus 把解剖学视为可以亲手研习的对象，而不仅仅是阅读的材料。",
    verbsTitle: "在工作室里",
    verbs: {
      observe: { verb: "你观察。", note: "转动模型，凑近细看。" },
      manipulate: { verb: "你操作。", note: "单独显示一个器官，或切开一个剖面。" },
      compare: { verb: "你比较。", note: "把两个器官并排放置。" },
      question: { verb: "你提问。", note: "选中一个结构，查看它的名称与作用。" },
      practice: { verb: "你练习。", note: "按提示找出每个结构，并检验自己。" },
    },
    studioAlt:
      "一张手绘的研习桌：桌上钉着一幅心脏铅笔习作，转台上放着一对彩绘的肾脏，以引线标注，并注有拉丁名称。",
  },

  principles: {
    label: "原则",
    lines: {
      science: "科学为先。",
      story: "叙事其次。",
      visuals: "视觉贯穿始终。",
    },
    columns: {
      scientific: {
        label: "科学",
        title: "以解剖结构与术语为根基。",
        body: "各结构均采用 Terminologia Anatomica 命名——这是解剖学术语的国际标准。",
      },
      visual: {
        label: "视觉",
        title: "围绕空间理解而设计。",
        body: "器官是可以转动、剖切与对比的模型，而不是一张张印刷出来的单一视图。",
      },
      educational: {
        label: "教学",
        title: "围绕主动探索与回忆而构建。",
        body: "你亲自在模型上找出结构，并立刻知道自己是否答对。",
      },
    },
    note: "模型与插图均为简化的教学示意。Corpus 用于学习，不构成医疗建议。",
  },

  world: {
    label: "语言",
    title: "为世界而建。",
    body: {
      languages: "“探索”中的解剖内容——从器官名称、描述到每一个结构标签——均提供 {count} 种语言版本。",
      scripts: "阿拉伯语版的整个版式从右向左排列。中文、日文与韩文则使用为各自文字设计的字体。",
      latin:
        "每一种语言之下，都是同一个拉丁术语。无论开罗的学生和首尔的学生怎样称呼它，他们指向的都是同一个结构。",
      honest: "翻译是一项细致而持续的工作。在我们不断打磨的过程中，有些语言读起来会比另一些更自然。",
    },
    namesTitle: "同一个结构，{count} 种叫法",
    namesCaption: "“探索”在每种语言中对心脏的称呼。拉丁术语保持不变。",
  },

  closing: {
    titleFirst: "我们正在打造一种更好的方式，",
    titleSecond: "去看见人体。",
    cta: "探索 Corpus",
  },
};
