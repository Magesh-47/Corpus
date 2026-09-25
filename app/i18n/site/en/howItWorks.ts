/**
 * How it works (/how-it-works). English is the source of truth; every other
 * locale is type-checked against this shape. Lists are keyed objects so a
 * translation cannot silently drop an item. Organ names, facts, structure
 * labels and Latin terms are never written here — they come from the anatomy
 * data, so they are accurate and translated in every locale.
 */
export const howItWorks = {
  meta: {
    title: "How Corpus Works — Explore Anatomy in 3D",
    description:
      "Choose an organ, turn its 3D model, read its location, blood supply and function, then test yourself by finding its structures. How learning works in Corpus.",
  },

  hero: {
    eyebrow: "How it works",
    /** Each line of the headline is set on its own line. */
    title: {
      see: "See.",
      explore: "Explore.",
      understand: "Understand.",
      remember: "Remember.",
    },
    lede: "Corpus turns anatomy into an active visual experience.",
    body: "Five steps, taken with one organ at a time. The first four happen in Explore today. The fifth is still to come.",
    contentsLabel: "The five steps",
  },

  steps: {
    see: {
      name: "See",
      title: "Start with the whole.",
      line: "Choose an organ and see its form before worrying about its labels.",
      body:
        "Explore opens on a library of nine organs, from the heart and brain to the pancreas and skin. Choose one and it arrives whole. Its structures are marked with small dots, and their names wait until you ask for them.",
      plateLabel: "Plate I",
      caption: "{organ}, seen whole. One of nine organs in the Explore library.",
      alt: "Watercolour study of the human heart seen from the front, with the aorta arching above it",
    },
    explore: {
      name: "Explore",
      title: "Move through the structure.",
      line: "Rotate, zoom, isolate, and inspect anatomical relationships.",
      body:
        "Every organ is a 3D model. Drag to turn it, scroll or pinch to move closer, and select a dot to name the structure beneath it. Isolate, cross-section and layers each change how you see the same form.",
      viewerLabel: "3D viewer",
      controlsLabel: "Viewer controls",
      controls: {
        rotate: { name: "Rotate", note: "Drag" },
        zoom: { name: "Zoom", note: "Scroll or pinch" },
        isolate: { name: "Isolate", note: "Only the organ" },
        section: { name: "Section", note: "Slice it open" },
      },
      caption: "A still from the 3D viewer in Explore. The control labels are drawn here for illustration.",
      alt: "3D model of the heart in the Explore viewer, seen from the front on a plinth, with small coloured dots marking named structures",
    },
    understand: {
      name: "Understand",
      title: "Connect structure to function.",
      line: "Explore blood supply, location, function, tissue, and clinical context.",
      body:
        "Beside the model, an information panel sets out what the organ is and what it does. Learning cards go further: the tissue under a microscope, a comparison with another organ, where it works in the body, and the conditions that commonly affect it.",
      panelLabel: "Information panel",
      facts: {
        size: "Size",
        location: "Location",
        bloodSupply: "Blood supply",
        function: "Function",
        tissue: "Tissue",
      },
      conditionsLabel: "Clinical context",
      caption: "{organ}: facts from the information panel and learning cards in Explore.",
      organAlt: "Watercolour study of the lungs, with the trachea dividing into the two main bronchi",
      tissueAlt: "Circular microscope view of alveoli, the tiny air sacs of the lungs",
    },
    practice: {
      name: "Practice",
      title: "Test what you just explored.",
      line: "Identify structures and use active recall.",
      body:
        "Start the labelling quiz and the model holds still. Corpus names a structure and you find it on the model. A miss shows you where the answer was, and each round ends with your score and a chance to try again in a new order.",
      prompt: "Find",
      hint: "Select the matching dot",
      caption: "An illustration of the labelling quiz in Explore, where you select the dots on the 3D model itself.",
      alt: "Watercolour study of the brain with four numbered structures and blank labels, and a prompt asking you to find the {structure}",
    },
    remember: {
      name: "Remember",
      title: "Return to what matters.",
      line:
        "Your future Corpus experience will help you revisit structures, conversations, and areas that need more attention.",
      body:
        "This part does not exist yet. Corpus does not save what you have studied, so every visit to Explore starts fresh. Until then, retrying the labelling quiz is the way to return to a structure.",
      futureLabel: "Planned",
      future: {
        structures: "Structures to revisit",
        conversations: "Conversations to continue",
        attention: "Areas that need more attention",
      },
    },
  },

  closing: {
    titleStart: "Learning anatomy should feel",
    titleEnd: "like discovering something.",
    action: "Enter the anatomy atelier",
  },
};
