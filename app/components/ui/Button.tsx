import Link from "next/link";
import type { ButtonHTMLAttributes, ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

type Variant = "primary" | "secondary" | "text";
type Size = "md" | "sm";

type Look = {
  variant?: Variant;
  size?: Size;
  /** A trailing arrow that points the reading direction (mirrored in RTL). */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

function classes({ variant = "primary", size = "md", className }: Omit<Look, "children" | "arrow">) {
  return ["ui-button", `ui-button--${variant}`, size === "sm" && "ui-button--sm", className].filter(Boolean).join(" ");
}

function Arrow() {
  return <ArrowRight className="ui-arrow" size={16} strokeWidth={1.75} aria-hidden />;
}

/** A link styled as a button — for navigation, which is almost every CTA. */
export function ButtonLink({
  variant,
  size,
  arrow,
  className,
  children,
  ...link
}: Look & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link className={classes({ variant, size, className })} {...link}>
      {children}
      {arrow && <Arrow />}
    </Link>
  );
}

/** A real button — for actions that do not navigate (form submits, toggles). */
export function Button({
  variant,
  size,
  arrow,
  className,
  children,
  type = "button",
  ...button
}: Look & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">) {
  return (
    <button type={type} className={classes({ variant, size, className })} {...button}>
      {children}
      {arrow && <Arrow />}
    </button>
  );
}
