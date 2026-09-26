import type { SiteDictionary } from "..";

export const howItWorks: SiteDictionary["howItWorks"] = {
  meta: {
    title: "Cómo funciona Corpus — Explora la anatomía en 3D",
    description:
      "Elige un órgano, gira su modelo 3D, consulta su ubicación, su irrigación y su función, y ponte a prueba localizando sus estructuras. Así se aprende con Corpus.",
  },

  hero: {
    eyebrow: "Cómo funciona",
    title: {
      see: "Ver.",
      explore: "Explorar.",
      understand: "Comprender.",
      remember: "Recordar.",
    },
    lede: "Corpus convierte la anatomía en una experiencia visual activa.",
    body: "Cinco pasos, un órgano cada vez. Los cuatro primeros ya son posibles hoy en Explorar. El quinto aún está por llegar.",
    contentsLabel: "Los cinco pasos",
  },

  steps: {
    see: {
      name: "Ver",
      title: "Empieza por el conjunto.",
      line: "Elige un órgano y mira su forma antes de preocuparte por los nombres.",
      body:
        "Explorar se abre con una biblioteca de nueve órganos, del corazón y el cerebro al páncreas y la piel. Elige uno y aparecerá entero. Sus estructuras están marcadas con pequeños puntos, y sus nombres esperan a que los pidas.",
      plateLabel: "Lámina I",
      caption: "{organ}: la forma completa. Uno de los nueve órganos de la biblioteca de Explorar.",
      alt: "Estudio en acuarela del corazón humano visto de frente, con la aorta formando un arco por encima",
    },
    explore: {
      name: "Explorar",
      title: "Recorre la estructura.",
      line: "Gira, haz zoom, aísla y examina las relaciones anatómicas.",
      body:
        "Cada órgano es un modelo 3D. Arrastra para girarlo, desplaza o pellizca para acercarte y selecciona un punto para ver el nombre de la estructura que hay debajo. Aislar, Corte transversal y Capas cambian, cada uno a su manera, cómo ves la misma forma.",
      viewerLabel: "Visor 3D",
      controlsLabel: "Controles del visor",
      controls: {
        rotate: { name: "Girar", note: "Arrastrar" },
        zoom: { name: "Zoom", note: "Desplazar o pellizcar" },
        isolate: { name: "Aislar", note: "Solo el órgano" },
        section: { name: "Corte transversal", note: "Ver su interior" },
      },
      caption: "Un fotograma del visor 3D de Explorar. Los rótulos de los controles se han dibujado aquí a modo de ilustración.",
      alt: "Modelo 3D del corazón en el visor de Explorar, visto de frente sobre un pedestal, con pequeños puntos de colores que marcan estructuras con nombre",
    },
    understand: {
      name: "Comprender",
      title: "Relaciona estructura y función.",
      line: "Explora la irrigación, la ubicación, la función, el tejido y el contexto clínico.",
      body:
        "Junto al modelo, un panel de información expone qué es el órgano y qué hace. Las tarjetas de aprendizaje van más allá: el tejido al microscopio, una comparación con otro órgano, dónde actúa en el cuerpo y las enfermedades que lo afectan con frecuencia.",
      panelLabel: "Panel de información",
      facts: {
        size: "Tamaño",
        location: "Ubicación",
        bloodSupply: "Irrigación",
        function: "Función",
        tissue: "Tejido",
      },
      conditionsLabel: "Contexto clínico",
      caption: "{organ}: datos del panel de información y de las tarjetas de aprendizaje de Explorar.",
      organAlt: "Estudio en acuarela de los pulmones, con la tráquea dividiéndose en los dos bronquios principales",
      tissueAlt: "Vista circular al microscopio de los alvéolos, los diminutos sacos de aire de los pulmones",
    },
    practice: {
      name: "Practicar",
      title: "Pon a prueba lo que acabas de explorar.",
      line: "Identifica estructuras y usa el recuerdo activo.",
      body:
        "Empieza el cuestionario de identificación y el modelo se queda quieto. Corpus nombra una estructura y tú la encuentras en el modelo. Si fallas, verás dónde estaba la respuesta, y cada ronda termina con tu puntuación y la opción de volver a intentarlo en un orden nuevo.",
      prompt: "Encuentra",
      hint: "Selecciona el punto correspondiente",
      caption: "Una ilustración del cuestionario de identificación de Explorar, donde seleccionas los puntos en el propio modelo 3D.",
      alt: "Estudio en acuarela del cerebro con cuatro estructuras numeradas y etiquetas en blanco, y una indicación que te pide encontrar la estructura «{structure}»",
    },
    remember: {
      name: "Recordar",
      title: "Vuelve a lo que importa.",
      line:
        "Tu futura experiencia en Corpus te ayudará a repasar estructuras, conversaciones y áreas que necesitan más atención.",
      body:
        "Esta parte aún no existe. Corpus no guarda lo que has estudiado, así que cada visita a Explorar empieza de cero. Hasta entonces, repetir el cuestionario de identificación es la forma de volver a una estructura.",
      futureLabel: "Previsto",
      future: {
        structures: "Estructuras para repasar",
        conversations: "Conversaciones para retomar",
        attention: "Áreas que necesitan más atención",
      },
    },
  },

  closing: {
    titleStart: "Aprender anatomía debería ser",
    titleEnd: "como descubrir algo.",
    action: "Entra en el taller de anatomía",
  },
};
