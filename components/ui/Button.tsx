import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

export type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Link-Button im Étoile-Stil. Interne Pfade (z. B. "/kontakt") nutzen
 * next/link für Prefetching, externe Aktionen (tel:, mailto:) bleiben <a>.
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

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
