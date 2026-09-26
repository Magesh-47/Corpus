import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "À propos de Corpus — Atelier d’anatomie",
    description:
      "Pourquoi Corpus aborde l’anatomie comme un langage visuel : organes en 3D, planches peintes et terminologie latine, pour apprendre le corps en l’observant, en le manipulant et en s’en souvenant, en {count} langues.",
  },

  plate: "Planche {number}",

  hero: {
    eyebrow: "À propos de Corpus",
    titleFirst: "L’anatomie est un langage visuel.",
    titleSecond: "Nous avons créé un lieu pour l’apprendre.",
    contents: "Sommaire",
    lede: "Corpus est un atelier d’anatomie : des organes en 3D, des planches peintes et des noms latins précis, agencés pour que vous appreniez le corps en le regardant de près.",
    alt: "Aquarelle du cerveau humain vu du côté gauche, avec le cervelet et le tronc cérébral en dessous.",
  },

  depth: {
    label: "Profondeur",
    titleFirst: "Le corps est trop complexe",
    titleSecond: "pour s’apprendre sur une image plate.",
    intro: "Depuis des générations, l’anatomie s’enseigne par des schémas, des atlas, des listes et des légendes.",
    valuable: "Ces outils sont précieux.",
    turn: "Mais le corps n’est pas plat.",
    truths: {
      overlap: "Les structures se chevauchent.",
      connect: "Les systèmes se relient.",
      space: "Les organes occupent l’espace.",
      form: "La forme change la fonction.",
    },
    close: "Corpus est construit autour de cette réalité.",
    caption: "Dans le corps, et en tant qu’organe entier.",
    bodyAlt: "Figure humaine à l’aquarelle, les deux poumons dessinés dans le thorax, avec un cercle agrandi montrant des grappes de sacs aériens.",
    organAlt: "Aquarelle des deux poumons, avec la trachée qui se divise en voies aériennes ramifiées.",
  },

  atelier: {
    label: "Le nom",
    title: "Atelier d’anatomie",
    meaning: "L’atelier est le lieu où l’on travaille de ses mains, celui du peintre comme de l’artisan.",
    body: "Corpus traite l’anatomie comme une matière que l’on travaille, plutôt que comme un texte que l’on se contente de lire.",
    verbsTitle: "À l’atelier",
    verbs: {
      observe: { verb: "Vous observez.", note: "Faites pivoter un modèle et approchez-vous." },
      manipulate: { verb: "Vous manipulez.", note: "Isolez un organe ou réalisez une coupe transversale." },
      compare: { verb: "Vous comparez.", note: "Placez un organe à côté d’un autre." },
      question: { verb: "Vous interrogez.", note: "Sélectionnez une structure pour voir son nom et son rôle." },
      practice: { verb: "Vous vous exercez.", note: "Retrouvez chaque structure demandée, puis vérifiez vos réponses." },
    },
    studioAlt:
      "Une table d’étude dessinée : une étude du cœur au crayon y est épinglée, et une paire de reins peinte repose sur un plateau tournant, légendée par des lignes de rappel et son nom latin.",
  },

  principles: {
    label: "Principes",
    lines: {
      science: "La science d’abord.",
      story: "Le récit ensuite.",
      visuals: "L’image toujours.",
    },
    columns: {
      scientific: {
        label: "Scientifique",
        title: "Fondé sur la structure et la terminologie anatomiques.",
        body: "Les structures sont nommées selon la Terminologia Anatomica, la norme internationale des termes anatomiques.",
      },
      visual: {
        label: "Visuel",
        title: "Conçu pour la compréhension spatiale.",
        body: "Les organes sont des modèles que l’on peut faire pivoter, couper et comparer, et non des vues imprimées figées.",
      },
      educational: {
        label: "Pédagogique",
        title: "Construit autour de l’exploration active et du rappel.",
        body: "Vous retrouvez vous-même les structures sur le modèle et voyez aussitôt si vous aviez raison.",
      },
    },
    note: "Les modèles et les illustrations sont des représentations pédagogiques simplifiées. Corpus sert à apprendre et ne constitue pas un avis médical.",
  },

  world: {
    label: "Langues",
    title: "Conçu pour le monde entier.",
    body: {
      languages:
        "L’anatomie d’Explorer, des noms et descriptions des organes jusqu’à chaque légende de structure, est disponible en {count} langues.",
      scripts:
        "En arabe, toute la mise en page se lit de droite à gauche. Le chinois, le japonais et le coréen sont composés dans des polices conçues pour leurs écritures.",
      latin:
        "Sous chaque langue se trouve le même terme latin. Il permet à une étudiante du Caire et à un étudiant de Séoul de désigner la même structure, quel que soit le nom qu’ils lui donnent.",
      honest:
        "La traduction est un travail minutieux et continu : certaines langues se liront plus naturellement que d’autres, le temps que nous les affinions.",
    },
    namesTitle: "Une structure, {count} noms",
    namesCaption: "Le cœur, tel qu’Explorer le nomme dans chaque langue. Le terme latin reste le même.",
  },

  closing: {
    titleFirst: "Nous construisons une meilleure façon",
    titleSecond: "de voir le corps humain.",
    cta: "Explorer Corpus",
  },
};
