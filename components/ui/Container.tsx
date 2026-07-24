import type { ElementType, ReactNode } from "react";
import styles from "./Container.module.css";

export type ContainerProps = {
  children: ReactNode;
  /** Semantisches Wrapper-Element (default: div). */
  as?: ElementType;
  className?: string;
  /** Schmalere Variante für Textblöcke. */
  narrow?: boolean;
};

export function Container({
  children,
  as: Tag = "div",
  className,
  narrow = false,
}: ContainerProps): ReactNode {
  const classes = [styles.container, narrow ? styles.narrow : "", className]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
