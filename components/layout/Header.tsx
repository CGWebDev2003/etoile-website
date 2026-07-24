import type { ReactNode } from "react";
import { navLinks, school } from "@/lib/content";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand} aria-label={`${school.name} – Startseite`}>
          <span className={styles.brandScript}>Étoile</span>
          <span className={styles.brandSub}>Ballettschule {school.city}</span>
        </a>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#kontakt" className={styles.cta}>
            Probestunde
          </a>
          <ThemeToggle />
        </nav>

        <div className={styles.mobileActions}>
          <ThemeToggle />
          <MobileMenu links={navLinks} />
        </div>
      </div>
    </header>
  );
}
