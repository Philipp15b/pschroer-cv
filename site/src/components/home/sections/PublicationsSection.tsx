import { publications } from "../../../data/homeContent";
import type { SiteImages } from "../../../images";
import { SectionHeading } from "../../common/SectionHeading";
import { Publication } from "../Publication";
import { HomeSection } from "./HomeSection";
import styles from "./PublicationsSection.module.css";

type PublicationsSectionProps = {
  publicationDecorations: SiteImages["publicationDecorations"];
};

export function PublicationsSection({
  publicationDecorations,
}: PublicationsSectionProps) {
  return (
    <HomeSection id="publications">
      <SectionHeading title="Academic Publications" />
      <div className={styles.list}>
        {publications.map((publication) => {
          const { decoration = [], ...publicationProps } = publication;

          return (
            <Publication
              key={`${publication.year}-${publication.title}`}
              decoration={decoration.map((key) => publicationDecorations[key])}
              {...publicationProps}
            />
          );
        })}
      </div>
    </HomeSection>
  );
}
