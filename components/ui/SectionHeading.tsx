import type { ReactNode } from "react";
import styles from "./SectionHeading.module.css";

export type SectionHeadingProps = {
  /** Handschriftlicher Akzenttext oberhalb des Titels. */
  eyebrow: string;
  title: string;
  /** Ausrichtung des Blocks. */
  align?: "center" | "start";
  /** Helle Variante für dunkle/farbige Hintergründe. */
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "default",
}: SectionHeadingProps): ReactNode {
  const classes = [
    styles.heading,
    align === "center" ? styles.center : styles.start,
    tone === "light" ? styles.light : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <span className={styles.eyebrow} aria-hidden="true">
        {eyebrow}
      </span>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.rule} aria-hidden="true" />
    </div>
  );
}
