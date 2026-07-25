"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

export function Testimonials(): ReactNode {
  const [index, setIndex] = useState(0);
  const count = testimonials.length;

  const go = (direction: number): void => {
    setIndex((current) => (current + direction + count) % count);
  };

  const active = testimonials[index];

  return (
    <section className={styles.section} aria-label="Stimmen unserer Schülerinnen">
      <div className={styles.panel}>
        <p className={styles.eyebrow} aria-hidden="true">
          Google-Bewertungen
        </p>

        <blockquote className={styles.quote}>
          <p>“{active.quote}”</p>
        </blockquote>

        <footer className={styles.author}>
          <span className={styles.name}>{active.author}</span>
          <span className={styles.role}>{active.role}</span>
        </footer>

        <div className={styles.controls}>
          <button
            type="button"
            className={styles.arrow}
            aria-label="Vorheriges Zitat"
            onClick={() => go(-1)}
          >
            ‹
          </button>

          <div className={styles.dots} role="tablist" aria-label="Zitat auswählen">
            {testimonials.map((item, i) => (
              <button
                key={item.author}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Zitat ${i + 1} von ${count}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className={styles.arrow}
            aria-label="Nächstes Zitat"
            onClick={() => go(1)}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
