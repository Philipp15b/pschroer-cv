import { cx } from "./classNames";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  title: string;
  /** Use for headings inside two-column subsection lists. */
  compact?: boolean;
};

/** Shared heading treatment used by the home page section components. */
export function SectionHeading({
  title,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div className={cx(styles.heading, compact && styles.compact)}>
      <h2>{title}</h2>
    </div>
  );
}
