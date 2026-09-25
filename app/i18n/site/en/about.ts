/**
 * About page copy — an editorial manifesto in four short chapters.
 * Organ names, structure labels and Latin terms are not repeated here: the
 * page reads them from the anatomy data, so they are translated with Explore
 * and can never drift from what it shows. {placeholders} are filled by the
 * page; keep them in the translation.
 */
export const about = {
  meta: {
    title: "About Corpus — Anatomy Atelier",
    description:
      "Why Corpus treats anatomy as a visual language: 3D organs, painted plates and Latin terminology, built for learning the body by looking, handling and recall, in {count} languages.",
  },

  /** Plate numbers, e.g. "Plate I". */
  plate: "Plate {number}",

  hero: {
    eyebrow: "About Corpus",
    titleFirst: "Anatomy is a visual language.",
    titleSecond: "We built a place to learn it.",
    contents: "Contents",
    lede: "Corpus is an anatomy atelier: 3D organs, painted plates and precise Latin names, arranged so you can learn the body by looking closely.",
    alt: "Watercolour painting of the human brain seen from the left side, with the cerebellum and brainstem beneath it.",
  },

  depth: {
    label: "Depth",
    titleFirst: "The body is too complex",
    titleSecond: "to learn as a flat picture.",
    intro: "For generations, anatomy has been taught through diagrams, atlases, lists, and labels.",
    valuable: "Those tools are valuable.",
    turn: "But the body is not flat.",
    truths: {
      overlap: "Structures overlap.",
      connect: "Systems connect.",
      space: "Organs occupy space.",
      form: "Form changes function.",
    },
    close: "Corpus is built around that reality.",
    caption: "In the body, and as a whole organ.",
    bodyAlt: "Watercolour figure of a human body with both lungs drawn in the chest, and an enlarged circle showing clusters of air sacs.",
    organAlt: "Watercolour painting of both lungs, with the trachea dividing into branching airways.",
  },

  atelier: {
    label: "The name",
    title: "Anatomy Atelier",
    meaning: "Atelier means workshop or studio.",
    body: "Corpus treats anatomy as something you work with rather than something you simply read.",
    verbsTitle: "In the atelier",
    verbs: {
      observe: { verb: "You observe.", note: "Turn a model and move in close." },
      manipulate: { verb: "You manipulate.", note: "Isolate an organ or cut a cross-section." },
      compare: { verb: "You compare.", note: "Set one organ beside another." },
      question: { verb: "You question.", note: "Select a structure to see its name and role." },
      practice: { verb: "You practice.", note: "Find each structure when asked, and check yourself." },
    },
    studioAlt:
      "A drawn study table: a pencil study of the heart pinned to it, and a painted pair of kidneys on a turntable, labelled with leader lines and their Latin name.",
  },

  principles: {
    label: "Principles",
    lines: {
      science: "Science first.",
      story: "Story second.",
      visuals: "Visuals always.",
    },
    columns: {
      scientific: {
        label: "Scientific",
        title: "Grounded in anatomical structure and terminology.",
        body: "Structures are named with Terminologia Anatomica, the international standard for anatomical terms.",
      },
      visual: {
        label: "Visual",
        title: "Designed around spatial understanding.",
        body: "Organs are models you can turn, section and compare, not single printed views.",
      },
      educational: {
        label: "Educational",
        title: "Built around active exploration and recall.",
        body: "You find structures on the model yourself, and see straight away whether you were right.",
      },
    },
    note: "The models and illustrations are simplified educational representations. Corpus is for learning, not medical advice.",
  },

  world: {
    label: "Languages",
    title: "Built for the world.",
    body: {
      languages:
        "The anatomy in Explore, from organ names and descriptions to every structure label, is available in {count} languages.",
      scripts:
        "In Arabic the whole layout reads from right to left. Chinese, Japanese and Korean are set in typefaces made for their scripts.",
      latin:
        "Beneath every language sits the same Latin term. It keeps a student in Cairo and a student in Seoul pointing at the same structure, whatever they call it.",
      honest:
        "Translation is careful, ongoing work, and some languages will read more naturally than others while we refine them.",
    },
    namesTitle: "One structure, {count} names",
    namesCaption: "The heart, as Explore names it in each language. The Latin term stays the same.",
  },

  closing: {
    titleFirst: "We're building a better way",
    titleSecond: "to see the human body.",
    cta: "Explore Corpus",
  },
};
