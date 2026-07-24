import type { ReactNode } from "react";
import { navLinks, school } from "@/lib/content";
import styles from "./Footer.module.css";

export function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <span className={styles.brandScript}>Étoile</span>
          <p className={styles.brandText}>
            Ballettschule Étoile – klassisches Ballett auf professionellem Niveau
            in {school.city}. Grazie, Eleganz, Inspiration.
          </p>
        </div>

        <nav className={styles.col} aria-label="Footer-Navigation">
          <h3 className={styles.heading}>Navigation</h3>
          <ul className={styles.list}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.col}>
          <h3 className={styles.heading}>Kontakt</h3>
          <address className={styles.address}>
            {school.address.street}
            <br />
            {school.address.zip} {school.address.city}
            <br />
            <a className={styles.link} href={school.phoneHref}>
              {school.phone}
            </a>
            <br />
            <a className={styles.link} href={`mailto:${school.email}`}>
              {school.email}
            </a>
          </address>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {school.name}. Alle Rechte vorbehalten.
        </p>
      </div>
    </footer>
  );
}
