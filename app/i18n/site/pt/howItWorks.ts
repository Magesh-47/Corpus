import type { SiteDictionary } from "..";

export const howItWorks: SiteDictionary["howItWorks"] = {
  meta: {
    title: "Como o Corpus funciona — Explore a anatomia em 3D",
    description:
      "Escolha um órgão, gire o modelo 3D, leia sua localização, irrigação e função e depois teste-se encontrando suas estruturas. Veja como se aprende no Corpus.",
  },

  hero: {
    eyebrow: "Como funciona",
    title: {
      see: "Ver.",
      explore: "Explorar.",
      understand: "Compreender.",
      remember: "Lembrar.",
    },
    lede: "O Corpus transforma a anatomia em uma experiência visual ativa.",
    body: "Cinco etapas, um órgão de cada vez. As quatro primeiras já acontecem hoje no Explorar. A quinta ainda está por vir.",
    contentsLabel: "As cinco etapas",
  },

  steps: {
    see: {
      name: "Ver",
      title: "Comece pelo todo.",
      line: "Escolha um órgão e veja sua forma antes de se preocupar com os nomes.",
      body:
        "O Explorar abre com uma biblioteca de nove órgãos, do coração e do cérebro ao pâncreas e à pele. Escolha um e ele aparece inteiro. Suas estruturas são marcadas com pequenos pontos, e os nomes esperam até que você os peça.",
      plateLabel: "Prancha I",
      caption: "{organ}: a forma inteira. Um dos nove órgãos da biblioteca do Explorar.",
      alt: "Estudo em aquarela do coração humano visto de frente, com a aorta formando um arco acima dele",
    },
    explore: {
      name: "Explorar",
      title: "Percorra a estrutura.",
      line: "Gire, aproxime, isole e examine as relações anatômicas.",
      body:
        "Cada órgão é um modelo 3D. Arraste para girá-lo, role a tela ou faça o gesto de pinça para se aproximar e selecione um ponto para ver o nome da estrutura por baixo dele. Isolar, Corte transversal e Camadas mudam, cada um a seu modo, a maneira como você vê a mesma forma.",
      viewerLabel: "Visualizador 3D",
      controlsLabel: "Controles do visualizador",
      controls: {
        rotate: { name: "Girar", note: "Arrastar" },
        zoom: { name: "Zoom", note: "Rolar ou pinçar" },
        isolate: { name: "Isolar", note: "Só o órgão" },
        section: { name: "Corte transversal", note: "Ver o interior" },
      },
      caption: "Uma imagem do visualizador 3D no Explorar. Os rótulos dos controles foram desenhados aqui para ilustração.",
      alt: "Modelo 3D do coração no visualizador do Explorar, visto de frente sobre um pedestal, com pequenos pontos coloridos marcando estruturas nomeadas",
    },
    understand: {
      name: "Compreender",
      title: "Ligue a estrutura à função.",
      line: "Explore irrigação, localização, função, tecido e contexto clínico.",
      body:
        "Ao lado do modelo, um painel de informações apresenta o que o órgão é e o que ele faz. Os cartões de aprendizagem vão além: o tecido ao microscópio, uma comparação com outro órgão, onde ele atua no corpo e as doenças que costumam afetá-lo.",
      panelLabel: "Painel de informações",
      facts: {
        size: "Tamanho",
        location: "Localização",
        bloodSupply: "Irrigação",
        function: "Função",
        tissue: "Tecido",
      },
      conditionsLabel: "Contexto clínico",
      caption: "{organ}: dados do painel de informações e dos cartões de aprendizagem do Explorar.",
      organAlt: "Estudo em aquarela dos pulmões, com a traqueia se dividindo nos dois brônquios principais",
      tissueAlt: "Vista circular ao microscópio dos alvéolos, os minúsculos sacos de ar dos pulmões",
    },
    practice: {
      name: "Praticar",
      title: "Teste o que você acabou de explorar.",
      line: "Identifique estruturas e use a recordação ativa.",
      body:
        "Comece o quiz de identificação e o modelo fica parado. O Corpus diz o nome de uma estrutura e você a encontra no modelo. Um erro mostra onde estava a resposta, e cada rodada termina com sua pontuação e a chance de tentar de novo em outra ordem.",
      prompt: "Encontre",
      hint: "Selecione o ponto correspondente",
      caption: "Uma ilustração do quiz de identificação no Explorar, em que você seleciona os pontos no próprio modelo 3D.",
      alt: "Estudo em aquarela do cérebro com quatro estruturas numeradas e rótulos em branco, e um aviso pedindo que você encontre a estrutura “{structure}”",
    },
    remember: {
      name: "Lembrar",
      title: "Volte ao que importa.",
      line:
        "A sua futura experiência no Corpus vai ajudar você a rever estruturas, conversas e áreas que precisam de mais atenção.",
      body:
        "Esta parte ainda não existe. O Corpus não salva o que você estudou, então cada visita ao Explorar começa do zero. Até lá, refazer o quiz de identificação é a forma de voltar a uma estrutura.",
      futureLabel: "Planejado",
      future: {
        structures: "Estruturas para rever",
        conversations: "Conversas para continuar",
        attention: "Áreas que precisam de mais atenção",
      },
    },
  },

  closing: {
    titleStart: "Aprender anatomia deveria parecer",
    titleEnd: "uma descoberta.",
    action: "Entre no ateliê de anatomia",
  },
};
