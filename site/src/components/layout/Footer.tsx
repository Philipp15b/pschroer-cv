import styles from "./Footer.module.css";

/** Page footer emitted by BaseLayout after the main content. */
export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p className={styles.name}>Philipp Schröer</p>
      </div>
      <a href="#top" aria-label="Back to top">
        Back to top
      </a>
    </footer>
  );
}
