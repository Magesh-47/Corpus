import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "Sobre o Corpus — Ateliê de anatomia",
    description:
      "Por que o Corpus trata a anatomia como uma linguagem visual: órgãos em 3D, pranchas pintadas e terminologia latina, feitos para aprender o corpo olhando, manuseando e relembrando, em {count} idiomas.",
  },

  plate: "Prancha {number}",

  hero: {
    eyebrow: "Sobre o Corpus",
    titleFirst: "A anatomia é uma linguagem visual.",
    titleSecond: "Criamos um lugar para aprendê-la.",
    contents: "Sumário",
    lede: "O Corpus é um ateliê de anatomia: órgãos em 3D, pranchas pintadas e nomes latinos precisos, organizados para que você aprenda o corpo olhando de perto.",
    alt: "Pintura em aquarela do cérebro humano visto pelo lado esquerdo, com o cerebelo e o tronco encefálico abaixo.",
  },

  depth: {
    label: "Profundidade",
    titleFirst: "O corpo é complexo demais",
    titleSecond: "para ser aprendido como uma imagem plana.",
    intro: "Por gerações, a anatomia foi ensinada com diagramas, atlas, listas e rótulos.",
    valuable: "Essas ferramentas têm valor.",
    turn: "Mas o corpo não é plano.",
    truths: {
      overlap: "As estruturas se sobrepõem.",
      connect: "Os sistemas se conectam.",
      space: "Os órgãos ocupam espaço.",
      form: "A forma muda a função.",
    },
    close: "O Corpus foi construído em torno dessa realidade.",
    caption: "No corpo e como órgão inteiro.",
    bodyAlt: "Figura em aquarela de um corpo humano com os dois pulmões desenhados no tórax e um círculo ampliado mostrando cachos de alvéolos.",
    organAlt: "Pintura em aquarela dos dois pulmões, com a traqueia se dividindo em vias aéreas ramificadas.",
  },

  atelier: {
    label: "O nome",
    title: "Ateliê de anatomia",
    meaning: "Ateliê é a oficina, o estúdio onde se trabalha com as mãos.",
    body: "O Corpus trata a anatomia como algo com que você trabalha, e não algo que você apenas lê.",
    verbsTitle: "No ateliê",
    verbs: {
      observe: { verb: "Você observa.", note: "Gire um modelo e aproxime-se." },
      manipulate: { verb: "Você manipula.", note: "Isole um órgão ou faça um corte transversal." },
      compare: { verb: "Você compara.", note: "Coloque um órgão ao lado de outro." },
      question: { verb: "Você pergunta.", note: "Selecione uma estrutura para ver o nome e a função." },
      practice: { verb: "Você pratica.", note: "Encontre cada estrutura quando for pedido e confira você mesmo." },
    },
    studioAlt:
      "Uma mesa de estudo desenhada: um esboço a lápis do coração preso a ela e um par de rins pintados sobre uma base giratória, identificados com linhas de chamada e seu nome em latim.",
  },

  principles: {
    label: "Princípios",
    lines: {
      science: "Ciência, primeiro.",
      story: "Narrativa, depois.",
      visuals: "Imagem, sempre.",
    },
    columns: {
      scientific: {
        label: "Científico",
        title: "Fundamentado na estrutura e na terminologia anatômicas.",
        body: "As estruturas são nomeadas segundo a Terminologia Anatomica, o padrão internacional de termos anatômicos.",
      },
      visual: {
        label: "Visual",
        title: "Pensado para a compreensão espacial.",
        body: "Os órgãos são modelos que você pode girar, cortar e comparar, e não uma única vista impressa.",
      },
      educational: {
        label: "Educacional",
        title: "Construído em torno da exploração ativa e da recordação.",
        body: "Você mesmo encontra as estruturas no modelo e vê na hora se acertou.",
      },
    },
    note: "Os modelos e as ilustrações são representações educacionais simplificadas. O Corpus serve para aprender; não é aconselhamento médico.",
  },

  world: {
    label: "Idiomas",
    title: "Feito para o mundo.",
    body: {
      languages:
        "A anatomia do Explorar, dos nomes e das descrições dos órgãos a cada rótulo de estrutura, está disponível em {count} idiomas.",
      scripts:
        "Em árabe, todo o layout é lido da direita para a esquerda. Chinês, japonês e coreano são compostos em fontes criadas para as suas escritas.",
      latin:
        "Sob cada idioma está o mesmo termo em latim. É ele que faz um estudante no Cairo e outro em Seul apontarem para a mesma estrutura, seja qual for o nome que deem a ela.",
      honest:
        "A tradução é um trabalho cuidadoso e contínuo, e alguns idiomas vão soar mais naturais do que outros enquanto os aprimoramos.",
    },
    namesTitle: "Uma estrutura, {count} nomes",
    namesCaption: "O coração, como o Explorar o chama em cada idioma. O termo em latim continua o mesmo.",
  },

  closing: {
    titleFirst: "Estamos construindo uma forma melhor",
    titleSecond: "de ver o corpo humano.",
    cta: "Explore o Corpus",
  },
};
