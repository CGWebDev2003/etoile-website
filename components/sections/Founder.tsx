import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { school } from "@/lib/content";
import styles from "./Founder.module.css";

const paragraphs: readonly string[] = [
  "Oksana Kulchytska wurde in Kiew geboren und absolvierte an der Staatlichen Ballettakademie eine achtjährige Ausbildung nach der Waganowa-Methode, die sie mit Auszeichnung als Bühnen-Balletttänzerin abschloss. Von 1990 bis 1995 tanzte sie an der Nationaloper der Ukraine in Kiew von Gruppen- bis Hauptrollen.",
  "Von 1995 bis 2010 war sie Solistin und später Erste Solistin des Leipziger Balletts an der Oper Leipzig unter Prof. Uwe Scholz und Paul Chalmer – u. a. als Odette/Odile in „Schwanensee“, in der Titelrolle von „La Sylphide“, als Prinzessin Aurora in „Dornröschen“ und in der Titelpartie von „Giselle“. 2010 tanzte sie zudem als Gastsolistin an der Staatsoper Prag sowie bei zahlreichen internationalen Gastspielen und Galas, u. a. in Italien, Frankreich, den USA und Japan. 2017 wurde sie mit dem YOUTH GLOBE Award (AIMY) für ihre Karriere und ihr Engagement für die Entwicklung junger Menschen ausgezeichnet.",
  "Seit 2009 unterrichtet Oksana Kulchytska klassisches Ballett und gründete die Ballettschule Étoile. Seit 2011 ist sie zudem zertifizierte Pilates-Trainerin (Ausbildung bei Polestar) und Mitglied des Deutschen Pilates-Verbands.",
];

export function Founder(): ReactNode {
  return (
    <section className={styles.section}>
      <Container className={styles.inner}>
        <div className={styles.figure}>
          <Image
            src={school.directorPhoto}
            alt={school.director}
            width={368}
            height={460}
            sizes="(min-width: 1024px) 320px, 60vw"
            className={styles.photo}
            priority={false}
          />
        </div>

        <div className={styles.content}>
          <SectionHeading eyebrow="Schulleitung" title={school.director} align="start" />
          <p className={styles.role}>{school.directorRole}</p>
          <div className={styles.text}>
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
