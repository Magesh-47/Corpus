import type { SiteDictionary } from "..";

export const howItWorks: SiteDictionary["howItWorks"] = {
  meta: {
    title: "Corpus 如何运作——在 3D 中探索解剖",
    description:
      "选择一个器官，转动它的 3D 模型，阅读它的位置、血液供应与功能，再通过找出其中的结构进行自我测试。这就是在 Corpus 中学习的方式。",
  },

  hero: {
    eyebrow: "运作方式",
    title: {
      see: "观看。",
      explore: "探索。",
      understand: "理解。",
      remember: "铭记。",
    },
    lede: "Corpus 把解剖学变成一场主动的视觉体验。",
    body: "五个步骤，一次专注于一个器官。前四步如今已可在“探索”中完成，第五步尚未推出。",
    contentsLabel: "五个步骤",
  },

  steps: {
    see: {
      name: "观看",
      title: "从整体开始。",
      line: "选择一个器官，先看清它的形态，再去关心它的标签。",
      body:
        "“探索”打开时是一个收录九个器官的器官库，从心脏、大脑到胰腺与皮肤。选中其中一个，它便以完整的形态出现。它的结构以小圆点标记，名称要等你询问时才会显示。",
      plateLabel: "图版 I",
      caption: "完整呈现的{organ}。“探索”器官库中的九个器官之一。",
      alt: "从正面看的人类心脏水彩习作，主动脉在其上方拱起",
    },
    explore: {
      name: "探索",
      title: "在结构之间穿行。",
      line: "旋转、缩放、单独显示，细察解剖结构之间的关系。",
      body:
        "每个器官都是一个 3D 模型。拖动即可转动，滚动或双指捏合即可拉近，选中一个圆点即可显示其下结构的名称。单独显示、剖面与分层，各自改变你观看同一形态的方式。",
      viewerLabel: "3D 查看器",
      controlsLabel: "查看器控件",
      controls: {
        rotate: { name: "旋转", note: "拖动" },
        zoom: { name: "缩放", note: "滚动或捏合" },
        isolate: { name: "单独显示", note: "只看器官" },
        section: { name: "剖面", note: "剖开来看" },
      },
      caption: "“探索”中 3D 查看器的静帧。控件标签为示意而绘制。",
      alt: "“探索”查看器中的心脏 3D 模型，正面立于基座之上，彩色小圆点标记出有名称的结构",
    },
    understand: {
      name: "理解",
      title: "把结构与功能联系起来。",
      line: "探索血液供应、位置、功能、组织与临床背景。",
      body:
        "模型旁的信息面板说明这个器官是什么、做什么。学习卡片则更进一步：显微镜下的组织、与另一个器官的对比、它在人体中的工作部位，以及常见的相关疾病。",
      panelLabel: "信息面板",
      facts: {
        size: "大小",
        location: "位置",
        bloodSupply: "血液供应",
        function: "功能",
        tissue: "组织",
      },
      conditionsLabel: "临床背景",
      caption: "{organ}：来自“探索”信息面板与学习卡片的内容。",
      organAlt: "肺的水彩习作，气管分为左右两条主支气管",
      tissueAlt: "圆形显微视野中的肺泡，即肺内微小的气囊",
    },
    practice: {
      name: "练习",
      title: "检验你刚刚探索过的内容。",
      line: "辨认结构，运用主动回忆。",
      body:
        "开始标注测验后，模型便会静止。Corpus 说出一个结构的名称，由你在模型上找出它。答错时会显示正确答案所在的位置；每一轮结束时会给出你的得分，并让你以新的顺序再试一次。",
      prompt: "找出",
      hint: "选择对应的圆点",
      caption: "“探索”中标注测验的示意图，实际作答时你要在 3D 模型上直接选择圆点。",
      alt: "大脑的水彩习作，带有四个编号的结构和空白标签，以及一条请你找出{structure}的提示",
    },
    remember: {
      name: "铭记",
      title: "回到重要之处。",
      line: "未来的 Corpus 将帮助你重温结构、延续对话，并回到需要更多关注的部分。",
      body:
        "这一部分目前还不存在。Corpus 不会保存你学过的内容，所以每次进入“探索”都是从头开始。在此之前，重做标注测验就是回到某个结构的方法。",
      futureLabel: "计划中",
      future: {
        structures: "待重温的结构",
        conversations: "待继续的对话",
        attention: "需要更多关注的部分",
      },
    },
  },

  closing: {
    titleStart: "学习解剖，",
    titleEnd: "应当像一场发现。",
    action: "走进解剖工作室",
  },
};
