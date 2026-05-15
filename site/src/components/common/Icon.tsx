import styles from "./Icon.module.css";

/** Names of SVG symbols registered by IconSprite. */
export type IconName =
  | "award"
  | "arrow-up-right"
  | "archive"
  | "book"
  | "calendar"
  | "code"
  | "download"
  | "envelope"
  | "file-text"
  | "folder"
  | "github"
  | "globe"
  | "id"
  | "info"
  | "landmark"
  | "linkedin"
  | "moon"
  | "newspaper"
  | "presentation"
  | "play"
  | "sun"
  | "volume";

type IconProps = {
  name: IconName;
};

/** Renders a decorative inline SVG icon from the page-level sprite. */
export function Icon({ name }: IconProps) {
  return (
    <svg aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
}

/** Defines the SVG symbols emitted once by BaseLayout for all Icon instances. */
export function IconSprite() {
  return (
    <svg className={styles.sprite} aria-hidden="true" focusable="false">
      <symbol id="icon-arrow-up-right" viewBox="0 0 24 24">
        <path d="M7 17 17 7" />
        <path d="M9 7h8v8" />
      </symbol>
      <symbol id="icon-archive" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <path d="M5 8v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
        <path d="M10 12h4" />
      </symbol>
      <symbol id="icon-award" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="5" />
        <path d="m8.5 12.5-1 8.5 4.5-2.7 4.5 2.7-1-8.5" />
      </symbol>
      <symbol id="icon-book" viewBox="0 0 24 24">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" />
      </symbol>
      <symbol id="icon-calendar" viewBox="0 0 24 24">
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M3 10h18" />
      </symbol>
      <symbol id="icon-code" viewBox="0 0 24 24">
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 4-4 16" />
      </symbol>
      <symbol id="icon-download" viewBox="0 0 24 24">
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </symbol>
      <symbol id="icon-envelope" viewBox="0 0 24 24">
        <path d="M4 5h16v14H4z" />
        <path d="m4 7 8 6 8-6" />
      </symbol>
      <symbol id="icon-file-text" viewBox="0 0 24 24">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h6" />
      </symbol>
      <symbol id="icon-folder" viewBox="0 0 24 24">
        <path d="M3 6h6l2 2h10v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </symbol>
      <symbol id="icon-github" viewBox="0 0 24 24">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5a19.2 19.2 0 0 0-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4.8 4.8 0 0 0 9 18v4" />
        <path d="M9 18c-4.5 2-5-2-7-2" />
      </symbol>
      <symbol id="icon-globe" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </symbol>
      <symbol id="icon-id" viewBox="0 0 24 24">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <circle cx="9" cy="11" r="2" />
        <path d="M15 10h3" />
        <path d="M15 14h3" />
        <path d="M7 16c.8-1.4 3.2-1.4 4 0" />
      </symbol>
      <symbol id="icon-info" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 12v5" />
        <path d="M12 8h.01" />
      </symbol>
      <symbol id="icon-landmark" viewBox="0 0 24 24">
        <path d="m12 3 8 5H4z" />
        <path d="M5 21h14" />
        <path d="M6 18h12" />
        <path d="M7 10v8" />
        <path d="M12 10v8" />
        <path d="M17 10v8" />
      </symbol>
      <symbol id="icon-linkedin" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 11v5" />
        <path d="M8 8h.01" />
        <path d="M12 16v-5" />
        <path d="M12 13a2 2 0 0 1 4 0v3" />
      </symbol>
      <symbol id="icon-moon" viewBox="0 0 24 24">
        <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4a7 7 0 1 0 11.5 11.5z" />
      </symbol>
      <symbol id="icon-newspaper" viewBox="0 0 24 24">
        <path d="M4 4h14a2 2 0 0 1 2 2v13a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1z" />
        <path d="M7 8h6" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
        <path d="M16 4v16" />
      </symbol>
      <symbol id="icon-presentation" viewBox="0 0 24 24">
        <path d="M3 4h18v12H3z" />
        <path d="M12 16v5" />
        <path d="m8 21 4-5 4 5" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
      </symbol>
      <symbol id="icon-play" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="m10 8 6 4-6 4z" />
      </symbol>
      <symbol id="icon-sun" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </symbol>
      <symbol id="icon-volume" viewBox="0 0 24 24">
        <path d="M11 5 6 9H3v6h3l5 4z" />
        <path d="M15.5 8.5a5 5 0 0 1 0 7" />
        <path d="M18.7 5.3a9.5 9.5 0 0 1 0 13.4" />
      </symbol>
    </svg>
  );
}
