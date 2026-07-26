"use client";

import type { FormEvent, ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import styles from "./ContactForm.module.css";

export function ContactForm(): ReactNode {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  return (
    <section className={styles.section}>
      <Container narrow>
        <div className={styles.card}>
          <p className={styles.eyebrow}>Nachricht senden</p>
          <h2 className={styles.title}>Schreiben Sie uns</h2>
          <p className={styles.lead}>
            Ob Frage zur Probestunde oder zu unseren Kursen – nutzen Sie
            gerne auch dieses Formular.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-email">
                E-Mail
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-phone">
                Telefon (optional)
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="contact-message">
                Nachricht
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.submit}>
              Nachricht senden
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
