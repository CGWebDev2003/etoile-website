import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { school } from "@/lib/content";
import styles from "./Contact.module.css";

export function Contact(): ReactNode {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.card}>
          <div className={styles.intro}>
            <p className={styles.eyebrow}>Kostenfreie Probestunde</p>
            <h2 className={styles.title}>
              Wir freuen uns auf Ihren Besuch im Ballettsaal
            </h2>
            <p className={styles.lead}>
              Für Kinder ist die Probestunde kostenfrei, für Erwachsene kostet
              sie 5&nbsp;€. Melden Sie sich telefonisch oder per E-Mail – wir
              beraten Sie gern.
            </p>
            <div className={styles.actions}>
              <Button href={school.phoneHref}>Jetzt anrufen</Button>
              <Button href={`mailto:${school.email}`} variant="outline">
                E-Mail schreiben
              </Button>
            </div>
          </div>

          <ul className={styles.details}>
            <li className={styles.detail}>
              <span className={styles.detailLabel}>Adresse</span>
              <span className={styles.detailValue}>
                {school.address.street}
                <br />
                {school.address.zip} {school.address.city}
              </span>
            </li>
            <li className={styles.detail}>
              <span className={styles.detailLabel}>Anmeldung</span>
              <a className={styles.detailLink} href={school.phoneHref}>
                {school.phone}
              </a>
            </li>
            <li className={styles.detail}>
              <span className={styles.detailLabel}>E-Mail</span>
              <a className={styles.detailLink} href={`mailto:${school.email}`}>
                {school.email}
              </a>
            </li>
            <li className={styles.detail}>
              <span className={styles.detailLabel}>Zeiten</span>
              <span className={styles.detailValue}>{school.hours}</span>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
