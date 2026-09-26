import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: {
      title: "Iniciar sesión",
      description: "Inicia sesión en Corpus. Las cuentas llegarán próximamente; Explorar funciona sin una.",
    },
    signUp: {
      title: "Crear una cuenta",
      description: "Crea una cuenta de Corpus. Las cuentas llegarán próximamente; Explorar funciona sin una.",
    },
    forgotPassword: {
      title: "Restablecer la contraseña",
      description: "Restablece tu contraseña de Corpus. Las cuentas llegarán próximamente; Explorar funciona sin una.",
    },
  },

  shell: {
    back: "Volver al sitio",
    disclaimer: "Corpus sirve para aprender anatomía. No es consejo médico.",
    helpLink: "Ayuda",
  },

  notice: {
    title: "Las cuentas llegarán próximamente.",
    body: "No necesitas una para aprender. Todo lo que hay en Explorar funciona sin cuenta.",
    action: "Abrir Explorar",
  },

  fields: {
    name: { label: "Nombre" },
    email: { label: "Correo electrónico" },
    password: { label: "Contraseña" },
    newPassword: { label: "Contraseña", hint: "Al menos {min} caracteres." },
    confirmPassword: { label: "Confirmar contraseña" },
  },

  passwordToggle: {
    show: "Mostrar",
    hide: "Ocultar",
    showLabel: "Mostrar contraseña",
    hideLabel: "Ocultar contraseña",
  },

  errors: {
    summary: "Algunos datos necesitan revisión. Consulta los mensajes bajo cada campo.",
    nameRequired: "Escribe tu nombre.",
    emailRequired: "Escribe tu dirección de correo electrónico.",
    emailInvalid: "Escribe una dirección de correo con el formato nombre@ejemplo.com.",
    passwordRequired: "Escribe tu contraseña.",
    passwordTooShort: "Usa al menos {min} caracteres.",
    confirmRequired: "Vuelve a escribir tu contraseña.",
    confirmMismatch: "Las dos contraseñas no coinciden.",
  },

  signIn: {
    eyebrow: "Iniciar sesión",
    title: "Hola de nuevo.",
    lede: "Sigue explorando el cuerpo humano.",
    submit: "Iniciar sesión",
    busy: "Iniciando sesión…",
    forgot: "¿Has olvidado tu contraseña?",
    switchPrompt: "¿Es tu primera vez en Corpus?",
    switchAction: "Crear una cuenta",
    unavailable: {
      title: "Todavía no se puede iniciar sesión.",
      body: "Las cuentas de Corpus aún se están construyendo, así que no se ha enviado ni guardado nada. Tu contraseña se ha borrado del formulario.",
    },
  },

  signUp: {
    eyebrow: "Crear una cuenta",
    title: "Empieza a explorar.",
    lede: "Crea tu cuenta de Corpus y da forma a tu práctica de anatomía.",
    submit: "Crear cuenta",
    busy: "Creando la cuenta…",
    switchPrompt: "¿Ya tienes una cuenta?",
    switchAction: "Iniciar sesión",
    unavailable: {
      title: "Todavía no se pueden crear cuentas.",
      body: "Las cuentas de Corpus aún se están construyendo, así que no se ha enviado ni guardado nada. Tus contraseñas se han borrado del formulario.",
    },
  },

  forgotPassword: {
    eyebrow: "Contraseña olvidada",
    title: "Restablece tu contraseña.",
    lede: "Escribe tu correo electrónico y te ayudaremos a volver a Corpus.",
    submit: "Enviar enlace",
    busy: "Enviando…",
    switchPrompt: "¿Ya la recuerdas?",
    switchAction: "Volver a iniciar sesión",
    unavailable: {
      title: "Todavía no se puede restablecer la contraseña.",
      body: "Las cuentas de Corpus aún se están construyendo, así que no hay ninguna contraseña que restablecer. No se ha enviado ningún correo ni se ha guardado nada.",
    },
  },

  status: {
    exploreAction: "Ir a Explorar",
  },

  plates: {
    label: "Lámina anatómica",
    marked: "Estructura señalada: {structure}",
    note: "Una ilustración educativa simplificada.",
    signIn: {
      number: "Lámina I",
      view: "Vista externa",
      alt: "Estudio en acuarela del corazón humano, con la aorta y los grandes vasos elevándose por encima",
    },
    signUp: {
      number: "Lámina II",
      view: "Vista lateral",
      alt: "Estudio en acuarela del cerebro humano visto de perfil, con el cerebelo y el tronco del encéfalo debajo",
    },
    forgotPassword: {
      number: "Lámina III",
      view: "Vista anterior",
      alt: "Estudio en acuarela de los pulmones, con la tráquea dividiéndose en vías respiratorias ramificadas",
    },
  },
};
