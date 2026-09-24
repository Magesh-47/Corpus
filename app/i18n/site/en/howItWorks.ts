/**
 * How it works (/how-it-works). English is the source of truth; every other
 * locale is type-checked against this shape. Lists are keyed objects so a
 * translation cannot silently drop an item. Organ names, facts and Latin terms
 * are never written here — they come from the anatomy data.
 */
export const howItWorks = {
  meta: {
    title: "How it works",
    description:
      "How Corpus turns anatomy into something you can see, explore, understand, practise, and remember — all inside one 3D anatomy atelier.",
  },

  hero: {
    eyebrow: "How it works",
    title: "Anatomy begins with looking.",
    lede:
      "Corpus is built on one sequence: see a structure, explore it in three dimensions, understand what it does, practise finding it, and remember it. Every step happens in the same place — Explore.",
    stepsLink: "Read the five steps",
    plateLabel: "Plate I",
    plateCaption: "{organ}, and the tissue it is made of",
    organAlt: "Watercolour study of the human heart, seen from the front, with the aorta arching above it",
    tissueAlt: "Circular microscope view of cardiac muscle fibres",
  },

  sequence: {
    label: "The Corpus sequence",
    items: {
      see: { word: "See", note: "Start from a clear image" },
      explore: { word: "Explore", note: "Turn it in three dimensions" },
      understand: { word: "Understand", note: "Learn what it is and does" },
      practise: { word: "Practise", note: "Find it without the label" },
      remember: { word: "Remember", note: "Recall it again later" },
    },
  },

  steps: {
    eyebrow: "The method",
    title: "Five steps, one specimen.",
    lede:
      "There is no separate lesson area and no separate test centre. Each step below is something you do with the organ already in front of you.",
    availableLabel: "In Explore today",
    items: {
      explore: {
        title: "Explore",
        claim: "Pick a specimen and hold it in view.",
        body:
          "Start in the organ library. Each organ — from the heart and brain to the kidneys, pancreas and skin — opens as a 3D model you can turn freely, so you meet its shape before its vocabulary.",
        points: {
          library: "An organ library you can search by name or body system",
          model: "A 3D model for every organ: drag to rotate, scroll to zoom",
          rotate: "Auto-rotate, which turns the specimen slowly while you read",
        },
        figureCaption: "The organ library. Choose a specimen to open it in Explore.",
        openOrgan: "{organ}: open in Explore",
      },
      understand: {
        title: "Understand",
        claim: "Read the structure, not just its name.",
        body:
          "Beside every model sits an information panel with the organ’s key facts, why it matters medically, and one fact worth remembering. Learning cards go further, from the tissue under a microscope to the conditions that affect it.",
        points: {
          facts: "Key facts: size, weight, location, blood supply and function",
          cards: "Learning cards: microscopic view, organ comparison, function animation, clinical notes, and where it works in the body",
          lessons: "Short guided lessons that open over the model",
        },
        figureCaption: "{organ} — the information panel in Explore",
        tissueCaption: "{tissue}, microscopic view",
        organAlt: "Watercolour study of the lungs, with the trachea dividing into the bronchi",
        tissueAlt: "Circular microscope view of alveoli, the tiny air sacs of the lungs",
        facts: {
          location: "Location",
          function: "Function",
          bloodSupply: "Blood supply",
        },
      },
      interact: {
        title: "Interact",
        claim: "Ask the model questions with your hands.",
        body:
          "Dots on the model mark named structures. Select one and its label appears with a short note on what it does. The viewer tools change how you look, so the same organ can answer different questions.",
        toolsLabel: "Viewer tools",
        tools: {
          rotate: { name: "Rotate", note: "Turn auto-rotation on or off" },
          zoom: { name: "Zoom", note: "Move closer to the surface" },
          isolate: { name: "Isolate", note: "Fade the plinth so only the organ remains" },
          section: { name: "Cross-section", note: "Slice the model open along a plane" },
          layers: { name: "Layers", note: "See the model’s form as a wireframe" },
          compare: { name: "Compare", note: "Set it beside another organ" },
          reset: { name: "Reset", note: "Return to the starting view" },
        },
        figureCaption: "Hotspots mark named structures. In Explore they sit on the 3D model.",
        organAlt: "Watercolour study of the heart with three marked structures",
      },
      practise: {
        title: "Practise",
        claim: "Find it without the label.",
        body:
          "The labelling quiz names a structure and asks you to find it on the model. The specimen holds still, you choose a dot, and you learn at once whether you were right — and, if not, where the answer was. At the end you see your score and can try again.",
        points: {
          find: "Find each named structure on the model, one at a time",
          feedback: "Immediate feedback that shows the correct structure after a miss",
          score: "A score at the end of every round",
        },
        quizFind: "Find the",
        quizProgress: "{current} of {total}",
        quizHint: "Select the matching dot on the model",
        figureCaption: "{organ} — the labelling quiz",
        organAlt: "Watercolour study of the kidneys and ureters, with the renal vessels between them",
      },
      remember: {
        title: "Remember",
        claim: "Come back and recall it.",
        body:
          "Memory is built by retrieving, not by rereading. Today that means the labelling quiz: every retry asks for the structures in a fresh order, so you recall each one rather than repeating a sequence. Tools that bring organs back at the right moment are on their way.",
        ledgerLabel: "What exists, and what is coming",
        ledger: {
          retry: "Retry the labelling quiz, in a new order each time",
          review: "Spaced review that returns to structures before you forget them",
          progress: "Progress that remembers what you have studied",
        },
        figureCaption: "{tissue}, microscopic view",
        tissueAlt: "Circular microscope view of neurons in the cerebral cortex, their branches reaching upward",
      },
    },
  },

  why3d: {
    eyebrow: "Why 3D matters",
    title: "Anatomy is spatial. A flat page shows it from one side.",
    lede:
      "A textbook drawing chooses the angle for you. A model you can turn lets you choose, and choosing where to look is how attention turns into understanding.",
    points: {
      depth: {
        title: "Every side",
        body: "Turn to the back of the heart or the underside of the liver. What a single drawing hides, a rotation shows.",
      },
      form: {
        title: "Form explains function",
        body: "The branching of the airways and the arch of the aorta make more sense once you have seen their shape from several angles.",
      },
      place: {
        title: "Place in the body",
        body: "Learning cards show where each organ works, so the specimen in your hands never floats free of the body it belongs to.",
      },
    },
    figureCaption: "{organ} — where it works in the body",
    figureAlt: "Watercolour figure of the human body with the heart and major vessels drawn in red and blue",
    note:
      "The models and illustrations in Corpus are simplified educational representations. They are made to make structure clear, not to replace dissection or clinical imaging.",
  },

  recall: {
    eyebrow: "Why active recall matters",
    title: "Remembering is something you practise.",
    body:
      "A well-established finding in learning research is that trying to recall something, and then checking whether you were right, helps it stick better than reading it again. It feels harder in the moment. That effort is the point.",
    contrast: {
      reread: {
        title: "Rereading",
        body: "Feels productive, because the page looks familiar. Familiar is not the same as remembered.",
      },
      recall: {
        title: "Recalling",
        body: "Feels harder, because you have to produce the answer yourself. That is what makes it last.",
      },
    },
    inCorpus:
      "In Corpus, the labelling quiz asks you to find a structure on the model, not to pick its name from a list.",
  },

  different: {
    eyebrow: "Why Corpus is different",
    title: "An atlas, a studio and a museum, in one place.",
    points: {
      onePlace: {
        title: "Learning happens inside Explore",
        body: "Looking, reading and testing yourself all happen on the same specimen. There is nothing to switch to and nothing to lose your place in.",
      },
      drawn: {
        title: "Drawn to be looked at",
        body: "Every organ is painted with the care of an artist’s study sheet, because a clear, beautiful image is where understanding starts.",
      },
      named: {
        title: "Named with precision",
        body: "Structures follow Terminologia Anatomica, the international standard for anatomical names, so the Latin you learn is the Latin used everywhere.",
      },
      languages: {
        title: "{count} languages",
        body: "Explore is available in {count} languages, including Arabic, which reads right to left.",
      },
      honest: {
        title: "Honest about what it is",
        body: "Corpus is for learning. It is not medical advice, and features that are still being built are labelled as coming soon.",
      },
    },
    termsLabel: "Terms from the models",
  },

  cta: {
    eyebrow: "Begin",
    title: "Start with a single organ.",
    body: "Open Explore, choose a specimen and turn it over. The rest follows from looking.",
    organLink: "Begin with the eye",
  },
};
