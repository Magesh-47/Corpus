import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "Über Corpus — Anatomie-Atelier",
    description:
      "Warum Corpus Anatomie als visuelle Sprache versteht: 3D-Organe, gemalte Tafeln und lateinische Terminologie – gemacht, um den Körper durch Betrachten, Handhaben und Abrufen zu lernen, in {count} Sprachen.",
  },

  plate: "Tafel {number}",

  hero: {
    eyebrow: "Über Corpus",
    titleFirst: "Anatomie ist eine visuelle Sprache.",
    titleSecond: "Wir haben einen Ort geschaffen, sie zu lernen.",
    contents: "Inhalt",
    lede: "Corpus ist ein Anatomie-Atelier: 3D-Organe, gemalte Tafeln und präzise lateinische Namen, so angeordnet, dass Sie den Körper durch genaues Hinsehen lernen können.",
    alt: "Aquarell des menschlichen Gehirns von links, darunter Kleinhirn und Hirnstamm.",
  },

  depth: {
    label: "Tiefe",
    titleFirst: "Der Körper ist zu komplex,",
    titleSecond: "um ihn als flaches Bild zu lernen.",
    intro: "Seit Generationen wird Anatomie mit Schaubildern, Atlanten, Listen und Beschriftungen gelehrt.",
    valuable: "Diese Werkzeuge sind wertvoll.",
    turn: "Doch der Körper ist nicht flach.",
    truths: {
      overlap: "Strukturen überlagern sich.",
      connect: "Systeme greifen ineinander.",
      space: "Organe nehmen Raum ein.",
      form: "Form verändert Funktion.",
    },
    close: "Corpus ist um diese Wirklichkeit herum gebaut.",
    caption: "Im Körper und als ganzes Organ.",
    bodyAlt: "Aquarellfigur eines menschlichen Körpers mit beiden Lungenflügeln im Brustkorb und einem vergrößerten Kreis, der Trauben von Luftbläschen zeigt.",
    organAlt: "Aquarell beider Lungenflügel, die Luftröhre teilt sich in verzweigte Atemwege.",
  },

  atelier: {
    label: "Der Name",
    title: "Anatomie-Atelier",
    meaning: "Ein Atelier ist eine Werkstatt – ein Raum, in dem mit den Händen gearbeitet wird.",
    body: "Corpus behandelt Anatomie als etwas, womit Sie arbeiten, und nicht als etwas, das Sie nur lesen.",
    verbsTitle: "Im Atelier",
    verbs: {
      observe: { verb: "Sie beobachten.", note: "Drehen Sie ein Modell und gehen Sie nah heran." },
      manipulate: { verb: "Sie greifen ein.", note: "Isolieren Sie ein Organ oder legen Sie einen Querschnitt an." },
      compare: { verb: "Sie vergleichen.", note: "Stellen Sie ein Organ neben ein anderes." },
      question: { verb: "Sie fragen nach.", note: "Wählen Sie eine Struktur, um ihren Namen und ihre Aufgabe zu sehen." },
      practice: { verb: "Sie üben.", note: "Finden Sie jede erfragte Struktur und prüfen Sie sich selbst." },
    },
    studioAlt:
      "Ein gezeichneter Arbeitstisch: darauf eine angeheftete Bleistiftstudie des Herzens und ein gemaltes Nierenpaar auf einer Drehscheibe, beschriftet mit Hinweislinien und seinem lateinischen Namen.",
  },

  principles: {
    label: "Grundsätze",
    lines: {
      science: "Zuerst die Wissenschaft.",
      story: "Dann die Erzählung.",
      visuals: "Immer das Bild.",
    },
    columns: {
      scientific: {
        label: "Wissenschaftlich",
        title: "Gegründet auf anatomische Struktur und Terminologie.",
        body: "Die Strukturen sind nach der Terminologia Anatomica benannt, dem internationalen Standard für anatomische Begriffe.",
      },
      visual: {
        label: "Visuell",
        title: "Auf räumliches Verständnis ausgelegt.",
        body: "Organe sind Modelle, die Sie drehen, schneiden und vergleichen können – keine einzelnen gedruckten Ansichten.",
      },
      educational: {
        label: "Didaktisch",
        title: "Aufgebaut auf aktivem Erkunden und Abrufen.",
        body: "Sie finden Strukturen selbst am Modell und sehen sofort, ob Sie richtig lagen.",
      },
    },
    note: "Die Modelle und Illustrationen sind vereinfachte Darstellungen für Lernzwecke. Corpus dient dem Lernen und ist keine medizinische Beratung.",
  },

  world: {
    label: "Sprachen",
    title: "Für die ganze Welt gemacht.",
    body: {
      languages:
        "Die Anatomie im Bereich Entdecken – von Organnamen und Beschreibungen bis zu jeder Strukturbeschriftung – ist in {count} Sprachen verfügbar.",
      scripts:
        "Auf Arabisch liest sich das gesamte Layout von rechts nach links. Chinesisch, Japanisch und Koreanisch sind in Schriften gesetzt, die für ihre Schriftsysteme geschaffen wurden.",
      latin:
        "Unter jeder Sprache liegt derselbe lateinische Begriff. Er sorgt dafür, dass eine Studentin in Kairo und ein Student in Seoul auf dieselbe Struktur zeigen, wie auch immer sie sie nennen.",
      honest:
        "Übersetzen ist sorgfältige, fortlaufende Arbeit, und manche Sprachen werden sich natürlicher lesen als andere, während wir sie verfeinern.",
    },
    namesTitle: "Eine Struktur, {count} Namen",
    namesCaption: "Das Herz, wie der Bereich Entdecken es in jeder Sprache nennt. Der lateinische Begriff bleibt gleich.",
  },

  closing: {
    titleFirst: "Wir arbeiten an einem besseren Weg,",
    titleSecond: "den menschlichen Körper zu sehen.",
    cta: "Corpus entdecken",
  },
};
