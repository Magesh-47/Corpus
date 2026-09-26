import type { SiteDictionary } from "..";

export const auth: SiteDictionary["auth"] = {
  meta: {
    signIn: {
      title: "Entrar",
      description: "Entre no Corpus. As contas chegam em breve; o Explorar funciona sem uma.",
    },
    signUp: {
      title: "Criar uma conta",
      description: "Crie uma conta no Corpus. As contas chegam em breve; o Explorar funciona sem uma.",
    },
    forgotPassword: {
      title: "Redefinir sua senha",
      description: "Redefina sua senha do Corpus. As contas chegam em breve; o Explorar funciona sem uma.",
    },
  },

  shell: {
    back: "Voltar ao site",
    disclaimer: "O Corpus serve para aprender anatomia. Não é aconselhamento médico.",
    helpLink: "Ajuda",
  },

  notice: {
    title: "As contas chegam em breve.",
    body: "Você não precisa de uma para aprender. Tudo no Explorar funciona sem conta.",
    action: "Abrir o Explorar",
  },

  fields: {
    name: { label: "Nome" },
    email: { label: "E-mail" },
    password: { label: "Senha" },
    newPassword: { label: "Senha", hint: "Pelo menos {min} caracteres." },
    confirmPassword: { label: "Confirmar senha" },
  },

  passwordToggle: {
    show: "Mostrar",
    hide: "Ocultar",
    showLabel: "Mostrar senha",
    hideLabel: "Ocultar senha",
  },

  errors: {
    summary: "Alguns dados precisam de atenção. Confira as mensagens abaixo de cada campo.",
    nameRequired: "Digite seu nome.",
    emailRequired: "Digite seu endereço de e-mail.",
    emailInvalid: "Digite um e-mail no formato nome@exemplo.com.",
    passwordRequired: "Digite sua senha.",
    passwordTooShort: "Use pelo menos {min} caracteres.",
    confirmRequired: "Digite sua senha novamente.",
    confirmMismatch: "As duas senhas não coincidem.",
  },

  signIn: {
    eyebrow: "Entrar",
    title: "Que bom que você voltou.",
    lede: "Continue explorando o corpo humano.",
    submit: "Entrar",
    busy: "Entrando…",
    forgot: "Esqueceu a senha?",
    switchPrompt: "Primeira vez no Corpus?",
    switchAction: "Criar uma conta",
    unavailable: {
      title: "Ainda não é possível entrar.",
      body: "As contas do Corpus ainda estão sendo construídas, então nada foi enviado nem armazenado. Sua senha foi apagada do formulário.",
    },
  },

  signUp: {
    eyebrow: "Criar uma conta",
    title: "Comece a explorar.",
    lede: "Crie sua conta no Corpus e construa sua prática de anatomia.",
    submit: "Criar conta",
    busy: "Criando conta…",
    switchPrompt: "Já tem uma conta?",
    switchAction: "Entrar",
    unavailable: {
      title: "Ainda não é possível criar contas.",
      body: "As contas do Corpus ainda estão sendo construídas, então nada foi enviado nem armazenado. Suas senhas foram apagadas do formulário.",
    },
  },

  forgotPassword: {
    eyebrow: "Esqueci a senha",
    title: "Redefina sua senha.",
    lede: "Digite seu e-mail e vamos ajudar você a voltar ao Corpus.",
    submit: "Enviar link",
    busy: "Enviando…",
    switchPrompt: "Lembrou?",
    switchAction: "Voltar para o login",
    unavailable: {
      title: "Ainda não é possível redefinir a senha.",
      body: "As contas do Corpus ainda estão sendo construídas, então não há senha para redefinir. Nenhum e-mail foi enviado e nada foi armazenado.",
    },
  },

  status: {
    exploreAction: "Continuar para o Explorar",
  },

  plates: {
    label: "Prancha anatômica",
    marked: "Estrutura marcada: {structure}",
    note: "Uma ilustração educacional simplificada.",
    signIn: {
      number: "Prancha I",
      view: "Vista externa",
      alt: "Estudo em aquarela do coração humano, com a aorta e os grandes vasos subindo acima dele",
    },
    signUp: {
      number: "Prancha II",
      view: "Vista lateral",
      alt: "Estudo em aquarela do cérebro humano visto de lado, com o cerebelo e o tronco encefálico abaixo",
    },
    forgotPassword: {
      number: "Prancha III",
      view: "Vista anterior",
      alt: "Estudo em aquarela dos pulmões, com a traqueia se dividindo em vias aéreas ramificadas",
    },
  },
};
