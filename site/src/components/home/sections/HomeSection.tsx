import type { ReactNode } from "react";
import { observedSectionProps } from "../../../domHooks";
import { cx } from "../../common/classNames";
import styles from "./HomeSection.module.css";

type HomeSectionTone = "default" | "light" | "muted";

const toneClassNames: Record<HomeSectionTone, string | undefined> = {
  default: undefined,
  light: styles.light,
  muted: styles.muted,
};

type HomeSectionProps = {
  id: string;
  children: ReactNode;
  tone?: HomeSectionTone;
};

/** Standard section shell for non-hero home page sections. */
export function HomeSection({
  id,
  children,
  tone = "default",
}: HomeSectionProps) {
  return (
    <section
      className={cx(styles.section, toneClassNames[tone])}
      id={id}
      {...observedSectionProps}
    >
      <div className={styles.inner}>{children}</div>
    </section>
  );
}

export function HomeSectionLead({ children }: { children: ReactNode }) {
  return <p className={styles.lead}>{children}</p>;
}

export function HomeSectionColumns({ children }: { children: ReactNode }) {
  return <div className={styles.splitLists}>{children}</div>;
}
