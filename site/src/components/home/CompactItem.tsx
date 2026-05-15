import {
  ExpandableDetails,
  type ExpandableDetailsText,
} from "../common/ExpandableDetails";
import { ResourceLinks, type ResourceLink } from "../common/ResourceLinks";
import { cx } from "../common/classNames";
import { newTabLinkProps } from "../common/linkProps";
import styles from "./CompactItem.module.css";

type CompactItemProps = {
  year: string;
  title: string;
  venue?: string;
  location?: string;
  href?: string;
  description?: string;
  details?: ExpandableDetailsText;
  links?: readonly ResourceLink[];
};

/** Renders compact date-led entries, currently used for additional presentations. */
export function CompactItem({
  year,
  title,
  venue,
  location,
  href,
  description,
  details,
  links = [],
}: CompactItemProps) {
  const meta = [venue, location].filter(Boolean);
  const descriptionElement = description ? (
    details ? (
      <ExpandableDetails
        summary={description}
        details={details}
        variant="compact"
      />
    ) : (
      <span className={styles.description}>{description}</span>
    )
  ) : null;

  const titleElement = href ? (
    <a className={styles.titleLink} href={href} {...newTabLinkProps}>
      <span className={styles.titleText}>{title}</span>
    </a>
  ) : (
    <span className={styles.titleText}>{title}</span>
  );
  const className = cx(styles.item, href ? styles.link : styles.staticItem);

  return (
    <div className={className}>
      <time>{year}</time>
      <div className={styles.body}>
        {titleElement}
        {meta.length ? (
          <span className={styles.meta}>
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </span>
        ) : null}
        {descriptionElement}
        <ResourceLinks links={links} label={`Resources for ${title}`} />
      </div>
    </div>
  );
}
