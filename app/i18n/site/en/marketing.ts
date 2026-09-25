/**
 * The landing page. Organ names, systems, Latin names and structure labels are
 * not here: they come from `anatomy-data.ts` and the organs dictionaries, so the
 * page can never disagree with Explore. Strings containing "\n" mark a
 * preferred line break in a display heading; translators may move or drop it.
 */
export const marketing = {
  meta: {
    title: "Corpus — Learn Anatomy Like an Artist",
    description:
      "Explore the human body in detailed 3D: rotate the heart, brain, lungs and other organs, look beneath the surface, and test yourself on the structures inside them.",
  },

  hero: {
    eyebrow: "Anatomy, reimagined",
    title: "Learn anatomy\nlike an artist.",
    lede: "Explore the human body through detailed 3D anatomy, discover the structures beneath the surface, and build an understanding that goes beyond the diagram.",
    primary: "Explore the body",
    secondary: "Discover Corpus",
    supporting: {
      anatomy: "3D anatomy",
      visual: "Visual learning",
      languages: "Multilingual",
    },
    plate: {
      number: "Plate I",
      view: "Anterolateral view",
      /** Latin, as in an atlas: the same in every locale. */
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "The superficial muscles of the head, neck and chest.",
      alt: "An anatomical bust without skin, showing the superficial muscles of the face, neck, shoulder and chest. The head is turned to one side and tilted upward.",
      legendLabel: "Structures marked on this plate",
      /** Terminologia Anatomica terms: kept in Latin in every locale. */
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
    title: "The Anatomy Atelier",
    line: "Explore the body as a three-dimensional system.",
  },

  philosophy: {
    eyebrow: "Philosophy",
    title: "Anatomy isn't meant\nto be memorized flat.",
    lede: "The body is three-dimensional, interconnected, and constantly in motion. Corpus turns anatomy into something you can see, explore, and understand.",
    steps: {
      see: {
        label: "See",
        title: "Look beneath the surface.",
        body: "Explore structures spatially instead of reducing the body to a flat diagram.",
        alt: "The 3D heart from Explore, turned to show its side, with the great vessels rising from the top.",
        caption: "The heart, turned in Explore to its left side.",
      },
      understand: {
        label: "Understand",
        title: "Connect the pieces.",
        body: "Move from a structure to its function, relationships, blood supply, tissue, and clinical context.",
        alt: "Watercolour illustration of the heart seen from the front.",
        caption: "What Explore shows alongside the heart.",
        clinical: "Clinical context",
      },
      remember: {
        label: "Remember",
        title: "Make knowledge active.",
        body: "Test yourself through identification, exploration, and recall.",
        alt: "Watercolour illustration of the kidneys with three structures marked by numbers.",
        caption: "Name each marked structure, then check your answer.",
        blank: "Name this structure",
      },
    },
  },

  collection: {
    eyebrow: "The collection",
    title: "Start anywhere in the body.",
    lede: "Explore the structures that make us human — from the rhythm of the heart to the architecture of the brain.",
    explore: "Explore",
    exploreOrgan: "Explore the {organ}",
    /** One line per organ, keyed by organ id. */
    lines: {
      heart: "The muscular pump at the center of the circulatory system.",
      brain: "The command center of the nervous system.",
      lungs: "The organs where oxygen enters the blood and carbon dioxide leaves it.",
      liver: "A metabolic powerhouse with hundreds of essential functions.",
      kidneys: "Filters that regulate the composition of the body's internal environment.",
      eyeball: "A sensory organ that transforms light into visual information.",
    },
    more: "Also in Explore: {organs}.",
    note: "Illustrations and 3D models are simplified educational representations.",
  },

  explore: {
    title: "Don't just look at anatomy.\nExplore it.",
    lede: "Rotate it. Isolate it. Follow its structures. See how everything connects.",
    cta: "Open the anatomy atlas",
    still: "A still from Explore",
    alt: "The 3D heart in Explore, seen from the front, with coloured dots marking structures that can be selected.",
    caption: "Each dot on the model is a structure you can select to see its name and role.",
    controlsLabel: "Controls in the viewer",
  },

  features: {
    eyebrow: "Inside the viewer",
    title: "Every angle of the specimen.",
    items: {
      rotate: {
        label: "Rotate",
        line: "See structures from every angle.",
        body: "Drag to turn the model, and zoom in on the part you are studying.",
        alt: "The 3D heart turned to show its back surface.",
      },
      isolate: {
        label: "Isolate",
        line: "Focus on what matters.",
        body: "Lift the organ away from its surroundings and study it on its own.",
        alt: "The 3D eye model floating on its own, with the optic nerve leaving the back.",
      },
      section: {
        label: "Section",
        line: "Understand what lies beneath the surface.",
        body: "Cut through the model to see the chambers and layers inside.",
        alt: "The 3D heart cut through by a section plane, showing its interior.",
      },
      compare: {
        label: "Compare",
        line: "See anatomy through relationships.",
        body: "Set one organ against another to compare their roles and scale.",
        alt: "The 3D lungs and heart shown side by side.",
      },
    },
    note: "Stills captured from the 3D viewer in Explore.",
  },

  story: {
    title: "The body is a system,\nnot a collection of diagrams.",
    body: "Corpus helps you move from individual organs to the relationships that make the body work.",
    alt: "The 3D lungs and heart composed together as they sit in the chest, with the trachea, both lungs, the heart and the aorta labelled.",
    caption: "Heart and lungs, composed from their Explore models. Positions are simplified.",
    legendLabel: "Structures labelled in this composition",
  },

  practice: {
    eyebrow: "Active recall",
    title: "See it.\nThen prove you know it.",
    lede: "Turn exploration into active recall with anatomy labeling and identification challenges.",
    cta: "Test yourself",
    panelLabel: "Test yourself",
    alt: "The 3D brain from Explore with four structures marked by the numbers 1 to 4.",
    caption: "A preview of the labelling challenge in Explore. In Explore, you answer by selecting the structure on the model.",
    markedLabel: "Marked structures",
  },

  ai: {
    eyebrow: "Coming next",
    title: "A guide for the questions\ndiagrams can't answer.",
    lede: "Corpus is being designed with an AI anatomy guide that can explain structures, connect concepts, guide exploration, and help you learn through conversation.",
    exampleLabel: "An illustrative exchange",
    you: "You",
    corpus: "Corpus",
    question: "Why is the left ventricle thicker than the right?",
    answer:
      "The left ventricle pumps blood through the systemic circulation, so it must generate much higher pressure than the right ventricle.",
    status: "Under development",
    disclaimer: "A written example, not a live assistant. Nothing here is generated, and there is no guide to talk to yet.",
  },

  languages: {
    eyebrow: "12 languages",
    title: "Anatomy in the language\nyou think in.",
    lede: "Corpus is built for learners around the world, with multilingual interfaces and a shared anatomical vocabulary grounded in Latin terminology.",
    wallLabel: "Corpus in twelve languages",
    anchorLabel: "One term, every language",
    rtlNote: "Arabic reads right to left, and the interface mirrors with it.",
  },

  rigor: {
    title: "Beautiful enough to explore.\nPrecise enough to trust.",
    lede: "Corpus combines visual storytelling with anatomical terminology, structured data, and medically grounded educational content.",
    pillars: {
      accuracy: {
        title: "Anatomical accuracy",
        body: "Structures are grounded in established anatomical terminology.",
      },
      knowledge: {
        title: "Structured knowledge",
        body: "Every structure connects to contextual information.",
      },
      clarity: {
        title: "Visual clarity",
        body: "Complex anatomy is presented without unnecessary complexity.",
      },
    },
    entry: {
      label: "A structure in Corpus",
      term: "Terminologia Anatomica",
      name: "Name",
      organ: "Organ",
      role: "Role",
    },
    note: "Corpus is for education. It is not medical advice.",
  },

  audience: {
    eyebrow: "Made for curious minds",
    title: "One body.\nMany ways to learn it.",
    groups: {
      students: {
        title: "Students",
        body: "Build spatial understanding instead of memorizing disconnected labels.",
        cta: "Explore as a student",
      },
      educators: {
        title: "Educators",
        body: "Bring anatomy into the classroom through interactive visual exploration.",
        cta: "For educators",
      },
      curious: {
        title: "Curious minds",
        body: "Explore the human body simply because it is one of the most remarkable things in existence.",
        cta: "Start exploring",
      },
    },
  },

  closing: {
    eyebrow: "The body is a masterpiece.",
    title: "Learn to see it.",
    cta: "Explore the body",
  },
};
