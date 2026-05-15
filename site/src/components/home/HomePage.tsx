import type { SiteImages } from "../../images";
import { ContactStrip } from "./sections/ContactStrip";
import { ExperienceEducationSection } from "./sections/ExperienceEducationSection";
import { HeroSection } from "./sections/HeroSection";
import { PresentationsRecognitionSection } from "./sections/PresentationsRecognitionSection";
import { PublicationsSection } from "./sections/PublicationsSection";
import { ResearchSoftwareSection } from "./sections/ResearchSoftwareSection";
import { ServiceToolkitSection } from "./sections/ServiceToolkitSection";
import { TeachingSection } from "./sections/TeachingSection";

type HomePageProps = {
  images: SiteImages;
};

/** Composes the complete single-page CV/homepage from the content data. */
export function HomePage({ images }: HomePageProps) {
  return (
    <>
      <HeroSection profilePictureImage={images.profilePicture} />
      <ContactStrip />
      <ResearchSoftwareSection />
      <PublicationsSection
        publicationDecorations={images.publicationDecorations}
      />
      <ExperienceEducationSection />
      <TeachingSection />
      <PresentationsRecognitionSection />
      <ServiceToolkitSection />
    </>
  );
}
