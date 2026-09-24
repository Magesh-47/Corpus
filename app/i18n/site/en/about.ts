/**
 * About page copy. Text wrapped in *asterisks* is set in italic; translators
 * should keep the asterisks around the equivalent word or phrase. Organ names,
 * systems, tissues and Latin terms are not repeated here — the page reads them
 * from the anatomy data so they can never drift from what Explore shows.
 */
export const about = {
  meta: {
    title: "About",
    description:
      "Why Corpus exists: anatomy as visual, spatial knowledge, at the intersection of science, visualization, education, and art.",
  },

  opening: {
    eyebrow: "About Corpus",
    title: "Anatomy is not a list of names. It is a *place*.",
    lede:
      "Corpus is a digital anatomy atelier: detailed 3D organs, painted plates and precise Latin names, arranged so you can turn a structure over, see where it sits in the body, and name it yourself. This is why we made it, and how we try to get it right.",
    plate: {
      number: "Plate I",
      caption: "The heart in its place, at the centre of the whole circulatory system.",
      alt: "Watercolour figure of a standing human body with arteries in red and veins in blue, the heart in the centre of the chest, and an enlarged circle showing a network of fine vessels.",
    },
    contents: "In this essay",
    contentsNav: "Chapters of this page",
  },

  chapterLabel: "Chapter {number}",

  intersection: {
    eyebrow: "Where Corpus stands",
    title: "Four disciplines, one atlas",
    terms: {
      science: {
        word: "Science",
        note: "Structures named with Terminologia Anatomica, the international reference for anatomical terms.",
      },
      visualization: {
        word: "Visualization",
        note: "Organs you can rotate, slice and compare, instead of a single printed view.",
      },
      education: {
        word: "Education",
        note: "Practice built into exploring: find a structure, name it, and check yourself.",
      },
      art: {
        word: "Art",
        note: "Painted plates and quiet pages, in the tradition of the anatomical atlas.",
      },
    },
    conclusion:
      "Corpus is made where the four meet: precise in its names, visual in its method, and careful about how things look.",
  },

  chapters: {
    why: {
      label: "Why Corpus exists",
      title: "Most people meet anatomy as words to memorise. We want them to meet the body first.",
      body: {
        first:
          "Anatomy is usually learned from lists: bones, muscles and vessels, each with a name to repeat until it sticks. The names matter, but a name learned without its shape, its neighbours and its place in the body is easy to forget.",
        second:
          "Corpus reverses that order. You begin with the structure itself. You turn it, look inside it and see where it sits, and the name arrives as a label for something you already recognise.",
        third:
          "It is made for students of medicine, nursing and the life sciences, for artists who draw the human figure, and for anyone who has wondered what is inside them.",
      },
    },
    flat: {
      label: "The problem with flat anatomy",
      title: "The body has depth. Most of the ways we learn it do not.",
      body: {
        first:
          "A printed diagram shows one view, chosen by someone else. To understand how the lungs wrap around the heart, or how its chambers sit behind one another, you have to rebuild the third dimension in your head from drawings that leave it out.",
        second:
          "That act of translation is where much of the difficulty of anatomy lives. The subject is not too complex to understand. It has simply been flattened.",
      },
      quote: "A page can show one side of the heart. The heart has no single side.",
    },
    visual: {
      label: "Anatomy as visual knowledge",
      title: "To know a structure is to know its shape, its scale and its surroundings.",
      body: {
        first:
          "Anatomy has always been taught through images. Long before photography, anatomists worked with artists to draw what they found, because a precise drawing can hold more than a page of description.",
        second:
          "Corpus continues that tradition. Each organ is shown at more than one scale: in its place in the body, as a whole organ, and as tissue under the microscope. You move between them the way an anatomist moves between the body and the slide.",
      },
      scales: {
        title: "One organ, three scales",
        body: {
          label: "In the body",
          alt: "Watercolour figure of a human body with the airway and both lungs drawn in the chest, and an enlarged circle showing clusters of air sacs and vessels.",
        },
        organ: {
          label: "The organ",
          alt: "Watercolour painting of both lungs, with the trachea dividing into branching airways.",
        },
        tissue: {
          label: "The tissue",
          alt: "Circular microscope view of lung tissue: thin walls between open air spaces, dotted with red blood cells.",
        },
      },
    },
    accuracy: {
      label: "Scientific accuracy",
      title: "Precise where it matters, and honest about what it is.",
      body: {
        first:
          "Every structure in Corpus is named according to Terminologia Anatomica, the international reference for anatomical terminology. The Latin term is the fixed point: labels are translated into each language, but the structure they refer to never changes.",
      },
      index: {
        title: "From the index",
        caption: "Each label in Explore is anchored to its Terminologia Anatomica term.",
        structure: "Structure",
        organ: "Organ",
        term: "Latin term",
      },
      commitments: {
        names: {
          title: "Standard names",
          body: "Structure names follow Terminologia Anatomica, so what you learn here matches the vocabulary of anatomy courses and atlases.",
        },
        written: {
          title: "Written to teach",
          body: "Descriptions are written for learning. They aim to be clear, correct and short, rather than exhaustive.",
        },
        simplified: {
          title: "Simplified on purpose",
          body: "The 3D models and painted plates are simplified educational representations. They show the form of a structure and how it relates to its neighbours, not the variation found in real bodies.",
        },
        notClinical: {
          title: "Not a clinical tool",
          body: "Corpus is for education. It is not medical advice and is not designed for diagnosis or treatment. For questions about your health, speak to a qualified professional.",
        },
      },
      note: "Corpus holds no medical accreditation or professional certification, and has no institutional partnerships.",
    },
    exploration: {
      label: "3D exploration",
      title: "Turn it over. Look inside. See how the parts fit together.",
      body: {
        first:
          "In Explore, each organ is a 3D model. You can rotate and zoom it, set it apart from its stand, slice a cross-section through it, or let it turn slowly on its own while you read.",
        second:
          "Marked points on the model name its key structures. Select one to see its name and a short note on what it does, or place the organ beside another to compare their roles and size.",
      },
      collection: {
        title: "The collection today",
        caption: "{count} organs, each with a 3D model and a set of painted plates.",
        open: "{organ}, open in Explore",
      },
    },
    active: {
      label: "Active learning",
      title: "Learning and practice happen where you are already looking.",
      body: {
        first:
          "There is no separate test to switch to. When you are ready, the model becomes the question: Corpus asks you to find each structure in turn, tells you straight away whether you were right, and shows your score at the end of the round.",
        second:
          "Recalling a name, rather than rereading it, is one of the most reliable ways to make it last. So practice is not a chapter at the end of the book. It is part of looking.",
      },
      loop: {
        title: "How a session unfolds",
        steps: {
          explore: { title: "Explore", body: "Choose an organ and move around it freely." },
          understand: {
            title: "Understand",
            body: "Read what each structure is and does, and see its tissue and its place in the body.",
          },
          practice: {
            title: "Practice",
            body: "Find each structure on the model when asked, with feedback after every answer.",
          },
          remember: {
            title: "Remember",
            body: "Come back and try again. Each round asks for every structure once, in a new order.",
          },
        },
      },
    },
    multilingual: {
      label: "Multilingual access",
      title: "Anatomy belongs to everyone who has a body.",
      body: {
        first:
          "The anatomy in Explore, including organ names, descriptions and structure labels, is available in {count} languages. Arabic reads from right to left, as it should.",
        second:
          "Because every label is anchored to its Latin term, a student in Cairo and a student in Seoul are always pointing at the same structure, whatever they call it.",
      },
      names: {
        title: "One structure, many names",
        caption: "The heart, as Explore names it in each language. The Latin term stays the same.",
      },
    },
    atelier: {
      label: "The Anatomy Atelier philosophy",
      title: "An atelier is a place where you learn by looking closely.",
      body: {
        first:
          "Artists have studied anatomy for centuries, not to pass an examination, but to understand the form beneath the surface. We think everyone who learns the body deserves that same slow, attentive way of seeing.",
      },
      tenets: {
        look: {
          title: "Look before you label",
          body: "Meet the shape first. A name means more once you know what it belongs to.",
        },
        sides: {
          title: "Every side, not one",
          body: "A structure is understood from all around, never from a single fixed view.",
        },
        precise: {
          title: "Precise, then beautiful",
          body: "Accuracy comes first. Care for how things look is what makes you want to return.",
        },
        calm: {
          title: "Room to think",
          body: "Quiet pages and restrained motion, so your attention stays on the body.",
        },
      },
    },
    future: {
      label: "Future vision",
      title: "What comes next will live inside Explore, not beside it.",
      body: {
        first:
          "Corpus is at its beginning. The ideas below are plans, not features. None of them exists yet, and we will describe them as available only when they are.",
      },
      layers: {
        guide: {
          title: "A guide that answers questions",
          body: "AI guidance that explains the structure in front of you, in your language, as a layer over the model rather than a separate chat.",
        },
        progress: {
          title: "Progress you can see",
          body: "A record of the structures you have explored and practised, so you know what to review next.",
        },
        personal: {
          title: "A path shaped around you",
          body: "Suggestions for what to study next, based on your goals and what you have already learned.",
        },
      },
    },
  },

  closing: {
    eyebrow: "Continue",
    title: "The best way to understand Corpus is to *open the body*.",
    lede: "Start with the heart: turn it, find the left ventricle, and see the tissue that makes it beat.",
    secondary: "How Corpus works",
  },
};
