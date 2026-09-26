import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Tarifs de Corpus — Apprendre l’anatomie",
    description:
      "Explorez gratuitement l’anatomie essentielle en 3D avec Corpus, sans compte. Corpus Plus et Éducation sont en développement et n’ont pas encore de prix.",
  },

  hero: {
    eyebrow: "Tarifs",
    titleLead: "Explorez le corps.",
    titleRest: "Choisissez jusqu’où vous voulez aller.",
    lede: "L’anatomie essentielle s’explore gratuitement dès aujourd’hui, sans compte ni paiement. Corpus Plus et Éducation sont encore en développement : ni l’une ni l’autre n’a de prix pour l’instant.",
    primary: "Commencer l’exploration",
    secondary: "Comparer les formules",
    plate: {
      label: "Planche : {organ}, en coupe",
      alt: "Un bloc de peau à l’aquarelle, entaillé pour montrer ses couches : la surface, le derme avec ses follicules pileux, ses glandes et ses vaisseaux, et la graisse jaune en dessous",
      caption: "De la surface jusqu’à la graisse sous-jacente. Les mêmes couches sont légendées sur le modèle 3D, en libre accès.",
    },
  },

  plans: {
    title: "Les formules",
    summary: "Une formule est disponible aujourd’hui. Deux sont en développement.",
    numberLabel: "Formule {number}",
    learnMore: "En savoir plus sur {plan}",
    items: {
      free: {
        name: "Gratuit",
        tagline: "Explorer l’anatomie essentielle.",
        price: "Sans frais",
        priceNote: "Aucun compte requis",
        description: "L’expérience Explorer complète, telle qu’elle existe aujourd’hui, ouverte à toute personne disposant d’un navigateur récent.",
        listHeading: "Inclus aujourd’hui",
        list: {
          organs: "{organCount} organes en 3D, du cœur et du cerveau jusqu’à la peau",
          viewer: "Rotation et zoom, avec isolement, coupe transversale et couches",
          hotspots: "{structureCount} structures légendées, chacune avec son terme latin",
          cards: "Cartes d’apprentissage sur le tissu, la fonction, les affections et la comparaison",
          quiz: "Un quiz d’identification qui vous demande de retrouver les structures sur le modèle",
          languages: "Descriptions des organes en {languageCount} langues",
        },
        cta: "Commencer l’exploration",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "Aller plus loin grâce à de futures fonctions d’apprentissage et de personnalisation.",
        price: "Pas encore de prix",
        priceNote: "En développement",
        description: "Prévue pour celles et ceux qui veulent aller au-delà de la collection de base et revenir sur ce qu’ils ont étudié.",
        listHeading: "Pistes à l’étude",
        list: {
          depth: "Davantage du corps, au-delà des organes disponibles aujourd’hui",
          study: "Des outils pour vous aider à vous exercer et à retenir ce que vous explorez",
          guidance: "Des explications guidées à côté des modèles 3D",
          progress: "Un moyen de revenir sur ce que vous avez déjà étudié",
        },
        cta: "En savoir plus",
      },
      education: {
        name: "Éducation",
        tagline: "Faire entrer Corpus dans l’enseignement et l’apprentissage.",
        price: "Pas encore de prix",
        priceNote: "En développement",
        description: "Prévue pour les enseignants et les établissements qui souhaitent intégrer Corpus à un cours ou à un cursus.",
        listHeading: "Pistes à l’étude",
        list: {
          classroom: "Des moyens d’utiliser Corpus avec toute une classe à la fois",
          teaching: "Un soutien pour préparer et animer des cours d’anatomie",
          practice: "Des exercices qu’un groupe d’étudiants peut faire ensemble",
        },
        cta: "En savoir plus",
      },
    },
    plannedNote: "Les formules en développement sont des orientations, pas des engagements. Leurs fonctions, leur calendrier et leurs prix n’ont pas été arrêtés, et rien sur cette page ne peut être acheté.",
  },

  comparison: {
    eyebrow: "Comparer",
    title: "Ce que comprend chaque formule.",
    lede: "La colonne Gratuit décrit Corpus tel qu’il est aujourd’hui. Les deux autres décrivent des formules en développement, susceptibles d’évoluer.",
    caption: "Fonctions par formule. Gratuit est disponible dès maintenant ; Corpus Plus et Éducation sont en développement.",
    featureHeading: "Fonction",
    status: {
      available: "Disponible",
      planned: "Prévu",
      undecided: "Non décidé",
      unavailable: "Non disponible",
      otherPlan: "Pas dans cette formule",
    },
    rows: {
      exploration: {
        name: "Exploration anatomique en 3D",
        free: "Rotation, zoom, isolement, coupe transversale et couches",
        plus: "Tout ce qu’inclut Gratuit",
        education: "Tout ce qu’inclut Gratuit",
      },
      library: {
        name: "Bibliothèque d’organes",
        free: "{organCount} organes, avec recherche",
        plus: "Davantage du corps",
        education: "Tout ce qu’inclut Gratuit",
      },
      structures: {
        name: "Structures anatomiques",
        free: "{structureCount} structures légendées avec leurs termes latins",
        plus: "Tout ce qu’inclut Gratuit",
        education: "Tout ce qu’inclut Gratuit",
      },
      learning: {
        name: "Apprentissage interactif",
        free: "Cartes d’apprentissage sur le tissu, la fonction, les affections et la comparaison",
        plus: "Des outils d’étude plus poussés",
        education: "Du matériel à utiliser en cours",
      },
      practice: {
        name: "Entraînement",
        free: "Un quiz d’identification sur le modèle 3D",
        plus: "Plus de façons de s’exercer",
        education: "Des exercices pour toute une classe",
      },
      guidance: {
        name: "Accompagnement par IA",
        free: "Corpus n’a aucune fonction d’IA aujourd’hui",
        plus: "Des explications guidées à côté des modèles",
        education: "Pas encore décidé pour cette formule",
      },
      progress: {
        name: "Progression personnalisée",
        free: "La progression n’est pas enregistrée d’une visite à l’autre",
        plus: "Un moyen de revenir sur ce que vous avez étudié",
        education: "Pas encore décidé pour cette formule",
      },
      educators: {
        name: "Outils pour enseignants",
        free: "Aucun outil pour enseignants aujourd’hui",
        plus: "Prévu plutôt dans Éducation",
        education: "Un soutien pour préparer et animer des cours",
      },
    },
  },

  collection: {
    eyebrow: "Inclus dans Gratuit",
    title: "La collection gratuite, ouverte à tous.",
    lede: "Chaque organe a un modèle 3D, une planche illustrée et des structures légendées. Choisissez-en un pour l’ouvrir dans Explorer.",
    plateLabel: "Planche {number}",
    structures: "Structures légendées : {count}",
    openOrgan: "{organ} : ouvrir dans Explorer",
    footnote: "Les modèles et les illustrations sont des représentations pédagogiques simplifiées, et non des références cliniques ; rien dans Corpus ne constitue un avis médical.",
  },

  faq: {
    eyebrow: "Questions",
    title: "Questions simples, réponses franches.",
    items: {
      account: {
        q: "Faut-il un compte ?",
        a: "Non. Vous pouvez ouvrir Explorer et commencer tout de suite, sans vous connecter.",
      },
      payments: {
        q: "Puis-je payer Corpus Plus ou Éducation dès maintenant ?",
        a: "Non. Aucune de ces formules n’est disponible, aucun prix n’a été fixé, et Corpus n’accepte aujourd’hui aucun paiement, de quelque nature que ce soit. Lorsqu’une formule sera prête, elle sera décrite ici.",
      },
      classroom: {
        q: "Puis-je utiliser Corpus en classe dès aujourd’hui ?",
        a: "Oui. Explorer est gratuit et ne demande aucun compte : les élèves peuvent l’ouvrir dans un navigateur récent. Les outils pour la classe et pour les enseignants ne sont pas encore disponibles.",
      },
    },
  },

  closing: {
    eyebrow: "Commencer",
    titleLead: "Vous ne savez pas par où commencer ?",
    titleRest: "Explorez l’anatomie gratuitement.",
    cta: "Explorer Corpus",
    imageAlt: "Aquarelle de la peau au microscope : l’épiderme rose et stratifié au-dessus du tissu plus lâche et ondulé du derme",
    caption: "{organ} au microscope : {tissue}",
  },
};
