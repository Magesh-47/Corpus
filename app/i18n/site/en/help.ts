/**
 * Help centre copy. Every instruction here describes what Explore actually
 * does today (AnatomyApp, OrganViewer and the three.js viewer's controls) —
 * change them together. Tool, quiz and panel labels that appear inside Explore
 * are read from the app's own dictionary at render time, so they always match
 * what the learner sees on screen; only the explanations live here.
 */
export const help = {
  meta: {
    title: "Corpus Help — Anatomy Learning Guide",
    description:
      "How to use Corpus: turn and zoom the 3D organ models, read their structures, test yourself, change language, and find plain answers to common questions.",
  },

  hero: {
    eyebrow: "Help",
    title: "Find your way around Corpus.",
    plate: {
      alt: "Watercolour study of a human eye, with the muscles that turn it and the optic nerve behind",
    },
  },

  search: {
    label: "What can we help you find?",
    placeholder: "Try “zoom” or “hotspots”",
    clear: "Clear search",
    resultsLabel: "Search results",
    count: "Results: {count}",
    more: "Showing the first {shown}. Every matching question is also shown below.",
    kind: {
      question: "Question",
      guide: "Guide",
    },
    empty: {
      title: "Nothing matches “{query}”.",
      body: "Try a shorter or different word, or browse the guides below.",
    },
    faqStatus: "Showing {count} of {total} questions that match your search.",
    faqEmpty: "No questions match your search.",
    showAll: "Show all questions",
  },

  categories: {
    heading: "Browse by topic",
    items: {
      gettingStarted: { label: "Getting started", line: "Learn the basics." },
      viewer: { label: "3D viewer", line: "Learn how to navigate anatomy." },
      exploring: { label: "Exploring", line: "Find organs and structures." },
      practice: { label: "Practice", line: "Understand labeling and recall." },
      languages: { label: "Languages", line: "Change your Corpus language." },
      account: { label: "Account", line: "Manage your account." },
    },
  },

  gettingStarted: {
    title: "Your first few minutes",
    intro: "Corpus runs in your web browser. There is nothing to install and no account to create.",
    steps: {
      open: {
        title: "Open Explore",
        body: "Select {explore} in the main navigation. The heart is shown first.",
      },
      choose: {
        title: "Choose an organ",
        body: "Pick an organ from the library beside the model. On a phone, open the library from the top of the screen.",
      },
      look: {
        title: "Look closely",
        body: "Drag to turn the model, zoom in, and select the dots to read the name of each structure.",
      },
      test: {
        title: "Test yourself",
        body: "When you feel ready, start the quiz and find each structure by name.",
      },
    },
    cta: "Open Explore",
  },

  viewer: {
    title: "Turn, zoom and read a model",
    intro: "Each organ is a 3D model you can examine from every side, with a mouse, a touch screen or the keyboard.",
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
        pointer: "Click a dot",
        touch: "Tap a dot",
        keyboard: "Screen readers can read every structure from a list beside the model.",
      },
      close: {
        action: "Close a label",
        pointer: "Click the dot again, or anywhere else",
        touch: "Tap the close button on the label",
        keyboard: "Escape key",
      },
    },
    keyboardNote: "Keyboard controls work once the model has focus: press Tab until the model is selected.",
    toolsTitle: "The viewer tools",
    tools: {
      rotate: "Starts or stops the slow automatic turn. The {autoRotate} switch does the same.",
      zoom: "Moves the view one step closer to the model.",
      isolate: "Fades the display stand, so the organ stands on its own.",
      section: "Cuts through the model to show a view of its interior.",
      layers: "Shows the model as a wireframe, revealing the mesh it is built from.",
      compare: "Compares the organ’s main role and size with a second organ.",
      reset: "Returns the model to its starting view and closes any open label.",
    },
    trouble:
      "If a model does not appear, your browser needs 3D graphics (WebGL). Update the browser, check that hardware acceleration is on, and reload the page.",
  },

  exploring: {
    title: "Organs, facts and learning cards",
    intro: "Corpus includes {count} organs. Each opens with its 3D model at the centre and its facts alongside.",
    parts: {
      library: {
        title: "The organ library",
        body: "Lists every organ with its body system. Type in the search box at the top of Explore to filter it.",
      },
      panel: {
        title: "The information panel",
        body: "Gives the organ’s size, weight, location, blood supply and function, a medical note and one memorable fact.",
      },
      cards: {
        title: "The learning cards",
        body: "Open the organ’s microscopic tissue, a comparison, a short animation, common conditions and where it sits in the body.",
      },
    },
    catalogueTitle: "Open an organ directly",
    catalogueLink: "Open {organ} in Explore",
    clinical:
      "Clinical notes show why the anatomy matters. They are not there to diagnose or treat anyone. If you have a concern about your health, speak to a doctor.",
  },

  practice: {
    title: "Test yourself on the model",
    intro: "Practice happens on the model itself. The labelling quiz asks you to find each named structure of the organ you are viewing.",
    steps: {
      start: "Open an organ and select {quiz}. The model stops turning, so the dots stay still.",
      find: "Corpus names one structure at a time. Click or tap the dot you think matches it.",
      feedback: "A correct answer moves you on. If you miss, Corpus shows which structure you chose and marks the right one.",
      finish: "Every structure is asked once, in a new order each round. At the end you see your score.",
    },
    note: "Quiz scores are not saved. They are cleared when you leave the page or choose another organ.",
    exampleCaption: "An example question from the heart quiz, as it appears above the model.",
  },

  languages: {
    title: "Reading Corpus in your language",
    intro: "Corpus is available in {count} languages. In Explore, organ names, descriptions, structure labels and controls are translated into each of them.",
    switchBody:
      "Choose a language at the foot of any page, or from the language menu at the top of Explore. You stay on the page you were reading.",
    rtl: "Arabic reads from right to left, and the whole layout mirrors to match. Pages not yet translated appear in English.",
    listLabel: "Available languages",
    current: "Current language",
  },

  account: {
    title: "Accounts are coming soon",
    body: "The sign-in, sign-up and password reset forms are in place, but accounts do not exist yet. The forms say so, and nothing you enter is sent.",
    saved: "You do not need an account: everything in Explore works without one. Nothing you do is saved between visits.",
    cta: "Start exploring",
  },

  faqHeading: "Common questions",
  faq: {
    whatIs: {
      q: "What is Corpus?",
      a: "Corpus is an interactive anatomy atlas. You explore 3D models of human organs, read the named structures inside them and test yourself as you go.",
    },
    exploreOrgan: {
      q: "How do I explore an organ?",
      a: "Open Explore and choose an organ from the library. Turn the model, select the dots to read each structure, and open the cards below the viewer to go further.",
    },
    rotate: {
      q: "How do I rotate a model?",
      a: "Drag the model with a mouse or one finger. With the keyboard, press Tab until the model has focus, then use the left and right arrow keys. Select {reset} to return to the starting view.",
    },
    zoom: {
      q: "How do I zoom?",
      a: "Use the scroll wheel or trackpad, pinch with two fingers on a touch screen, or select the {zoom} tool. The plus and minus keys also work when the model has focus.",
    },
    hotspots: {
      q: "What are hotspots?",
      a: "Hotspots are the dots on the model. Each marks a structure: select one to see its name and a short description.",
    },
    isolate: {
      q: "What does “isolate” do?",
      a: "The {isolate} tool fades the display stand so the organ is shown on its own. Select it again to bring the stand back.",
    },
    languages: {
      q: "What languages are supported?",
      a: "Corpus is available in {count} languages: {list}.",
    },
    mobile: {
      q: "Does Corpus work on mobile?",
      a: "Yes, in a modern web browser on phones and tablets. Drag with one finger to turn a model, pinch to zoom and tap a dot to read it.",
    },
    medical: {
      q: "Is Corpus medical advice?",
      a: "No. Corpus is for learning anatomy. It does not give medical advice, diagnosis or treatment. If you are worried about your health, contact a doctor. In an emergency, call your local emergency number.",
    },
    accuracy: {
      q: "How accurate is the anatomy?",
      a: "The models and illustrations are simplified educational representations. They show the overall form of each organ and where its main structures lie, not every detail. Structure names follow Terminologia Anatomica, the international standard.",
    },
    createAccount: {
      q: "How do I create an account?",
      a: "Accounts are coming soon. The sign-up form is in place, but it does not create an account yet and nothing you enter is sent. You do not need an account to use Explore.",
    },
    resetPassword: {
      q: "How do I reset my password?",
      a: "There are no accounts yet, so there is no password to reset. The reset form is in place for later; today it does not send any email.",
    },
  },
  faqLinks: {
    explore: "Open Explore",
    report: "Report an error",
  },

  contact: {
    title: "Still need help?",
    body: "We’re building Corpus carefully. If something isn’t working as expected, let us know.",
    cta: "Contact support",
    ctaDescription: "Opens the project’s public issue tracker on GitHub in a new tab.",
    note: "Reports are public and need a free GitHub account. Please do not include personal or health information.",
  },
};
