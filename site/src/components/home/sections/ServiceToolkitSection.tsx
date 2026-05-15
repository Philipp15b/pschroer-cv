import { serviceParagraphs, toolkitItems } from "../../../data/homeContent";
import { SectionHeading } from "../../common/SectionHeading";
import { LinkedText, linkedTextKey } from "../LinkedText";
import { HomeSection, HomeSectionColumns } from "./HomeSection";
import styles from "./ServiceToolkitSection.module.css";

export function ServiceToolkitSection() {
  return (
    <HomeSection id="service-skills" tone="muted">
      <HomeSectionColumns>
        <div>
          <SectionHeading title="Academic Service" compact />
          {serviceParagraphs.map((paragraph) => (
            <p className={styles.serviceCopy} key={linkedTextKey(paragraph)}>
              <LinkedText parts={paragraph} />
            </p>
          ))}
        </div>
        <div>
          <SectionHeading title="Methods and Tools" compact />
          <div className={styles.toolkitList} aria-label="Methods and tools">
            {toolkitItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </HomeSectionColumns>
    </HomeSection>
  );
}
