import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { schedule, scheduleDays } from "@/lib/content";
import styles from "./Schedule.module.css";

export function Schedule(): ReactNode {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading eyebrow="stundenplan" title="Unsere Trainingswoche" />

        <div className={styles.grid}>
          {scheduleDays.map((day) => (
            <div key={day} className={styles.day}>
              <h3 className={styles.dayName}>{day}</h3>
              <ul className={styles.classes}>
                {schedule[day]?.map((entry) => (
                  <li
                    key={`${day}-${entry.time}`}
                    className={styles.class}
                  >
                    <span className={styles.time}>{entry.time}</span>
                    <span className={styles.classTitle}>{entry.title}</span>
                    <span className={styles.level}>{entry.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          Änderungen möglich. Der genaue Kursplan wird individuell abgestimmt –
          sprechen Sie uns für eine kostenfreie Probestunde an.
        </p>
      </Container>
    </section>
  );
}
