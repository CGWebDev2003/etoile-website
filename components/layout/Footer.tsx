import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { legalLinks, navLinks, school, socialLinks } from "@/lib/content";
import styles from "./Footer.module.css";

const socialIcons: Readonly<Record<string, ReactNode>> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export function Footer(): ReactNode {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Image
            src="/images/logo.png"
            alt={`${school.name} – Logo`}
            width={189}
            height={136}
            unoptimized
            className={styles.logo}
          />
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
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
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

          <ul className={styles.social}>
            {socialLinks.map((link) => (
              <li key={link.href}>
                <a
                  className={styles.socialLink}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {socialIcons[link.label]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {school.name}. Alle Rechte vorbehalten.
        </p>
        <nav className={styles.legalNav} aria-label="Rechtliches">
          <ul className={styles.legalList}>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
