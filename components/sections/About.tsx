import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { school } from "@/lib/content";
import styles from "./About.module.css";

const highlights: readonly { title: string; text: string }[] = [
  {
    title: "Gegründet von einer Primaballerina",
    text: "Oksana Kulchytska gründete die Schule und unterrichtet gemeinsam mit einem erfahrenen, engagierten Pädagogen-Team.",
  },
  {
    title: "Für jedes Alter",
    text: "Vom ersten Plié mit drei Jahren bis zum Spitzentanz und dem Training für Erwachsene – jedes Niveau ist willkommen.",
  },
  {
    title: "Bühne & Wettbewerb",
    text: "Mehrfach als „Beste Ballettschule“ ausgezeichnet, mit gemeinsamen Auftritten an der Oper Leipzig.",
  },
];

export function About(): ReactNode {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <SectionHeading
          eyebrow="unsere Schule"
          title="Professionelle Ausbildung und Ballett für alle"
          align="start"
        />
        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              Die {school.name} in {school.city} gehört zu den erfolgreichsten
              Ballettschulen der Stadt und ist auch deutschlandweit bekannt.
              Gegründet von der Primaballerina {school.director}, bieten wir
              klassisches Ballett auf professionellem Niveau – getragen von
              einem erfahrenen und engagierten Team aus qualifizierten
              Pädagoginnen und Pädagogen.
            </p>
            <p>
              Unsere Schülerinnen und Schüler sind mehrfache Preisträgerinnen
              und Preisträger zahlreicher nationaler und internationaler
              Wettbewerbe und wurden bereits mehrfach als „Beste
              Ballettschule“ ausgezeichnet. Jedes Jahr werden mehrere Kinder
              aus unserer Schule erfolgreich an staatlichen Ballettschulen
              aufgenommen oder direkt auf professionelle Bühnen vorbereitet –
              und tanzen gemeinsam mit Profitänzern auf der Bühne der Oper
              Leipzig, unter anderem im „Nussknacker“.
            </p>
            <p>
              Gleichzeitig ist unsere Ballettschule offen für alle: für jedes
              Niveau und alle Altersgruppen, vom Anfänger bis zum Profi. Wir
              freuen uns auf alle Ballettbegeisterten – und die, die es werden
              wollen!
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
