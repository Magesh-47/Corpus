import type { SiteDictionary } from "..";

export const help: SiteDictionary["help"] = {
  meta: {
    title: "Ayuda de Corpus — Guía para aprender anatomía",
    description:
      "Cómo usar Corpus: gira y amplía los modelos 3D de los órganos, consulta sus estructuras, ponte a prueba, cambia de idioma y encuentra respuestas claras a las preguntas frecuentes.",
  },

  hero: {
    eyebrow: "Ayuda",
    title: "Oriéntate en Corpus.",
    plate: {
      alt: "Estudio en acuarela de un ojo humano, con los músculos que lo mueven y el nervio óptico detrás",
    },
  },

  search: {
    label: "¿Qué estás buscando?",
    placeholder: "Prueba con «zoom» o «puntos»",
    clear: "Borrar búsqueda",
    resultsLabel: "Resultados de búsqueda",
    count: "Resultados: {count}",
    more: "Se muestran los {shown} primeros. Todas las preguntas que coinciden aparecen también más abajo.",
    kind: {
      question: "Pregunta",
      guide: "Guía",
    },
    empty: {
      title: "Nada coincide con «{query}».",
      body: "Prueba con una palabra más corta o distinta, o consulta las guías de abajo.",
    },
    faqStatus: "{count} de {total} preguntas coinciden con tu búsqueda.",
    faqEmpty: "Ninguna pregunta coincide con tu búsqueda.",
    showAll: "Mostrar todas las preguntas",
  },

  categories: {
    heading: "Navega por temas",
    items: {
      gettingStarted: { label: "Primeros pasos", line: "Aprende lo básico." },
      viewer: { label: "Visor 3D", line: "Aprende a moverte por la anatomía." },
      exploring: { label: "Exploración", line: "Encuentra órganos y estructuras." },
      practice: { label: "Práctica", line: "Entiende la identificación y el recuerdo activo." },
      languages: { label: "Idiomas", line: "Cambia el idioma de Corpus." },
      account: { label: "Cuenta", line: "Gestiona tu cuenta." },
    },
  },

  gettingStarted: {
    title: "Tus primeros minutos",
    intro: "Corpus funciona en tu navegador web. No hay nada que instalar ni ninguna cuenta que crear.",
    steps: {
      open: {
        title: "Abre Explorar",
        body: "Selecciona {explore} en la navegación principal. Primero se muestra el corazón.",
      },
      choose: {
        title: "Elige un órgano",
        body: "Escoge un órgano en la biblioteca, junto al modelo. En el móvil, abre la biblioteca desde la parte superior de la pantalla.",
      },
      look: {
        title: "Mira de cerca",
        body: "Arrastra para girar el modelo, acércate con el zoom y selecciona los puntos para leer el nombre de cada estructura.",
      },
      test: {
        title: "Ponte a prueba",
        body: "Cuando quieras, empieza el cuestionario y encuentra cada estructura por su nombre.",
      },
    },
    cta: "Abrir Explorar",
  },

  viewer: {
    title: "Gira, amplía y lee un modelo",
    intro: "Cada órgano es un modelo 3D que puedes examinar por todos sus lados, con el ratón, una pantalla táctil o el teclado.",
    columns: {
      action: "Acción",
      pointer: "Ratón o panel táctil",
      touch: "Pantalla táctil",
      keyboard: "Teclado",
    },
    controls: {
      rotate: {
        action: "Girar el modelo",
        pointer: "Arrastra sobre el modelo",
        touch: "Arrastra con un dedo",
        keyboard: "Flechas izquierda y derecha",
      },
      zoom: {
        action: "Acercar y alejar",
        pointer: "Desplaza o usa la herramienta {zoom}",
        touch: "Pellizca con dos dedos",
        keyboard: "Teclas más y menos",
      },
      read: {
        action: "Leer una estructura",
        pointer: "Haz clic en un punto",
        touch: "Toca un punto",
        keyboard: "Los lectores de pantalla pueden leer todas las estructuras en una lista junto al modelo.",
      },
      close: {
        action: "Cerrar una etiqueta",
        pointer: "Vuelve a hacer clic en el punto o en cualquier otro sitio",
        touch: "Toca el botón de cerrar de la etiqueta",
        keyboard: "Tecla Escape",
      },
    },
    keyboardNote: "Los controles de teclado funcionan cuando el modelo tiene el foco: pulsa Tab hasta que quede seleccionado.",
    toolsTitle: "Las herramientas del visor",
    tools: {
      rotate: "Inicia o detiene el giro automático lento. El interruptor «{autoRotate}» hace lo mismo.",
      zoom: "Acerca la vista un paso hacia el modelo.",
      isolate: "Atenúa el pedestal para que el órgano quede solo.",
      section: "Corta el modelo para mostrar una vista de su interior.",
      layers: "Muestra el modelo en modo alámbrico y deja ver la malla de la que está hecho.",
      compare: "Compara la función principal y el tamaño del órgano con los de un segundo órgano.",
      reset: "Devuelve el modelo a su vista inicial y cierra cualquier etiqueta abierta.",
    },
    trouble:
      "Si un modelo no aparece, tu navegador necesita gráficos 3D (WebGL). Actualiza el navegador, comprueba que la aceleración por hardware esté activada y vuelve a cargar la página.",
  },

  exploring: {
    title: "Órganos, datos y tarjetas de aprendizaje",
    intro: "Corpus incluye {count} órganos. Cada uno se abre con su modelo 3D en el centro y sus datos al lado.",
    parts: {
      library: {
        title: "La biblioteca de órganos",
        body: "Enumera todos los órganos con su sistema corporal. Escribe en el cuadro de búsqueda de la parte superior de Explorar para filtrarla.",
      },
      panel: {
        title: "El panel de información",
        body: "Indica el tamaño, el peso, la ubicación, la irrigación y la función del órgano, además de una nota médica y un dato memorable.",
      },
      cards: {
        title: "Las tarjetas de aprendizaje",
        body: "Abren el tejido microscópico del órgano, una comparación, una breve animación, las enfermedades frecuentes y el lugar que ocupa en el cuerpo.",
      },
    },
    catalogueTitle: "Abre un órgano directamente",
    catalogueLink: "{organ}: abrir en Explorar",
    clinical:
      "Las notas clínicas muestran por qué importa la anatomía. No sirven para diagnosticar ni tratar a nadie. Si te preocupa algo de tu salud, consulta a un médico.",
  },

  practice: {
    title: "Ponte a prueba en el modelo",
    intro: "La práctica tiene lugar en el propio modelo. El cuestionario de identificación te pide que encuentres cada estructura nombrada del órgano que estás viendo.",
    steps: {
      start: "Abre un órgano y selecciona «{quiz}». El modelo deja de girar, así que los puntos se quedan quietos.",
      find: "Corpus nombra una estructura cada vez. Haz clic o toca el punto que creas que le corresponde.",
      feedback: "Si aciertas, pasas a la siguiente. Si fallas, Corpus te muestra qué estructura elegiste y marca la correcta.",
      finish: "Cada estructura aparece una sola vez, en un orden nuevo en cada ronda. Al final ves tu puntuación.",
    },
    note: "Las puntuaciones del cuestionario no se guardan. Se borran al salir de la página o al elegir otro órgano.",
    exampleCaption: "Una pregunta de ejemplo del cuestionario del corazón, tal como aparece sobre el modelo.",
  },

  languages: {
    title: "Corpus en tu idioma",
    intro: "Corpus está disponible en {count} idiomas. En Explorar, los nombres de los órganos, las descripciones, los rótulos de las estructuras y los controles están traducidos a todos ellos.",
    switchBody:
      "Elige un idioma al pie de cualquier página o en el menú de idioma de la parte superior de Explorar. Seguirás en la página que estabas leyendo.",
    rtl: "El árabe se lee de derecha a izquierda, y todo el diseño se refleja en consecuencia. Las páginas que aún no están traducidas aparecen en inglés.",
    listLabel: "Idiomas disponibles",
    current: "Idioma actual",
  },

  account: {
    title: "Las cuentas llegarán próximamente",
    body: "Los formularios de inicio de sesión, registro y restablecimiento de contraseña ya están creados, pero las cuentas todavía no existen. Los formularios lo indican, y no se envía nada de lo que escribas.",
    saved: "No necesitas una cuenta: todo lo que hay en Explorar funciona sin ella. Nada de lo que hagas se guarda entre visitas.",
    cta: "Empieza a explorar",
  },

  faqHeading: "Preguntas frecuentes",
  faq: {
    whatIs: {
      q: "¿Qué es Corpus?",
      a: "Corpus es un atlas de anatomía interactivo. Exploras modelos 3D de órganos humanos, lees las estructuras nombradas que contienen y te pones a prueba sobre la marcha.",
    },
    exploreOrgan: {
      q: "¿Cómo exploro un órgano?",
      a: "Abre Explorar y elige un órgano de la biblioteca. Gira el modelo, selecciona los puntos para leer cada estructura y abre las tarjetas que hay bajo el visor para profundizar.",
    },
    rotate: {
      q: "¿Cómo giro un modelo?",
      a: "Arrastra el modelo con el ratón o con un dedo. Con el teclado, pulsa Tab hasta que el modelo tenga el foco y usa las flechas izquierda y derecha. Selecciona {reset} para volver a la vista inicial.",
    },
    zoom: {
      q: "¿Cómo hago zoom?",
      a: "Usa la rueda del ratón o el panel táctil, pellizca con dos dedos en una pantalla táctil o selecciona la herramienta {zoom}. Las teclas más y menos también funcionan cuando el modelo tiene el foco.",
    },
    hotspots: {
      q: "¿Qué son los puntos interactivos?",
      a: "Los puntos interactivos son los puntos que ves en el modelo. Cada uno marca una estructura: selecciona uno para ver su nombre y una breve descripción.",
    },
    isolate: {
      q: "¿Qué hace «Aislar»?",
      a: "La herramienta {isolate} atenúa el pedestal para que el órgano se muestre solo. Selecciónala de nuevo para que vuelva el pedestal.",
    },
    languages: {
      q: "¿Qué idiomas están disponibles?",
      a: "Corpus está disponible en {count} idiomas: {list}.",
    },
    mobile: {
      q: "¿Funciona Corpus en el móvil?",
      a: "Sí, en un navegador web moderno, tanto en teléfonos como en tabletas. Arrastra con un dedo para girar un modelo, pellizca para hacer zoom y toca un punto para leerlo.",
    },
    medical: {
      q: "¿Corpus es consejo médico?",
      a: "No. Corpus sirve para aprender anatomía. No ofrece consejo médico, diagnóstico ni tratamiento. Si te preocupa tu salud, consulta a un médico. En caso de emergencia, llama al número de emergencias de tu zona.",
    },
    accuracy: {
      q: "¿Qué precisión tiene la anatomía?",
      a: "Los modelos y las ilustraciones son representaciones educativas simplificadas. Muestran la forma general de cada órgano y dónde se sitúan sus estructuras principales, no todos los detalles. Los nombres de las estructuras siguen la Terminologia Anatomica, el estándar internacional.",
    },
    createAccount: {
      q: "¿Cómo creo una cuenta?",
      a: "Las cuentas llegarán próximamente. El formulario de registro ya está creado, pero todavía no crea ninguna cuenta y no se envía nada de lo que escribas. No necesitas una cuenta para usar Explorar.",
    },
    resetPassword: {
      q: "¿Cómo restablezco mi contraseña?",
      a: "Todavía no hay cuentas, así que no hay ninguna contraseña que restablecer. El formulario de restablecimiento está preparado para más adelante; hoy no envía ningún correo.",
    },
  },
  faqLinks: {
    explore: "Abrir Explorar",
    report: "Informar de un error",
  },

  contact: {
    title: "¿Aún necesitas ayuda?",
    body: "Estamos construyendo Corpus con cuidado. Si algo no funciona como esperabas, avísanos.",
    cta: "Contactar con soporte",
    ctaDescription: "Abre en una pestaña nueva el gestor público de incidencias del proyecto en GitHub.",
    note: "Los informes son públicos y requieren una cuenta gratuita de GitHub. No incluyas información personal ni de salud.",
  },
};
