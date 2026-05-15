import { profilePictureProps } from "../../domHooks";
import type { SiteImage } from "../../images";
import styles from "./ProfilePicture.module.css";

type ProfilePictureProps = {
  image: SiteImage;
};

/** Clickable portrait card used by HeroSection; profilePicture.ts attaches its animation. */
export function ProfilePicture({ image }: ProfilePictureProps) {
  return (
    <button
      className={styles.profilePicture}
      type="button"
      aria-label="Rotate profile picture"
      {...profilePictureProps}
    >
      <img
        className={styles.image}
        src={image.src}
        width={image.width}
        height={image.height}
        alt=""
        decoding="sync"
        loading="eager"
        fetchPriority="high"
      />
    </button>
  );
}
