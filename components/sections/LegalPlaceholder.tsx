import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import styles from "./LegalPlaceholder.module.css";

export type LegalPlaceholderProps = {
  readonly title: string;
  readonly intro: string;
};

/** Gerüst für Impressum/Datenschutz, bis die rechtlich geprüften Texte vorliegen. */
export function LegalPlaceholder({ title, intro }: LegalPlaceholderProps): ReactNode {
  return (
    <section className={styles.section}>
      <Container narrow as="article" className={styles.article}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.placeholder}>{intro}</p>
      </Container>
    </section>
  );
}
