import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import styles from "./LegalPage.module.css";

export type LegalPageProps = {
  readonly title: string;
  readonly children: ReactNode;
  /** Kurzer Hinweis für Abschnitte, die noch nicht final ausformuliert sind. */
  readonly pendingNote?: string;
};

export function LegalPage({ title, children, pendingNote }: LegalPageProps): ReactNode {
  return (
    <section className={styles.section}>
      <Container narrow as="article" className={styles.article}>
        <h1 className={styles.title}>{title}</h1>
        {children}
        {pendingNote ? <p className={styles.placeholder}>{pendingNote}</p> : null}
      </Container>
    </section>
  );
}
