import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievementArchive } from "@/lib/content";
import styles from "./AchievementsArchive.module.css";

export function AchievementsArchive(): ReactNode {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading eyebrow="Chronik" title="Alle Erfolge im Überblick" />

        {achievementArchive.length > 0 ? (
          <ul className={styles.list}>
            {achievementArchive.map((entry) => (
              <li key={entry.id} className={styles.entry}>
                <span className={styles.year}>{entry.year}</span>
                <span className={styles.entryTitle}>{entry.title}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.placeholder}>
            Die vollständige Erfolgschronik seit Schulgründung ergänzen wir
            hier in Kürze.
          </p>
        )}
      </Container>
    </section>
  );
}
