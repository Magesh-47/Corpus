import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — 예술가처럼 배우는 해부학",
    description:
      "인체를 정밀한 3D로 탐색하세요. 심장, 뇌, 폐를 비롯한 장기를 돌려 보고, 표면 아래를 들여다보고, 그 안의 구조를 스스로 확인해 보세요.",
  },

  hero: {
    eyebrow: "해부학, 새롭게 보다",
    title: "예술가처럼\n해부학을 배우다.",
    lede: "정밀한 3D 해부학으로 인체를 탐색하고, 표면 아래의 구조를 발견하며, 도해를 넘어서는 이해를 쌓아 보세요.",
    primary: "인체 탐색하기",
    secondary: "Corpus 알아보기",
    supportingLabel: "Corpus란",
    supporting: {
      anatomy: "3D 해부학",
      visual: "시각적 학습",
      languages: "다국어 지원",
    },
    plate: {
      number: "도판 I",
      view: "앞가쪽면",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "머리와 목, 가슴의 표층 근육.",
      alt: "피부를 벗겨 낸 해부학 흉상으로, 얼굴과 목, 어깨, 가슴의 표층 근육이 드러나 있습니다. 머리는 한쪽으로 돌린 채 위를 향해 들려 있습니다.",
      legendLabel: "이 도판에 표시된 구조",
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
    title: "해부학 아틀리에",
    line: "인체를 입체적인 하나의 시스템으로 탐색하세요.",
  },

  philosophy: {
    eyebrow: "철학",
    title: "해부학은 평면 위에서\n외우는 것이 아니다.",
    lede: "인체는 입체적이고, 서로 연결되어 있으며, 끊임없이 움직입니다. Corpus는 해부학을 직접 보고, 탐색하고, 이해할 수 있는 것으로 바꿉니다.",
    steps: {
      see: {
        label: "보기",
        title: "표면 아래를 들여다보다.",
        body: "인체를 평면 도해로 축소하지 말고, 구조를 공간 속에서 탐색하세요.",
        alt: "옆면이 보이도록 돌린 ‘탐색’의 3D 심장. 위쪽으로 대혈관이 솟아 있습니다.",
        caption: "‘탐색’에서 돌려 본 심장.",
      },
      understand: {
        label: "이해",
        title: "조각들을 잇다.",
        body: "하나의 구조에서 출발해 그 기능과 관계, 혈액 공급, 조직, 임상적 맥락으로 나아가세요.",
        alt: "옆에서 본 뇌의 수채화.",
        caption: "‘탐색’에서 뇌와 함께 보여 주는 정보.",
        facets: {
          function: "기능",
          bloodSupply: "혈액 공급",
          tissue: "조직",
          clinical: "임상적 맥락",
        },
      },
      remember: {
        label: "기억",
        title: "지식을 살아 있게 하다.",
        body: "구조를 찾아내고, 탐색하고, 떠올리며 스스로 확인하세요.",
        alt: "폐와 기관의 수채화. 네 개의 구조에 번호가 표시되어 있습니다.",
        caption: "정지된 이름 붙이기 연습지입니다. ‘탐색’에서는 이름이 제시된 구조를 3D 모델에서 직접 찾습니다.",
        blank: "이 구조의 이름은?",
        answers: "정답",
      },
    },
  },

  collection: {
    eyebrow: "컬렉션",
    title: "몸 어디에서든 시작하세요.",
    lede: "우리를 인간으로 만드는 구조를 탐색하세요 — 심장의 리듬부터 뇌의 정교한 짜임까지.",
    explore: "탐색하기",
    lines: {
      heart: "순환계의 중심에서 뛰는 근육 펌프.",
      brain: "신경계의 지휘 본부.",
      lungs: "산소가 혈액으로 들어가고 이산화탄소가 빠져나오는 기관.",
      liver: "수백 가지 필수 기능을 수행하는 대사의 중심.",
      kidneys: "몸 안 환경의 조성을 조절하는 여과 장치.",
      eyeball: "빛을 시각 정보로 바꾸는 감각 기관.",
    },
    more: "‘탐색’에서 더 볼 수 있는 장기: {organs}.",
    note: "일러스트와 3D 모델은 교육용으로 단순화한 표현입니다.",
  },

  explore: {
    title: "해부학을 보기만 하지 마세요.\n탐색하세요.",
    lede: "돌려 보세요. 단독으로 보세요. 구조를 따라가 보세요. 모든 것이 어떻게 이어지는지 확인하세요.",
    cta: "해부학 아틀라스 열기",
    still: "‘탐색’의 한 장면",
    alt: "‘탐색’에서 앞에서 본 3D 심장. 선택할 수 있는 구조가 점으로 표시되어 있습니다.",
    caption: "모델 위의 점 하나하나가 구조입니다. 선택하면 이름과 역할을 볼 수 있습니다.",
    controlsLabel: "뷰어에서",
  },

  features: {
    eyebrow: "뷰어 안에서",
    title: "표본의 모든 각도.",
    items: {
      rotate: {
        label: "회전",
        line: "구조를 모든 각도에서 보세요.",
        body: "끌어서 모델을 돌리고, 공부하는 부분을 확대하세요.",
        alt: "뒷면이 보이도록 돌린 3D 심장.",
      },
      isolate: {
        label: "단독 보기",
        line: "중요한 것에 집중하세요.",
        body: "주변을 걷어 내고 장기 하나만 따로 살펴보세요.",
        alt: "홀로 떠 있는 3D 눈. 뒤쪽으로 시신경이 뻗어 나옵니다.",
      },
      section: {
        label: "단면",
        line: "표면 아래에 무엇이 있는지 이해하세요.",
        body: "절단면을 모델에 통과시켜, 드러난 윤곽으로 형태를 읽어 보세요.",
        alt: "절단면에 의해 반으로 잘린 3D 심장.",
      },
      compare: {
        label: "비교",
        line: "관계를 통해 해부학을 보세요.",
        body: "한 장기를 다른 장기 옆에 두고 역할과 크기를 비교하세요.",
        alt: "나란히 놓인 3D 뇌와 심장.",
      },
    },
    note: "‘탐색’의 3D 뷰어에서 캡처한 장면입니다.",
  },

  story: {
    title: "몸은 도해의 모음이 아니라\n하나의 시스템이다.",
    body: "Corpus는 개별 장기에서 출발해, 몸을 움직이게 하는 관계로 나아가도록 돕습니다.",
    alt: "가슴 안에 놓인 모습 그대로 함께 배치한 3D 폐와 심장. 기관, 양쪽 폐, 심장, 대동맥에 이름표가 붙어 있습니다.",
    caption: "‘탐색’의 모델로 구성한 심장과 폐. 위치는 단순화했습니다.",
    legendLabel: "이 구성에 표시된 구조",
  },

  practice: {
    eyebrow: "능동적 회상",
    title: "먼저 보세요.\n그다음 아는지 증명하세요.",
    lede: "이름 붙이기와 구조 찾기 과제로 탐색을 능동적 회상으로 바꾸세요.",
    cta: "스스로 확인하기",
    identify: "찾기",
    alt: "‘탐색’의 3D 뇌. 네 개의 구조에 1부터 4까지 번호가 표시되어 있습니다.",
    caption: "‘탐색’의 이름 맞히기 퀴즈 장면입니다. 모델에서 구조를 선택해 답합니다.",
  },

  ai: {
    eyebrow: "준비 중인 기능",
    title: "도해가 답하지 못하는\n질문을 위한 안내자.",
    lede: "Corpus는 구조를 설명하고, 개념을 연결하고, 탐색을 안내하며, 대화를 통해 배울 수 있도록 돕는 AI 해부학 가이드와 함께 설계되고 있습니다.",
    exampleLabel: "예시로 만든 대화",
    you: "나",
    corpus: "Corpus",
    question: "왜 좌심실이 우심실보다 두꺼운가요?",
    answer:
      "좌심실은 혈액을 온몸순환으로 내보내기 때문에 우심실보다 훨씬 높은 압력을 만들어 내야 합니다.",
    status: "개발 중",
    disclaimer: "직접 작성한 예시일 뿐, 실제로 작동하는 어시스턴트가 아닙니다. 아직 대화할 수 있는 가이드는 없습니다.",
  },

  languages: {
    eyebrow: "12개 언어",
    title: "생각하는 그 언어로\n만나는 해부학.",
    lede: "Corpus는 전 세계 학습자를 위해 만들어졌습니다. 다국어 인터페이스와 함께, 라틴어 용어에 뿌리를 둔 공통의 해부학 어휘를 제공합니다.",
    wallLabel: "열두 언어로 만나는 Corpus",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "아랍어는 오른쪽에서 왼쪽으로 읽으며, 인터페이스도 그에 맞춰 좌우가 바뀝니다.",
    latinNote: "라틴어 이름은 모든 언어에서 같습니다.",
  },

  rigor: {
    title: "탐색하고 싶을 만큼 아름답게.\n믿을 수 있을 만큼 정확하게.",
    lede: "Corpus는 시각적 스토리텔링에 해부학 용어, 구조화된 데이터, 의학에 근거한 교육 콘텐츠를 더합니다.",
    pillars: {
      accuracy: {
        title: "해부학적 정확성",
        body: "구조는 확립된 해부학 용어에 근거합니다.",
      },
      knowledge: {
        title: "구조화된 지식",
        body: "모든 구조는 맥락 정보와 연결됩니다.",
      },
      clarity: {
        title: "시각적 명료함",
        body: "복잡한 해부학을 불필요한 복잡함 없이 보여 줍니다.",
      },
    },
    entry: {
      label: "Corpus 속 구조 하나",
      term: "Terminologia Anatomica",
      name: "이름",
      organ: "장기",
      role: "역할",
    },
    note: "Corpus는 교육용입니다. 의학적 조언이 아닙니다.",
  },

  audience: {
    eyebrow: "호기심 많은 이들을 위해",
    title: "하나의 몸.\n배우는 길은 여러 가지.",
    groups: {
      students: {
        title: "학생",
        body: "흩어진 이름표를 외우는 대신 공간적 이해를 쌓으세요.",
        cta: "학생으로 탐색하기",
      },
      educators: {
        title: "교육자",
        body: "인터랙티브한 시각적 탐색으로 해부학을 교실에 들여오세요.",
        cta: "교육자용 안내",
      },
      curious: {
        title: "호기심 많은 이들",
        body: "인체는 존재하는 가장 경이로운 것 가운데 하나입니다. 그 이유만으로도 탐색해 볼 만합니다.",
        cta: "탐색 시작하기",
      },
    },
  },

  closing: {
    title: "몸은 하나의 걸작이다.",
    line: "그것을 보는 법을 배우세요.",
    cta: "인체 탐색하기",
  },
};
