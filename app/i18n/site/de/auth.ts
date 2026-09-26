import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: {
      title: "Anmelden",
      description: "Bei Corpus anmelden. Konten sind bald verfügbar; der Bereich Entdecken funktioniert auch ohne.",
    },
    signUp: {
      title: "Konto erstellen",
      description: "Ein Corpus-Konto erstellen. Konten sind bald verfügbar; der Bereich Entdecken funktioniert auch ohne.",
    },
    forgotPassword: {
      title: "Passwort zurücksetzen",
      description: "Ihr Corpus-Passwort zurücksetzen. Konten sind bald verfügbar; der Bereich Entdecken funktioniert auch ohne.",
    },
  },

  shell: {
    back: "Zurück zur Website",
    disclaimer: "Corpus dient dem Lernen von Anatomie. Es ist keine medizinische Beratung.",
    helpLink: "Hilfe",
  },

  notice: {
    title: "Konten sind bald verfügbar.",
    body: "Zum Lernen brauchen Sie keines. Im Bereich Entdecken funktioniert alles ohne Konto.",
    action: "Entdecken öffnen",
  },

  fields: {
    name: { label: "Name" },
    email: { label: "E-Mail" },
    password: { label: "Passwort" },
    newPassword: { label: "Passwort", hint: "Mindestens {min} Zeichen." },
    confirmPassword: { label: "Passwort bestätigen" },
  },

  passwordToggle: {
    show: "Anzeigen",
    hide: "Verbergen",
    showLabel: "Passwort anzeigen",
    hideLabel: "Passwort verbergen",
  },

  errors: {
    summary: "Einige Angaben müssen korrigiert werden. Prüfen Sie die Hinweise unter den einzelnen Feldern.",
    nameRequired: "Geben Sie Ihren Namen ein.",
    emailRequired: "Geben Sie Ihre E-Mail-Adresse ein.",
    emailInvalid: "Geben Sie eine E-Mail-Adresse im Format name@example.com ein.",
    passwordRequired: "Geben Sie Ihr Passwort ein.",
    passwordTooShort: "Verwenden Sie mindestens {min} Zeichen.",
    confirmRequired: "Geben Sie Ihr Passwort erneut ein.",
    confirmMismatch: "Die beiden Passwörter stimmen nicht überein.",
  },

  signIn: {
    eyebrow: "Anmelden",
    title: "Willkommen zurück.",
    lede: "Erkunden Sie den menschlichen Körper weiter.",
    submit: "Anmelden",
    busy: "Anmeldung läuft …",
    forgot: "Passwort vergessen?",
    switchPrompt: "Neu bei Corpus?",
    switchAction: "Konto erstellen",
    unavailable: {
      title: "Die Anmeldung ist noch nicht verfügbar.",
      body: "Corpus-Konten sind noch im Aufbau, daher wurde nichts gesendet oder gespeichert. Ihr Passwort wurde aus dem Formular gelöscht.",
    },
  },

  signUp: {
    eyebrow: "Konto erstellen",
    title: "Die Entdeckung beginnt.",
    lede: "Erstellen Sie Ihr Corpus-Konto und machen Sie das Üben von Anatomie zur Gewohnheit.",
    submit: "Konto erstellen",
    busy: "Konto wird erstellt …",
    switchPrompt: "Sie haben bereits ein Konto?",
    switchAction: "Anmelden",
    unavailable: {
      title: "Konten können noch nicht erstellt werden.",
      body: "Corpus-Konten sind noch im Aufbau, daher wurde nichts gesendet oder gespeichert. Ihre Passwörter wurden aus dem Formular gelöscht.",
    },
  },

  forgotPassword: {
    eyebrow: "Passwort vergessen",
    title: "Setzen Sie Ihr Passwort zurück.",
    lede: "Geben Sie Ihre E-Mail-Adresse ein, und wir helfen Ihnen, wieder in Corpus zu gelangen.",
    submit: "Link zum Zurücksetzen senden",
    busy: "Wird gesendet …",
    switchPrompt: "Doch wieder eingefallen?",
    switchAction: "Zurück zur Anmeldung",
    unavailable: {
      title: "Das Zurücksetzen des Passworts ist noch nicht verfügbar.",
      body: "Corpus-Konten sind noch im Aufbau, daher gibt es kein Passwort zum Zurücksetzen. Es wurde keine E-Mail gesendet und nichts gespeichert.",
    },
  },

  status: {
    exploreAction: "Weiter zum Bereich Entdecken",
  },

  plates: {
    label: "Anatomische Tafel",
    marked: "Markiert: {structure}",
    note: "Eine vereinfachte Illustration für Lernzwecke.",
    signIn: {
      number: "Tafel I",
      view: "Außenansicht",
      alt: "Aquarellstudie des menschlichen Herzens, darüber die Aorta und die großen Gefäße",
    },
    signUp: {
      number: "Tafel II",
      view: "Seitenansicht",
      alt: "Aquarellstudie des menschlichen Gehirns von der Seite, darunter Kleinhirn und Hirnstamm",
    },
    forgotPassword: {
      number: "Tafel III",
      view: "Vorderansicht",
      alt: "Aquarellstudie der Lunge, die Luftröhre teilt sich in verzweigte Atemwege",
    },
  },
};
