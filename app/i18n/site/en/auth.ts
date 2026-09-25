/**
 * Copy for the authentication pages. Corpus has no account system yet, so
 * every page says so plainly and nothing here implies a sign-in succeeded.
 * Organ names, Latin and structure labels on the plates come from the organ
 * dictionary, so they are not repeated here.
 */
export const auth = {
  meta: {
    signIn: { title: "Sign in", description: "Sign in to Corpus. Accounts are coming soon; Explore works without one." },
    signUp: {
      title: "Create an account",
      description: "Create a Corpus account. Accounts are coming soon; Explore works without one.",
    },
    forgotPassword: {
      title: "Reset your password",
      description: "Reset your Corpus password. Accounts are coming soon; Explore works without one.",
    },
  },

  shell: {
    back: "Back to the site",
    helpPrompt: "Questions about Corpus?",
    helpLink: "Visit Help",
  },

  notice: {
    title: "Accounts are coming soon.",
    body: "You don’t need one to learn. Everything in Explore works without an account.",
    action: "Open Explore",
  },

  fields: {
    name: { label: "Name" },
    email: { label: "Email" },
    password: { label: "Password" },
    newPassword: { label: "Password", hint: "At least {min} characters." },
    confirmPassword: { label: "Confirm password" },
  },

  passwordToggle: {
    show: "Show",
    hide: "Hide",
    showLabel: "Show password",
    hideLabel: "Hide password",
  },

  errors: {
    summary: "Some details need attention. Check the messages under each field.",
    nameRequired: "Enter your name.",
    emailRequired: "Enter your email address.",
    emailInvalid: "Enter an email address in the format name@example.com.",
    passwordRequired: "Enter your password.",
    passwordTooShort: "Use at least {min} characters.",
    confirmRequired: "Enter your password again.",
    confirmMismatch: "The two passwords don’t match.",
  },

  signIn: {
    eyebrow: "Sign in",
    title: "Welcome back.",
    lede: "Continue exploring the human body.",
    submit: "Sign in",
    busy: "Signing in…",
    forgot: "Forgot password?",
    switchPrompt: "New to Corpus?",
    switchAction: "Create an account",
    unavailable: {
      title: "Sign-in isn’t available yet.",
      body: "Corpus accounts are still being built, so nothing was sent or stored. Your password has been cleared from the form.",
    },
  },

  signUp: {
    eyebrow: "Create an account",
    title: "Start exploring.",
    lede: "Create your Corpus account and build your anatomy practice.",
    submit: "Create account",
    busy: "Creating account…",
    switchPrompt: "Already have an account?",
    switchAction: "Sign in",
    unavailable: {
      title: "Accounts can’t be created yet.",
      body: "Corpus accounts are still being built, so nothing was sent or stored. Your passwords have been cleared from the form.",
    },
  },

  forgotPassword: {
    eyebrow: "Forgot password",
    title: "Reset your password.",
    lede: "Enter your email and we’ll help you get back into Corpus.",
    submit: "Send reset link",
    busy: "Sending…",
    switchPrompt: "Remembered it?",
    switchAction: "Back to sign in",
    unavailable: {
      title: "Password reset isn’t available yet.",
      body: "Corpus accounts are still being built, so there is no password to reset. No email was sent and nothing was stored.",
    },
  },

  status: {
    exploreAction: "Continue to Explore",
  },

  plates: {
    label: "Anatomical plate",
    marked: "Marked: {structure}",
    note: "A simplified educational illustration.",
    signIn: {
      number: "Plate I",
      view: "External view",
      alt: "Watercolour study of the human heart, with the aorta and great vessels rising above it",
    },
    signUp: {
      number: "Plate II",
      view: "Lateral view",
      alt: "Watercolour study of the human brain seen from the side, with the cerebellum and brainstem beneath it",
    },
    forgotPassword: {
      number: "Plate III",
      view: "Anterior view",
      alt: "Watercolour study of the lungs, with the trachea dividing into branching airways",
    },
  },
};
