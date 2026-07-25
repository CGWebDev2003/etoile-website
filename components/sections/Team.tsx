import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/lib/content";
import styles from "./Team.module.css";

export function Team(): ReactNode {
  return (
    <section className={styles.section}>
      <Container>
        <SectionHeading eyebrow="unser Team" title="Pädagoginnen & Pädagogen" />

        {team.length > 0 ? (
          <ul className={styles.grid}>
            {team.map((member) => (
              <li key={member.id} className={styles.card}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={200}
                  height={200}
                  sizes="96px"
                  className={styles.photo}
                />
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.placeholder}>
            Die Vorstellung unseres Pädagogen-Teams ergänzen wir hier in
            Kürze.
          </p>
        )}
      </Container>
    </section>
  );
}
