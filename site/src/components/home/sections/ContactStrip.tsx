import { observedSectionProps } from "../../../domHooks";
import { contactLinks } from "../../../data/homeContent";
import { ContactLink } from "../ContactLink";
import styles from "./ContactStrip.module.css";

export function ContactStrip() {
  return (
    <section
      className={styles.strip}
      id="contact"
      {...observedSectionProps}
      aria-label="Contact and profiles"
    >
      <div className={styles.grid}>
        {contactLinks.map((link) => (
          <ContactLink key={link.href} {...link} />
        ))}
      </div>
    </section>
  );
}
