"use client";

import { useSyncExternalStore } from "react";
import type { ReactNode } from "react";
import styles from "./ThemeToggle.module.css";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

/** Abonniert System-Präferenz und data-theme-Änderungen am <html>. */
function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia(MEDIA_QUERY);
  media.addEventListener("change", onChange);

  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => {
    media.removeEventListener("change", onChange);
    observer.disconnect();
  };
}

/** Aktuell aufgelöstes Theme aus data-theme oder System-Präferenz. */
function getSnapshot(): Theme {
  const explicit = document.documentElement.dataset.theme;
  if (explicit === "dark" || explicit === "light") return explicit;
  return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

/** Serverseitig ist das Theme unbekannt – null verhindert Hydration-Mismatch. */
function getServerSnapshot(): Theme | null {
  return null;
}

/**
 * Umschalter für hell/dunkel. Setzt `data-theme` am <html>-Element und
 * merkt die Wahl in localStorage. Ohne explizite Wahl folgt die Seite der
 * System-Präferenz (siehe globals.css + Init-Skript im Layout).
 */
export function ThemeToggle(): ReactNode {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = (): void => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage kann blockiert sein (z. B. Privatmodus) – die Wahl
      // gilt dann nur für die aktuelle Sitzung.
    }
  };

  const isDark = theme === "dark";
  const label = isDark ? "Zu hellem Design wechseln" : "Zu dunklem Design wechseln";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
    >
      <span
        className={`${styles.icon} ${!isDark ? styles.iconActive : ""}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <line x1="12" y1="2.5" x2="12" y2="5" />
            <line x1="12" y1="19" x2="12" y2="21.5" />
            <line x1="2.5" y1="12" x2="5" y2="12" />
            <line x1="19" y1="12" x2="21.5" y2="12" />
            <line x1="5.4" y1="5.4" x2="7.1" y2="7.1" />
            <line x1="16.9" y1="16.9" x2="18.6" y2="18.6" />
            <line x1="5.4" y1="18.6" x2="7.1" y2="16.9" />
            <line x1="16.9" y1="7.1" x2="18.6" y2="5.4" />
          </g>
        </svg>
      </span>
      <span
        className={`${styles.icon} ${isDark ? styles.iconActive : ""}`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
          <path
            d="M20 14.2A8 8 0 1 1 9.8 4a6.4 6.4 0 0 0 10.2 10.2Z"
            fill="currentColor"
          />
        </svg>
      </span>
    </button>
  );
}
