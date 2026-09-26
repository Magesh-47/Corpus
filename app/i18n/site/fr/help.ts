import type { SiteDictionary } from "..";

export const help: SiteDictionary["help"] = {
  meta: {
    title: "Aide de Corpus — Guide d’apprentissage de l’anatomie",
    description:
      "Comment utiliser Corpus : faire pivoter et zoomer les modèles 3D d’organes, lire leurs structures, vous tester, changer de langue et trouver des réponses claires aux questions fréquentes.",
  },

  hero: {
    eyebrow: "Aide",
    title: "Se repérer dans Corpus.",
    plate: {
      alt: "Étude à l’aquarelle d’un œil humain, avec les muscles qui le font tourner et le nerf optique à l’arrière",
    },
  },

  search: {
    label: "Que cherchez-vous ?",
    placeholder: "Essayez « zoom » ou « points »",
    clear: "Effacer la recherche",
    resultsLabel: "Résultats de recherche",
    count: "Résultats : {count}",
    more: "Affichage des {shown} premiers. Toutes les questions correspondantes figurent aussi plus bas.",
    kind: {
      question: "Question",
      guide: "Guide",
    },
    empty: {
      title: "Aucun résultat pour « {query} ».",
      body: "Essayez un mot plus court ou différent, ou parcourez les guides ci-dessous.",
    },
    faqStatus: "{count} questions sur {total} correspondent à votre recherche.",
    faqEmpty: "Aucune question ne correspond à votre recherche.",
    showAll: "Afficher toutes les questions",
  },

  categories: {
    heading: "Parcourir par thème",
    items: {
      gettingStarted: { label: "Premiers pas", line: "Les bases, pas à pas." },
      viewer: { label: "Visionneuse 3D", line: "Naviguer dans l’anatomie." },
      exploring: { label: "Exploration", line: "Trouver organes et structures." },
      practice: { label: "S’exercer", line: "Comprendre les légendes et le rappel." },
      languages: { label: "Langues", line: "Changer la langue de Corpus." },
      account: { label: "Compte", line: "Gérer votre compte." },
    },
  },

  gettingStarted: {
    title: "Vos premières minutes",
    intro: "Corpus fonctionne dans votre navigateur. Rien à installer, aucun compte à créer.",
    steps: {
      open: {
        title: "Ouvrir Explorer",
        body: "Sélectionnez « {explore} » dans la navigation principale. Le cœur s’affiche en premier.",
      },
      choose: {
        title: "Choisir un organe",
        body: "Choisissez un organe dans la bibliothèque, à côté du modèle. Sur téléphone, ouvrez la bibliothèque depuis le haut de l’écran.",
      },
      look: {
        title: "Regarder de près",
        body: "Faites glisser pour tourner le modèle, zoomez, et sélectionnez les points pour lire le nom de chaque structure.",
      },
      test: {
        title: "Testez-vous",
        body: "Quand vous le souhaitez, lancez le quiz et retrouvez chaque structure d’après son nom.",
      },
    },
    cta: "Ouvrir Explorer",
  },

  viewer: {
    title: "Pivoter, zoomer et lire un modèle",
    intro: "Chaque organe est un modèle 3D que vous pouvez examiner sous toutes ses faces, à la souris, sur écran tactile ou au clavier.",
    columns: {
      action: "Action",
      pointer: "Souris ou pavé tactile",
      touch: "Écran tactile",
      keyboard: "Clavier",
    },
    controls: {
      rotate: {
        action: "Tourner le modèle",
        pointer: "Faire glisser sur le modèle",
        touch: "Faire glisser avec un doigt",
        keyboard: "Flèches gauche et droite",
      },
      zoom: {
        action: "Zoomer et dézoomer",
        pointer: "Faire défiler, ou utiliser l’outil « {zoom} »",
        touch: "Pincer avec deux doigts",
        keyboard: "Touches plus et moins",
      },
      read: {
        action: "Lire une structure",
        pointer: "Cliquer sur un point",
        touch: "Toucher un point",
        keyboard: "Les lecteurs d’écran peuvent lire chaque structure dans une liste placée à côté du modèle.",
      },
      close: {
        action: "Fermer une légende",
        pointer: "Cliquer à nouveau sur le point, ou n’importe où ailleurs",
        touch: "Toucher le bouton de fermeture de la légende",
        keyboard: "Touche Échap",
      },
    },
    keyboardNote: "Les commandes au clavier fonctionnent lorsque le modèle a le focus : appuyez sur Tab jusqu’à ce qu’il soit sélectionné.",
    toolsTitle: "Les outils de la visionneuse",
    tools: {
      rotate: "Lance ou arrête la lente rotation automatique. L’interrupteur « {autoRotate} » fait de même.",
      zoom: "Rapproche la vue d’un cran vers le modèle.",
      isolate: "Estompe le socle de présentation, pour que l’organe se présente seul.",
      section: "Coupe le modèle pour montrer une vue de son intérieur.",
      layers: "Affiche le modèle en fil de fer, révélant le maillage qui le compose.",
      compare: "Compare le rôle principal et la taille de l’organe avec ceux d’un second organe.",
      reset: "Ramène le modèle à sa vue de départ et ferme toute légende ouverte.",
    },
    trouble:
      "Si un modèle ne s’affiche pas, votre navigateur doit prendre en charge les graphismes 3D (WebGL). Mettez le navigateur à jour, vérifiez que l’accélération matérielle est activée, puis rechargez la page.",
  },

  exploring: {
    title: "Organes, repères et cartes d’apprentissage",
    intro: "Corpus compte {count} organes. Chacun s’ouvre avec son modèle 3D au centre et ses repères à côté.",
    parts: {
      library: {
        title: "La bibliothèque d’organes",
        body: "Répertorie chaque organe avec son système. Saisissez un mot dans le champ de recherche en haut d’Explorer pour la filtrer.",
      },
      panel: {
        title: "Le panneau d’information",
        body: "Indique la taille, le poids, la situation, la vascularisation et la fonction de l’organe, avec une note médicale et un fait marquant.",
      },
      cards: {
        title: "Les cartes d’apprentissage",
        body: "Ouvrent le tissu de l’organe au microscope, une comparaison, une courte animation, les affections fréquentes et sa place dans le corps.",
      },
    },
    catalogueTitle: "Ouvrir un organe directement",
    catalogueLink: "Ouvrir {organ} dans Explorer",
    clinical:
      "Les notes cliniques montrent pourquoi l’anatomie compte. Elles ne servent ni à diagnostiquer ni à soigner qui que ce soit. Si vous avez une inquiétude au sujet de votre santé, parlez-en à un médecin.",
  },

  practice: {
    title: "Se tester sur le modèle",
    intro: "L’entraînement se fait sur le modèle lui-même. Le quiz d’identification vous demande de retrouver chaque structure nommée de l’organe affiché.",
    steps: {
      start: "Ouvrez un organe et sélectionnez « {quiz} ». Le modèle cesse de tourner : les points restent immobiles.",
      find: "Corpus nomme une structure à la fois. Cliquez ou touchez le point qui, selon vous, lui correspond.",
      feedback: "Une bonne réponse vous fait passer à la suite. En cas d’erreur, Corpus indique la structure que vous avez choisie et signale la bonne.",
      finish: "Chaque structure est demandée une fois, dans un nouvel ordre à chaque manche. À la fin, votre score s’affiche.",
    },
    note: "Les scores du quiz ne sont pas enregistrés. Ils sont effacés lorsque vous quittez la page ou choisissez un autre organe.",
    exampleCaption: "Exemple de question du quiz sur le cœur, telle qu’elle apparaît au-dessus du modèle.",
  },

  languages: {
    title: "Lire Corpus dans votre langue",
    intro: "Corpus est disponible en {count} langues. Dans Explorer, les noms des organes, les descriptions, les légendes des structures et les commandes sont traduits dans chacune d’elles.",
    switchBody:
      "Choisissez une langue en bas de n’importe quelle page, ou depuis le menu des langues en haut d’Explorer. Vous restez sur la page que vous lisiez.",
    rtl: "L’arabe se lit de droite à gauche, et toute la mise en page s’inverse en conséquence. Les pages pas encore traduites s’affichent en anglais.",
    listLabel: "Langues disponibles",
    current: "Langue actuelle",
  },

  account: {
    title: "Les comptes seront bientôt disponibles",
    body: "Les formulaires de connexion, d’inscription et de réinitialisation du mot de passe sont en place, mais les comptes n’existent pas encore. Les formulaires le signalent, et rien de ce que vous saisissez n’est envoyé.",
    saved: "Vous n’avez pas besoin de compte : tout Explorer fonctionne sans. Rien de ce que vous faites n’est enregistré d’une visite à l’autre.",
    cta: "Commencer l’exploration",
  },

  faqHeading: "Questions fréquentes",
  faq: {
    whatIs: {
      q: "Qu’est-ce que Corpus ?",
      a: "Corpus est un atlas d’anatomie interactif. Vous explorez des modèles 3D d’organes humains, lisez les structures nommées qu’ils renferment et vous testez au fil de votre exploration.",
    },
    exploreOrgan: {
      q: "Comment explorer un organe ?",
      a: "Ouvrez Explorer et choisissez un organe dans la bibliothèque. Faites pivoter le modèle, sélectionnez les points pour lire chaque structure, et ouvrez les cartes sous la visionneuse pour aller plus loin.",
    },
    rotate: {
      q: "Comment faire pivoter un modèle ?",
      a: "Faites glisser le modèle avec la souris ou un doigt. Au clavier, appuyez sur Tab jusqu’à ce que le modèle ait le focus, puis utilisez les flèches gauche et droite. Sélectionnez « {reset} » pour revenir à la vue de départ.",
    },
    zoom: {
      q: "Comment zoomer ?",
      a: "Utilisez la molette ou le pavé tactile, pincez avec deux doigts sur un écran tactile, ou sélectionnez l’outil « {zoom} ». Les touches plus et moins fonctionnent aussi lorsque le modèle a le focus.",
    },
    hotspots: {
      q: "Que sont les points interactifs ?",
      a: "Les points interactifs sont les points posés sur le modèle. Chacun signale une structure : sélectionnez-en un pour voir son nom et une courte description.",
    },
    isolate: {
      q: "À quoi sert « Isoler » ?",
      a: "L’outil « {isolate} » estompe le socle de présentation pour montrer l’organe seul. Sélectionnez-le à nouveau pour faire réapparaître le socle.",
    },
    languages: {
      q: "Quelles langues sont prises en charge ?",
      a: "Corpus est disponible en {count} langues : {list}.",
    },
    mobile: {
      q: "Corpus fonctionne-t-il sur mobile ?",
      a: "Oui, dans un navigateur récent, sur téléphone comme sur tablette. Faites glisser un doigt pour tourner un modèle, pincez pour zoomer et touchez un point pour le lire.",
    },
    medical: {
      q: "Corpus fournit-il un avis médical ?",
      a: "Non. Corpus sert à apprendre l’anatomie. Il ne fournit ni avis médical, ni diagnostic, ni traitement. Si votre santé vous inquiète, consultez un médecin. En cas d’urgence, appelez le numéro d’urgence local.",
    },
    accuracy: {
      q: "L’anatomie est-elle exacte ?",
      a: "Les modèles et les illustrations sont des représentations pédagogiques simplifiées. Ils montrent la forme générale de chaque organe et l’emplacement de ses principales structures, pas chaque détail. Les noms des structures suivent la Terminologia Anatomica, la norme internationale.",
    },
    createAccount: {
      q: "Comment créer un compte ?",
      a: "Les comptes seront bientôt disponibles. Le formulaire d’inscription est en place, mais il ne crée pas encore de compte et rien de ce que vous saisissez n’est envoyé. Vous n’avez pas besoin de compte pour utiliser Explorer.",
    },
    resetPassword: {
      q: "Comment réinitialiser mon mot de passe ?",
      a: "Il n’existe pas encore de comptes, donc aucun mot de passe à réinitialiser. Le formulaire de réinitialisation est prêt pour plus tard ; pour l’instant, il n’envoie aucun e-mail.",
    },
  },
  faqLinks: {
    explore: "Ouvrir Explorer",
    report: "Signaler une erreur",
  },

  contact: {
    title: "Besoin d’aide supplémentaire ?",
    body: "Nous construisons Corpus avec soin. Si quelque chose ne fonctionne pas comme prévu, dites-le-nous.",
    cta: "Contacter l’assistance",
    ctaDescription: "Ouvre le gestionnaire de tickets public du projet sur GitHub, dans un nouvel onglet.",
    note: "Les signalements sont publics et nécessitent un compte GitHub gratuit. N’y incluez aucune information personnelle ou de santé.",
  },
};
