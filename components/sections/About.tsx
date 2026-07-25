import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { school } from "@/lib/content";
import styles from "./About.module.css";

const highlights: readonly { title: string; text: string }[] = [
  {
    title: "Professionelle Leitung",
    text: "Ausbildung durch Primaballerina Oksana Kulchytska und ein erfahrenes Pädagogen-Team.",
  },
  {
    title: "Für jedes Alter",
    text: "Vom ersten Plié mit drei Jahren bis zum Spitzentanz und dem Training für Erwachsene.",
  },
  {
    title: "Bühne & Wettbewerb",
    text: "Auftritte an der Oper Leipzig sowie Erfolge bei nationalen und internationalen Wettbewerben.",
  },
];

export function About(): ReactNode {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow="unsere Schule"
          title="Tanzen, das durch das Leben trägt"
          align="start"
        />
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Die {school.name} in {school.city} steht für klassisches Ballett
              in seiner schönsten Form. Wir vermitteln Technik und Ausdruck mit
              Geduld und Leidenschaft – in einer Atmosphäre, in der sich jede
              Tänzerin und jeder Tänzer wohlfühlt und über sich hinauswächst.
            </p>
            <p>
              Ob als liebevoller erster Kontakt mit dem Ballett, als ambitionierte
              Ausbildung mit Spitzentanz und Repertoire oder als Ausgleich für
              Erwachsene: Bei uns findet jedes Talent seinen Weg – individuell
              begleitet und professionell gefördert.
            </p>
          </div>

          <ul className={styles.highlights}>
            {highlights.map((item) => (
              <li key={item.title} className={styles.highlight}>
                <span className={styles.dot} aria-hidden="true" />
                <div>
                  <h3 className={styles.highlightTitle}>{item.title}</h3>
                  <p className={styles.highlightText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
