import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Corpus 요금 — 해부학 학습",
    description:
      "계정 없이 Corpus에서 핵심 해부학을 3D로 무료 탐색하세요. Corpus Plus와 교육용 플랜은 개발 중이며 아직 가격이 정해지지 않았습니다.",
  },

  hero: {
    eyebrow: "요금",
    titleLead: "인체를 탐색하세요.",
    titleRest: "얼마나 깊이 들어갈지는 직접 고르세요.",
    lede: "핵심 해부학은 지금 계정도 결제도 없이 무료로 탐색할 수 있습니다. Corpus Plus와 교육용 플랜은 아직 개발 중이어서 둘 다 가격이 없습니다.",
    primary: "탐색 시작하기",
    secondary: "플랜 비교하기",
    plate: {
      label: "도판: {organ}의 단면",
      alt: "층이 드러나도록 잘라 낸 피부 조각의 수채화. 표면, 털집과 샘과 혈관이 있는 진피, 그 아래의 노란 지방이 보입니다",
      caption: "표면에서 그 아래 지방까지. 같은 층이 3D 모델에도 표시되어 있으며, 무료로 탐색할 수 있습니다.",
    },
  },

  plans: {
    title: "플랜",
    summary: "지금 이용할 수 있는 플랜은 하나입니다. 두 플랜은 개발 중입니다.",
    numberLabel: "플랜 {number}",
    learnMore: "{plan} 자세히 알아보기",
    items: {
      free: {
        name: "무료",
        tagline: "핵심 해부학을 탐색하세요.",
        price: "비용 없음",
        priceNote: "계정 필요 없음",
        description: "현재 모습 그대로의 ‘탐색’ 전체를, 최신 브라우저만 있으면 누구나 이용할 수 있습니다.",
        listHeading: "지금 포함된 기능",
        list: {
          organs: "심장과 뇌부터 피부까지, 3D 장기 {organCount}개",
          viewer: "회전과 확대, 그리고 단독 보기·단면·레이어 보기",
          hotspots: "라틴어 용어가 함께 붙은 이름 있는 구조 {structureCount}개",
          cards: "조직, 기능, 질환, 비교를 다루는 학습 카드",
          quiz: "모델에서 구조를 찾아보는 이름 맞히기 퀴즈",
          languages: "{languageCount}개 언어로 된 장기 설명",
        },
        cta: "탐색 시작하기",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "앞으로 마련할 학습·개인화 기능으로 더 깊이 들어갑니다.",
        price: "아직 가격 없음",
        priceNote: "개발 중",
        description: "핵심 컬렉션보다 더 나아가고, 학습한 내용으로 다시 돌아가고 싶은 분들을 위해 계획 중입니다.",
        listHeading: "검토 중인 내용",
        list: {
          depth: "지금 제공하는 장기를 넘어 더 넓은 인체",
          study: "탐색한 것을 연습하고 기억하도록 돕는 도구",
          guidance: "3D 모델 옆에서 제공하는 안내형 설명",
          progress: "이미 학습한 내용으로 돌아가는 방법",
        },
        cta: "자세히 알아보기",
      },
      education: {
        name: "교육용",
        tagline: "Corpus를 가르치고 배우는 현장으로 가져갑니다.",
        price: "아직 가격 없음",
        priceNote: "개발 중",
        description: "수업이나 강좌에 Corpus를 활용하려는 교사와 학교를 위해 계획 중입니다.",
        listHeading: "검토 중인 내용",
        list: {
          classroom: "학급 전체가 함께 Corpus를 사용하는 방법",
          teaching: "해부학 수업 준비와 진행 지원",
          practice: "학생들이 함께 풀어 볼 수 있는 연습",
        },
        cta: "자세히 알아보기",
      },
    },
    plannedNote: "개발 중인 플랜은 방향일 뿐 약속이 아닙니다. 기능, 시기, 가격은 정해지지 않았으며, 이 페이지에서 구매할 수 있는 것은 없습니다.",
  },

  comparison: {
    eyebrow: "비교",
    title: "플랜별 포함 내용.",
    lede: "무료 열은 현재의 Corpus를 설명합니다. 나머지 두 열은 개발 중인 플랜을 설명하며, 달라질 수 있습니다.",
    caption: "플랜별 기능. 무료는 지금 이용할 수 있고, Corpus Plus와 교육용은 개발 중입니다.",
    featureHeading: "기능",
    status: {
      available: "지금 이용 가능",
      planned: "계획 중",
      undecided: "미정",
      unavailable: "이용 불가",
      otherPlan: "이 플랜에 없음",
    },
    rows: {
      exploration: {
        name: "3D 해부학 탐색",
        free: "회전, 확대, 단독 보기, 단면, 레이어",
        plus: "무료 플랜의 모든 기능",
        education: "무료 플랜의 모든 기능",
      },
      library: {
        name: "장기 라이브러리",
        free: "장기 {organCount}개, 검색 가능",
        plus: "더 넓은 인체",
        education: "무료 플랜의 모든 기능",
      },
      structures: {
        name: "해부학적 구조",
        free: "라틴어 용어가 붙은 구조 {structureCount}개",
        plus: "무료 플랜의 모든 기능",
        education: "무료 플랜의 모든 기능",
      },
      learning: {
        name: "인터랙티브 학습",
        free: "조직, 기능, 질환, 비교를 다루는 학습 카드",
        plus: "더 깊은 학습 도구",
        education: "수업용 자료",
      },
      practice: {
        name: "연습",
        free: "3D 모델에서 푸는 이름 맞히기 퀴즈",
        plus: "더 다양한 연습 방법",
        education: "학급 전체를 위한 연습",
      },
      guidance: {
        name: "AI 안내",
        free: "현재 Corpus에는 AI 기능이 없습니다",
        plus: "모델 옆에서 제공하는 안내형 설명",
        education: "이 플랜에서는 아직 정해지지 않음",
      },
      progress: {
        name: "맞춤형 진도",
        free: "방문 사이에 진도가 저장되지 않습니다",
        plus: "학습한 내용으로 돌아가는 방법",
        education: "이 플랜에서는 아직 정해지지 않음",
      },
      educators: {
        name: "교육자 도구",
        free: "현재 교육자 도구 없음",
        plus: "대신 교육용 플랜에서 계획 중",
        education: "수업 준비와 진행 지원",
      },
    },
  },

  collection: {
    eyebrow: "무료에 포함",
    title: "모두에게 열린 무료 컬렉션.",
    lede: "각 장기에는 3D 모델, 그림 도판, 이름 붙은 구조가 있습니다. 하나를 골라 ‘탐색’에서 열어 보세요.",
    plateLabel: "도판 {number}",
    structures: "이름 붙은 구조: {count}개",
    openOrgan: "{organ}: ‘탐색’에서 열기",
    footnote: "모델과 일러스트는 임상 참고 자료가 아니라 교육용으로 단순화한 표현이며, Corpus의 어떤 내용도 의학적 조언이 아닙니다.",
  },

  faq: {
    eyebrow: "질문",
    title: "쉬운 질문, 솔직한 답.",
    items: {
      account: {
        q: "계정이 필요한가요?",
        a: "아니요. 로그인하지 않고도 ‘탐색’을 열어 바로 시작할 수 있습니다.",
      },
      payments: {
        q: "지금 Corpus Plus나 교육용 플랜을 결제할 수 있나요?",
        a: "아니요. 두 플랜 모두 이용할 수 없고, 가격도 정해지지 않았으며, Corpus는 현재 어떤 종류의 결제도 받지 않습니다. 플랜이 준비되면 이곳에서 안내하겠습니다.",
      },
      classroom: {
        q: "지금 수업에서 Corpus를 사용할 수 있나요?",
        a: "네. ‘탐색’은 무료이고 계정이 필요 없어, 학생들이 최신 브라우저에서 바로 열 수 있습니다. 수업용 도구와 교육자 도구는 아직 제공되지 않습니다.",
      },
    },
  },

  closing: {
    eyebrow: "시작",
    titleLead: "어디서 시작할지 모르겠나요?",
    titleRest: "무료로 해부학 탐색을 시작하세요.",
    cta: "Corpus 탐색하기",
    imageAlt: "현미경으로 본 피부의 수채화. 분홍빛으로 층진 표피 아래에 더 느슨하고 물결치는 진피 조직이 있습니다",
    caption: "현미경으로 본 {organ}: {tissue}",
  },
};
