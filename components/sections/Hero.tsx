import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { school } from "@/lib/content";
import { BallerinaSilhouette } from "./BallerinaSilhouette";
import styles from "./Hero.module.css";

export function Hero(): ReactNode {
  return (
    <section className={styles.hero} id="top">
      <Container className={styles.inner}>
        <div className={styles.figure} aria-hidden="true">
          <BallerinaSilhouette className={styles.silhouette} />
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>Ballettschule Étoile · {school.city}</p>
          <h1 className={styles.title}>
            Grazie, Eleganz,
            <span className={styles.titleAccent}>Inspiration</span>
          </h1>
          <p className={styles.lead}>
            Klassisches Ballett auf professionellem Niveau – für Kinder ab drei
            Jahren, Jugendliche und Erwachsene. Unter der Leitung von
            Primaballerina {school.director} entdecken Tänzerinnen und Tänzer
            jeden Alters die Freude an Anmut, Haltung und Bewegung.
          </p>

          <div className={styles.actions}>
            <Button href="#kontakt">Probestunde buchen</Button>
            <Button href="#kurse" variant="outline">
              Kurse entdecken
            </Button>
          </div>

          <p className={styles.signature}>{school.director}</p>
          <p className={styles.signatureRole}>{school.directorRole}</p>
        </div>
      </Container>
    </section>
  );
}
