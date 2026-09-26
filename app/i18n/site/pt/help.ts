import type { SiteDictionary } from "..";

export const help: SiteDictionary["help"] = {
  meta: {
    title: "Ajuda do Corpus — Guia de aprendizado de anatomia",
    description:
      "Como usar o Corpus: gire e aproxime os modelos 3D dos órgãos, leia suas estruturas, teste-se, mude o idioma e encontre respostas diretas para as perguntas mais comuns.",
  },

  hero: {
    eyebrow: "Ajuda",
    title: "Encontre seu caminho no Corpus.",
    plate: {
      alt: "Estudo em aquarela de um olho humano, com os músculos que o movem e o nervo óptico atrás",
    },
  },

  search: {
    label: "O que você procura?",
    placeholder: "Experimente “zoom” ou “pontos”",
    clear: "Limpar pesquisa",
    resultsLabel: "Resultados da pesquisa",
    count: "Resultados: {count}",
    more: "Mostrando os {shown} primeiros. Todas as perguntas correspondentes também aparecem abaixo.",
    kind: {
      question: "Pergunta",
      guide: "Guia",
    },
    empty: {
      title: "Nada corresponde a “{query}”.",
      body: "Tente uma palavra mais curta ou diferente, ou navegue pelos guias abaixo.",
    },
    faqStatus: "{count} de {total} perguntas correspondem à sua pesquisa.",
    faqEmpty: "Nenhuma pergunta corresponde à sua pesquisa.",
    showAll: "Mostrar todas as perguntas",
  },

  categories: {
    heading: "Navegue por tema",
    items: {
      gettingStarted: { label: "Primeiros passos", line: "Aprenda o básico." },
      viewer: { label: "Visualizador 3D", line: "Aprenda a navegar pela anatomia." },
      exploring: { label: "Exploração", line: "Encontre órgãos e estruturas." },
      practice: { label: "Prática", line: "Entenda a identificação e a recordação." },
      languages: { label: "Idiomas", line: "Mude o idioma do Corpus." },
      account: { label: "Conta", line: "Gerencie sua conta." },
    },
  },

  gettingStarted: {
    title: "Seus primeiros minutos",
    intro: "O Corpus funciona no seu navegador. Não há nada para instalar nem conta para criar.",
    steps: {
      open: {
        title: "Abra o Explorar",
        body: "Selecione {explore} na navegação principal. O coração aparece primeiro.",
      },
      choose: {
        title: "Escolha um órgão",
        body: "Escolha um órgão na biblioteca ao lado do modelo. No celular, abra a biblioteca pela parte de cima da tela.",
      },
      look: {
        title: "Olhe de perto",
        body: "Arraste para girar o modelo, aproxime a imagem e selecione os pontos para ler o nome de cada estrutura.",
      },
      test: {
        title: "Teste-se",
        body: "Quando quiser, comece o quiz e encontre cada estrutura pelo nome.",
      },
    },
    cta: "Abrir o Explorar",
  },

  viewer: {
    title: "Gire, aproxime e leia um modelo",
    intro: "Cada órgão é um modelo 3D que você pode examinar de todos os lados, com mouse, tela sensível ao toque ou teclado.",
    columns: {
      action: "Ação",
      pointer: "Mouse ou trackpad",
      touch: "Tela de toque",
      keyboard: "Teclado",
    },
    controls: {
      rotate: {
        action: "Girar o modelo",
        pointer: "Arraste sobre o modelo",
        touch: "Arraste com um dedo",
        keyboard: "Setas para a esquerda e para a direita",
      },
      zoom: {
        action: "Aproximar e afastar",
        pointer: "Role a tela ou use a ferramenta {zoom}",
        touch: "Faça o gesto de pinça com dois dedos",
        keyboard: "Teclas de mais e de menos",
      },
      read: {
        action: "Ler uma estrutura",
        pointer: "Clique em um ponto",
        touch: "Toque em um ponto",
        keyboard: "Leitores de tela podem ler todas as estruturas em uma lista ao lado do modelo.",
      },
      close: {
        action: "Fechar um rótulo",
        pointer: "Clique no ponto de novo ou em qualquer outro lugar",
        touch: "Toque no botão de fechar do rótulo",
        keyboard: "Tecla Esc",
      },
    },
    keyboardNote: "Os controles de teclado funcionam quando o modelo está em foco: pressione Tab até que ele seja selecionado.",
    toolsTitle: "As ferramentas do visualizador",
    tools: {
      rotate: "Inicia ou para a rotação automática lenta. O botão “{autoRotate}” faz o mesmo.",
      zoom: "Aproxima a vista um passo em direção ao modelo.",
      isolate: "Esmaece o pedestal, para que o órgão fique sozinho.",
      section: "Corta o modelo para mostrar uma vista do seu interior.",
      layers: "Mostra o modelo como uma estrutura de arame, revelando a malha de que ele é feito.",
      compare: "Compara o papel principal e o tamanho do órgão com os de um segundo órgão.",
      reset: "Devolve o modelo à vista inicial e fecha qualquer rótulo aberto.",
    },
    trouble:
      "Se um modelo não aparecer, seu navegador precisa de gráficos 3D (WebGL). Atualize o navegador, verifique se a aceleração de hardware está ativada e recarregue a página.",
  },

  exploring: {
    title: "Órgãos, dados e cartões de aprendizagem",
    intro: "O Corpus inclui {count} órgãos. Cada um abre com o modelo 3D no centro e os dados ao lado.",
    parts: {
      library: {
        title: "A biblioteca de órgãos",
        body: "Lista todos os órgãos com o sistema do corpo a que pertencem. Digite na caixa de pesquisa no topo do Explorar para filtrá-la.",
      },
      panel: {
        title: "O painel de informações",
        body: "Traz o tamanho, o peso, a localização, a irrigação e a função do órgão, além de uma nota médica e um fato memorável.",
      },
      cards: {
        title: "Os cartões de aprendizagem",
        body: "Abrem o tecido microscópico do órgão, uma comparação, uma animação curta, as doenças comuns e o lugar que ele ocupa no corpo.",
      },
    },
    catalogueTitle: "Abra um órgão diretamente",
    catalogueLink: "{organ}: abrir no Explorar",
    clinical:
      "As notas clínicas mostram por que a anatomia importa. Elas não servem para diagnosticar nem tratar ninguém. Se tiver alguma preocupação com a sua saúde, fale com um médico.",
  },

  practice: {
    title: "Teste-se no modelo",
    intro: "A prática acontece no próprio modelo. O quiz de identificação pede que você encontre cada estrutura nomeada do órgão que está vendo.",
    steps: {
      start: "Abra um órgão e selecione “{quiz}”. O modelo para de girar, então os pontos ficam parados.",
      find: "O Corpus diz o nome de uma estrutura de cada vez. Clique ou toque no ponto que você acha que corresponde a ela.",
      feedback: "Uma resposta certa leva você à próxima. Se errar, o Corpus mostra qual estrutura você escolheu e marca a correta.",
      finish: "Cada estrutura é pedida uma vez, em uma ordem nova a cada rodada. No final, você vê sua pontuação.",
    },
    note: "As pontuações do quiz não são salvas. Elas são apagadas quando você sai da página ou escolhe outro órgão.",
    exampleCaption: "Um exemplo de pergunta do quiz do coração, como aparece acima do modelo.",
  },

  languages: {
    title: "O Corpus no seu idioma",
    intro: "O Corpus está disponível em {count} idiomas. No Explorar, nomes de órgãos, descrições, rótulos de estruturas e controles estão traduzidos para todos eles.",
    switchBody:
      "Escolha um idioma no rodapé de qualquer página ou no menu de idiomas no topo do Explorar. Você continua na página que estava lendo.",
    rtl: "O árabe é lido da direita para a esquerda, e todo o layout se espelha para acompanhar. As páginas ainda não traduzidas aparecem em inglês.",
    listLabel: "Idiomas disponíveis",
    current: "Idioma atual",
  },

  account: {
    title: "As contas chegam em breve",
    body: "Os formulários de entrada, cadastro e redefinição de senha já existem, mas as contas ainda não. Os formulários avisam isso, e nada do que você digita é enviado.",
    saved: "Você não precisa de conta: tudo no Explorar funciona sem uma. Nada do que você faz é salvo entre as visitas.",
    cta: "Comece a explorar",
  },

  faqHeading: "Perguntas frequentes",
  faq: {
    whatIs: {
      q: "O que é o Corpus?",
      a: "O Corpus é um atlas de anatomia interativo. Você explora modelos 3D de órgãos humanos, lê as estruturas nomeadas dentro deles e se testa ao longo do caminho.",
    },
    exploreOrgan: {
      q: "Como exploro um órgão?",
      a: "Abra o Explorar e escolha um órgão na biblioteca. Gire o modelo, selecione os pontos para ler cada estrutura e abra os cartões abaixo do visualizador para ir além.",
    },
    rotate: {
      q: "Como giro um modelo?",
      a: "Arraste o modelo com o mouse ou com um dedo. Pelo teclado, pressione Tab até o modelo ficar em foco e use as setas para a esquerda e para a direita. Selecione {reset} para voltar à vista inicial.",
    },
    zoom: {
      q: "Como uso o zoom?",
      a: "Use a roda do mouse ou o trackpad, faça o gesto de pinça com dois dedos em uma tela sensível ao toque ou selecione a ferramenta {zoom}. As teclas de mais e de menos também funcionam quando o modelo está em foco.",
    },
    hotspots: {
      q: "O que são os pontos interativos?",
      a: "Os pontos interativos são os pontos que aparecem no modelo. Cada um marca uma estrutura: selecione um para ver o nome e uma breve descrição.",
    },
    isolate: {
      q: "O que faz “Isolar”?",
      a: "A ferramenta {isolate} esmaece o pedestal para que o órgão apareça sozinho. Selecione-a de novo para trazer o pedestal de volta.",
    },
    languages: {
      q: "Quais idiomas estão disponíveis?",
      a: "O Corpus está disponível em {count} idiomas: {list}.",
    },
    mobile: {
      q: "O Corpus funciona no celular?",
      a: "Sim, em um navegador moderno, em celulares e tablets. Arraste com um dedo para girar um modelo, faça o gesto de pinça para aproximar e toque em um ponto para lê-lo.",
    },
    medical: {
      q: "O Corpus é aconselhamento médico?",
      a: "Não. O Corpus serve para aprender anatomia. Ele não oferece aconselhamento médico, diagnóstico nem tratamento. Se tiver alguma preocupação com a sua saúde, procure um médico. Em uma emergência, ligue para o número de emergência da sua região.",
    },
    accuracy: {
      q: "Qual é a precisão da anatomia?",
      a: "Os modelos e as ilustrações são representações educacionais simplificadas. Eles mostram a forma geral de cada órgão e onde ficam suas principais estruturas, não todos os detalhes. Os nomes das estruturas seguem a Terminologia Anatomica, o padrão internacional.",
    },
    createAccount: {
      q: "Como crio uma conta?",
      a: "As contas chegam em breve. O formulário de cadastro já existe, mas ainda não cria uma conta, e nada do que você digita é enviado. Você não precisa de conta para usar o Explorar.",
    },
    resetPassword: {
      q: "Como redefino minha senha?",
      a: "Ainda não há contas, então não há senha para redefinir. O formulário de redefinição está pronto para depois; hoje ele não envia nenhum e-mail.",
    },
  },
  faqLinks: {
    explore: "Abrir o Explorar",
    report: "Relatar um erro",
  },

  contact: {
    title: "Ainda precisa de ajuda?",
    body: "Estamos construindo o Corpus com cuidado. Se algo não estiver funcionando como esperado, avise a gente.",
    cta: "Falar com o suporte",
    ctaDescription: "Abre em uma nova aba o rastreador público de problemas do projeto no GitHub.",
    note: "Os relatos são públicos e exigem uma conta gratuita no GitHub. Não inclua informações pessoais nem de saúde.",
  },
};
