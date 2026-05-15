import { revealProps } from "../../../domHooks";
import { presentations, recognitions } from "../../../data/homeContent";
import { SectionHeading } from "../../common/SectionHeading";
import { CompactItem } from "../CompactItem";
import { RecognitionItem } from "../RecognitionItem";
import { HomeSection, HomeSectionColumns } from "./HomeSection";
import styles from "./PresentationsRecognitionSection.module.css";

export function PresentationsRecognitionSection() {
  return (
    <HomeSection id="talks-awards" tone="light">
      <HomeSectionColumns>
        <div>
          <SectionHeading title="Additional Presentations" compact />
          <div className={styles.compactList}>
            {presentations.map((presentation) => (
              <CompactItem
                key={`${presentation.year}-${presentation.title}`}
                {...presentation}
              />
            ))}
          </div>
        </div>
        <div {...revealProps}>
          <SectionHeading title="Research Funding and Awards" compact />
          <div className={styles.recognitionList}>
            {recognitions.map((recognition) => (
              <RecognitionItem
                {...recognition}
                key={`${recognition.year}-${recognition.title}`}
              />
            ))}
          </div>
        </div>
      </HomeSectionColumns>
    </HomeSection>
  );
}
