"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import type { NavLink } from "@/lib/content";
import styles from "./MobileMenu.module.css";

export type MobileMenuProps = {
  links: readonly NavLink[];
};

export function MobileMenu({ links }: MobileMenuProps): ReactNode {
  const [open, setOpen] = useState(false);

  // Scroll sperren, solange das Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Escape schließt das Menü.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        className={styles.toggle}
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`${styles.bar} ${open ? styles.barTop : ""}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.bar} ${open ? styles.barHidden : ""}`}
          aria-hidden="true"
        />
        <span
          className={`${styles.bar} ${open ? styles.barBottom : ""}`}
          aria-hidden="true"
        />
      </button>

      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        hidden={!open}
        onClick={() => setOpen(false)}
      />

      <nav
        id="mobile-navigation"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-label="Mobile Navigation"
        aria-hidden={!open}
        inert={!open}
      >
        <ul className={styles.list}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.link}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/kontakt"
          className={styles.drawerCta}
          onClick={() => setOpen(false)}
          tabIndex={open ? 0 : -1}
        >
          Probestunde buchen
        </Link>
      </nav>
    </div>
  );
}
