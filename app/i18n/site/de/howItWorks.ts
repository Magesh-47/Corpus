import type { SiteDictionary } from "..";

export const howItWorks: SiteDictionary["howItWorks"] = {
  meta: {
    title: "So funktioniert Corpus — Anatomie in 3D entdecken",
    description:
      "Wählen Sie ein Organ, drehen Sie sein 3D-Modell, lesen Sie Lage, Blutversorgung und Funktion, und testen Sie sich dann, indem Sie seine Strukturen finden. So funktioniert das Lernen mit Corpus.",
  },

  hero: {
    eyebrow: "So funktioniert’s",
    title: {
      see: "Sehen.",
      explore: "Entdecken.",
      understand: "Verstehen.",
      remember: "Behalten.",
    },
    lede: "Corpus macht Anatomie zu einem aktiven, visuellen Erlebnis.",
    body: "Fünf Schritte, jeweils mit einem Organ. Die ersten vier finden heute schon im Bereich Entdecken statt. Der fünfte steht noch aus.",
    contentsLabel: "Die fünf Schritte",
  },

  steps: {
    see: {
      name: "Sehen",
      title: "Mit dem Ganzen beginnen.",
      line: "Wählen Sie ein Organ und betrachten Sie seine Form, bevor Sie sich um die Beschriftungen kümmern.",
      body:
        "Der Bereich Entdecken öffnet mit einer Bibliothek aus neun Organen, von Herz und Gehirn bis zu Bauchspeicheldrüse und Haut. Wählen Sie eines aus, und es erscheint als Ganzes. Seine Strukturen sind mit kleinen Punkten markiert; ihre Namen warten, bis Sie danach fragen.",
      plateLabel: "Tafel I",
      caption: "{organ} als Ganzes. Eines der neun Organe in der Organbibliothek.",
      alt: "Aquarellstudie des menschlichen Herzens von vorn, darüber der Bogen der Aorta",
    },
    explore: {
      name: "Entdecken",
      title: "Sich durch die Struktur bewegen.",
      line: "Drehen, zoomen, isolieren und anatomische Beziehungen untersuchen.",
      body:
        "Jedes Organ ist ein 3D-Modell. Ziehen Sie, um es zu drehen, scrollen oder zoomen Sie mit zwei Fingern, um näher heranzugehen, und wählen Sie einen Punkt, um die Struktur darunter zu benennen. Isolieren, Querschnitt und Schichten verändern jeweils, wie Sie dieselbe Form sehen.",
      viewerLabel: "3D-Betrachter",
      controlsLabel: "Steuerung des Betrachters",
      controls: {
        rotate: { name: "Drehen", note: "Ziehen" },
        zoom: { name: "Zoom", note: "Scrollen oder zwei Finger" },
        isolate: { name: "Isolieren", note: "Nur das Organ" },
        section: { name: "Querschnitt", note: "Aufschneiden" },
      },
      caption: "Ein Standbild aus dem 3D-Betrachter im Bereich Entdecken. Die Bezeichnungen der Steuerelemente sind hier zur Veranschaulichung eingezeichnet.",
      alt: "3D-Modell des Herzens im Betrachter des Bereichs Entdecken, von vorn auf einem Sockel, mit kleinen farbigen Punkten, die benannte Strukturen markieren",
    },
    understand: {
      name: "Verstehen",
      title: "Struktur und Funktion verbinden.",
      line: "Blutversorgung, Lage, Funktion, Gewebe und klinischen Kontext erkunden.",
      body:
        "Neben dem Modell zeigt ein Informationsbereich, was das Organ ist und was es leistet. Lernkarten gehen weiter: das Gewebe unter dem Mikroskop, ein Vergleich mit einem anderen Organ, wo es im Körper wirkt und welche Erkrankungen es häufig betreffen.",
      panelLabel: "Informationsbereich",
      facts: {
        size: "Größe",
        location: "Lage",
        bloodSupply: "Blutversorgung",
        function: "Funktion",
        tissue: "Gewebe",
      },
      conditionsLabel: "Klinischer Kontext",
      caption: "{organ}: Fakten aus dem Informationsbereich und den Lernkarten im Bereich Entdecken.",
      organAlt: "Aquarellstudie der Lunge, die Luftröhre teilt sich in die beiden Hauptbronchien",
      tissueAlt: "Kreisrunde Mikroskopansicht der Alveolen, der winzigen Luftbläschen der Lunge",
    },
    practice: {
      name: "Üben",
      title: "Testen, was Sie gerade erkundet haben.",
      line: "Strukturen erkennen und aktiv abrufen.",
      body:
        "Starten Sie das Beschriftungsquiz, und das Modell hält still. Corpus nennt eine Struktur, und Sie finden sie am Modell. Nach einem Fehlgriff sehen Sie, wo die richtige Antwort lag, und jede Runde endet mit Ihrem Ergebnis und der Möglichkeit, es in neuer Reihenfolge noch einmal zu versuchen.",
      prompt: "Finde",
      hint: "Passenden Punkt auswählen",
      caption: "Eine Illustration des Beschriftungsquiz im Bereich Entdecken, in dem Sie die Punkte direkt am 3D-Modell auswählen.",
      alt: "Aquarellstudie des Gehirns mit vier nummerierten Strukturen und leeren Beschriftungen sowie der Aufforderung, {structure} zu finden",
    },
    remember: {
      name: "Behalten",
      title: "Zum Wesentlichen zurückkehren.",
      line:
        "Das künftige Corpus-Erlebnis soll Ihnen helfen, Strukturen, Gespräche und Bereiche wiederaufzunehmen, die mehr Aufmerksamkeit brauchen.",
      body:
        "Diesen Teil gibt es noch nicht. Corpus speichert nicht, was Sie gelernt haben, daher beginnt jeder Besuch im Bereich Entdecken von vorn. Bis dahin ist das Wiederholen des Beschriftungsquiz der Weg, zu einer Struktur zurückzukehren.",
      futureLabel: "Geplant",
      future: {
        structures: "Strukturen zum Wiederholen",
        conversations: "Gespräche zum Fortsetzen",
        attention: "Bereiche, die mehr Aufmerksamkeit brauchen",
      },
    },
  },

  closing: {
    titleStart: "Anatomie zu lernen sollte sich anfühlen",
    titleEnd: "wie eine Entdeckung.",
    action: "Das Anatomie-Atelier betreten",
  },
};
