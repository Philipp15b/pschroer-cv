import { observedSectionProps } from "../../../domHooks";
import { heroActions, heroCopy } from "../../../data/homeContent";
import type { SiteImage } from "../../../images";
import { Button } from "../../common/Button";
import { Icon } from "../../common/Icon";
import { newTabLinkProps } from "../../common/linkProps";
import { LinkedText } from "../LinkedText";
import { ProfilePicture } from "../ProfilePicture";
import styles from "./HeroSection.module.css";

type HeroSectionProps = {
  profilePictureImage: SiteImage;
};

const namePronunciationIpa = "/ˈfɪlɪp ˈʃʁøːɐ/";
const namePronunciationUrl = `https://ipa-reader.com/?text=${encodeURIComponent(
  namePronunciationIpa,
)}&voice=Vicki`;

export function HeroSection({ profilePictureImage }: HeroSectionProps) {
  return (
    <section className={styles.hero} id="top" {...observedSectionProps}>
      <div className={styles.shade} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.kicker}>
            Probabilistic programs · Formal verification · Tool design
          </p>
          <div className={styles.heading}>
            <h1>
              Philipp Schröer{" "}
              <a
                className={styles.pronunciationBadge}
                href={namePronunciationUrl}
                {...newTabLinkProps}
                aria-describedby="name-pronunciation"
                aria-label={`Hear the German pronunciation of Philipp Schröer: ${namePronunciationIpa}`}
              >
                <Icon name="volume" />
                <span
                  className={styles.pronunciationPopover}
                  id="name-pronunciation"
                  role="tooltip"
                >
                  <span className={styles.pronunciationKicker}>German IPA</span>
                  <span className={styles.pronunciationIpa}>
                    {namePronunciationIpa}
                  </span>
                  <span className={styles.pronunciationHint}>
                    Fill-ip Schrö-er
                  </span>
                </span>
              </a>
            </h1>
            <p className={styles.title}>PhD Student in Formal Verification</p>
          </div>
          <ProfilePicture image={profilePictureImage} />
        </div>
        <p className={styles.copy}>
          <LinkedText parts={heroCopy} />
        </p>
        <div className={styles.actions} aria-label="Profile links">
          {heroActions.map((action) => (
            <Button key={action.label} {...action} />
          ))}
        </div>
      </div>
    </section>
  );
}
