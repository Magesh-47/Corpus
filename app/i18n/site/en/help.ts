/**
 * Help centre copy. Every instruction here describes what Explore actually
 * does today (AnatomyApp, OrganViewer and the three.js viewer's controls) —
 * change them together. Tool, quiz and panel labels that appear inside Explore
 * are read from the app's own dictionary at render time, so they always match
 * what the learner sees on screen; only the explanations live here.
 */
export const help = {
  meta: {
    title: "Help",
    description:
      "Get started with Corpus: using the 3D viewer, exploring anatomy, quizzes, languages, and answers to common questions.",
  },

  hero: {
    eyebrow: "Help centre",
    title: "A field guide to Corpus",
    lede:
      "How to turn the 3D models, read the structures inside them, test yourself and change language — with plain answers to the questions people ask most.",
    plate: {
      number: "Plate I",
      alt: "Watercolour study of a human eye, with the muscles that turn it and the optic nerve behind",
      caption: "{organ}, one of {count} organs you can explore",
    },
    glance: {
      label: "At a glance",
      account: { term: "Account", value: "Not needed to explore" },
      languages: { term: "Languages", value: "{count} languages" },
      purpose: { term: "Purpose", value: "Education, not medical advice" },
    },
  },

  index: {
    heading: "Contents",
  },

  sections: {
    gettingStarted: "Getting started",
    viewer: "Using the 3D viewer",
    exploring: "Exploring anatomy",
    practice: "Practice and quizzes",
    languages: "Languages",
    account: "Account",
    questions: "Common questions",
    contact: "Contact",
  },

  gettingStarted: {
    intro:
      "Corpus runs in your web browser. There is nothing to install and no account to create, so you can open the atlas and begin straight away.",
    steps: {
      open: {
        title: "Open Explore",
        body: "Select {explore} in the main navigation. The heart is shown first, turning slowly on its stand.",
      },
      choose: {
        title: "Choose an organ",
        body: "Pick any organ from the organ library beside the model. On a phone, open the library with the button at the top of the screen.",
      },
      look: {
        title: "Look closely",
        body: "Drag to turn the model, zoom in, and select the coloured dots to read the name of each structure.",
      },
      test: {
        title: "Test yourself",
        body: "When you feel ready, start the quiz and find each structure by name.",
      },
    },
    cta: "Open Explore",
    ctaNote: "No sign-in needed.",
  },

  viewer: {
    intro:
      "Each organ is a 3D model you can examine from every side. The viewer works with a mouse or trackpad, on a touch screen, and partly with the keyboard.",
    controlsLabel: "Viewer controls",
    columns: {
      action: "Action",
      pointer: "Mouse or trackpad",
      touch: "Touch screen",
      keyboard: "Keyboard",
    },
    controls: {
      rotate: {
        action: "Turn the model",
        pointer: "Drag across the model",
        touch: "Drag with one finger",
        keyboard: "Left and right arrow keys",
      },
      zoom: {
        action: "Zoom in and out",
        pointer: "Scroll, or use the {zoom} tool",
        touch: "Pinch with two fingers",
        keyboard: "Plus and minus keys",
      },
      read: {
        action: "Read a structure",
        pointer: "Click a coloured dot",
        touch: "Tap a coloured dot",
        keyboard: "Not available yet. Screen readers can read every structure from a list that accompanies the model.",
      },
      close: {
        action: "Close a label",
        pointer: "Click the dot again, or anywhere away from it",
        touch: "Tap the close button on the label",
        keyboard: "Escape key",
      },
    },
    keyboardNote:
      "Keyboard controls work once the model has focus: press Tab until the model is selected, then use the keys above.",
    toolsTitle: "The viewer tools",
    toolsIntro:
      "A set of tools sits at the edge of the viewer. Tools that change the view can be switched off again by selecting them a second time.",
    tools: {
      rotate: "Starts or stops the slow automatic turn. The {autoRotate} switch does the same.",
      zoom: "Moves the view one step closer to the model.",
      isolate: "Fades the display stand, so the organ stands on its own.",
      section: "Cuts through the model to show a view of its interior.",
      layers: "Shows the model as a wireframe, revealing the mesh it is built from.",
      compare: "Opens a comparison with a second organ, showing the main role and scale of the one you are viewing.",
      reset: "Returns the model to its starting position and closes any open label.",
    },
    troubleshootingTitle: "If something is not working",
    troubleshooting: {
      blank: {
        q: "The model does not appear",
        a: "The viewer needs a browser with 3D graphics (WebGL) turned on. Update your browser, check that hardware acceleration is enabled in its settings, and reload the page.",
      },
      slow: {
        q: "A model is taking a long time to load",
        a: "Each model is downloaded the first time you open it. On a slow connection a loading indicator shows its progress. Once an organ has loaded, returning to it is usually much quicker.",
      },
      spinning: {
        q: "The model keeps turning",
        a: "Automatic turning is on when Explore opens. Switch it off with the {rotate} tool or the {autoRotate} switch. It also pauses while you drag the model and during a quiz.",
      },
    },
  },

  exploring: {
    intro:
      "Corpus currently includes {count} organs. Each one opens with its 3D model at the centre and its facts alongside.",
    parts: {
      library: {
        title: "The organ library",
        body: "Lists every organ with its body system. Type in the search box at the top of Explore to filter the list by organ or system.",
      },
      panel: {
        title: "The information panel",
        body: "Gives the organ's key facts, such as its size, weight, location, blood supply and function, followed by a note on why it matters medically and one memorable fact.",
      },
      cards: {
        title: "The learning cards",
        body: "Below the viewer, cards open a microscopic view of the organ's tissue, a comparison with another organ, a short animation of how it works, notes on common conditions, and where it sits in the body.",
      },
    },
    catalogueTitle: "The organs in Corpus",
    catalogueIntro: "Open any organ directly. Its Latin name follows Terminologia Anatomica.",
    catalogueLink: "Open {organ} in Explore",
    clinical: {
      title: "About the clinical notes",
      body: "Some cards mention medical conditions and clinical context. They are there to show why the anatomy matters, not to help diagnose or treat anyone. If you have a concern about your health, speak to a doctor or another qualified health professional.",
    },
  },

  practice: {
    intro:
      "Practice happens inside Explore, on the model itself. The labelling quiz asks you to find each named structure of the organ you are viewing.",
    steps: {
      start: "Open an organ and select {quiz} in the information panel. The model stops turning, so the dots stay still.",
      find: "Corpus names one structure at a time. Click or tap the dot you think matches it.",
      feedback:
        "A correct answer moves you on. If you miss, Corpus tells you which structure you chose and marks the right one in green.",
      finish:
        "Every structure is asked once, in a new order each round. At the end you see your score and can try again or leave the quiz.",
    },
    note: "Quiz scores are not saved. They are cleared when you leave the page or choose a different organ.",
    exampleCaption: "An example question from the heart quiz, as it appears above the model.",
  },

  languages: {
    intro:
      "Corpus is available in {count} languages. In Explore, organ names, descriptions, structure labels and the viewer controls are translated into each of them.",
    switchTitle: "Changing language",
    switchBody:
      "Choose a language from the list at the foot of any page, or from the language menu at the top of Explore. You stay on the page you were reading.",
    rtl: "Arabic is read from right to left, and the whole layout mirrors to match.",
    fallback: "Where a page has not been translated into your language yet, it appears in English.",
    listLabel: "Available languages",
    current: "Current language",
  },

  account: {
    status: "Not available yet",
    body: "Accounts are not available yet, so you cannot sign in or create one today. You do not need one: everything in Explore works without signing in.",
    saved: "Without an account, Corpus does not save your quiz scores or the organs you have viewed.",
    cta: "Start exploring",
  },

  faq: {
    whatIs: {
      q: "What is Corpus?",
      a: "Corpus is an interactive anatomy atlas. You explore 3D models of human organs, read the named structures inside them, and test yourself as you go. It is made for anyone learning anatomy, from students to artists to the simply curious.",
    },
    exploreOrgan: {
      q: "How do I explore an organ?",
      a: "Open Explore and choose an organ from the organ library. Turn the model, select the coloured dots to read each structure, and use the cards below the viewer to go further. You can also open an organ directly from the list on this page.",
    },
    rotate: {
      q: "Can I rotate the 3D models?",
      a: "Yes. Drag the model with a mouse or one finger, or press Tab to give it focus and use the left and right arrow keys. Scroll or pinch to zoom, and select {reset} to return to the starting view.",
    },
    languages: {
      q: "Which languages are supported?",
      a: "Corpus is available in {count} languages: {list}.",
    },
    free: {
      q: "Is Corpus free?",
      a: "Yes. Everything you can do in Corpus today is free, with no account and no payment. The Pricing page explains how plans may work in the future.",
    },
    mobile: {
      q: "Can I use Corpus on mobile?",
      a: "Yes. Corpus works in the web browser on phones and tablets. Drag with one finger to turn a model, pinch to zoom and tap a dot to read it. On a small screen the organ library opens from the button at the top of Explore.",
    },
    medical: {
      q: "Is Corpus medical advice?",
      a: "No. Corpus is an educational resource for learning anatomy. It does not provide medical advice, diagnosis or treatment, and it cannot tell you anything about your own body or health. Clinical notes are included only to explain why structures matter. If you are worried about your health, contact a doctor or another qualified health professional. In an emergency, call your local emergency number.",
    },
    accuracy: {
      q: "How accurate are the anatomy models?",
      a: "The models and illustrations are simplified educational representations. They show the overall form of each organ and roughly where its main structures lie, not every detail or the natural variation between bodies. They are not based on any individual patient and are not suitable for clinical use. Each organ is scaled to fill the viewer, so sizes cannot be compared between models. Structure names follow Terminologia Anatomica, the international standard for anatomical terms.",
    },
  },
  faqLinks: {
    explore: "Open Explore",
    pricing: "Read about pricing",
    report: "Report an error",
  },

  contact: {
    intro:
      "Found a mistake, something that does not work, or have an idea? Corpus collects reports and suggestions publicly on GitHub.",
    cta: "Report an issue on GitHub",
    newTab: "(opens in a new tab)",
    includeTitle: "Helpful to include",
    include: {
      page: "The page or organ you were viewing",
      device: "Your device and browser",
      language: "The language you were using",
      steps: "What you expected, and what happened instead",
    },
    public:
      "Issues on GitHub are public, and opening one needs a free GitHub account. Please do not include personal or health information.",
    medical:
      "Corpus cannot answer questions about your own health. For medical concerns, please speak to a qualified health professional.",
  },
};
