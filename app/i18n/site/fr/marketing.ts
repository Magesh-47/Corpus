import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — Apprendre l’anatomie comme un artiste",
    description:
      "Explorez le corps humain en 3D détaillée : faites pivoter le cœur, le cerveau, les poumons et d’autres organes, regardez sous la surface et testez-vous sur les structures qu’ils renferment.",
  },

  hero: {
    eyebrow: "L’anatomie, réinventée",
    title: "Apprendre l’anatomie\ncomme un artiste.",
    lede: "Explorez le corps humain grâce à une anatomie 3D détaillée, découvrez les structures cachées sous la surface et bâtissez une compréhension qui va au-delà du schéma.",
    primary: "Explorer le corps",
    secondary: "Découvrir Corpus",
    supportingLabel: "Ce qu’est Corpus",
    supporting: {
      anatomy: "Anatomie 3D",
      visual: "Apprentissage visuel",
      languages: "Multilingue",
    },
    plate: {
      number: "Planche I",
      view: "Vue antérolatérale",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "Les muscles superficiels de la tête, du cou et du thorax.",
      alt: "Un buste anatomique sans peau, montrant les muscles superficiels du visage, du cou, de l’épaule et du thorax. La tête est tournée sur le côté et inclinée vers le haut.",
      legendLabel: "Structures repérées sur cette planche",
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
    title: "L’Atelier d’anatomie",
    line: "Explorez le corps comme un système en trois dimensions.",
  },

  philosophy: {
    eyebrow: "Philosophie",
    title: "L’anatomie ne se mémorise pas\nà plat.",
    lede: "Le corps est tridimensionnel, interconnecté et sans cesse en mouvement. Corpus fait de l’anatomie quelque chose que l’on peut voir, explorer et comprendre.",
    steps: {
      see: {
        label: "Voir",
        title: "Regarder sous la surface.",
        body: "Explorez les structures dans l’espace au lieu de réduire le corps à un schéma plat.",
        alt: "Le cœur 3D tel qu’il apparaît dans Explorer, tourné pour montrer son flanc, avec les gros vaisseaux qui s’élèvent au sommet.",
        caption: "Le cœur, pivoté dans Explorer.",
      },
      understand: {
        label: "Comprendre",
        title: "Relier les éléments.",
        body: "Passez d’une structure à sa fonction, à ses relations, à sa vascularisation, à son tissu et à son contexte clinique.",
        alt: "Illustration à l’aquarelle du cerveau vu de profil.",
        caption: "Ce que montre Explorer aux côtés du cerveau.",
        facets: {
          function: "Fonction",
          bloodSupply: "Vascularisation",
          tissue: "Tissu",
          clinical: "Contexte clinique",
        },
      },
      remember: {
        label: "Retenir",
        title: "Rendre le savoir actif.",
        body: "Testez-vous par l’identification, l’exploration et le rappel.",
        alt: "Illustration à l’aquarelle des poumons et de la trachée, avec quatre structures repérées par des numéros.",
        caption: "Une planche de légendes statique. Dans Explorer, vous retrouvez chaque structure nommée sur le modèle 3D.",
        blank: "Nommez cette structure",
        answers: "Réponses",
      },
    },
  },

  collection: {
    eyebrow: "La collection",
    title: "Commencez n’importe où dans le corps.",
    lede: "Explorez les structures qui font de nous des êtres humains — du rythme du cœur à l’architecture du cerveau.",
    explore: "Explorer",
    lines: {
      heart: "La pompe musculaire au centre du système circulatoire.",
      brain: "Le centre de commande du système nerveux.",
      lungs: "Les organes où l’oxygène pénètre dans le sang et où le dioxyde de carbone le quitte.",
      liver: "Une centrale métabolique aux centaines de fonctions essentielles.",
      kidneys: "Des filtres qui règlent la composition du milieu intérieur de l’organisme.",
      eyeball: "Un organe sensoriel qui transforme la lumière en information visuelle.",
    },
    more: "Également dans Explorer : {organs}.",
    note: "Les illustrations et les modèles 3D sont des représentations pédagogiques simplifiées.",
  },

  explore: {
    title: "Ne regardez pas seulement l’anatomie.\nExplorez-la.",
    lede: "Faites-la pivoter. Isolez-la. Suivez ses structures. Voyez comment tout se relie.",
    cta: "Ouvrir l’atlas d’anatomie",
    still: "Arrêt sur image dans Explorer",
    alt: "Le cœur 3D dans Explorer, vu de face, avec des points signalant les structures que l’on peut sélectionner.",
    caption: "Chaque point du modèle est une structure que vous pouvez sélectionner pour afficher son nom et son rôle.",
    controlsLabel: "Dans la visionneuse",
  },

  features: {
    eyebrow: "Dans la visionneuse",
    title: "Le spécimen sous tous les angles.",
    items: {
      rotate: {
        label: "Pivoter",
        line: "Voir les structures sous tous les angles.",
        body: "Faites glisser pour tourner le modèle, et zoomez sur la partie que vous étudiez.",
        alt: "Le cœur 3D tourné pour montrer sa face postérieure.",
      },
      isolate: {
        label: "Isoler",
        line: "Se concentrer sur l’essentiel.",
        body: "Écartez ce qui l’entoure et étudiez un organe pour lui-même.",
        alt: "L’œil 3D flottant seul, le nerf optique partant de sa face postérieure.",
      },
      section: {
        label: "Coupe transversale",
        line: "Comprendre ce qui se cache sous la surface.",
        body: "Faites passer un plan de coupe à travers le modèle et lisez sa forme en profil.",
        alt: "Le cœur 3D coupé en deux par un plan de coupe.",
      },
      compare: {
        label: "Comparer",
        line: "Voir l’anatomie à travers ses relations.",
        body: "Placez un organe à côté d’un autre pour comparer leurs rôles et leurs dimensions.",
        alt: "Le cerveau et le cœur 3D présentés côte à côte.",
      },
    },
    note: "Captures de la visionneuse 3D, dans Explorer.",
  },

  story: {
    title: "Le corps est un système,\nnon une collection de schémas.",
    body: "Corpus vous aide à passer des organes pris isolément aux relations qui font fonctionner le corps.",
    alt: "Les poumons et le cœur 3D réunis tels qu’ils se placent dans le thorax, avec la trachée, les deux poumons, le cœur et l’aorte légendés.",
    caption: "Le cœur et les poumons, composés à partir de leurs modèles dans Explorer. Les positions sont simplifiées.",
    legendLabel: "Structures légendées dans cette composition",
  },

  practice: {
    eyebrow: "Rappel actif",
    title: "Voyez-le.\nPuis prouvez que vous le savez.",
    lede: "Transformez l’exploration en rappel actif grâce à des exercices de légendage et d’identification anatomiques.",
    cta: "Testez-vous",
    identify: "Identifier",
    alt: "Le cerveau 3D, dans Explorer, avec quatre structures repérées par les numéros 1 à 4.",
    caption: "Arrêt sur image du quiz d’identification dans Explorer, où l’on répond en sélectionnant la structure sur le modèle.",
  },

  ai: {
    eyebrow: "À venir",
    title: "Un guide pour les questions\nauxquelles les schémas ne répondent pas.",
    lede: "Corpus est conçu pour accueillir un guide d’anatomie fondé sur l’IA, qui pourra expliquer les structures, relier les notions, orienter l’exploration et vous aider à apprendre par la conversation.",
    exampleLabel: "Un échange à titre d’illustration",
    you: "Vous",
    corpus: "Corpus",
    question: "Pourquoi le ventricule gauche est-il plus épais que le droit ?",
    answer:
      "Le ventricule gauche propulse le sang dans la circulation systémique : il doit donc générer une pression bien plus élevée que le ventricule droit.",
    status: "En développement",
    disclaimer: "Un exemple rédigé, pas un assistant réel. Il n’existe encore aucun guide avec qui échanger.",
  },

  languages: {
    eyebrow: "12 langues",
    title: "L’anatomie dans la langue\nde vos pensées.",
    lede: "Corpus est conçu pour les apprenants du monde entier, avec des interfaces multilingues et un vocabulaire anatomique commun, ancré dans la terminologie latine.",
    wallLabel: "Corpus en douze langues",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "L’arabe se lit de droite à gauche, et l’interface s’inverse avec lui.",
    latinNote: "Le nom latin reste le même dans toutes les langues.",
  },

  rigor: {
    title: "Assez beau pour être exploré.\nAssez précis pour inspirer confiance.",
    lede: "Corpus associe narration visuelle, terminologie anatomique, données structurées et contenus pédagogiques fondés sur la médecine.",
    pillars: {
      accuracy: {
        title: "Exactitude anatomique",
        body: "Les structures s’appuient sur la terminologie anatomique établie.",
      },
      knowledge: {
        title: "Savoir structuré",
        body: "Chaque structure est reliée à des informations contextuelles.",
      },
      clarity: {
        title: "Clarté visuelle",
        body: "L’anatomie complexe est présentée sans complexité inutile.",
      },
    },
    entry: {
      label: "Une structure dans Corpus",
      term: "Terminologia Anatomica",
      name: "Nom",
      organ: "Organe",
      role: "Rôle",
    },
    note: "Corpus a une vocation pédagogique. Ce n’est pas un avis médical.",
  },

  audience: {
    eyebrow: "Pour les esprits curieux",
    title: "Un seul corps.\nMille façons de l’apprendre.",
    groups: {
      students: {
        title: "Étudiants",
        body: "Construisez une compréhension spatiale au lieu de mémoriser des légendes sans lien entre elles.",
        cta: "Explorer en tant qu’étudiant",
      },
      educators: {
        title: "Enseignants",
        body: "Faites entrer l’anatomie en classe grâce à une exploration visuelle et interactive.",
        cta: "Pour les enseignants",
      },
      curious: {
        title: "Esprits curieux",
        body: "Explorez le corps humain simplement parce qu’il est l’une des choses les plus remarquables qui soient.",
        cta: "Commencer l’exploration",
      },
    },
  },

  closing: {
    title: "Le corps est un chef-d’œuvre.",
    line: "Apprenez à le voir.",
    cta: "Explorer le corps",
  },
};
