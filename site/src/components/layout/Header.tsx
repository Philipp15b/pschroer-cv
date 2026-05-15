import {
  initiallyActiveSectionLinkProps,
  sectionLinkProps,
  themeToggleProps,
} from "../../domHooks";
import { Icon } from "../common/Icon";
import { cx } from "../common/classNames";
import controlStyles from "../common/ControlButton.module.css";
import { newTabLinkProps } from "../common/linkProps";
import styles from "./Header.module.css";

/** Sticky page header emitted by BaseLayout before the main content. */
export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.brand} href="#top" aria-label="Philipp Schröer home">
        <span className={styles.brandMark}>PS</span>
        <span className={styles.brandName}>Philipp Schröer</span>
      </a>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a
          className={styles.contactNavLink}
          href="#contact"
          {...sectionLinkProps("contact")}
          {...initiallyActiveSectionLinkProps}
        >
          Contact
        </a>
        <a href="#research" {...sectionLinkProps("research")}>
          Research
        </a>
        <a href="#publications" {...sectionLinkProps("publications")}>
          Publications
        </a>
        <a href="#experience" {...sectionLinkProps("experience")}>
          Experience
        </a>
        <a href="#teaching" {...sectionLinkProps("teaching")}>
          Teaching
        </a>
      </nav>
      <div className={styles.actions}>
        <button
          className={cx(controlStyles.control, styles.headerControl)}
          type="button"
          {...themeToggleProps}
          aria-label="Switch color theme"
        >
          <span
            className={cx(styles.themeIcon, styles.themeMoon)}
            aria-hidden="true"
          >
            <Icon name="moon" />
          </span>
          <span
            className={cx(styles.themeIcon, styles.themeSun)}
            aria-hidden="true"
          >
            <Icon name="sun" />
          </span>
          <span>Theme</span>
        </button>
        <a
          className={cx(controlStyles.control, styles.headerControl)}
          href="files/philipp-schroer-cv.pdf"
          {...newTabLinkProps}
          aria-label="Open CV PDF"
        >
          <Icon name="download" />
          <span>CV PDF</span>
        </a>
      </div>
    </header>
  );
}
