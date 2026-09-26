import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Preise von Corpus — Anatomie lernen",
    description:
      "Entdecken Sie die Kernanatomie in 3D mit Corpus kostenlos und ohne Konto. Corpus Plus und Bildung befinden sich in Entwicklung und haben noch keinen Preis.",
  },

  hero: {
    eyebrow: "Preise",
    titleLead: "Den Körper entdecken.",
    titleRest: "Wählen Sie, wie tief Sie gehen möchten.",
    lede: "Die Kernanatomie können Sie heute kostenlos erkunden, ohne Konto und ohne Zahlung. Corpus Plus und Bildung sind noch in Entwicklung, daher hat keiner der beiden Tarife bislang einen Preis.",
    primary: "Jetzt entdecken",
    secondary: "Tarife vergleichen",
    plate: {
      label: "Tafel: {organ} im Schnitt",
      alt: "Ein Hautblock in Aquarell, aufgeschnitten, um seine Schichten zu zeigen: die Oberfläche, die Lederhaut mit Haarfollikeln, Drüsen und Gefäßen und darunter das gelbe Fettgewebe",
      caption: "Von der Oberfläche bis zum Fett darunter. Dieselben Schichten sind am 3D-Modell beschriftet – kostenlos zu erkunden.",
    },
  },

  plans: {
    title: "Die Tarife",
    summary: "Ein Tarif ist heute verfügbar. Zwei sind in Entwicklung.",
    numberLabel: "Tarif {number}",
    learnMore: "Mehr über {plan}",
    items: {
      free: {
        name: "Kostenlos",
        tagline: "Die Kernanatomie erkunden.",
        price: "Keine Kosten",
        priceNote: "Kein Konto nötig",
        description: "Der Bereich Entdecken in vollem Umfang, so wie er heute besteht – offen für alle mit einem aktuellen Browser.",
        listHeading: "Heute enthalten",
        list: {
          organs: "{organCount} Organe in 3D, von Herz und Gehirn bis zur Haut",
          viewer: "Drehen und Zoomen, mit Isolieren, Querschnitt und Schichten",
          hotspots: "{structureCount} beschriftete Strukturen, jeweils mit lateinischem Begriff",
          cards: "Lernkarten zu Gewebe, Funktion, Erkrankungen und Vergleich",
          quiz: "Ein Beschriftungsquiz, bei dem Sie Strukturen am Modell finden",
          languages: "Organbeschreibungen in {languageCount} Sprachen",
        },
        cta: "Jetzt entdecken",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "Tiefer gehen mit künftigen Lern- und Personalisierungsfunktionen.",
        price: "Noch kein Preis",
        priceNote: "In Entwicklung",
        description: "Geplant für alle, die über die Kernsammlung hinausgehen und zu Gelerntem zurückkehren möchten.",
        listHeading: "Was wir ausloten",
        list: {
          depth: "Mehr vom Körper, über die heute verfügbaren Organe hinaus",
          study: "Werkzeuge, die Ihnen helfen, das Erkundete zu üben und zu behalten",
          guidance: "Geführte Erklärungen neben den 3D-Modellen",
          progress: "Ein Weg zurück zu dem, was Sie bereits gelernt haben",
        },
        cta: "Mehr erfahren",
      },
      education: {
        name: "Bildung",
        tagline: "Corpus in Lehre und Unterricht bringen.",
        price: "Noch kein Preis",
        priceNote: "In Entwicklung",
        description: "Geplant für Lehrkräfte und Schulen, die Corpus in eine Unterrichtsstunde oder einen Kurs einbinden möchten.",
        listHeading: "Was wir ausloten",
        list: {
          classroom: "Möglichkeiten, Corpus mit einer ganzen Klasse gleichzeitig zu nutzen",
          teaching: "Unterstützung beim Vorbereiten und Leiten von Anatomiestunden",
          practice: "Übungen, die eine Gruppe von Lernenden gemeinsam bearbeiten kann",
        },
        cta: "Mehr erfahren",
      },
    },
    plannedNote: "Tarife in Entwicklung sind Richtungen, keine Zusagen. Funktionen, Zeitplan und Preise stehen noch nicht fest, und auf dieser Seite kann nichts gekauft werden.",
  },

  comparison: {
    eyebrow: "Vergleich",
    title: "Was jeder Tarif enthält.",
    lede: "Die Spalte Kostenlos beschreibt Corpus, wie es heute ist. Die beiden anderen beschreiben Tarife in Entwicklung und können sich ändern.",
    caption: "Funktionen nach Tarif. Kostenlos ist jetzt verfügbar; Corpus Plus und Bildung sind in Entwicklung.",
    featureHeading: "Funktion",
    status: {
      available: "Jetzt verfügbar",
      planned: "Geplant",
      undecided: "Nicht entschieden",
      unavailable: "Nicht verfügbar",
      otherPlan: "Nicht in diesem Tarif",
    },
    rows: {
      exploration: {
        name: "3D-Anatomie erkunden",
        free: "Drehen, Zoomen, Isolieren, Querschnitt und Schichten",
        plus: "Alles aus „Kostenlos“",
        education: "Alles aus „Kostenlos“",
      },
      library: {
        name: "Organbibliothek",
        free: "{organCount} Organe, mit Suche",
        plus: "Mehr vom Körper",
        education: "Alles aus „Kostenlos“",
      },
      structures: {
        name: "Anatomische Strukturen",
        free: "{structureCount} beschriftete Strukturen mit lateinischen Begriffen",
        plus: "Alles aus „Kostenlos“",
        education: "Alles aus „Kostenlos“",
      },
      learning: {
        name: "Interaktives Lernen",
        free: "Lernkarten zu Gewebe, Funktion, Erkrankungen und Vergleich",
        plus: "Vertiefende Lernwerkzeuge",
        education: "Material für den Unterricht",
      },
      practice: {
        name: "Üben",
        free: "Ein Beschriftungsquiz am 3D-Modell",
        plus: "Mehr Übungsmöglichkeiten",
        education: "Übungen für eine ganze Klasse",
      },
      guidance: {
        name: "KI-Begleitung",
        free: "Corpus hat heute keine KI-Funktionen",
        plus: "Geführte Erklärungen neben den Modellen",
        education: "Für diesen Tarif noch nicht entschieden",
      },
      progress: {
        name: "Persönlicher Fortschritt",
        free: "Fortschritt wird zwischen Besuchen nicht gespeichert",
        plus: "Ein Weg zurück zu dem, was Sie gelernt haben",
        education: "Für diesen Tarif noch nicht entschieden",
      },
      educators: {
        name: "Werkzeuge für Lehrende",
        free: "Heute keine Werkzeuge für Lehrende",
        plus: "Stattdessen für Bildung geplant",
        education: "Unterstützung beim Vorbereiten und Leiten von Stunden",
      },
    },
  },

  collection: {
    eyebrow: "Im kostenlosen Tarif",
    title: "Die kostenlose Sammlung, offen für alle.",
    lede: "Jedes Organ hat ein 3D-Modell, eine illustrierte Tafel und beschriftete Strukturen. Wählen Sie eines, um es im Bereich Entdecken zu öffnen.",
    plateLabel: "Tafel {number}",
    structures: "Beschriftete Strukturen: {count}",
    openOrgan: "{organ}: im Bereich Entdecken öffnen",
    footnote: "Die Modelle und Illustrationen sind vereinfachte Darstellungen für Lernzwecke, keine klinischen Referenzen, und nichts in Corpus ist medizinische Beratung.",
  },

  faq: {
    eyebrow: "Fragen",
    title: "Klar gefragt, klar beantwortet.",
    items: {
      account: {
        q: "Brauche ich ein Konto?",
        a: "Nein. Sie können den Bereich Entdecken öffnen und sofort beginnen, ohne sich anzumelden.",
      },
      payments: {
        q: "Kann ich Corpus Plus oder Bildung jetzt schon bezahlen?",
        a: "Nein. Keiner der beiden Tarife ist verfügbar, es wurde kein Preis festgelegt, und Corpus nimmt heute keinerlei Zahlungen entgegen. Sobald ein Tarif bereit ist, wird er hier beschrieben.",
      },
      classroom: {
        q: "Kann ich Corpus heute schon im Unterricht nutzen?",
        a: "Ja. Der Bereich Entdecken ist kostenlos und braucht kein Konto, sodass Lernende ihn in einem aktuellen Browser öffnen können. Werkzeuge für Klassen und Lehrende gibt es noch nicht.",
      },
    },
  },

  closing: {
    eyebrow: "Beginnen",
    titleLead: "Unsicher, wo Sie anfangen sollen?",
    titleRest: "Erkunden Sie die Anatomie kostenlos.",
    cta: "Corpus entdecken",
    imageAlt: "Ein Aquarell der Haut unter dem Mikroskop: rosa geschichtete Oberhaut über dem lockereren, gewellten Gewebe der Lederhaut",
    caption: "{organ} unter dem Mikroskop: {tissue}",
  },
};
