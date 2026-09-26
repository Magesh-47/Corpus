import type { SiteDictionary } from "..";

export const marketing: SiteDictionary["marketing"] = {
  meta: {
    title: "Corpus — Aprende anatomía como un artista",
    description:
      "Explora el cuerpo humano en 3D con todo detalle: gira el corazón, el cerebro, los pulmones y otros órganos, mira bajo la superficie y ponte a prueba con las estructuras que contienen.",
  },

  hero: {
    eyebrow: "La anatomía, reinventada",
    title: "Aprende anatomía\ncomo un artista.",
    lede: "Explora el cuerpo humano con anatomía 3D detallada, descubre las estructuras que hay bajo la superficie y construye una comprensión que va más allá del diagrama.",
    primary: "Explora el cuerpo",
    secondary: "Descubre Corpus",
    supportingLabel: "Qué es Corpus",
    supporting: {
      anatomy: "Anatomía 3D",
      visual: "Aprendizaje visual",
      languages: "Multilingüe",
    },
    plate: {
      number: "Lámina I",
      view: "Vista anterolateral",
      latinTitle: "Musculi capitis, colli et thoracis",
      caption: "Los músculos superficiales de la cabeza, el cuello y el tórax.",
      alt: "Un busto anatómico sin piel que muestra los músculos superficiales de la cara, el cuello, el hombro y el tórax. La cabeza está girada hacia un lado e inclinada hacia arriba.",
      legendLabel: "Estructuras señaladas en esta lámina",
      structures: {
        temporalis: "M. temporalis",
        sternocleidomastoid: "M. sternocleidomastoideus",
        deltoid: "M. deltoideus",
        pectoralisMajor: "M. pectoralis major",
      },
    },
  },

  transition: {
    number: "01",
    title: "El taller de anatomía",
    line: "Explora el cuerpo como un sistema tridimensional.",
  },

  philosophy: {
    eyebrow: "Filosofía",
    title: "La anatomía no se memoriza\nen dos dimensiones.",
    lede: "El cuerpo es tridimensional, está interconectado y se mueve sin cesar. Corpus convierte la anatomía en algo que puedes ver, explorar y comprender.",
    steps: {
      see: {
        label: "Ver",
        title: "Mira bajo la superficie.",
        body: "Explora las estructuras en el espacio en lugar de reducir el cuerpo a un diagrama plano.",
        alt: "El corazón 3D de Explorar, girado para mostrar su cara lateral, con los grandes vasos saliendo por arriba.",
        caption: "El corazón, girado en Explorar.",
      },
      understand: {
        label: "Comprender",
        title: "Une las piezas.",
        body: "Pasa de una estructura a su función, sus relaciones, su irrigación, su tejido y su contexto clínico.",
        alt: "Ilustración en acuarela del cerebro visto de perfil.",
        caption: "Lo que Explorar muestra junto al cerebro.",
        facets: {
          function: "Función",
          bloodSupply: "Irrigación",
          tissue: "Tejido",
          clinical: "Contexto clínico",
        },
      },
      remember: {
        label: "Recordar",
        title: "Activa lo que sabes.",
        body: "Ponte a prueba identificando, explorando y recordando.",
        alt: "Ilustración en acuarela de los pulmones y la tráquea, con cuatro estructuras marcadas con números.",
        caption: "Una lámina estática para rotular. En Explorar, encuentras cada estructura nombrada en el modelo 3D.",
        blank: "Nombra esta estructura",
        answers: "Respuestas",
      },
    },
  },

  collection: {
    eyebrow: "La colección",
    title: "Empieza por cualquier parte del cuerpo.",
    lede: "Explora las estructuras que nos hacen humanos: del ritmo del corazón a la arquitectura del cerebro.",
    explore: "Explorar",
    lines: {
      heart: "La bomba muscular en el centro del sistema circulatorio.",
      brain: "El centro de mando del sistema nervioso.",
      lungs: "Los órganos donde el oxígeno entra en la sangre y el dióxido de carbono sale de ella.",
      liver: "Un motor metabólico con cientos de funciones esenciales.",
      kidneys: "Filtros que regulan la composición del medio interno del cuerpo.",
      eyeball: "Un órgano sensorial que transforma la luz en información visual.",
    },
    more: "También en Explorar: {organs}.",
    note: "Las ilustraciones y los modelos 3D son representaciones educativas simplificadas.",
  },

  explore: {
    title: "No solo mires la anatomía.\nExplórala.",
    lede: "Gírala. Aíslala. Sigue sus estructuras. Mira cómo todo se conecta.",
    cta: "Abrir el atlas de anatomía",
    still: "Un fotograma de Explorar",
    alt: "El corazón 3D en Explorar, visto de frente, con puntos que marcan las estructuras que se pueden seleccionar.",
    caption: "Cada punto del modelo es una estructura que puedes seleccionar para ver su nombre y su función.",
    controlsLabel: "En el visor",
  },

  features: {
    eyebrow: "Dentro del visor",
    title: "El espécimen, desde todos los ángulos.",
    items: {
      rotate: {
        label: "Girar",
        line: "Mira las estructuras desde todos los ángulos.",
        body: "Arrastra para girar el modelo y haz zoom en la parte que estás estudiando.",
        alt: "El corazón 3D girado para mostrar su cara posterior.",
      },
      isolate: {
        label: "Aislar",
        line: "Céntrate en lo que importa.",
        body: "Deja a un lado el entorno y estudia un órgano por sí solo.",
        alt: "El ojo 3D flotando solo, con el nervio óptico saliendo por detrás.",
      },
      section: {
        label: "Corte transversal",
        line: "Comprende lo que hay bajo la superficie.",
        body: "Pasa un plano de corte por el modelo y lee su forma de perfil.",
        alt: "El corazón 3D cortado por la mitad por un plano de corte.",
      },
      compare: {
        label: "Comparar",
        line: "Mira la anatomía a través de sus relaciones.",
        body: "Pon un órgano junto a otro para comparar su función y su escala.",
        alt: "El cerebro y el corazón 3D, uno al lado del otro.",
      },
    },
    note: "Imágenes capturadas del visor 3D de Explorar.",
  },

  story: {
    title: "El cuerpo es un sistema,\nno una colección de diagramas.",
    body: "Corpus te ayuda a pasar de los órganos por separado a las relaciones que hacen funcionar el cuerpo.",
    alt: "Los pulmones y el corazón 3D compuestos juntos tal como se sitúan en el tórax, con la tráquea, ambos pulmones, el corazón y la aorta rotulados.",
    caption: "Corazón y pulmones, compuestos a partir de sus modelos de Explorar. Las posiciones están simplificadas.",
    legendLabel: "Estructuras rotuladas en esta composición",
  },

  practice: {
    eyebrow: "Recuerdo activo",
    title: "Míralo.\nY demuestra que lo sabes.",
    lede: "Convierte la exploración en recuerdo activo con retos de rotulado e identificación anatómica.",
    cta: "Ponte a prueba",
    identify: "Identifica",
    alt: "El cerebro 3D de Explorar con cuatro estructuras marcadas con los números del 1 al 4.",
    caption: "Un fotograma del cuestionario de identificación de Explorar, donde respondes seleccionando la estructura en el modelo.",
  },

  ai: {
    eyebrow: "Lo que viene",
    title: "Una guía para las preguntas\nque los diagramas no responden.",
    lede: "Corpus se está diseñando con una guía de anatomía con IA que podrá explicar estructuras, relacionar conceptos, orientar la exploración y ayudarte a aprender conversando.",
    exampleLabel: "Un intercambio ilustrativo",
    you: "Tú",
    corpus: "Corpus",
    question: "¿Por qué el ventrículo izquierdo es más grueso que el derecho?",
    answer:
      "El ventrículo izquierdo impulsa la sangre por la circulación sistémica, así que debe generar una presión mucho mayor que el ventrículo derecho.",
    status: "En desarrollo",
    disclaimer: "Un ejemplo redactado, no un asistente en funcionamiento. Todavía no hay ninguna guía con la que conversar.",
  },

  languages: {
    eyebrow: "12 idiomas",
    title: "La anatomía en el idioma\nen el que piensas.",
    lede: "Corpus está pensado para estudiantes de todo el mundo, con interfaces multilingües y un vocabulario anatómico común basado en la terminología latina.",
    wallLabel: "Corpus en doce idiomas",
    endonyms: { id: "Bahasa Indonesia" },
    rtlNote: "El árabe se lee de derecha a izquierda, y la interfaz se refleja con él.",
    latinNote: "El nombre latino es el mismo en todos los idiomas.",
  },

  rigor: {
    title: "Lo bastante bello para explorarlo.\nLo bastante preciso para confiar en él.",
    lede: "Corpus combina la narración visual con la terminología anatómica, datos estructurados y contenido educativo con base médica.",
    pillars: {
      accuracy: {
        title: "Precisión anatómica",
        body: "Las estructuras se basan en la terminología anatómica establecida.",
      },
      knowledge: {
        title: "Conocimiento estructurado",
        body: "Cada estructura se vincula con información de contexto.",
      },
      clarity: {
        title: "Claridad visual",
        body: "La anatomía compleja se presenta sin complicaciones innecesarias.",
      },
    },
    entry: {
      label: "Una estructura en Corpus",
      term: "Terminologia Anatomica",
      name: "Nombre",
      organ: "Órgano",
      role: "Función",
    },
    note: "Corpus es una herramienta educativa. No es consejo médico.",
  },

  audience: {
    eyebrow: "Para mentes curiosas",
    title: "Un solo cuerpo.\nMuchas formas de aprenderlo.",
    groups: {
      students: {
        title: "Estudiantes",
        body: "Desarrolla una comprensión espacial en lugar de memorizar etiquetas inconexas.",
        cta: "Explorar como estudiante",
      },
      educators: {
        title: "Docentes",
        body: "Lleva la anatomía al aula con una exploración visual e interactiva.",
        cta: "Para docentes",
      },
      curious: {
        title: "Mentes curiosas",
        body: "Explora el cuerpo humano simplemente porque es una de las cosas más extraordinarias que existen.",
        cta: "Empieza a explorar",
      },
    },
  },

  closing: {
    title: "El cuerpo es una obra maestra.",
    line: "Aprende a verlo.",
    cta: "Explora el cuerpo",
  },
};
