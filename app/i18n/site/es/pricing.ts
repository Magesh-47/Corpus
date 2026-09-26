import type { SiteDictionary } from "..";

export const pricing: SiteDictionary["pricing"] = {
  meta: {
    title: "Precios de Corpus — Aprendizaje de anatomía",
    description:
      "Explora gratis la anatomía esencial en 3D con Corpus, sin necesidad de cuenta. Corpus Plus y Educación están en desarrollo y aún no tienen precio.",
  },

  hero: {
    eyebrow: "Precios",
    titleLead: "Explora el cuerpo.",
    titleRest: "Elige hasta dónde quieres llegar.",
    lede: "Hoy puedes explorar gratis la anatomía esencial, sin cuenta y sin pagar nada. Corpus Plus y Educación siguen en desarrollo, así que ninguno tiene precio todavía.",
    primary: "Empieza a explorar",
    secondary: "Compara los planes",
    plate: {
      label: "Lámina: {organ}, en corte",
      alt: "Un bloque de piel en acuarela, cortado para mostrar sus capas: la superficie, la dermis con folículos pilosos, glándulas y vasos, y la grasa amarilla de debajo",
      caption: "De la superficie a la grasa profunda. Las mismas capas están rotuladas en el modelo 3D, que puedes explorar gratis.",
    },
  },

  plans: {
    title: "Los planes",
    summary: "Hoy hay un plan disponible. Otros dos están en desarrollo.",
    numberLabel: "Plan {number}",
    learnMore: "Más información sobre {plan}",
    items: {
      free: {
        name: "Gratis",
        tagline: "Explora la anatomía esencial.",
        price: "Sin coste",
        priceNote: "Sin necesidad de cuenta",
        description: "La experiencia completa de Explorar tal como es hoy, abierta a cualquiera con un navegador moderno.",
        listHeading: "Incluido hoy",
        list: {
          organs: "{organCount} órganos en 3D, del corazón y el cerebro a la piel",
          viewer: "Girar y hacer zoom, con las vistas Aislar, Corte transversal y Capas",
          hotspots: "{structureCount} estructuras rotuladas, cada una con su término latino",
          cards: "Tarjetas de aprendizaje sobre tejido, función, enfermedades y comparación",
          quiz: "Un cuestionario de identificación que te pide encontrar estructuras en el modelo",
          languages: "Descripciones de órganos en {languageCount} idiomas",
        },
        cta: "Empieza a explorar",
      },
      plus: {
        name: "Corpus Plus",
        tagline: "Profundiza con futuras funciones de aprendizaje y personalización.",
        price: "Aún sin precio",
        priceNote: "En desarrollo",
        description: "Previsto para quienes quieran ir más allá de la colección esencial y volver a lo que han estudiado.",
        listHeading: "Lo que estamos explorando",
        list: {
          depth: "Más partes del cuerpo, además de los órganos disponibles hoy",
          study: "Herramientas que te ayuden a practicar y recordar lo que exploras",
          guidance: "Explicaciones guiadas junto a los modelos 3D",
          progress: "Una forma de volver a lo que ya has estudiado",
        },
        cta: "Más información",
      },
      education: {
        name: "Educación",
        tagline: "Lleva Corpus a entornos de enseñanza y aprendizaje.",
        price: "Aún sin precio",
        priceNote: "En desarrollo",
        description: "Previsto para docentes y centros educativos que quieran llevar Corpus a una clase o a un curso.",
        listHeading: "Lo que estamos explorando",
        list: {
          classroom: "Formas de usar Corpus con toda una clase a la vez",
          teaching: "Apoyo para preparar e impartir clases de anatomía",
          practice: "Ejercicios que un grupo de estudiantes pueda hacer en conjunto",
        },
        cta: "Más información",
      },
    },
    plannedNote: "Los planes en desarrollo son direcciones, no compromisos. Sus funciones, plazos y precios no están decididos, y nada de esta página se puede comprar.",
  },

  comparison: {
    eyebrow: "Comparar",
    title: "Qué incluye cada plan.",
    lede: "La columna Gratis describe Corpus tal como es hoy. Las otras dos describen planes en desarrollo y pueden cambiar.",
    caption: "Funciones por plan. Gratis está disponible ya; Corpus Plus y Educación están en desarrollo.",
    featureHeading: "Función",
    status: {
      available: "Disponible ya",
      planned: "Previsto",
      undecided: "Sin decidir",
      unavailable: "No disponible",
      otherPlan: "No incluido en este plan",
    },
    rows: {
      exploration: {
        name: "Exploración anatómica en 3D",
        free: "Girar, zoom, aislar, corte transversal y capas",
        plus: "Todo lo de Gratis",
        education: "Todo lo de Gratis",
      },
      library: {
        name: "Biblioteca de órganos",
        free: "{organCount} órganos, con búsqueda",
        plus: "Más partes del cuerpo",
        education: "Todo lo de Gratis",
      },
      structures: {
        name: "Estructuras anatómicas",
        free: "{structureCount} estructuras rotuladas con términos latinos",
        plus: "Todo lo de Gratis",
        education: "Todo lo de Gratis",
      },
      learning: {
        name: "Aprendizaje interactivo",
        free: "Tarjetas de aprendizaje sobre tejido, función, enfermedades y comparación",
        plus: "Herramientas de estudio más completas",
        education: "Material para usar en clase",
      },
      practice: {
        name: "Práctica",
        free: "Un cuestionario de identificación en el modelo 3D",
        plus: "Más formas de practicar",
        education: "Práctica para toda una clase",
      },
      guidance: {
        name: "Orientación con IA",
        free: "Corpus no tiene funciones de IA por ahora",
        plus: "Explicaciones guiadas junto a los modelos",
        education: "Aún no decidido para este plan",
      },
      progress: {
        name: "Progreso personalizado",
        free: "El progreso no se guarda entre visitas",
        plus: "Una forma de volver a lo que has estudiado",
        education: "Aún no decidido para este plan",
      },
      educators: {
        name: "Herramientas para docentes",
        free: "Hoy no hay herramientas para docentes",
        plus: "Previstas en el plan Educación",
        education: "Apoyo para preparar e impartir clases",
      },
    },
  },

  collection: {
    eyebrow: "Incluido en Gratis",
    title: "La colección gratuita, abierta a todos.",
    lede: "Cada órgano tiene un modelo 3D, una lámina ilustrada y estructuras rotuladas. Elige uno para abrirlo en Explorar.",
    plateLabel: "Lámina {number}",
    structures: "Estructuras rotuladas: {count}",
    openOrgan: "{organ}: abrir en Explorar",
    footnote: "Los modelos y las ilustraciones son representaciones educativas simplificadas, no referencias clínicas, y nada de lo que hay en Corpus es consejo médico.",
  },

  faq: {
    eyebrow: "Preguntas",
    title: "Preguntas claras, respuestas claras.",
    items: {
      account: {
        q: "¿Necesito una cuenta?",
        a: "No. Puedes abrir Explorar y empezar enseguida, sin iniciar sesión.",
      },
      payments: {
        q: "¿Puedo pagar ya Corpus Plus o Educación?",
        a: "No. Ninguno de los dos planes está disponible, no se ha fijado ningún precio y hoy Corpus no acepta pagos de ningún tipo. Cuando un plan esté listo, lo describiremos aquí.",
      },
      classroom: {
        q: "¿Puedo usar Corpus en clase hoy?",
        a: "Sí. Explorar es gratuito y no necesita cuenta, así que tus estudiantes pueden abrirlo en un navegador moderno. Las herramientas para el aula y para docentes aún no están disponibles.",
      },
    },
  },

  closing: {
    eyebrow: "Comienza",
    titleLead: "¿No sabes por dónde empezar?",
    titleRest: "Explora la anatomía gratis.",
    cta: "Explora Corpus",
    imageAlt: "Una acuarela de piel al microscopio: la epidermis rosada y estratificada sobre el tejido más laxo y ondulado de la dermis",
    caption: "{organ} al microscopio: {tissue}",
  },
};
