import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Corpus 价格 — 解剖学习",
    description: "使用 Corpus 免费探索 3D 核心解剖内容，无需账户。Corpus Plus 与教育版仍在开发中，尚未定价。",
  },

  hero: {
    eyebrow: "价格",
    titleLead: "探索人体。",
    titleRest: "深入多少，由你决定。",
    lede: "核心解剖内容如今可免费探索，无需账户，也无需付费。Corpus Plus 与教育版仍在开发中，因此二者都尚未定价。",
    primary: "开始探索",
    secondary: "比较各方案",
    plate: {
      label: "图版：{organ}剖面",
      alt: "一块被切开的皮肤水彩画，显示其各层：表层、含有毛囊、腺体与血管的真皮，以及下方的黄色脂肪",
      caption: "从表层一直到下方的脂肪。3D 模型上也标注着相同的各层，可免费探索。",
    },
  },

  plans: {
    title: "方案",
    summary: "目前提供一个方案，另有两个正在开发中。",
    numberLabel: "方案 {number}",
    learnMore: "了解更多：{plan}",
    items: {
      free: {
        name: "免费版",
        tagline: "探索核心解剖内容。",
        price: "免费",
        priceNote: "无需账户",
        description: "当前完整的“探索”体验，任何使用现代浏览器的人都可以打开。",
        listHeading: "目前包含",
        list: {
          organs: "{organCount} 个 3D 器官，从心脏、大脑到皮肤",
          viewer: "旋转与缩放，以及单独显示、剖面与分层视图",
          hotspots: "{structureCount} 个已标注结构，每个都附有拉丁术语",
          cards: "关于组织、功能、疾病与对比的学习卡片",
          quiz: "请你在模型上找出结构的标注测验",
          languages: "{languageCount} 种语言的器官描述",
        },
        cta: "开始探索",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "借助未来的学习与个性化功能，走得更深。",
        price: "尚未定价",
        priceNote: "开发中",
        description: "计划面向希望超越核心馆藏、并回顾所学内容的人。",
        listHeading: "我们正在探索的方向",
        list: {
          depth: "更多人体内容，超出目前已有的器官",
          study: "帮助你练习并记住所探索内容的工具",
          guidance: "在 3D 模型旁提供的引导式讲解",
          progress: "一种回到已学内容的方式",
        },
        cta: "了解更多",
      },
      education: {
        name: "教育版",
        tagline: "把 Corpus 带入教学环境。",
        price: "尚未定价",
        priceNote: "开发中",
        description: "计划面向希望在课堂或课程中使用 Corpus 的教师与学校。",
        listHeading: "我们正在探索的方向",
        list: {
          classroom: "让全班同时使用 Corpus 的方式",
          teaching: "为备课与讲授解剖课提供支持",
          practice: "可供一组学生共同完成的练习",
        },
        cta: "了解更多",
      },
    },
    plannedNote: "开发中的方案只是方向，并非承诺。其功能、时间与价格均未确定，本页上的任何内容都无法购买。",
  },

  comparison: {
    eyebrow: "对比",
    title: "各方案包含什么。",
    lede: "“免费版”一栏描述的是 Corpus 目前的样子。另外两栏描述的是开发中的方案，可能会有变化。",
    caption: "各方案功能。免费版现已可用；Corpus Plus 与教育版仍在开发中。",
    featureHeading: "功能",
    status: {
      available: "现已可用",
      planned: "计划中",
      undecided: "尚未确定",
      unavailable: "不可用",
      otherPlan: "此方案不含",
    },
    rows: {
      exploration: {
        name: "3D 解剖探索",
        free: "旋转、缩放、单独显示、剖面与分层",
        plus: "包含免费版全部内容",
        education: "包含免费版全部内容",
      },
      library: {
        name: "器官库",
        free: "{organCount} 个器官，可搜索",
        plus: "更多人体内容",
        education: "包含免费版全部内容",
      },
      structures: {
        name: "解剖结构",
        free: "{structureCount} 个已标注结构，附拉丁术语",
        plus: "包含免费版全部内容",
        education: "包含免费版全部内容",
      },
      learning: {
        name: "互动学习",
        free: "关于组织、功能、疾病与对比的学习卡片",
        plus: "更深入的学习工具",
        education: "供课堂使用的材料",
      },
      practice: {
        name: "练习",
        free: "在 3D 模型上进行的标注测验",
        plus: "更多练习方式",
        education: "面向全班的练习",
      },
      guidance: {
        name: "AI 引导",
        free: "Corpus 目前没有任何 AI 功能",
        plus: "模型旁的引导式讲解",
        education: "此方案尚未确定",
      },
      progress: {
        name: "个性化进度",
        free: "进度不会在两次访问之间保存",
        plus: "一种回到所学内容的方式",
        education: "此方案尚未确定",
      },
      educators: {
        name: "教育者工具",
        free: "目前没有教育者工具",
        plus: "改为计划纳入教育版",
        education: "为备课与授课提供支持",
      },
    },
  },

  collection: {
    eyebrow: "免费版包含",
    title: "免费馆藏，向所有人开放。",
    lede: "每个器官都有一个 3D 模型、一幅插画图版和已标注的结构。选择其一，即可在“探索”中打开。",
    plateLabel: "图版 {number}",
    structures: "已标注结构：{count}",
    openOrgan: "{organ}：在“探索”中打开",
    footnote: "模型与插图均为简化的教学示意，并非临床参考资料；Corpus 中的任何内容都不构成医疗建议。",
  },

  faq: {
    eyebrow: "问题",
    title: "直白地问，直白地答。",
    items: {
      account: {
        q: "我需要账户吗？",
        a: "不需要。你可以直接打开“探索”并立即开始，无需登录。",
      },
      payments: {
        q: "现在可以购买 Corpus Plus 或教育版吗？",
        a: "不可以。这两个方案都尚未推出，也没有定价，Corpus 目前不接受任何形式的付款。方案准备就绪后，会在这里说明。",
      },
      classroom: {
        q: "现在可以在课堂上使用 Corpus 吗？",
        a: "可以。“探索”免费且无需账户，学生可以在现代浏览器中打开。课堂与教育者工具目前尚不可用。",
      },
    },
  },

  closing: {
    eyebrow: "开始",
    titleLead: "不知道从哪里开始？",
    titleRest: "先免费探索解剖吧。",
    cta: "探索 Corpus",
    imageAlt: "显微镜下的皮肤水彩画：粉色的分层表皮，下方是较为疏松、呈波浪状的真皮组织",
    caption: "显微镜下的{organ}：{tissue}",
  },
};
