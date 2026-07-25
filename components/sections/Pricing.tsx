import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pricing } from "@/lib/content";
import styles from "./Pricing.module.css";

export function Pricing(): ReactNode {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading eyebrow="Preise" title="Unsere Preisübersicht" />

        {pricing.length > 0 ? (
          <div className={styles.groups}>
            {pricing.map((group) => (
              <div key={group.id} className={styles.group}>
                <h3 className={styles.groupTitle}>{group.title}</h3>
                <ul className={styles.rows}>
                  {group.rows.map((row) => (
                    <li key={row.id} className={styles.row}>
                      <span className={styles.rowLabel}>{row.label}</span>
                      <span className={styles.rowPrice}>{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.placeholder}>
            Die aktuelle Preisliste ergänzen wir hier in Kürze – sprechen Sie
            uns gerne an.
          </p>
        )}
      </Container>
    </section>
  );
}
