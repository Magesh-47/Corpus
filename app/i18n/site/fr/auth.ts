import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: {
      title: "Se connecter",
      description: "Connectez-vous à Corpus. Les comptes seront bientôt disponibles ; Explorer fonctionne sans.",
    },
    signUp: {
      title: "Créer un compte",
      description: "Créez un compte Corpus. Les comptes seront bientôt disponibles ; Explorer fonctionne sans.",
    },
    forgotPassword: {
      title: "Réinitialiser votre mot de passe",
      description: "Réinitialisez votre mot de passe Corpus. Les comptes seront bientôt disponibles ; Explorer fonctionne sans.",
    },
  },

  shell: {
    back: "Retour au site",
    disclaimer: "Corpus sert à apprendre l’anatomie. Ce n’est pas un avis médical.",
    helpLink: "Aide",
  },

  notice: {
    title: "Les comptes seront bientôt disponibles.",
    body: "Vous n’en avez pas besoin pour apprendre. Tout Explorer fonctionne sans compte.",
    action: "Ouvrir Explorer",
  },

  fields: {
    name: { label: "Nom" },
    email: { label: "E-mail" },
    password: { label: "Mot de passe" },
    newPassword: { label: "Mot de passe", hint: "Au moins {min} caractères." },
    confirmPassword: { label: "Confirmer le mot de passe" },
  },

  passwordToggle: {
    show: "Afficher",
    hide: "Masquer",
    showLabel: "Afficher le mot de passe",
    hideLabel: "Masquer le mot de passe",
  },

  errors: {
    summary: "Certaines informations sont à corriger. Consultez les messages sous chaque champ.",
    nameRequired: "Saisissez votre nom.",
    emailRequired: "Saisissez votre adresse e-mail.",
    emailInvalid: "Saisissez une adresse e-mail au format name@example.com.",
    passwordRequired: "Saisissez votre mot de passe.",
    passwordTooShort: "Utilisez au moins {min} caractères.",
    confirmRequired: "Saisissez à nouveau votre mot de passe.",
    confirmMismatch: "Les deux mots de passe ne correspondent pas.",
  },

  signIn: {
    eyebrow: "Connexion",
    title: "Bon retour parmi nous.",
    lede: "Poursuivez votre exploration du corps humain.",
    submit: "Se connecter",
    busy: "Connexion…",
    forgot: "Mot de passe oublié ?",
    switchPrompt: "Nouveau sur Corpus ?",
    switchAction: "Créer un compte",
    unavailable: {
      title: "La connexion n’est pas encore disponible.",
      body: "Les comptes Corpus sont encore en construction : rien n’a été envoyé ni enregistré. Votre mot de passe a été effacé du formulaire.",
    },
  },

  signUp: {
    eyebrow: "Créer un compte",
    title: "Commencez à explorer.",
    lede: "Créez votre compte Corpus et construisez votre pratique de l’anatomie.",
    submit: "Créer le compte",
    busy: "Création du compte…",
    switchPrompt: "Vous avez déjà un compte ?",
    switchAction: "Se connecter",
    unavailable: {
      title: "Les comptes ne peuvent pas encore être créés.",
      body: "Les comptes Corpus sont encore en construction : rien n’a été envoyé ni enregistré. Vos mots de passe ont été effacés du formulaire.",
    },
  },

  forgotPassword: {
    eyebrow: "Mot de passe oublié",
    title: "Réinitialisez votre mot de passe.",
    lede: "Saisissez votre adresse e-mail et nous vous aiderons à revenir dans Corpus.",
    submit: "Envoyer le lien",
    busy: "Envoi…",
    switchPrompt: "Il vous est revenu ?",
    switchAction: "Retour à la connexion",
    unavailable: {
      title: "La réinitialisation du mot de passe n’est pas encore disponible.",
      body: "Les comptes Corpus sont encore en construction : il n’y a donc aucun mot de passe à réinitialiser. Aucun e-mail n’a été envoyé et rien n’a été enregistré.",
    },
  },

  status: {
    exploreAction: "Continuer vers Explorer",
  },

  plates: {
    label: "Planche anatomique",
    marked: "Structure repérée : {structure}",
    note: "Une illustration pédagogique simplifiée.",
    signIn: {
      number: "Planche I",
      view: "Vue externe",
      alt: "Étude à l’aquarelle du cœur humain, avec l’aorte et les gros vaisseaux qui s’élèvent au-dessus",
    },
    signUp: {
      number: "Planche II",
      view: "Vue latérale",
      alt: "Étude à l’aquarelle du cerveau humain vu de profil, avec le cervelet et le tronc cérébral en dessous",
    },
    forgotPassword: {
      number: "Planche III",
      view: "Vue antérieure",
      alt: "Étude à l’aquarelle des poumons, avec la trachée qui se divise en voies aériennes ramifiées",
    },
  },
};
