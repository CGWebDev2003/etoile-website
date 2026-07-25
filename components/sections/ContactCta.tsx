import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { school } from "@/lib/content";
import styles from "./ContactCta.module.css";

export function ContactCta(): ReactNode {
  return (
    <section className={styles.section}>
      <Container narrow className={styles.inner}>
        <p className={styles.eyebrow}>Kostenfreie Probestunde</p>
        <h2 className={styles.title}>
          Wir freuen uns auf Ihren Besuch im Ballettsaal
        </h2>
        <p className={styles.lead}>
          Für Kinder ist die Probestunde kostenfrei, für Erwachsene kostet sie
          5&nbsp;€. Melden Sie sich telefonisch oder per E-Mail – wir beraten
          Sie gern.
        </p>
        <div className={styles.actions}>
          <Button href={school.phoneHref}>Jetzt anrufen</Button>
          <Button href="/kontakt" variant="outline">
            Kontakt &amp; Anfahrt
          </Button>
        </div>
      </Container>
    </section>
  );
}
