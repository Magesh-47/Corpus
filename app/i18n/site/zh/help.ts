import type { SiteDictionary } from "..";

export const help: SiteDictionary["help"] = {
  meta: {
    title: "Corpus 帮助 — 解剖学习指南",
    description:
      "如何使用 Corpus：转动和缩放 3D 器官模型、阅读其中的结构、自我测试、切换语言，并为常见问题找到直白的答案。",
  },

  hero: {
    eyebrow: "帮助",
    title: "在 Corpus 中找到方向。",
    plate: {
      alt: "人眼的水彩习作，带有转动眼球的肌肉以及后方的视神经",
    },
  },

  search: {
    label: "我们能帮你找到什么？",
    placeholder: "试试“缩放”或“热点”",
    clear: "清除搜索",
    resultsLabel: "搜索结果",
    count: "结果：{count}",
    more: "仅显示前 {shown} 条。所有匹配的问题也会显示在下方。",
    kind: {
      question: "问题",
      guide: "指南",
    },
    empty: {
      title: "没有与“{query}”匹配的内容。",
      body: "试试更短或不同的词，或浏览下方的指南。",
    },
    faqStatus: "显示 {count} 个与搜索匹配的问题（共 {total} 个）。",
    faqEmpty: "没有与搜索匹配的问题。",
    showAll: "显示全部问题",
  },

  categories: {
    heading: "按主题浏览",
    items: {
      gettingStarted: { label: "入门", line: "了解基础知识。" },
      viewer: { label: "3D 查看器", line: "学习如何浏览解剖模型。" },
      exploring: { label: "探索", line: "查找器官与结构。" },
      practice: { label: "练习", line: "了解标注与回忆练习。" },
      languages: { label: "语言", line: "切换 Corpus 的语言。" },
      account: { label: "账户", line: "管理你的账户。" },
    },
  },

  gettingStarted: {
    title: "最初的几分钟",
    intro: "Corpus 在网页浏览器中运行，无需安装任何东西，也无需创建账户。",
    steps: {
      open: {
        title: "打开“探索”",
        body: "在主导航中选择“{explore}”。首先显示的是心脏。",
      },
      choose: {
        title: "选择一个器官",
        body: "从模型旁的器官库中挑选一个器官。在手机上，请从屏幕顶部打开器官库。",
      },
      look: {
        title: "仔细观察",
        body: "拖动以转动模型，放大细看，并选择圆点来阅读每个结构的名称。",
      },
      test: {
        title: "自我测试",
        body: "准备好后，开始测验，按名称找出每个结构。",
      },
    },
    cta: "打开“探索”",
  },

  viewer: {
    title: "转动、缩放与阅读模型",
    intro: "每个器官都是一个 3D 模型，你可以用鼠标、触摸屏或键盘，从各个方向仔细查看。",
    columns: {
      action: "操作",
      pointer: "鼠标或触控板",
      touch: "触摸屏",
      keyboard: "键盘",
    },
    controls: {
      rotate: {
        action: "转动模型",
        pointer: "在模型上拖动",
        touch: "单指拖动",
        keyboard: "左右方向键",
      },
      zoom: {
        action: "放大与缩小",
        pointer: "滚动，或使用“{zoom}”工具",
        touch: "双指捏合",
        keyboard: "加号键与减号键",
      },
      read: {
        action: "阅读结构",
        pointer: "点击圆点",
        touch: "轻点圆点",
        keyboard: "屏幕阅读器可以从模型旁的列表中读出每个结构。",
      },
      close: {
        action: "关闭标签",
        pointer: "再次点击该圆点，或点击其他任意位置",
        touch: "轻点标签上的关闭按钮",
        keyboard: "Esc 键",
      },
    },
    keyboardNote: "键盘操作需在模型获得焦点后才会生效：按 Tab 键，直到选中模型。",
    toolsTitle: "查看器工具",
    tools: {
      rotate: "开始或停止缓慢的自动转动。“{autoRotate}”开关的作用相同。",
      zoom: "将视图向模型拉近一步。",
      isolate: "淡化展示台，让器官单独呈现。",
      section: "剖开模型，显示其内部视图。",
      layers: "以线框形式显示模型，露出构成它的网格。",
      compare: "将该器官的主要作用与大小同另一个器官进行对比。",
      reset: "让模型回到初始视图，并关闭所有打开的标签。",
    },
    trouble:
      "如果模型没有显示，说明你的浏览器需要支持 3D 图形（WebGL）。请更新浏览器，确认已开启硬件加速，然后重新加载页面。",
  },

  exploring: {
    title: "器官、数据与学习卡片",
    intro: "Corpus 收录了 {count} 个器官。每个器官打开时，3D 模型居中，相关数据列于一旁。",
    parts: {
      library: {
        title: "器官库",
        body: "列出每个器官及其所属的身体系统。在“探索”顶部的搜索框中输入文字即可筛选。",
      },
      panel: {
        title: "信息面板",
        body: "给出器官的大小、重量、位置、血液供应与功能，以及一条医学说明和一个令人难忘的事实。",
      },
      cards: {
        title: "学习卡片",
        body: "打开器官的显微组织、对比、简短动画、常见疾病，以及它在人体中的位置。",
      },
    },
    catalogueTitle: "直接打开一个器官",
    catalogueLink: "在“探索”中打开{organ}",
    clinical:
      "临床要点说明解剖为何重要，并不用于诊断或治疗任何人。如果你对自己的健康有疑虑，请咨询医生。",
  },

  practice: {
    title: "在模型上自我测试",
    intro: "练习直接在模型上进行。标注测验会请你找出当前所看器官中每一个被点名的结构。",
    steps: {
      start: "打开一个器官并选择“{quiz}”。模型会停止转动，圆点也随之静止。",
      find: "Corpus 每次说出一个结构的名称。点击或轻点你认为与之对应的圆点。",
      feedback: "答对即进入下一题。答错时，Corpus 会显示你选中的结构，并标出正确的那一个。",
      finish: "每个结构只问一次，每一轮的顺序都不同。结束时你会看到自己的得分。",
    },
    note: "测验得分不会保存。离开页面或选择其他器官时，得分即被清除。",
    exampleCaption: "心脏测验中的一道示例题，与它在模型上方的显示方式相同。",
  },

  languages: {
    title: "用你的语言阅读 Corpus",
    intro: "Corpus 提供 {count} 种语言。在“探索”中，器官名称、描述、结构标签与控件都已译成每一种语言。",
    switchBody:
      "你可以在任意页面底部，或在“探索”顶部的语言菜单中选择语言。切换后仍停留在当前阅读的页面。",
    rtl: "阿拉伯语从右向左阅读，整个版式也随之镜像翻转。尚未翻译的页面会以英文显示。",
    listLabel: "可用语言",
    current: "当前语言",
  },

  account: {
    title: "账户即将推出",
    body: "登录、注册与重置密码的表单已经就位，但账户功能尚不存在。表单上会如实说明，你输入的任何内容都不会被发送。",
    saved: "你不需要账户：“探索”中的一切都无需账户即可使用。你的任何操作都不会在两次访问之间保存。",
    cta: "开始探索",
  },

  faqHeading: "常见问题",
  faq: {
    whatIs: {
      q: "Corpus 是什么？",
      a: "Corpus 是一部互动式解剖图谱。你可以探索人体器官的 3D 模型，阅读其中已命名的结构，并在学习过程中随时自我测试。",
    },
    exploreOrgan: {
      q: "如何探索一个器官？",
      a: "打开“探索”，从器官库中选择一个器官。转动模型，选择圆点来阅读每个结构，并打开查看器下方的卡片以深入了解。",
    },
    rotate: {
      q: "如何旋转模型？",
      a: "用鼠标或单指拖动模型。使用键盘时，按 Tab 键直到模型获得焦点，然后使用左右方向键。选择“{reset}”即可回到初始视图。",
    },
    zoom: {
      q: "如何缩放？",
      a: "使用鼠标滚轮或触控板，在触摸屏上双指捏合，或选择“{zoom}”工具。模型获得焦点时，加号键与减号键也可以使用。",
    },
    hotspots: {
      q: "什么是热点？",
      a: "热点就是模型上的圆点。每个圆点标记一个结构：选中它即可查看名称与简短说明。",
    },
    isolate: {
      q: "“单独显示”有什么作用？",
      a: "“{isolate}”工具会淡化展示台，让器官单独呈现。再次选择即可让展示台重新出现。",
    },
    languages: {
      q: "支持哪些语言？",
      a: "Corpus 提供 {count} 种语言：{list}。",
    },
    mobile: {
      q: "Corpus 能在手机上使用吗？",
      a: "可以，在手机和平板电脑的现代网页浏览器中即可使用。单指拖动转动模型，双指捏合缩放，轻点圆点即可阅读。",
    },
    medical: {
      q: "Corpus 的内容属于医疗建议吗？",
      a: "不属于。Corpus 用于学习解剖，不提供医疗建议、诊断或治疗。如果你担心自己的健康，请联系医生。如遇紧急情况，请拨打当地的急救电话。",
    },
    accuracy: {
      q: "解剖内容有多准确？",
      a: "模型与插图均为简化的教学示意。它们展示每个器官的整体形态及主要结构的位置，而非全部细节。结构名称遵循国际标准 Terminologia Anatomica。",
    },
    createAccount: {
      q: "如何创建账户？",
      a: "账户即将推出。注册表单已经就位，但目前还不会创建账户，你输入的任何内容也不会被发送。使用“探索”不需要账户。",
    },
    resetPassword: {
      q: "如何重置密码？",
      a: "目前还没有账户，因此也没有可以重置的密码。重置表单是为日后准备的；目前它不会发送任何电子邮件。",
    },
  },
  faqLinks: {
    explore: "打开“探索”",
    report: "报告错误",
  },

  contact: {
    title: "仍需帮助？",
    body: "我们正在用心打造 Corpus。如果有什么地方没有按预期工作，请告诉我们。",
    cta: "联系支持",
    ctaDescription: "在新标签页中打开本项目在 GitHub 上的公开问题跟踪页面。",
    note: "报告是公开的，并且需要一个免费的 GitHub 账户。请不要填写个人信息或健康信息。",
  },
};
