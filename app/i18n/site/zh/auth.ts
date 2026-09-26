import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: { title: "登录", description: "登录 Corpus。账户即将推出；无需账户也可使用“探索”。" },
    signUp: {
      title: "创建账户",
      description: "创建 Corpus 账户。账户即将推出；无需账户也可使用“探索”。",
    },
    forgotPassword: {
      title: "重置密码",
      description: "重置你的 Corpus 密码。账户即将推出；无需账户也可使用“探索”。",
    },
  },

  shell: {
    back: "返回网站",
    disclaimer: "Corpus 用于学习解剖，不构成医疗建议。",
    helpLink: "帮助",
  },

  notice: {
    title: "账户即将推出。",
    body: "学习并不需要账户。“探索”中的一切都无需账户即可使用。",
    action: "打开“探索”",
  },

  fields: {
    name: { label: "姓名" },
    email: { label: "电子邮箱" },
    password: { label: "密码" },
    newPassword: { label: "密码", hint: "至少 {min} 个字符。" },
    confirmPassword: { label: "确认密码" },
  },

  passwordToggle: {
    show: "显示",
    hide: "隐藏",
    showLabel: "显示密码",
    hideLabel: "隐藏密码",
  },

  errors: {
    summary: "有些信息需要修改。请查看每个字段下方的提示。",
    nameRequired: "请输入你的姓名。",
    emailRequired: "请输入你的电子邮箱地址。",
    emailInvalid: "请按 name@example.com 的格式输入电子邮箱地址。",
    passwordRequired: "请输入密码。",
    passwordTooShort: "请至少使用 {min} 个字符。",
    confirmRequired: "请再次输入密码。",
    confirmMismatch: "两次输入的密码不一致。",
  },

  signIn: {
    eyebrow: "登录",
    title: "欢迎回来。",
    lede: "继续探索人体。",
    submit: "登录",
    busy: "正在登录…",
    forgot: "忘记密码？",
    switchPrompt: "初次使用 Corpus？",
    switchAction: "创建账户",
    unavailable: {
      title: "登录功能尚不可用。",
      body: "Corpus 账户仍在构建中，因此没有发送或存储任何内容。你的密码已从表单中清除。",
    },
  },

  signUp: {
    eyebrow: "创建账户",
    title: "开始探索。",
    lede: "创建你的 Corpus 账户，开始属于你的解剖练习。",
    submit: "创建账户",
    busy: "正在创建账户…",
    switchPrompt: "已有账户？",
    switchAction: "登录",
    unavailable: {
      title: "目前还无法创建账户。",
      body: "Corpus 账户仍在构建中，因此没有发送或存储任何内容。你输入的密码已从表单中清除。",
    },
  },

  forgotPassword: {
    eyebrow: "忘记密码",
    title: "重置你的密码。",
    lede: "输入你的电子邮箱，我们会帮你重新进入 Corpus。",
    submit: "发送重置链接",
    busy: "正在发送…",
    switchPrompt: "想起来了？",
    switchAction: "返回登录",
    unavailable: {
      title: "重置密码功能尚不可用。",
      body: "Corpus 账户仍在构建中，因此没有可以重置的密码。没有发送任何电子邮件，也没有存储任何内容。",
    },
  },

  status: {
    exploreAction: "继续前往“探索”",
  },

  plates: {
    label: "解剖图版",
    marked: "标注：{structure}",
    note: "简化的教学示意图。",
    signIn: {
      number: "图版 I",
      view: "外观",
      alt: "人类心脏的水彩习作，主动脉与大血管从上方升起",
    },
    signUp: {
      number: "图版 II",
      view: "侧面观",
      alt: "从侧面看的人脑水彩习作，下方是小脑与脑干",
    },
    forgotPassword: {
      number: "图版 III",
      view: "前面观",
      alt: "肺的水彩习作，气管分出层层分支的气道",
    },
  },
};
