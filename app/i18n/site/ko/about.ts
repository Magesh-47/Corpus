import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "Corpus 소개 — 해부학 아틀리에",
    description:
      "Corpus가 해부학을 시각 언어로 다루는 이유. 3D 장기, 채색 도판, 라틴어 용어로 보고, 다루고, 떠올리며 몸을 배우도록 만들었으며, {count}개 언어로 제공합니다.",
  },

  plate: "도판 {number}",

  hero: {
    eyebrow: "Corpus 소개",
    titleFirst: "해부학은 시각 언어다.",
    titleSecond: "우리는 그것을 배울 곳을 만들었다.",
    contents: "목차",
    lede: "Corpus는 해부학 아틀리에입니다. 3D 장기와 채색 도판, 정확한 라틴어 이름을 한데 모아, 가까이 들여다보며 몸을 배울 수 있게 했습니다.",
    alt: "왼쪽에서 본 사람 뇌의 수채화. 아래에 소뇌와 뇌줄기가 있습니다.",
  },

  depth: {
    label: "깊이",
    titleFirst: "몸은 너무 복잡해서",
    titleSecond: "평면 그림으로는 배울 수 없다.",
    intro: "여러 세대 동안 해부학은 도해와 아틀라스, 목록과 이름표로 가르쳐 왔습니다.",
    valuable: "이 도구들은 소중합니다.",
    turn: "하지만 몸은 평면이 아닙니다.",
    truths: {
      overlap: "구조는 겹칩니다.",
      connect: "계통은 이어집니다.",
      space: "장기는 공간을 차지합니다.",
      form: "형태는 기능을 바꿉니다.",
    },
    close: "Corpus는 바로 그 현실 위에 세워졌습니다.",
    caption: "몸 안에서, 그리고 온전한 장기로.",
    bodyAlt: "가슴에 양쪽 폐가 그려진 사람 몸의 수채화. 확대한 원 안에 공기주머니 무리가 보입니다.",
    organAlt: "양쪽 폐의 수채화. 기관이 가지를 치는 기도로 갈라집니다.",
  },

  atelier: {
    label: "이름",
    title: "해부학 아틀리에",
    meaning: "아틀리에는 작업실, 곧 공방이나 화실을 뜻합니다.",
    body: "Corpus는 해부학을 그저 읽는 대상이 아니라 직접 손을 대어 다루는 대상으로 여깁니다.",
    verbsTitle: "아틀리에에서",
    verbs: {
      observe: { verb: "관찰합니다.", note: "모델을 돌리고 가까이 다가가세요." },
      manipulate: { verb: "다룹니다.", note: "장기를 단독으로 보거나 단면을 잘라 보세요." },
      compare: { verb: "비교합니다.", note: "한 장기를 다른 장기 옆에 두어 보세요." },
      question: { verb: "질문합니다.", note: "구조를 선택해 이름과 역할을 확인하세요." },
      practice: { verb: "연습합니다.", note: "제시된 구조를 찾아내며 스스로 점검하세요." },
    },
    studioAlt:
      "그림으로 그린 작업대. 연필로 그린 심장 습작이 핀으로 꽂혀 있고, 회전대 위에 채색한 한 쌍의 콩팥이 지시선 이름표, 라틴어 이름과 함께 놓여 있습니다.",
  },

  principles: {
    label: "원칙",
    lines: {
      science: "과학이 먼저.",
      story: "이야기는 그다음.",
      visuals: "시각화는 언제나.",
    },
    columns: {
      scientific: {
        label: "과학적",
        title: "해부학적 구조와 용어에 근거합니다.",
        body: "구조의 이름은 국제 해부학 용어 표준인 Terminologia Anatomica를 따릅니다.",
      },
      visual: {
        label: "시각적",
        title: "공간적 이해를 중심으로 설계했습니다.",
        body: "장기는 인쇄된 한 장면이 아니라 돌리고, 자르고, 비교할 수 있는 모델입니다.",
      },
      educational: {
        label: "교육적",
        title: "능동적 탐색과 회상을 중심으로 만들었습니다.",
        body: "모델에서 구조를 직접 찾고, 맞았는지 바로 확인합니다.",
      },
    },
    note: "모델과 일러스트는 교육용으로 단순화한 표현입니다. Corpus는 학습을 위한 것이며 의학적 조언이 아닙니다.",
  },

  world: {
    label: "언어",
    title: "세계를 위해 만들다.",
    body: {
      languages:
        "장기 이름과 설명부터 모든 구조 이름표까지, ‘탐색’의 해부학 콘텐츠는 {count}개 언어로 제공됩니다.",
      scripts:
        "아랍어에서는 전체 레이아웃이 오른쪽에서 왼쪽으로 읽힙니다. 중국어, 일본어, 한국어는 각 문자에 맞게 만든 서체로 표시됩니다.",
      latin:
        "모든 언어 아래에는 같은 라틴어 용어가 있습니다. 덕분에 카이로의 학생과 서울의 학생은 무엇이라 부르든 같은 구조를 가리킬 수 있습니다.",
      honest:
        "번역은 세심함이 필요한, 계속 이어지는 작업입니다. 다듬어 가는 동안에는 언어에 따라 자연스러움에 차이가 있을 수 있습니다.",
    },
    namesTitle: "하나의 구조, {count}개의 이름",
    namesCaption: "‘탐색’이 각 언어로 부르는 심장의 이름. 라틴어 용어는 그대로입니다.",
  },

  closing: {
    titleFirst: "우리는 인체를 보는",
    titleSecond: "더 나은 방법을 만들고 있다.",
    cta: "Corpus 탐색하기",
  },
};
