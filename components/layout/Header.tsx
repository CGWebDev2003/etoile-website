import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks, school } from "@/lib/content";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

export function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} aria-label={`${school.name} – Startseite`}>
          <Image
            src="/images/logo.png"
            alt={`${school.name} – Logo`}
            width={1477}
            height={1065}
            priority
            unoptimized
            className={styles.logo}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Hauptnavigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <SocialLinks tone="accent" size="sm" className={styles.social} />
          <Link href="/kontakt" className={styles.cta}>
            Probestunde
          </Link>
        </nav>

        <MobileMenu links={navLinks} />
      </div>
    </header>
  );
}
