import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — Anatomie lernen wie ein Künstler",
    description:
      "Entdecken Sie den menschlichen Körper in detailreichem 3D: Drehen Sie Herz, Gehirn, Lunge und weitere Organe, blicken Sie unter die Oberfläche und testen Sie sich an den Strukturen in ihrem Inneren.",
  },

  hero: {
    eyebrow: "Anatomie, neu gedacht",
    title: "Anatomie lernen\nwie ein Künstler.",
    lede: "Entdecken Sie den menschlichen Körper in detaillierter 3D-Anatomie, erkunden Sie die Strukturen unter der Oberfläche und gewinnen Sie ein Verständnis, das über das Schaubild hinausgeht.",
    primary: "Den Körper entdecken",
    secondary: "Corpus kennenlernen",
    supportingLabel: "Was Corpus ist",
    supporting: {
      anatomy: "3D-Anatomie",
      visual: "Visuelles Lernen",
      languages: "Mehrsprachig",
    },
    plate: {
      number: "Tafel I",
      view: "Ansicht von vorn seitlich",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "Die oberflächlichen Muskeln von Kopf, Hals und Brust.",
      alt: "Eine anatomische Büste ohne Haut, die die oberflächlichen Muskeln von Gesicht, Hals, Schulter und Brust zeigt. Der Kopf ist zur Seite gedreht und nach oben geneigt.",
      legendLabel: "Auf dieser Tafel markierte Strukturen",
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
    title: "Das Anatomie-Atelier",
    line: "Entdecken Sie den Körper als dreidimensionales System.",
  },

  philosophy: {
    eyebrow: "Philosophie",
    title: "Anatomie lernt man nicht\nflach auswendig.",
    lede: "Der Körper ist dreidimensional, vernetzt und ständig in Bewegung. Corpus macht Anatomie zu etwas, das Sie sehen, erkunden und verstehen können.",
    steps: {
      see: {
        label: "Sehen",
        title: "Unter die Oberfläche blicken.",
        body: "Erkunden Sie Strukturen räumlich, statt den Körper auf ein flaches Schaubild zu reduzieren.",
        alt: "Das 3D-Herz aus dem Bereich Entdecken, zur Seite gedreht, mit den großen Gefäßen, die oben austreten.",
        caption: "Das Herz, gedreht im Bereich Entdecken.",
      },
      understand: {
        label: "Verstehen",
        title: "Die Teile verbinden.",
        body: "Gehen Sie von einer Struktur zu ihrer Funktion über, zu ihren Beziehungen, ihrer Blutversorgung, ihrem Gewebe und ihrem klinischen Kontext.",
        alt: "Aquarell des Gehirns in Seitenansicht.",
        caption: "Was der Bereich Entdecken zum Gehirn zeigt.",
        facets: {
          function: "Funktion",
          bloodSupply: "Blutversorgung",
          tissue: "Gewebe",
          clinical: "Klinischer Kontext",
        },
      },
      remember: {
        label: "Behalten",
        title: "Wissen aktiv machen.",
        body: "Testen Sie sich durch Erkennen, Erkunden und Abrufen.",
        alt: "Aquarell von Lunge und Luftröhre, vier Strukturen mit Nummern markiert.",
        caption: "Ein statisches Beschriftungsblatt. Im Bereich Entdecken finden Sie jede genannte Struktur am 3D-Modell.",
        blank: "Benennen Sie diese Struktur",
        answers: "Lösungen",
      },
    },
  },

  collection: {
    eyebrow: "Die Sammlung",
    title: "Beginnen Sie, wo Sie wollen.",
    lede: "Entdecken Sie die Strukturen, die uns zu Menschen machen – vom Rhythmus des Herzens bis zur Architektur des Gehirns.",
    explore: "Entdecken",
    lines: {
      heart: "Die Muskelpumpe im Zentrum des Kreislaufsystems.",
      brain: "Die Kommandozentrale des Nervensystems.",
      lungs: "Die Organe, in denen Sauerstoff ins Blut gelangt und Kohlendioxid es verlässt.",
      liver: "Ein Stoffwechselkraftwerk mit Hunderten lebenswichtiger Aufgaben.",
      kidneys: "Filter, die die Zusammensetzung des inneren Milieus im Körper regeln.",
      eyeball: "Ein Sinnesorgan, das Licht in visuelle Information verwandelt.",
    },
    more: "Außerdem im Bereich Entdecken: {organs}.",
    note: "Illustrationen und 3D-Modelle sind vereinfachte Darstellungen für Lernzwecke.",
  },

  explore: {
    title: "Anatomie nicht nur ansehen –\nsondern entdecken.",
    lede: "Drehen. Isolieren. Strukturen folgen. Sehen, wie alles zusammenhängt.",
    cta: "Den Anatomieatlas öffnen",
    still: "Standbild aus dem Bereich Entdecken",
    alt: "Das 3D-Herz im Bereich Entdecken, von vorn gesehen, mit Punkten, die auswählbare Strukturen markieren.",
    caption: "Jeder Punkt am Modell ist eine Struktur, die Sie auswählen können, um ihren Namen und ihre Aufgabe zu sehen.",
    controlsLabel: "Im Betrachter",
  },

  features: {
    eyebrow: "Im Betrachter",
    title: "Das Präparat aus jedem Blickwinkel.",
    items: {
      rotate: {
        label: "Drehen",
        line: "Strukturen aus jedem Winkel sehen.",
        body: "Ziehen Sie, um das Modell zu drehen, und zoomen Sie auf den Teil, den Sie gerade studieren.",
        alt: "Das 3D-Herz, so gedreht, dass seine Rückseite zu sehen ist.",
      },
      isolate: {
        label: "Isolieren",
        line: "Auf das Wesentliche konzentrieren.",
        body: "Blenden Sie die Umgebung aus und studieren Sie ein Organ für sich.",
        alt: "Das 3D-Auge frei schwebend, mit dem Sehnerv, der hinten austritt.",
      },
      section: {
        label: "Querschnitt",
        line: "Verstehen, was unter der Oberfläche liegt.",
        body: "Führen Sie eine Schnittebene durch das Modell und lesen Sie seine Form im Profil.",
        alt: "Das 3D-Herz, von einer Schnittebene halbiert.",
      },
      compare: {
        label: "Vergleichen",
        line: "Anatomie in Beziehungen sehen.",
        body: "Stellen Sie ein Organ neben ein anderes, um ihre Aufgaben und ihre Größe zu vergleichen.",
        alt: "Das 3D-Gehirn und das 3D-Herz nebeneinander.",
      },
    },
    note: "Standbilder aus dem 3D-Betrachter im Bereich Entdecken.",
  },

  story: {
    title: "Der Körper ist ein System,\nkeine Sammlung von Schaubildern.",
    body: "Corpus hilft Ihnen, von einzelnen Organen zu den Zusammenhängen zu gelangen, die den Körper arbeiten lassen.",
    alt: "Die 3D-Lunge und das 3D-Herz so zusammengesetzt, wie sie im Brustkorb liegen, mit beschrifteter Luftröhre, beiden Lungenflügeln, Herz und Aorta.",
    caption: "Herz und Lunge, zusammengesetzt aus ihren Modellen im Bereich Entdecken. Die Lage ist vereinfacht.",
    legendLabel: "In dieser Komposition beschriftete Strukturen",
  },

  practice: {
    eyebrow: "Aktives Abrufen",
    title: "Erst sehen.\nDann zeigen, was Sie wissen.",
    lede: "Machen Sie aus dem Erkunden aktives Abrufen – mit Beschriftungs- und Erkennungsaufgaben zur Anatomie.",
    cta: "Testen Sie sich selbst",
    identify: "Erkennen",
    alt: "Das 3D-Gehirn aus dem Bereich Entdecken, vier Strukturen mit den Zahlen 1 bis 4 markiert.",
    caption: "Standbild des Beschriftungsquiz im Bereich Entdecken, in dem Sie antworten, indem Sie die Struktur am Modell auswählen.",
  },

  ai: {
    eyebrow: "Als Nächstes",
    title: "Ein Begleiter für Fragen,\ndie Schaubilder nicht beantworten.",
    lede: "Corpus wird mit einem KI-Anatomiebegleiter entworfen, der Strukturen erklären, Zusammenhänge herstellen, durch die Erkundung führen und Ihnen helfen soll, im Gespräch zu lernen.",
    exampleLabel: "Ein beispielhafter Austausch",
    you: "Sie",
    corpus: "Corpus",
    question: "Warum ist die linke Herzkammer dicker als die rechte?",
    answer:
      "Die linke Herzkammer pumpt das Blut durch den Körperkreislauf und muss deshalb einen viel höheren Druck erzeugen als die rechte.",
    status: "In Entwicklung",
    disclaimer: "Ein geschriebenes Beispiel, kein aktiver Assistent. Einen Begleiter, mit dem Sie sprechen könnten, gibt es noch nicht.",
  },

  languages: {
    eyebrow: "12 Sprachen",
    title: "Anatomie in der Sprache,\nin der Sie denken.",
    lede: "Corpus ist für Lernende auf der ganzen Welt gemacht – mit mehrsprachigen Oberflächen und einem gemeinsamen anatomischen Vokabular, das auf der lateinischen Terminologie beruht.",
    wallLabel: "Corpus in zwölf Sprachen",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "Arabisch liest sich von rechts nach links, und die Oberfläche spiegelt sich mit.",
    latinNote: "Der lateinische Name bleibt in jeder Sprache gleich.",
  },

  rigor: {
    title: "Schön genug zum Entdecken.\nPräzise genug zum Vertrauen.",
    lede: "Corpus verbindet visuelles Erzählen mit anatomischer Terminologie, strukturierten Daten und medizinisch fundierten Lerninhalten.",
    pillars: {
      accuracy: {
        title: "Anatomische Genauigkeit",
        body: "Die Strukturen beruhen auf etablierter anatomischer Terminologie.",
      },
      knowledge: {
        title: "Strukturiertes Wissen",
        body: "Jede Struktur ist mit Kontextinformationen verknüpft.",
      },
      clarity: {
        title: "Visuelle Klarheit",
        body: "Komplexe Anatomie wird ohne unnötige Komplexität dargestellt.",
      },
    },
    entry: {
      label: "Eine Struktur in Corpus",
      term: "Terminologia Anatomica",
      name: "Bezeichnung",
      organ: "Organ",
      role: "Aufgabe",
    },
    note: "Corpus dient dem Lernen. Es ist keine medizinische Beratung.",
  },

  audience: {
    eyebrow: "Für neugierige Köpfe",
    title: "Ein Körper.\nViele Wege, ihn zu lernen.",
    groups: {
      students: {
        title: "Studierende",
        body: "Bauen Sie räumliches Verständnis auf, statt zusammenhanglose Beschriftungen auswendig zu lernen.",
        cta: "Für Studierende",
      },
      educators: {
        title: "Lehrende",
        body: "Bringen Sie Anatomie mit interaktiver, visueller Erkundung in den Unterricht.",
        cta: "Für Lehrende",
      },
      curious: {
        title: "Neugierige Köpfe",
        body: "Entdecken Sie den menschlichen Körper einfach, weil er zu den bemerkenswertesten Dingen überhaupt gehört.",
        cta: "Jetzt entdecken",
      },
    },
  },

  closing: {
    title: "Der Körper ist ein Meisterwerk.",
    line: "Lernen Sie, ihn zu sehen.",
    cta: "Den Körper entdecken",
  },
};
