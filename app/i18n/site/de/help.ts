import type { SiteDictionary } from "..";

export const help: SiteDictionary["help"] = {
  meta: {
    title: "Hilfe zu Corpus — Leitfaden fürs Anatomielernen",
    description:
      "So nutzen Sie Corpus: 3D-Organmodelle drehen und zoomen, ihre Strukturen lesen, sich selbst testen, die Sprache wechseln und klare Antworten auf häufige Fragen finden.",
  },

  hero: {
    eyebrow: "Hilfe",
    title: "Finden Sie sich in Corpus zurecht.",
    plate: {
      alt: "Aquarellstudie eines menschlichen Auges mit den Muskeln, die es bewegen, und dem Sehnerv dahinter",
    },
  },

  search: {
    label: "Wobei können wir helfen?",
    placeholder: "Versuchen Sie „Zoom“ oder „Punkte“",
    clear: "Suche löschen",
    resultsLabel: "Suchergebnisse",
    count: "Ergebnisse: {count}",
    more: "Die ersten {shown} werden angezeigt. Alle passenden Fragen finden Sie auch weiter unten.",
    kind: {
      question: "Frage",
      guide: "Anleitung",
    },
    empty: {
      title: "Keine Treffer für „{query}“.",
      body: "Versuchen Sie ein kürzeres oder anderes Wort, oder stöbern Sie in den Anleitungen unten.",
    },
    faqStatus: "{count} von {total} Fragen passen zu Ihrer Suche.",
    faqEmpty: "Keine Frage passt zu Ihrer Suche.",
    showAll: "Alle Fragen anzeigen",
  },

  categories: {
    heading: "Nach Thema stöbern",
    items: {
      gettingStarted: { label: "Erste Schritte", line: "Die Grundlagen kennenlernen." },
      viewer: { label: "3D-Betrachter", line: "Durch die Anatomie navigieren." },
      exploring: { label: "Erkunden", line: "Organe und Strukturen finden." },
      practice: { label: "Üben", line: "Beschriften und Abrufen verstehen." },
      languages: { label: "Sprachen", line: "Die Sprache von Corpus ändern." },
      account: { label: "Konto", line: "Ihr Konto verwalten." },
    },
  },

  gettingStarted: {
    title: "Ihre ersten Minuten",
    intro: "Corpus läuft in Ihrem Webbrowser. Es gibt nichts zu installieren und kein Konto anzulegen.",
    steps: {
      open: {
        title: "Entdecken öffnen",
        body: "Wählen Sie in der Hauptnavigation „{explore}“. Zuerst wird das Herz angezeigt.",
      },
      choose: {
        title: "Ein Organ wählen",
        body: "Wählen Sie ein Organ aus der Bibliothek neben dem Modell. Auf dem Smartphone öffnen Sie die Bibliothek oben auf dem Bildschirm.",
      },
      look: {
        title: "Genau hinsehen",
        body: "Ziehen Sie, um das Modell zu drehen, zoomen Sie heran, und wählen Sie die Punkte aus, um den Namen jeder Struktur zu lesen.",
      },
      test: {
        title: "Testen Sie sich selbst",
        body: "Wenn Sie so weit sind, starten Sie das Quiz und finden Sie jede Struktur anhand ihres Namens.",
      },
    },
    cta: "Entdecken öffnen",
  },

  viewer: {
    title: "Ein Modell drehen, zoomen und lesen",
    intro: "Jedes Organ ist ein 3D-Modell, das Sie von allen Seiten betrachten können – mit Maus, Touchscreen oder Tastatur.",
    columns: {
      action: "Aktion",
      pointer: "Maus oder Trackpad",
      touch: "Touchscreen",
      keyboard: "Tastatur",
    },
    controls: {
      rotate: {
        action: "Modell drehen",
        pointer: "Über das Modell ziehen",
        touch: "Mit einem Finger ziehen",
        keyboard: "Pfeiltasten links und rechts",
      },
      zoom: {
        action: "Hinein- und herauszoomen",
        pointer: "Scrollen oder das Werkzeug „{zoom}“ verwenden",
        touch: "Zwei Finger auseinander- oder zusammenziehen",
        keyboard: "Plus- und Minustaste",
      },
      read: {
        action: "Eine Struktur lesen",
        pointer: "Auf einen Punkt klicken",
        touch: "Auf einen Punkt tippen",
        keyboard: "Screenreader können jede Struktur aus einer Liste neben dem Modell vorlesen.",
      },
      close: {
        action: "Eine Beschriftung schließen",
        pointer: "Erneut auf den Punkt oder an eine beliebige andere Stelle klicken",
        touch: "Auf die Schließen-Schaltfläche der Beschriftung tippen",
        keyboard: "Escape-Taste",
      },
    },
    keyboardNote: "Die Tastatursteuerung funktioniert, sobald das Modell den Fokus hat: Drücken Sie die Tabulatortaste, bis das Modell ausgewählt ist.",
    toolsTitle: "Die Werkzeuge des Betrachters",
    tools: {
      rotate: "Startet oder stoppt die langsame automatische Drehung. Der Schalter „{autoRotate}“ bewirkt dasselbe.",
      zoom: "Bringt die Ansicht einen Schritt näher an das Modell.",
      isolate: "Blendet den Präsentationssockel aus, sodass das Organ für sich allein steht.",
      section: "Schneidet durch das Modell und gibt den Blick in sein Inneres frei.",
      layers: "Zeigt das Modell als Drahtgitter und legt das Netz frei, aus dem es aufgebaut ist.",
      compare: "Vergleicht die Hauptaufgabe und Größe des Organs mit einem zweiten Organ.",
      reset: "Setzt das Modell auf die Ausgangsansicht zurück und schließt jede offene Beschriftung.",
    },
    trouble:
      "Wenn kein Modell erscheint, benötigt Ihr Browser 3D-Grafik (WebGL). Aktualisieren Sie den Browser, prüfen Sie, ob die Hardwarebeschleunigung aktiviert ist, und laden Sie die Seite neu.",
  },

  exploring: {
    title: "Organe, Fakten und Lernkarten",
    intro: "Corpus umfasst {count} Organe. Jedes öffnet sich mit seinem 3D-Modell in der Mitte und seinen Fakten daneben.",
    parts: {
      library: {
        title: "Die Organbibliothek",
        body: "Listet jedes Organ mit seinem Körpersystem auf. Tippen Sie in das Suchfeld oben im Bereich Entdecken, um die Liste zu filtern.",
      },
      panel: {
        title: "Der Informationsbereich",
        body: "Nennt Größe, Gewicht, Lage, Blutversorgung und Funktion des Organs, dazu einen medizinischen Hinweis und eine einprägsame Tatsache.",
      },
      cards: {
        title: "Die Lernkarten",
        body: "Öffnen das Gewebe des Organs unter dem Mikroskop, einen Vergleich, eine kurze Animation, häufige Erkrankungen und seine Lage im Körper.",
      },
    },
    catalogueTitle: "Ein Organ direkt öffnen",
    catalogueLink: "{organ} im Bereich Entdecken öffnen",
    clinical:
      "Klinische Hinweise zeigen, warum die Anatomie wichtig ist. Sie dienen nicht dazu, jemanden zu diagnostizieren oder zu behandeln. Wenn Sie sich Sorgen um Ihre Gesundheit machen, sprechen Sie mit einer Ärztin oder einem Arzt.",
  },

  practice: {
    title: "Sich am Modell testen",
    intro: "Geübt wird direkt am Modell. Das Beschriftungsquiz fordert Sie auf, jede genannte Struktur des angezeigten Organs zu finden.",
    steps: {
      start: "Öffnen Sie ein Organ und wählen Sie „{quiz}“. Das Modell hört auf, sich zu drehen, sodass die Punkte stillstehen.",
      find: "Corpus nennt jeweils eine Struktur. Klicken oder tippen Sie auf den Punkt, der Ihrer Meinung nach passt.",
      feedback: "Eine richtige Antwort bringt Sie weiter. Liegen Sie daneben, zeigt Corpus, welche Struktur Sie gewählt haben, und markiert die richtige.",
      finish: "Jede Struktur wird einmal abgefragt, in jeder Runde in neuer Reihenfolge. Am Ende sehen Sie Ihr Ergebnis.",
    },
    note: "Quizergebnisse werden nicht gespeichert. Sie werden gelöscht, wenn Sie die Seite verlassen oder ein anderes Organ wählen.",
    exampleCaption: "Eine Beispielfrage aus dem Herzquiz, wie sie über dem Modell erscheint.",
  },

  languages: {
    title: "Corpus in Ihrer Sprache lesen",
    intro: "Corpus ist in {count} Sprachen verfügbar. Im Bereich Entdecken sind Organnamen, Beschreibungen, Strukturbeschriftungen und Bedienelemente in jede davon übersetzt.",
    switchBody:
      "Wählen Sie eine Sprache am Fuß jeder Seite oder über das Sprachmenü oben im Bereich Entdecken. Sie bleiben auf der Seite, die Sie gerade lesen.",
    rtl: "Arabisch liest sich von rechts nach links, und das gesamte Layout spiegelt sich entsprechend. Noch nicht übersetzte Seiten erscheinen auf Englisch.",
    listLabel: "Verfügbare Sprachen",
    current: "Aktuelle Sprache",
  },

  account: {
    title: "Konten sind bald verfügbar",
    body: "Die Formulare für Anmeldung, Registrierung und Zurücksetzen des Passworts sind vorhanden, aber Konten gibt es noch nicht. Die Formulare weisen darauf hin, und nichts, was Sie eingeben, wird gesendet.",
    saved: "Sie brauchen kein Konto: Im Bereich Entdecken funktioniert alles ohne. Nichts, was Sie tun, wird zwischen Besuchen gespeichert.",
    cta: "Jetzt entdecken",
  },

  faqHeading: "Häufige Fragen",
  faq: {
    whatIs: {
      q: "Was ist Corpus?",
      a: "Corpus ist ein interaktiver Anatomieatlas. Sie erkunden 3D-Modelle menschlicher Organe, lesen die benannten Strukturen darin und testen sich dabei selbst.",
    },
    exploreOrgan: {
      q: "Wie erkunde ich ein Organ?",
      a: "Öffnen Sie den Bereich Entdecken und wählen Sie ein Organ aus der Bibliothek. Drehen Sie das Modell, wählen Sie die Punkte aus, um jede Struktur zu lesen, und öffnen Sie die Karten unter dem Betrachter, um tiefer einzusteigen.",
    },
    rotate: {
      q: "Wie drehe ich ein Modell?",
      a: "Ziehen Sie das Modell mit der Maus oder einem Finger. Drücken Sie auf der Tastatur die Tabulatortaste, bis das Modell den Fokus hat, und verwenden Sie dann die Pfeiltasten links und rechts. Wählen Sie „{reset}“, um zur Ausgangsansicht zurückzukehren.",
    },
    zoom: {
      q: "Wie zoome ich?",
      a: "Verwenden Sie das Mausrad oder das Trackpad, ziehen Sie auf einem Touchscreen zwei Finger auseinander oder zusammen, oder wählen Sie das Werkzeug „{zoom}“. Auch die Plus- und Minustaste funktionieren, wenn das Modell den Fokus hat.",
    },
    hotspots: {
      q: "Was sind Hotspots?",
      a: "Hotspots sind die Punkte am Modell. Jeder markiert eine Struktur: Wählen Sie einen aus, um ihren Namen und eine kurze Beschreibung zu sehen.",
    },
    isolate: {
      q: "Was bewirkt „Isolieren“?",
      a: "Das Werkzeug „{isolate}“ blendet den Präsentationssockel aus, sodass das Organ für sich allein gezeigt wird. Wählen Sie es erneut, um den Sockel zurückzuholen.",
    },
    languages: {
      q: "Welche Sprachen werden unterstützt?",
      a: "Corpus ist in {count} Sprachen verfügbar: {list}.",
    },
    mobile: {
      q: "Funktioniert Corpus auf Mobilgeräten?",
      a: "Ja, in einem aktuellen Webbrowser auf Smartphones und Tablets. Ziehen Sie mit einem Finger, um ein Modell zu drehen, zoomen Sie mit zwei Fingern, und tippen Sie auf einen Punkt, um ihn zu lesen.",
    },
    medical: {
      q: "Ist Corpus medizinische Beratung?",
      a: "Nein. Corpus dient dem Lernen von Anatomie. Es bietet keine medizinische Beratung, Diagnose oder Behandlung. Wenn Sie sich Sorgen um Ihre Gesundheit machen, wenden Sie sich an eine Ärztin oder einen Arzt. Rufen Sie im Notfall Ihre örtliche Notrufnummer an.",
    },
    accuracy: {
      q: "Wie genau ist die Anatomie?",
      a: "Die Modelle und Illustrationen sind vereinfachte Darstellungen für Lernzwecke. Sie zeigen die Gesamtform jedes Organs und die Lage seiner wichtigsten Strukturen, nicht jedes Detail. Die Strukturnamen folgen der Terminologia Anatomica, dem internationalen Standard.",
    },
    createAccount: {
      q: "Wie lege ich ein Konto an?",
      a: "Konten sind bald verfügbar. Das Registrierungsformular ist vorhanden, legt aber noch kein Konto an, und nichts, was Sie eingeben, wird gesendet. Für den Bereich Entdecken brauchen Sie kein Konto.",
    },
    resetPassword: {
      q: "Wie setze ich mein Passwort zurück?",
      a: "Es gibt noch keine Konten, also auch kein Passwort zum Zurücksetzen. Das Formular zum Zurücksetzen ist für später vorbereitet; derzeit sendet es keine E-Mail.",
    },
  },
  faqLinks: {
    explore: "Entdecken öffnen",
    report: "Fehler melden",
  },

  contact: {
    title: "Brauchen Sie weitere Hilfe?",
    body: "Wir entwickeln Corpus mit Sorgfalt. Wenn etwas nicht wie erwartet funktioniert, lassen Sie es uns wissen.",
    cta: "Support kontaktieren",
    ctaDescription: "Öffnet den öffentlichen Issue-Tracker des Projekts auf GitHub in einem neuen Tab.",
    note: "Meldungen sind öffentlich und erfordern ein kostenloses GitHub-Konto. Bitte geben Sie keine persönlichen oder gesundheitlichen Informationen an.",
  },
};
