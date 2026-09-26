import type { SiteDictionary } from "..";

export const about: SiteDictionary["about"] = {
  meta: {
    title: "Acerca de Corpus — Taller de anatomía",
    description:
      "Por qué Corpus trata la anatomía como un lenguaje visual: órganos en 3D, láminas pintadas y terminología latina, pensados para aprender el cuerpo mirando, manipulando y recordando, en {count} idiomas.",
  },

  plate: "Lámina {number}",

  hero: {
    eyebrow: "Acerca de Corpus",
    titleFirst: "La anatomía es un lenguaje visual.",
    titleSecond: "Hemos creado un lugar para aprenderlo.",
    contents: "Contenido",
    lede: "Corpus es un taller de anatomía: órganos en 3D, láminas pintadas y nombres latinos precisos, dispuestos para que aprendas el cuerpo mirándolo de cerca.",
    alt: "Pintura en acuarela del cerebro humano visto desde el lado izquierdo, con el cerebelo y el tronco del encéfalo debajo.",
  },

  depth: {
    label: "Profundidad",
    titleFirst: "El cuerpo es demasiado complejo",
    titleSecond: "para aprenderlo como una imagen plana.",
    intro: "Durante generaciones, la anatomía se ha enseñado con diagramas, atlas, listas y etiquetas.",
    valuable: "Esas herramientas son valiosas.",
    turn: "Pero el cuerpo no es plano.",
    truths: {
      overlap: "Las estructuras se superponen.",
      connect: "Los sistemas se conectan.",
      space: "Los órganos ocupan espacio.",
      form: "La forma cambia la función.",
    },
    close: "Corpus está construido sobre esa realidad.",
    caption: "En el cuerpo, y como órgano completo.",
    bodyAlt: "Figura en acuarela de un cuerpo humano con ambos pulmones dibujados en el tórax y un círculo ampliado que muestra racimos de alvéolos.",
    organAlt: "Pintura en acuarela de ambos pulmones, con la tráquea dividiéndose en vías respiratorias ramificadas.",
  },

  atelier: {
    label: "El nombre",
    title: "Taller de anatomía",
    meaning: "Un taller es el estudio del artista: el lugar donde se trabaja con las manos.",
    body: "Corpus trata la anatomía como algo con lo que se trabaja, no como algo que simplemente se lee.",
    verbsTitle: "En el taller",
    verbs: {
      observe: { verb: "Observas.", note: "Gira un modelo y acércate." },
      manipulate: { verb: "Manipulas.", note: "Aísla un órgano o haz un corte transversal." },
      compare: { verb: "Comparas.", note: "Pon un órgano junto a otro." },
      question: { verb: "Preguntas.", note: "Selecciona una estructura para ver su nombre y su función." },
      practice: { verb: "Practicas.", note: "Encuentra cada estructura cuando se te pida y compruébalo tú mismo." },
    },
    studioAlt:
      "Una mesa de estudio dibujada: un boceto a lápiz del corazón sujeto a ella y un par de riñones pintados sobre una plataforma giratoria, rotulados con líneas de referencia y su nombre latino.",
  },

  principles: {
    label: "Principios",
    lines: {
      science: "La ciencia, primero.",
      story: "El relato, después.",
      visuals: "La imagen, siempre.",
    },
    columns: {
      scientific: {
        label: "Científico",
        title: "Basado en la estructura y la terminología anatómicas.",
        body: "Las estructuras se nombran según la Terminologia Anatomica, el estándar internacional de los términos anatómicos.",
      },
      visual: {
        label: "Visual",
        title: "Diseñado para la comprensión espacial.",
        body: "Los órganos son modelos que puedes girar, cortar y comparar, no una sola vista impresa.",
      },
      educational: {
        label: "Educativo",
        title: "Pensado para la exploración activa y el recuerdo.",
        body: "Tú mismo encuentras las estructuras en el modelo y ves al instante si has acertado.",
      },
    },
    note: "Los modelos y las ilustraciones son representaciones educativas simplificadas. Corpus sirve para aprender; no es consejo médico.",
  },

  world: {
    label: "Idiomas",
    title: "Hecho para el mundo.",
    body: {
      languages:
        "La anatomía de Explorar, desde los nombres y las descripciones de los órganos hasta cada rótulo de estructura, está disponible en {count} idiomas.",
      scripts:
        "En árabe, todo el diseño se lee de derecha a izquierda. El chino, el japonés y el coreano se componen con tipografías creadas para sus escrituras.",
      latin:
        "Bajo cada idioma está el mismo término latino. Gracias a él, un estudiante en El Cairo y otro en Seúl señalan la misma estructura, la llamen como la llamen.",
      honest:
        "La traducción es un trabajo cuidadoso y continuo, y algunos idiomas se leerán con más naturalidad que otros mientras los pulimos.",
    },
    namesTitle: "Una estructura, {count} nombres",
    namesCaption: "El corazón, tal como lo nombra Explorar en cada idioma. El término latino no cambia.",
  },

  closing: {
    titleFirst: "Estamos creando una forma mejor",
    titleSecond: "de ver el cuerpo humano.",
    cta: "Explora Corpus",
  },
};
