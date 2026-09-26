import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — Aprenda anatomia como um artista",
    description:
      "Explore o corpo humano em 3D com riqueza de detalhes: gire o coração, o cérebro, os pulmões e outros órgãos, olhe sob a superfície e teste-se nas estruturas que eles contêm.",
  },

  hero: {
    eyebrow: "Anatomia, reinventada",
    title: "Aprenda anatomia\ncomo um artista.",
    lede: "Explore o corpo humano com anatomia 3D detalhada, descubra as estruturas sob a superfície e construa um entendimento que vai além do diagrama.",
    primary: "Explore o corpo",
    secondary: "Descubra o Corpus",
    supportingLabel: "O que é o Corpus",
    supporting: {
      anatomy: "Anatomia 3D",
      visual: "Aprendizado visual",
      languages: "Multilíngue",
    },
    plate: {
      number: "Prancha I",
      view: "Vista anterolateral",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "Os músculos superficiais da cabeça, do pescoço e do tórax.",
      alt: "Um busto anatômico sem pele, mostrando os músculos superficiais do rosto, do pescoço, do ombro e do tórax. A cabeça está virada para um lado e inclinada para cima.",
      legendLabel: "Estruturas marcadas nesta prancha",
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
    title: "O ateliê de anatomia",
    line: "Explore o corpo como um sistema tridimensional.",
  },

  philosophy: {
    eyebrow: "Filosofia",
    title: "A anatomia não se decora\nem duas dimensões.",
    lede: "O corpo é tridimensional, interligado e está em constante movimento. O Corpus transforma a anatomia em algo que você pode ver, explorar e compreender.",
    steps: {
      see: {
        label: "Ver",
        title: "Olhe sob a superfície.",
        body: "Explore as estruturas no espaço, em vez de reduzir o corpo a um diagrama plano.",
        alt: "O coração 3D do Explorar, girado para mostrar a face lateral, com os grandes vasos saindo pelo topo.",
        caption: "O coração, girado no Explorar.",
      },
      understand: {
        label: "Compreender",
        title: "Conecte as peças.",
        body: "Passe de uma estrutura à sua função, às suas relações, à irrigação, ao tecido e ao contexto clínico.",
        alt: "Ilustração em aquarela do cérebro visto de lado.",
        caption: "O que o Explorar mostra junto ao cérebro.",
        facets: {
          function: "Função",
          bloodSupply: "Irrigação",
          tissue: "Tecido",
          clinical: "Contexto clínico",
        },
      },
      remember: {
        label: "Lembrar",
        title: "Torne o conhecimento ativo.",
        body: "Teste-se identificando, explorando e relembrando.",
        alt: "Ilustração em aquarela dos pulmões e da traqueia, com quatro estruturas marcadas por números.",
        caption: "Uma folha estática para rotular. No Explorar, você encontra cada estrutura nomeada no modelo 3D.",
        blank: "Nomeie esta estrutura",
        answers: "Respostas",
      },
    },
  },

  collection: {
    eyebrow: "A coleção",
    title: "Comece por qualquer parte do corpo.",
    lede: "Explore as estruturas que nos tornam humanos — do ritmo do coração à arquitetura do cérebro.",
    explore: "Explorar",
    lines: {
      heart: "A bomba muscular no centro do sistema circulatório.",
      brain: "O centro de comando do sistema nervoso.",
      lungs: "Os órgãos onde o oxigênio entra no sangue e o gás carbônico sai dele.",
      liver: "Uma potência metabólica com centenas de funções essenciais.",
      kidneys: "Filtros que regulam a composição do meio interno do corpo.",
      eyeball: "Um órgão sensorial que transforma a luz em informação visual.",
    },
    more: "Também no Explorar: {organs}.",
    note: "As ilustrações e os modelos 3D são representações educacionais simplificadas.",
  },

  explore: {
    title: "Não se limite a olhar a anatomia.\nExplore-a.",
    lede: "Gire. Isole. Siga suas estruturas. Veja como tudo se conecta.",
    cta: "Abrir o atlas de anatomia",
    still: "Uma imagem do Explorar",
    alt: "O coração 3D no Explorar, visto de frente, com pontos marcando as estruturas que podem ser selecionadas.",
    caption: "Cada ponto no modelo é uma estrutura que você pode selecionar para ver o nome e a função.",
    controlsLabel: "No visualizador",
  },

  features: {
    eyebrow: "Dentro do visualizador",
    title: "O espécime, de todos os ângulos.",
    items: {
      rotate: {
        label: "Girar",
        line: "Veja as estruturas de todos os ângulos.",
        body: "Arraste para girar o modelo e aproxime a parte que você está estudando.",
        alt: "O coração 3D girado para mostrar a face posterior.",
      },
      isolate: {
        label: "Isolar",
        line: "Concentre-se no que importa.",
        body: "Deixe o entorno de lado e estude um órgão sozinho.",
        alt: "O olho 3D flutuando sozinho, com o nervo óptico saindo por trás.",
      },
      section: {
        label: "Corte transversal",
        line: "Entenda o que há sob a superfície.",
        body: "Passe um plano de corte pelo modelo e leia sua forma em perfil.",
        alt: "O coração 3D cortado ao meio por um plano de corte.",
      },
      compare: {
        label: "Comparar",
        line: "Veja a anatomia pelas suas relações.",
        body: "Coloque um órgão ao lado de outro para comparar seus papéis e sua escala.",
        alt: "O cérebro e o coração 3D lado a lado.",
      },
    },
    note: "Imagens capturadas do visualizador 3D do Explorar.",
  },

  story: {
    title: "O corpo é um sistema,\nnão uma coleção de diagramas.",
    body: "O Corpus ajuda você a passar dos órgãos isolados para as relações que fazem o corpo funcionar.",
    alt: "Os pulmões e o coração 3D compostos juntos, como ficam no tórax, com a traqueia, os dois pulmões, o coração e a aorta rotulados.",
    caption: "Coração e pulmões, compostos a partir dos modelos do Explorar. As posições são simplificadas.",
    legendLabel: "Estruturas rotuladas nesta composição",
  },

  practice: {
    eyebrow: "Recordação ativa",
    title: "Veja.\nDepois prove que sabe.",
    lede: "Transforme a exploração em recordação ativa com desafios de rotulagem e identificação anatômica.",
    cta: "Teste-se",
    identify: "Identifique",
    alt: "O cérebro 3D do Explorar com quatro estruturas marcadas pelos números de 1 a 4.",
    caption: "Uma imagem do quiz de identificação no Explorar, em que você responde selecionando a estrutura no modelo.",
  },

  ai: {
    eyebrow: "O que vem por aí",
    title: "Um guia para as perguntas\nque os diagramas não respondem.",
    lede: "O Corpus está sendo projetado com um guia de anatomia com IA, capaz de explicar estruturas, conectar conceitos, orientar a exploração e ajudar você a aprender conversando.",
    exampleLabel: "Uma conversa ilustrativa",
    you: "Você",
    corpus: "Corpus",
    question: "Por que o ventrículo esquerdo é mais espesso que o direito?",
    answer:
      "O ventrículo esquerdo bombeia o sangue pela circulação sistêmica, por isso precisa gerar uma pressão muito maior que a do ventrículo direito.",
    status: "Em desenvolvimento",
    disclaimer: "Um exemplo escrito, não um assistente em funcionamento. Ainda não existe um guia com quem conversar.",
  },

  languages: {
    eyebrow: "12 idiomas",
    title: "Anatomia no idioma\nem que você pensa.",
    lede: "O Corpus foi feito para estudantes do mundo todo, com interfaces multilíngues e um vocabulário anatômico comum, apoiado na terminologia latina.",
    wallLabel: "O Corpus em doze idiomas",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "O árabe é lido da direita para a esquerda, e a interface se espelha junto.",
    latinNote: "O nome em latim é o mesmo em todos os idiomas.",
  },

  rigor: {
    title: "Belo o bastante para explorar.\nPreciso o bastante para confiar.",
    lede: "O Corpus combina narrativa visual com terminologia anatômica, dados estruturados e conteúdo educacional com base médica.",
    pillars: {
      accuracy: {
        title: "Precisão anatômica",
        body: "As estruturas se apoiam na terminologia anatômica consagrada.",
      },
      knowledge: {
        title: "Conhecimento estruturado",
        body: "Cada estrutura se conecta a informações de contexto.",
      },
      clarity: {
        title: "Clareza visual",
        body: "A anatomia complexa é apresentada sem complicação desnecessária.",
      },
    },
    entry: {
      label: "Uma estrutura no Corpus",
      term: "Terminologia Anatomica",
      name: "Nome",
      organ: "Órgão",
      role: "Papel",
    },
    note: "O Corpus é para educação. Não é aconselhamento médico.",
  },

  audience: {
    eyebrow: "Feito para mentes curiosas",
    title: "Um só corpo.\nMuitas formas de aprendê-lo.",
    groups: {
      students: {
        title: "Estudantes",
        body: "Construa uma compreensão espacial em vez de decorar rótulos soltos.",
        cta: "Explorar como estudante",
      },
      educators: {
        title: "Educadores",
        body: "Leve a anatomia para a sala de aula com uma exploração visual e interativa.",
        cta: "Para educadores",
      },
      curious: {
        title: "Mentes curiosas",
        body: "Explore o corpo humano simplesmente porque ele é uma das coisas mais extraordinárias que existem.",
        cta: "Comece a explorar",
      },
    },
  },

  closing: {
    title: "O corpo é uma obra-prima.",
    line: "Aprenda a vê-lo.",
    cta: "Explore o corpo",
  },
};
