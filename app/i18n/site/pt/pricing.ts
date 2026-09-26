import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Preços do Corpus — Aprendizado de anatomia",
    description:
      "Explore de graça a anatomia essencial em 3D com o Corpus, sem precisar de conta. Corpus Plus e Educação estão em desenvolvimento e ainda não têm preço.",
  },

  hero: {
    eyebrow: "Preços",
    titleLead: "Explore o corpo.",
    titleRest: "Escolha até onde você quer ir.",
    lede: "A anatomia essencial já pode ser explorada de graça, sem conta e sem pagamento. Corpus Plus e Educação ainda estão em desenvolvimento, então nenhum dos dois tem preço por enquanto.",
    primary: "Comece a explorar",
    secondary: "Compare os planos",
    plate: {
      label: "Prancha: {organ}, em corte",
      alt: "Um bloco de pele em aquarela, cortado para mostrar suas camadas: a superfície, a derme com folículos pilosos, glândulas e vasos, e a gordura amarela por baixo",
      caption: "Da superfície à gordura mais profunda. As mesmas camadas estão rotuladas no modelo 3D, que pode ser explorado de graça.",
    },
  },

  plans: {
    title: "Os planos",
    summary: "Um plano está disponível hoje. Dois estão em desenvolvimento.",
    numberLabel: "Plano {number}",
    learnMore: "Saiba mais sobre {plan}",
    items: {
      free: {
        name: "Gratuito",
        tagline: "Explore a anatomia essencial.",
        price: "Sem custo",
        priceNote: "Sem precisar de conta",
        description: "A experiência completa do Explorar como ela é hoje, aberta a qualquer pessoa com um navegador moderno.",
        listHeading: "Incluído hoje",
        list: {
          organs: "{organCount} órgãos em 3D, do coração e do cérebro à pele",
          viewer: "Girar e zoom, com as vistas Isolar, Corte transversal e Camadas",
          hotspots: "{structureCount} estruturas rotuladas, cada uma com seu termo em latim",
          cards: "Cartões de aprendizagem sobre tecido, função, doenças e comparação",
          quiz: "Um quiz de identificação que pede que você encontre estruturas no modelo",
          languages: "Descrições dos órgãos em {languageCount} idiomas",
        },
        cta: "Comece a explorar",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "Vá mais fundo com futuros recursos de aprendizagem e personalização.",
        price: "Ainda sem preço",
        priceNote: "Em desenvolvimento",
        description: "Planejado para quem quer ir além da coleção essencial e voltar ao que já estudou.",
        listHeading: "O que estamos explorando",
        list: {
          depth: "Mais partes do corpo, além dos órgãos disponíveis hoje",
          study: "Ferramentas que ajudem você a praticar e lembrar o que explora",
          guidance: "Explicações guiadas ao lado dos modelos 3D",
          progress: "Uma forma de voltar ao que você já estudou",
        },
        cta: "Saiba mais",
      },
      education: {
        name: "Educação",
        tagline: "Leve o Corpus para ambientes de ensino e aprendizagem.",
        price: "Ainda sem preço",
        priceNote: "Em desenvolvimento",
        description: "Planejado para professores e escolas que queiram levar o Corpus para uma aula ou um curso.",
        listHeading: "O que estamos explorando",
        list: {
          classroom: "Formas de usar o Corpus com uma turma inteira ao mesmo tempo",
          teaching: "Apoio para preparar e conduzir aulas de anatomia",
          practice: "Exercícios que um grupo de estudantes possa fazer em conjunto",
        },
        cta: "Saiba mais",
      },
    },
    plannedNote: "Os planos em desenvolvimento são direções, não compromissos. Recursos, prazos e preços ainda não foram definidos, e nada nesta página pode ser comprado.",
  },

  comparison: {
    eyebrow: "Comparar",
    title: "O que cada plano inclui.",
    lede: "A coluna Gratuito descreve o Corpus como ele é hoje. As outras duas descrevem planos em desenvolvimento e podem mudar.",
    caption: "Recursos por plano. O Gratuito está disponível agora; Corpus Plus e Educação estão em desenvolvimento.",
    featureHeading: "Recurso",
    status: {
      available: "Disponível agora",
      planned: "Planejado",
      undecided: "Não decidido",
      unavailable: "Não disponível",
      otherPlan: "Não incluído neste plano",
    },
    rows: {
      exploration: {
        name: "Exploração anatômica em 3D",
        free: "Girar, zoom, isolar, corte transversal e camadas",
        plus: "Tudo do Gratuito",
        education: "Tudo do Gratuito",
      },
      library: {
        name: "Biblioteca de órgãos",
        free: "{organCount} órgãos, com pesquisa",
        plus: "Mais partes do corpo",
        education: "Tudo do Gratuito",
      },
      structures: {
        name: "Estruturas anatômicas",
        free: "{structureCount} estruturas rotuladas com termos em latim",
        plus: "Tudo do Gratuito",
        education: "Tudo do Gratuito",
      },
      learning: {
        name: "Aprendizagem interativa",
        free: "Cartões de aprendizagem sobre tecido, função, doenças e comparação",
        plus: "Ferramentas de estudo mais completas",
        education: "Material para usar em aula",
      },
      practice: {
        name: "Prática",
        free: "Um quiz de identificação no modelo 3D",
        plus: "Mais formas de praticar",
        education: "Prática para uma turma inteira",
      },
      guidance: {
        name: "Orientação com IA",
        free: "O Corpus não tem recursos de IA hoje",
        plus: "Explicações guiadas ao lado dos modelos",
        education: "Ainda não definido para este plano",
      },
      progress: {
        name: "Progresso personalizado",
        free: "O progresso não é salvo entre visitas",
        plus: "Uma forma de voltar ao que você estudou",
        education: "Ainda não definido para este plano",
      },
      educators: {
        name: "Ferramentas para educadores",
        free: "Nenhuma ferramenta para educadores hoje",
        plus: "Planejadas para o plano Educação",
        education: "Apoio para preparar e conduzir aulas",
      },
    },
  },

  collection: {
    eyebrow: "Incluído no Gratuito",
    title: "A coleção gratuita, aberta a todos.",
    lede: "Cada órgão tem um modelo 3D, uma prancha ilustrada e estruturas rotuladas. Escolha um para abri-lo no Explorar.",
    plateLabel: "Prancha {number}",
    structures: "Estruturas rotuladas: {count}",
    openOrgan: "{organ}: abrir no Explorar",
    footnote: "Os modelos e as ilustrações são representações educacionais simplificadas, não referências clínicas, e nada no Corpus é aconselhamento médico.",
  },

  faq: {
    eyebrow: "Perguntas",
    title: "Perguntas diretas, respostas diretas.",
    items: {
      account: {
        q: "Preciso de uma conta?",
        a: "Não. Você pode abrir o Explorar e começar na hora, sem entrar.",
      },
      payments: {
        q: "Posso pagar pelo Corpus Plus ou pelo Educação agora?",
        a: "Não. Nenhum dos dois planos está disponível, nenhum preço foi definido e o Corpus não aceita pagamentos de nenhum tipo hoje. Quando um plano estiver pronto, ele será descrito aqui.",
      },
      classroom: {
        q: "Posso usar o Corpus em sala de aula hoje?",
        a: "Sim. O Explorar é gratuito e não exige conta, então os estudantes podem abri-lo em um navegador moderno. As ferramentas para sala de aula e para educadores ainda não estão disponíveis.",
      },
    },
  },

  closing: {
    eyebrow: "Comece",
    titleLead: "Não sabe por onde começar?",
    titleRest: "Explore a anatomia de graça.",
    cta: "Explore o Corpus",
    imageAlt: "Uma aquarela da pele ao microscópio: a epiderme rosada, em camadas, sobre o tecido mais frouxo e ondulado da derme",
    caption: "{organ} ao microscópio: {tissue}",
  },
};
