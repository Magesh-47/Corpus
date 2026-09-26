import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: {
      title: "로그인",
      description: "Corpus에 로그인합니다. 계정은 출시 예정이며, ‘탐색’은 계정 없이도 이용할 수 있습니다.",
    },
    signUp: {
      title: "계정 만들기",
      description: "Corpus 계정을 만듭니다. 계정은 출시 예정이며, ‘탐색’은 계정 없이도 이용할 수 있습니다.",
    },
    forgotPassword: {
      title: "비밀번호 재설정",
      description: "Corpus 비밀번호를 재설정합니다. 계정은 출시 예정이며, ‘탐색’은 계정 없이도 이용할 수 있습니다.",
    },
  },

  shell: {
    back: "사이트로 돌아가기",
    disclaimer: "Corpus는 해부학 학습을 위한 것입니다. 의학적 조언이 아닙니다.",
    helpLink: "도움말",
  },

  notice: {
    title: "계정은 출시 예정입니다.",
    body: "배우는 데 계정은 필요 없습니다. ‘탐색’의 모든 기능은 계정 없이 작동합니다.",
    action: "탐색 열기",
  },

  fields: {
    name: { label: "이름" },
    email: { label: "이메일" },
    password: { label: "비밀번호" },
    newPassword: { label: "비밀번호", hint: "{min}자 이상 입력하세요." },
    confirmPassword: { label: "비밀번호 확인" },
  },

  passwordToggle: {
    show: "보기",
    hide: "숨기기",
    showLabel: "비밀번호 보기",
    hideLabel: "비밀번호 숨기기",
  },

  errors: {
    summary: "확인이 필요한 항목이 있습니다. 각 입력란 아래의 메시지를 확인하세요.",
    nameRequired: "이름을 입력하세요.",
    emailRequired: "이메일 주소를 입력하세요.",
    emailInvalid: "name@example.com 형식으로 이메일 주소를 입력하세요.",
    passwordRequired: "비밀번호를 입력하세요.",
    passwordTooShort: "{min}자 이상 입력하세요.",
    confirmRequired: "비밀번호를 한 번 더 입력하세요.",
    confirmMismatch: "두 비밀번호가 일치하지 않습니다.",
  },

  signIn: {
    eyebrow: "로그인",
    title: "다시 오신 것을 환영합니다.",
    lede: "인체 탐색을 이어 가세요.",
    submit: "로그인",
    busy: "로그인 중…",
    forgot: "비밀번호를 잊으셨나요?",
    switchPrompt: "Corpus가 처음이신가요?",
    switchAction: "계정 만들기",
    unavailable: {
      title: "아직 로그인할 수 없습니다.",
      body: "Corpus 계정 기능은 아직 개발 중이어서, 아무것도 전송되거나 저장되지 않았습니다. 입력한 비밀번호는 양식에서 지웠습니다.",
    },
  },

  signUp: {
    eyebrow: "계정 만들기",
    title: "탐색을 시작하세요.",
    lede: "Corpus 계정을 만들고 나만의 해부학 연습을 쌓아 가세요.",
    submit: "계정 만들기",
    busy: "계정 만드는 중…",
    switchPrompt: "이미 계정이 있으신가요?",
    switchAction: "로그인",
    unavailable: {
      title: "아직 계정을 만들 수 없습니다.",
      body: "Corpus 계정 기능은 아직 개발 중이어서, 아무것도 전송되거나 저장되지 않았습니다. 입력한 비밀번호는 양식에서 지웠습니다.",
    },
  },

  forgotPassword: {
    eyebrow: "비밀번호 찾기",
    title: "비밀번호를 재설정하세요.",
    lede: "이메일을 입력하시면 Corpus로 돌아올 수 있도록 도와드리겠습니다.",
    submit: "재설정 링크 보내기",
    busy: "보내는 중…",
    switchPrompt: "기억나셨나요?",
    switchAction: "로그인으로 돌아가기",
    unavailable: {
      title: "아직 비밀번호를 재설정할 수 없습니다.",
      body: "Corpus 계정 기능은 아직 개발 중이어서 재설정할 비밀번호가 없습니다. 이메일은 전송되지 않았고, 아무것도 저장되지 않았습니다.",
    },
  },

  status: {
    exploreAction: "탐색으로 계속하기",
  },

  plates: {
    label: "해부학 도판",
    marked: "표시된 구조: {structure}",
    note: "교육용으로 단순화한 그림입니다.",
    signIn: {
      number: "도판 I",
      view: "외관",
      alt: "사람 심장의 수채 습작. 위로 대동맥과 대혈관이 솟아 있습니다",
    },
    signUp: {
      number: "도판 II",
      view: "옆면",
      alt: "옆에서 본 사람 뇌의 수채 습작. 아래에 소뇌와 뇌줄기가 있습니다",
    },
    forgotPassword: {
      number: "도판 III",
      view: "앞면",
      alt: "폐의 수채 습작. 기관이 가지를 치는 기도로 갈라집니다",
    },
  },
};
