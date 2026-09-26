import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — 像艺术家一样学解剖",
    description: "以精细的 3D 形式探索人体：旋转心脏、大脑、肺等器官，深入表面之下，并就其中的结构进行自我测试。",
  },

  hero: {
    eyebrow: "重新构想解剖学",
    title: "像艺术家一样\n学解剖。",
    lede: "借助精细的 3D 解剖模型探索人体，发现表面之下的结构，建立超越平面图示的理解。",
    primary: "探索人体",
    secondary: "认识 Corpus",
    supportingLabel: "Corpus 是什么",
    supporting: {
      anatomy: "3D 解剖",
      visual: "视觉学习",
      languages: "多语言",
    },
    plate: {
      number: "图版 I",
      view: "前外侧面观",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "头、颈与胸部的浅层肌。",
      alt: "一尊去除皮肤的解剖学胸像，显示面部、颈部、肩部与胸部的浅层肌。头部转向一侧，微微上仰。",
      legendLabel: "本图版标注的结构",
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
    title: "解剖工作室",
    line: "把人体当作一个三维系统来探索。",
  },

  philosophy: {
    eyebrow: "理念",
    title: "解剖学不该\n只在平面上死记。",
    lede: "人体是三维的、相互关联的，并且时刻处于运动之中。Corpus 让解剖学成为你能看见、能探索、能理解的东西。",
    steps: {
      see: {
        label: "观看",
        title: "深入表面之下。",
        body: "在空间中探索结构，而不是把人体简化成一张平面图。",
        alt: "来自“探索”的 3D 心脏，转向侧面，大血管从顶部升起。",
        caption: "在“探索”中转动的心脏。",
      },
      understand: {
        label: "理解",
        title: "把各个部分串联起来。",
        body: "从一个结构出发，延伸到它的功能、毗邻关系、血液供应、组织与临床背景。",
        alt: "从侧面看的大脑水彩插图。",
        caption: "“探索”中与大脑一同呈现的内容。",
        facets: {
          function: "功能",
          bloodSupply: "血液供应",
          tissue: "组织",
          clinical: "临床背景",
        },
      },
      remember: {
        label: "铭记",
        title: "让知识活起来。",
        body: "通过辨认、探索与回忆来检验自己。",
        alt: "肺与气管的水彩插图，四个结构以数字标记。",
        caption: "一张静态的标注练习页。在“探索”中，你要在 3D 模型上找出每个被点名的结构。",
        blank: "写出此结构的名称",
        answers: "答案",
      },
    },
  },

  collection: {
    eyebrow: "馆藏",
    title: "从人体的任何地方开始。",
    lede: "探索那些让我们成为人的结构——从心脏的节律，到大脑的构造。",
    explore: "探索",
    lines: {
      heart: "位于循环系统中心的肌性泵。",
      brain: "神经系统的指挥中枢。",
      lungs: "氧气进入血液、二氧化碳离开血液的器官。",
      liver: "承担数百项重要功能的代谢中枢。",
      kidneys: "调节人体内环境组成的过滤器。",
      eyeball: "把光转化为视觉信息的感觉器官。",
    },
    more: "“探索”中还有：{organs}。",
    note: "插图与 3D 模型均为简化的教学示意。",
  },

  explore: {
    title: "别只看解剖。\n去探索它。",
    lede: "旋转它。单独显示它。追踪它的结构。看清一切如何相连。",
    cta: "打开解剖图谱",
    still: "“探索”中的静帧",
    alt: "“探索”中正面视角的 3D 心脏，圆点标记出可以选择的结构。",
    caption: "模型上的每个圆点都是一个结构，选中它即可查看名称与作用。",
    controlsLabel: "在查看器中",
  },

  features: {
    eyebrow: "查看器之内",
    title: "标本的每一个角度。",
    items: {
      rotate: {
        label: "旋转",
        line: "从每一个角度观察结构。",
        body: "拖动以转动模型，并放大你正在研究的部位。",
        alt: "转向背面的 3D 心脏。",
      },
      isolate: {
        label: "单独显示",
        line: "聚焦于重要之处。",
        body: "把周围的一切放到一边，单独研究一个器官。",
        alt: "单独悬浮的 3D 眼球，视神经从后方延伸而出。",
      },
      section: {
        label: "剖面",
        line: "理解表面之下的构造。",
        body: "让剖切面穿过模型，从断面读懂它的形态。",
        alt: "被剖切面一分为二的 3D 心脏。",
      },
      compare: {
        label: "对比",
        line: "在关联中认识解剖。",
        body: "把两个器官并排放置，比较它们的作用与尺度。",
        alt: "并排显示的 3D 大脑与心脏。",
      },
    },
    note: "画面均截取自“探索”中的 3D 查看器。",
  },

  story: {
    title: "人体是一个系统，\n而非一叠图示。",
    body: "Corpus 帮助你从单个器官出发，走向让人体运转起来的种种关联。",
    alt: "3D 肺与心脏按其在胸腔中的位置组合在一起，并标注了气管、两肺、心脏与主动脉。",
    caption: "由“探索”中的模型组合而成的心与肺。位置经过简化。",
    legendLabel: "本组合图中标注的结构",
  },

  practice: {
    eyebrow: "主动回忆",
    title: "先看清。\n再证明你认得。",
    lede: "通过解剖标注与辨认挑战，把探索转化为主动回忆。",
    cta: "自我测试",
    identify: "辨认",
    alt: "“探索”中的 3D 大脑，四个结构以数字 1 至 4 标记。",
    caption: "“探索”中标注测验的静帧：你需要在模型上选中相应的结构来作答。",
  },

  ai: {
    eyebrow: "接下来",
    title: "图示答不了的问题，\n将有一位向导。",
    lede: "我们正在为 Corpus 设计一位 AI 解剖向导：它将能讲解结构、串联概念、引导探索，并通过对话帮助你学习。",
    exampleLabel: "示意性对话",
    you: "你",
    corpus: "Corpus",
    question: "为什么左心室比右心室厚？",
    answer: "左心室负责把血液泵入体循环，因此它必须产生比右心室高得多的压力。",
    status: "开发中",
    disclaimer: "这是一段书面示例，而非实时助手。目前还没有可以对话的向导。",
  },

  languages: {
    eyebrow: "12 种语言",
    title: "用你思考的语言，\n学习解剖。",
    lede: "Corpus 为世界各地的学习者而建，提供多语言界面，以及一套植根于拉丁术语的共通解剖词汇。",
    wallLabel: "以十二种语言呈现的 Corpus",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "阿拉伯语从右向左阅读，界面也随之镜像翻转。",
    latinNote: "拉丁名称在每一种语言中都保持不变。",
  },

  rigor: {
    title: "美得值得探索，\n准得足以信赖。",
    lede: "Corpus 将视觉叙事与解剖学术语、结构化数据以及有医学依据的教学内容结合在一起。",
    pillars: {
      accuracy: {
        title: "解剖准确",
        body: "各个结构均以公认的解剖学术语为依据。",
      },
      knowledge: {
        title: "结构化知识",
        body: "每个结构都连接着相关的背景信息。",
      },
      clarity: {
        title: "视觉清晰",
        body: "呈现复杂的解剖，而不添加不必要的复杂。",
      },
    },
    entry: {
      label: "Corpus 中的一个结构",
      term: "Terminologia Anatomica",
      name: "名称",
      organ: "器官",
      role: "作用",
    },
    note: "Corpus 用于教学，不构成医疗建议。",
  },

  audience: {
    eyebrow: "为好奇的心灵而作",
    title: "同一个身体，\n多种学习方式。",
    groups: {
      students: {
        title: "学生",
        body: "建立空间理解，而不是死记彼此孤立的标签。",
        cta: "以学生身份探索",
      },
      educators: {
        title: "教育者",
        body: "通过互动式的视觉探索，把解剖学带进课堂。",
        cta: "面向教育者",
      },
      curious: {
        title: "好奇者",
        body: "探索人体，只因它是世间最非凡的存在之一。",
        cta: "开始探索",
      },
    },
  },

  closing: {
    title: "人体是一件杰作。",
    line: "学会去看见它。",
    cta: "探索人体",
  },
};
