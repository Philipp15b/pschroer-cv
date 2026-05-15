/**
 * Behavior-only data attributes shared by rendered markup and browser scripts.
 *
 * These are not styling hooks. Component styling should live in CSS modules; add
 * a hook here only when JavaScript needs a stable DOM contract.
 *
 * The main consumers are scripts/main.ts for page-wide behaviors and
 * scripts/profilePicture.ts for the portrait animation. A few CSS files also
 * react to script-owned state attributes, but components should still import
 * the prop helpers below instead of spelling attributes by hand.
 */
export const domHooks = {
  /**
   * Marks sections observed by scripts/main.ts for active navigation.
   * Emitted by HomeSection, HeroSection, and ContactStrip.
   */
  observeSection: "data-observe-section",
  /**
   * Stores the target section id on Header nav links. main.ts matches this
   * value against observed section ids.
   */
  sectionLink: "data-section-link",
  /**
   * Set by main.ts on the nav link for the currently visible section.
   * Header.module.css uses the attribute to style the active link.
   */
  activeSectionLink: "data-active-section-link",
  /**
   * Marks elements animated by the reveal observer in main.ts.
   * The initial and visible states are defined in styles/motion.css.
   */
  reveal: "data-reveal",
  /** Set by main.ts after a reveal element enters the viewport. */
  revealVisible: "data-reveal-visible",
  /** Header theme toggle button controlled by scripts/main.ts. */
  themeToggle: "data-theme-toggle",
  /** ProfilePicture button controlled by scripts/profilePicture.ts. */
  profilePicture: "data-profile-picture",
  /**
   * Set while the portrait click animation is running.
   * ProfilePicture.module.css uses this to disable interaction and run keyframes.
   */
  profileSpinning: "data-spinning",
  /** Names the selected portrait keyframe animation in ProfilePicture.module.css. */
  profileAnimation: "data-animation",
} as const;

type DomHook = (typeof domHooks)[keyof typeof domHooks];

export const hookSelector = (hook: DomHook) => `[${hook}]`;

/** Props for sections that should participate in Header active-link tracking. */
export const observedSectionProps = { [domHooks.observeSection]: "" } as const;

/** Props for elements that should receive the scroll-in reveal behavior. */
export const revealProps = { [domHooks.reveal]: "" } as const;

/** Props for Header links; sectionId must match the id of an observed section. */
export const sectionLinkProps = (sectionId: string) =>
  ({ [domHooks.sectionLink]: sectionId }) as const;

/** Props for the Header link that should be highlighted before JS runs. */
export const initiallyActiveSectionLinkProps = {
  [domHooks.activeSectionLink]: "true",
} as const;

/** Props for the Header theme toggle button queried by scripts/main.ts. */
export const themeToggleProps = { [domHooks.themeToggle]: "" } as const;
/** Props for the ProfilePicture button whose click animation is script-managed. */
export const profilePictureProps = { [domHooks.profilePicture]: "" } as const;
