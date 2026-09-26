import type { SiteDictionary } from "..";

export const howItWorks: SiteDictionary["howItWorks"] = {
  meta: {
    title: "Comment fonctionne Corpus — Explorer l’anatomie en 3D",
    description:
      "Choisissez un organe, faites pivoter son modèle 3D, découvrez sa situation, sa vascularisation et sa fonction, puis testez-vous en retrouvant ses structures. Voici comment on apprend avec Corpus.",
  },

  hero: {
    eyebrow: "Comment ça marche",
    title: {
      see: "Voir.",
      explore: "Explorer.",
      understand: "Comprendre.",
      remember: "Retenir.",
    },
    lede: "Corpus fait de l’anatomie une expérience visuelle et active.",
    body: "Cinq étapes, un organe à la fois. Les quatre premières se déroulent déjà dans Explorer. La cinquième reste à venir.",
    contentsLabel: "Les cinq étapes",
  },

  steps: {
    see: {
      name: "Voir",
      title: "Commencer par l’ensemble.",
      line: "Choisissez un organe et observez sa forme avant de vous soucier de ses légendes.",
      body:
        "Explorer s’ouvre sur une bibliothèque de neuf organes, du cœur et du cerveau jusqu’au pancréas et à la peau. Choisissez-en un : il apparaît entier. Ses structures sont signalées par de petits points, et leurs noms attendent que vous les demandiez.",
      plateLabel: "Planche I",
      caption: "{organ}, vue d’ensemble. Un des neuf organes de la bibliothèque d’Explorer.",
      alt: "Étude à l’aquarelle du cœur humain vu de face, avec l’aorte qui s’arque au-dessus",
    },
    explore: {
      name: "Explorer",
      title: "Se déplacer dans la structure.",
      line: "Faites pivoter, zoomez, isolez et examinez les relations anatomiques.",
      body:
        "Chaque organe est un modèle 3D. Faites glisser pour le tourner, faites défiler ou pincez pour vous rapprocher, et sélectionnez un point pour nommer la structure qu’il désigne. L’isolement, la coupe transversale et les couches offrent chacun un autre regard sur la même forme.",
      viewerLabel: "Visionneuse 3D",
      controlsLabel: "Commandes de la visionneuse",
      controls: {
        rotate: { name: "Pivoter", note: "Glisser" },
        zoom: { name: "Zoom", note: "Défiler ou pincer" },
        isolate: { name: "Isoler", note: "L’organe seul" },
        section: { name: "Coupe transversale", note: "Ouvrir en coupe" },
      },
      caption: "Arrêt sur image de la visionneuse 3D d’Explorer. Les noms des commandes sont dessinés ici à titre d’illustration.",
      alt: "Modèle 3D du cœur dans la visionneuse d’Explorer, vu de face sur un socle, avec de petits points colorés signalant les structures nommées",
    },
    understand: {
      name: "Comprendre",
      title: "Relier la structure à la fonction.",
      line: "Explorez la vascularisation, la situation, la fonction, le tissu et le contexte clinique.",
      body:
        "À côté du modèle, un panneau d’information expose ce qu’est l’organe et ce qu’il fait. Les cartes d’apprentissage vont plus loin : le tissu au microscope, la comparaison avec un autre organe, là où il agit dans le corps, et les affections qui le touchent le plus souvent.",
      panelLabel: "Panneau d’information",
      facts: {
        size: "Taille",
        location: "Situation",
        bloodSupply: "Vascularisation",
        function: "Fonction",
        tissue: "Tissu",
      },
      conditionsLabel: "Contexte clinique",
      caption: "{organ} : repères tirés du panneau d’information et des cartes d’apprentissage d’Explorer.",
      organAlt: "Étude à l’aquarelle des poumons, avec la trachée qui se divise en deux bronches principales",
      tissueAlt: "Vue circulaire au microscope des alvéoles, les minuscules sacs aériens des poumons",
    },
    practice: {
      name: "S’exercer",
      title: "Tester ce que vous venez d’explorer.",
      line: "Identifiez les structures et pratiquez le rappel actif.",
      body:
        "Lancez le quiz d’identification : le modèle s’immobilise. Corpus nomme une structure et vous la retrouvez sur le modèle. En cas d’erreur, la bonne réponse vous est montrée, et chaque manche se termine par votre score et la possibilité de recommencer dans un nouvel ordre.",
      prompt: "Trouvez",
      hint: "Sélectionnez le point correspondant",
      caption: "Illustration du quiz d’identification d’Explorer, où l’on sélectionne les points directement sur le modèle 3D.",
      alt: "Étude à l’aquarelle du cerveau avec quatre structures numérotées et des légendes vierges, accompagnée de la consigne « Trouvez : {structure} »",
    },
    remember: {
      name: "Retenir",
      title: "Revenir à l’essentiel.",
      line:
        "La future expérience Corpus vous aidera à revoir des structures, à reprendre des conversations et à revenir sur les points qui demandent plus d’attention.",
      body:
        "Cette partie n’existe pas encore. Corpus n’enregistre pas ce que vous avez étudié : chaque visite dans Explorer repart de zéro. D’ici là, refaire le quiz d’identification est le moyen de revenir à une structure.",
      futureLabel: "Prévu",
      future: {
        structures: "Structures à revoir",
        conversations: "Conversations à reprendre",
        attention: "Points qui demandent plus d’attention",
      },
    },
  },

  closing: {
    titleStart: "Apprendre l’anatomie devrait avoir",
    titleEnd: "le goût de la découverte.",
    action: "Entrer dans l’atelier d’anatomie",
  },
};
