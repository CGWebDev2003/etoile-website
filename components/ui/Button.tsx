import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

export type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Link-Button im Étoile-Stil. Wird als <a> gerendert, da die Aktionen
 * Navigation (Anker, tel:, mailto:) sind.
 */
export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...rest
}: ButtonProps): ReactNode {
  const classes = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
