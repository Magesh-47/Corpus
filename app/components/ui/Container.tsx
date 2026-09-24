import type { ReactNode } from "react";

type Size = "narrow" | "default" | "wide";

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  id,
  children,
}: {
  as?: "div" | "section" | "header" | "footer" | "article" | "aside" | "nav";
  size?: Size;
  className?: string;
  id?: string;
  children: ReactNode;
}) {
  const classes = ["ui-container", size !== "default" && `ui-container--${size}`, className].filter(Boolean).join(" ");
  return (
    <Tag id={id} className={classes}>
      {children}
    </Tag>
  );
}
