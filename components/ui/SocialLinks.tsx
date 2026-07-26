import type { ReactNode } from "react";
import { socialLinks } from "@/lib/content";
import styles from "./SocialLinks.module.css";

export type SocialLinksProps = {
  /** "brand" nutzt die Original-Plattformfarben (Footer), "accent" das Étoile-Crimson (Header). */
  readonly tone: "brand" | "accent";
  /** "lg" für prominente Footer-Badges, "sm" für kompakte Header-Badges. */
  readonly size: "sm" | "lg";
  readonly className?: string;
};

const platformSlugs: Readonly<Record<string, string>> = {
  Instagram: "instagram",
  YouTube: "youtube",
};

const icons: Readonly<Record<string, ReactNode>> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2c-2.716 0-3.056.012-4.123.06-1.064.049-1.791.218-2.427.465a4.902 4.902 0 0 0-1.771 1.153A4.902 4.902 0 0 0 2.526 5.45c-.247.636-.416 1.363-.465 2.427C2.012 8.944 2 9.284 2 12s.012 3.056.06 4.123c.049 1.064.218 1.791.465 2.427a4.902 4.902 0 0 0 1.153 1.771 4.902 4.902 0 0 0 1.771 1.153c.636.247 1.363.416 2.427.465C8.944 21.988 9.284 22 12 22s3.056-.012 4.123-.06c1.064-.049 1.791-.218 2.427-.465a4.902 4.902 0 0 0 1.771-1.153 4.902 4.902 0 0 0 1.153-1.771c.247-.636.416-1.363.465-2.427.048-1.067.06-1.407.06-4.123s-.012-3.056-.06-4.123c-.049-1.064-.218-1.791-.465-2.427a4.902 4.902 0 0 0-1.153-1.771A4.902 4.902 0 0 0 18.55 2.526c-.636-.247-1.363-.416-2.427-.465C15.056 2.012 14.716 2 12 2Zm0 1.802c2.67 0 2.986.01 4.04.058.976.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.882.344 1.857.048 1.055.058 1.372.058 4.041 0 2.67-.01 2.986-.058 4.04-.045.976-.207 1.505-.344 1.858a3.1 3.1 0 0 1-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.882.3-1.857.344-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-.976-.045-1.505-.207-1.858-.344a3.098 3.098 0 0 1-1.15-.748 3.098 3.098 0 0 1-.748-1.15c-.137-.353-.3-.882-.344-1.857-.048-1.055-.058-1.372-.058-4.041 0-2.67.01-2.986.058-4.04.045-.976.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.882-.3 1.857-.344 1.055-.048 1.372-.058 4.041-.058ZM12 6.865A5.135 5.135 0 1 0 12 17.135 5.135 5.135 0 0 0 12 6.865Zm0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666Zm5.338-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"
      />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.582 7.186a2.51 2.51 0 0 0-1.768-1.775C18.254 5 12 5 12 5s-6.254 0-7.814.411a2.51 2.51 0 0 0-1.768 1.775C2 8.756 2 12 2 12s0 3.244.418 4.814a2.51 2.51 0 0 0 1.768 1.775C5.746 19 12 19 12 19s6.254 0 7.814-.411a2.51 2.51 0 0 0 1.768-1.775C22 15.244 22 12 22 12s0-3.244-.418-4.814ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  ),
};

export function SocialLinks({ tone, size, className }: SocialLinksProps): ReactNode {
  const listClasses = [styles.list, className].filter(Boolean).join(" ");

  return (
    <ul className={listClasses}>
      {socialLinks.map((link) => (
        <li key={link.href}>
          <a
            className={styles.link}
            data-tone={tone}
            data-size={size}
            data-platform={platformSlugs[link.label]}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
          >
            {icons[link.label]}
          </a>
        </li>
      ))}
    </ul>
  );
}
