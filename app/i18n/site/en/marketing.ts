/**
 * The landing page. Organ names, descriptions, Latin terms and hotspot labels
 * are not here: they come from `anatomy-data.ts` and the organs dictionaries,
 * so the page can never disagree with Explore.
 */
export const marketing = {
  meta: {
    title: "Corpus — Learn Anatomy Like an Artist",
    description:
      "Explore human anatomy through detailed 3D models, visual learning, and interactive exploration with Corpus.",
  },

  hero: {
    eyebrow: "Anatomy, reimagined",
    title: "Learn anatomy like an artist.",
    lede: "Explore the human body through detailed 3D models, discover the structures beneath the surface, and build an understanding that goes beyond the diagram.",
    plate: {
      number: "Plate I",
      /** Latin, as in an atlas: stays the same in every locale. */
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "The superficial muscles of the head, neck and chest.",
      note: "A simplified educational illustration.",
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

  philosophy: {
    mark: "Philosophy",
    title: "Anatomy isn't meant to be memorized flat.",
    lede: "Traditional diagrams flatten a three-dimensional system into a single view. Corpus gives the body back its depth, so that learning follows three steps: see it, understand it, remember it.",
    pillars: {
      see: {
        title: "See",
        line: "Explore structures spatially.",
        body: "Turn an organ in any direction, isolate it or cut through it, and find where each part sits in relation to the others.",
      },
      understand: {
        title: "Understand",
        line: "Connect form, function, relationships, and clinical context.",
        body: "Every marked structure is named and explained, alongside what the organ does, where its blood supply comes from, and the conditions that affect it.",
      },
      remember: {
        title: "Remember",
        line: "Test yourself through active interaction rather than passive reading.",
        body: "Find structures on the model from memory. Recalling where something is tends to stay with you far longer than reading about it again.",
      },
    },
  },

  showcase: {
    mark: "The collection",
    title: "Six specimens to begin with.",
    lede: "Each organ is a 3D model you can rotate, isolate and cut through, with its key structures marked, named and explained.",
    plate: "Plate {number}",
    explore: "Explore",
    more: "Also in the collection: {organs}.",
    browseAll: "Open the full collection",
    note: "The illustrations and 3D models are simplified educational representations, not clinical references.",
  },

  features: {
    mark: "Inside Explore",
    title: "Built for seeing the whole picture.",
    lede: "The model sits at the centre, and everything you need to understand it sits around it.",
    toolsLabel: "In the viewer",
    exampleLabel: "For example",
    items: {
      explore3d: {
        title: "Explore in 3D",
        body: "Rotate, zoom, isolate, and inspect anatomical structures.",
      },
      everyStructure: {
        title: "Every structure matters",
        body: "Move from the organ to the details within it.",
      },
      compare: {
        title: "Compare",
        body: "Understand anatomy through relationships and contrasts.",
      },
      beneath: {
        title: "See beneath the surface",
        body: "Explore structures that diagrams often hide.",
      },
      testYourself: {
        title: "Test yourself",
        body: "Turn exploration into active recall.",
      },
      learnYourWay: {
        title: "Learn your way",
        body: "Study visually, interactively, and eventually with AI guidance.",
        upcoming: "AI guidance is planned for a later release and is not available yet.",
      },
    },
    figure: {
      alt: "Watercolour illustration of a whole human figure with its arteries and veins, and the heart at the centre of the circulation.",
      caption: "Where it works: the heart within the circulatory system, one of the views that accompany each organ in Explore.",
    },
  },

  ai: {
    mark: "AI guidance — coming soon",
    title: "A guide for the questions diagrams can't answer.",
    lede: "We are designing an AI guide that works alongside Explore: ask about the structure in front of you, and get an answer that points back to the model.",
    status: "It is not available yet. Nothing on this page is generated, and there is no assistant to talk to.",
    exampleLabel: "An illustrative exchange",
    you: "You",
    corpus: "Corpus",
    question: "Why is the left ventricle thicker than the right?",
    answer:
      "The left ventricle pumps oxygenated blood into the systemic circulation, which reaches every tissue in the body and resists flow far more than the circuit through the lungs. To drive blood through it, the left ventricle reaches a peak pressure of about 120 mmHg. The right ventricle only has to push blood through the short, low-pressure pulmonary circuit, which needs about 25 mmHg. The left ventricular wall is thicker to match: typically two to three times the thickness of the right.",
    referencesLabel: "Structures on the model",
    exploreHeart: "See both ventricles on the 3D heart",
    figureAlt: "Watercolour illustration of the heart seen from the front, with the left and right ventricles marked 1 and 2.",
    disclaimer: "A written example of the kind of answer we are working towards. Educational content only, not medical advice.",
  },

  languages: {
    mark: "Languages",
    title: "Anatomy in the language you think in.",
    lede: "Corpus is designed from the beginning for learning anatomy in many languages. Explore, including every organ description and structure label, is available in twelve.",
    points: {
      rtl: {
        title: "Right to left",
        body: "Arabic reads right to left, and the interface mirrors with it: reading order, navigation and controls, not only the text.",
      },
      cjk: {
        title: "CJK typography",
        body: "Chinese, Japanese and Korean are set in native typefaces, with line spacing adjusted for each script.",
      },
      ids: {
        title: "One structure, one identity",
        body: "Each structure has a single language-independent ID. Translations attach to that ID, so the anatomy is never duplicated per language.",
      },
      latin: {
        title: "Latin terminology",
        body: "Structures are anchored to Terminologia Anatomica, the international standard for anatomical names, so the Latin term is the same everywhere.",
      },
    },
    specimen: {
      caption: "One structure in twelve languages",
      idLabel: "ID",
      taLabel: "Terminologia Anatomica",
      languageColumn: "Language",
      labelColumn: "Name in Explore",
    },
  },

  audience: {
    mark: "Who it is for",
    title: "For anyone who wants to see how the body fits together.",
    groups: {
      students: {
        title: "Students",
        line: "Build a spatial understanding of anatomy.",
        body: "Learn where structures sit and what surrounds them, then check yourself with a labelling quiz.",
      },
      educators: {
        title: "Educators",
        line: "Use interactive anatomy as a teaching companion.",
        body: "Put a model on the screen, turn it with the class, and ask them to find the structures you name.",
      },
      curious: {
        title: "Curious minds",
        line: "Explore the body simply because it is fascinating.",
        body: "No background needed. Start with the heart and follow your curiosity.",
      },
    },
  },

  closing: {
    title: "The body is a masterpiece.",
    line: "Learn to see it.",
  },
};
