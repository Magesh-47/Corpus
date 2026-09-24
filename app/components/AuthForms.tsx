"use client";

import { useState } from "react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

function emailIsValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailIsValid(email)) {
      setSubmitted(false);
      setError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 8) {
      setSubmitted(false);
      setError("Password must be at least 8 characters long.");
      return;
    }
    setError("");
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Email</span>
        <input type="email" name="email" value={email} autoComplete="email" onChange={(event) => setEmail(event.target.value)} aria-invalid={Boolean(error)} />
      </label>
      <label>
        <span>Password</span>
        <div className="password-field">
          <input type={showPassword ? "text" : "password"} name="password" value={password} autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} aria-invalid={Boolean(error)} />
          <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)}>
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </label>
      {error ? <p className="auth-error">{error}</p> : null}
      {submitted ? <p className="auth-success">Validation complete. Connect this form to your backend before enabling real sign-in.</p> : null}
      <button type="submit" className="auth-primary-button" disabled={pending}>
        {pending ? <><LoaderCircle size={16} className="spinner" /> Signing in</> : "Sign in"}
      </button>
      <div className="auth-secondary-row">
        <a href="/auth/forgot-password">Forgot password</a>
        <a href="/auth/signup">Create account</a>
      </div>
    </form>
  );
}

export function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      setSubmitted(false);
      return;
    }
    if (!emailIsValid(email)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSubmitted(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSubmitted(false);
      return;
    }
    setError("");
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Name</span>
        <input type="text" name="name" value={name} autoComplete="name" onChange={(event) => setName(event.target.value)} />
      </label>
      <label>
        <span>Email</span>
        <input type="email" name="email" value={email} autoComplete="email" onChange={(event) => setEmail(event.target.value)} />
      </label>
      <label>
        <span>Password</span>
        <div className="password-field">
          <input type={showPassword ? "text" : "password"} name="password" value={password} autoComplete="new-password" onChange={(event) => setPassword(event.target.value)} />
          <button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)}>
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </label>
      <label>
        <span>Confirm password</span>
        <input type={showPassword ? "text" : "password"} name="confirmPassword" value={confirmPassword} autoComplete="new-password" onChange={(event) => setConfirmPassword(event.target.value)} />
      </label>
      {error ? <p className="auth-error">{error}</p> : null}
      {submitted ? <p className="auth-success">This UI is ready for backend hookup. No account is created until the provider is connected.</p> : null}
      <button type="submit" className="auth-primary-button" disabled={pending}>
        {pending ? <><LoaderCircle size={16} className="spinner" /> Creating account</> : "Create account"}
      </button>
    </form>
  );
}

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailIsValid(email)) {
      setError("Please enter a valid email address.");
      setSubmitted(false);
      return;
    }
    setError("");
    setPending(true);
    window.setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <form className="auth-form" onSubmit={onSubmit} noValidate>
      <label>
        <span>Email</span>
        <input type="email" name="email" value={email} autoComplete="email" onChange={(event) => setEmail(event.target.value)} />
      </label>
      {error ? <p className="auth-error">{error}</p> : null}
      {submitted ? <p className="auth-success">Reset instructions are prepared in the UI. Connect your password-reset backend to send them.</p> : null}
      <button type="submit" className="auth-primary-button" disabled={pending}>
        {pending ? <><LoaderCircle size={16} className="spinner" /> Sending reset link</> : "Send reset link"}
      </button>
    </form>
  );
}
