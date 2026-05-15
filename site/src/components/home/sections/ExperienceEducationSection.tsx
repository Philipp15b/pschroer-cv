import { revealProps } from "../../../domHooks";
import { educationEntries, experienceEntries } from "../../../data/homeContent";
import { SectionHeading } from "../../common/SectionHeading";
import { LinkedText, linkedTextKey } from "../LinkedText";
import { HomeSection } from "./HomeSection";
import styles from "./ExperienceEducationSection.module.css";

export function ExperienceEducationSection() {
  return (
    <HomeSection id="experience" tone="muted">
      <div className={styles.layout}>
        <div>
          <SectionHeading title="Experience" compact />
          <div className={styles.timeline}>
            {experienceEntries.map((entry) => (
              <article key={`${entry.period}-${entry.title}`} {...revealProps}>
                <time>{entry.period}</time>
                <h3>{entry.title}</h3>
                <p>
                  <LinkedText parts={entry.affiliation} />
                </p>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={linkedTextKey(bullet)}>
                      <LinkedText parts={bullet} />
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
        <aside
          className={styles.educationPanel}
          aria-labelledby="education-heading"
          {...revealProps}
        >
          <h2 id="education-heading">Education</h2>
          <p className={styles.educationAffiliation}>RWTH Aachen University</p>
          <div className={styles.educationList}>
            {educationEntries.map((entry) => (
              <article key={`${entry.period}-${entry.title}`}>
                <time>{entry.period}</time>
                <h3>{entry.title}</h3>
                <p>
                  <LinkedText parts={entry.description} />
                </p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </HomeSection>
  );
}
