import { cx } from "./classNames";
import styles from "./ExpandableDetails.module.css";

/** Long-form text shown behind a concise clickable summary. */
export type ExpandableDetailsText = string | readonly string[];

type ExpandableDetailsProps = {
  summary: string;
  details: ExpandableDetailsText;
  /** Use for dense entries such as additional presentations. */
  variant?: "compact";
};

/** Shared collapsible details component used by publications and compact entries. */
export function ExpandableDetails({
  summary,
  details,
  variant,
}: ExpandableDetailsProps) {
  const paragraphs = typeof details === "string" ? [details] : details;

  return (
    <details
      className={cx(styles.details, variant === "compact" && styles.compact)}
    >
      <summary className={styles.summary}>{summary}</summary>
      <div className={styles.copy}>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}
