import type { ReactNode } from "react";

export type BallerinaSilhouetteProps = {
  className?: string;
};

/**
 * Dekorative Ballerina-Silhouette (Inline-SVG, selbst gehostet, kein
 * externer Bild-Request). Rein schmückend – daher aria-hidden beim Aufruf.
 */
export function BallerinaSilhouette({
  className,
}: BallerinaSilhouetteProps): ReactNode {
  return (
    <svg
      className={className}
      viewBox="0 0 300 460"
      role="presentation"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="etoileTutu" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-blush-300)" />
          <stop offset="100%" stopColor="var(--color-blush-200)" />
        </linearGradient>
      </defs>

      {/* Tutu */}
      <path
        d="M150 250 C 90 250 40 290 20 330 C 70 322 100 330 120 352 C 108 322 128 300 150 298 C 172 300 192 322 180 352 C 200 330 230 322 280 330 C 260 290 210 250 150 250 Z"
        fill="url(#etoileTutu)"
      />

      {/* Körper / Bein / Kopf als eine Farbe (Tänzerin in Arabesque) */}
      <g fill="var(--accent-strong)">
        {/* Kopf */}
        <circle cx="150" cy="70" r="20" />
        {/* Hals & Oberkörper */}
        <path d="M150 88 C 140 100 140 120 146 150 C 150 190 150 230 150 258 C 150 232 150 200 154 150 C 160 120 160 100 150 88 Z" />
        {/* Rechter Arm nach oben */}
        <path d="M150 120 C 168 108 190 92 214 74 C 218 78 220 82 222 88 C 196 104 174 120 156 134 Z" />
        {/* Linker Arm zur Seite */}
        <path d="M150 132 C 130 138 104 146 78 150 C 78 156 80 160 84 164 C 110 160 134 152 152 146 Z" />
        {/* Standbein */}
        <path d="M150 250 C 148 290 146 340 140 396 C 144 400 150 402 156 400 C 158 344 158 292 156 252 Z" />
        {/* Spielbein (Arabesque nach hinten) */}
        <path d="M152 254 C 176 262 210 274 250 282 C 252 278 252 272 250 268 C 212 258 180 248 156 244 Z" />
      </g>

      {/* Spitzenschuh-Bänder */}
      <path
        d="M140 392 L156 398"
        stroke="var(--color-blush-500)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
