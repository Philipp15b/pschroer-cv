import { revealProps } from "../../domHooks";
import type { SiteImage } from "../../images";
import {
  ExpandableDetails,
  type ExpandableDetailsText,
} from "../common/ExpandableDetails";
import { Icon, type IconName } from "../common/Icon";
import { ResourceLinks, type ResourceLink } from "../common/ResourceLinks";
import { cx } from "../common/classNames";
import { newTabLinkProps } from "../common/linkProps";
import styles from "./Publication.module.css";

type PublicationProps = {
  year: string;
  title: string;
  venue: string;
  distinction?: {
    label: string;
    icon: IconName;
  };
  authors: string;
  href: string;
  description?: string;
  details?: ExpandableDetailsText;
  links?: readonly ResourceLink[];
  /** Decorative paper/code previews rendered as a small paper stack. */
  decoration?: readonly SiteImage[];
  highlight?: boolean;
};

/** Renders rows for PublicationsSection with optional resources and decorative previews. */
export function Publication({
  year,
  title,
  venue,
  distinction,
  authors,
  href,
  description,
  details,
  links = [],
  decoration = [],
  highlight = false,
}: PublicationProps) {
  const visualFragments = decoration.slice(0, 2);
  const hasVisualFragments = visualFragments.length > 0;
  const decorationLink = links[0] ?? { href, label: "publication page" };
  const articleClassName = cx(
    styles.publication,
    highlight && styles.highlight,
  );
  const contentClassName = hasVisualFragments
    ? cx(styles.content, styles.contentWithDecoration)
    : styles.content;
  const descriptionElement = description ? (
    details ? (
      <ExpandableDetails summary={description} details={details} />
    ) : (
      <p className={styles.description}>{description}</p>
    )
  ) : null;

  return (
    <article className={articleClassName} {...revealProps}>
      <time>{year}</time>
      <div className={contentClassName}>
        <div className={styles.main}>
          <h3>
            <a className={styles.titleLink} href={href} {...newTabLinkProps}>
              <span>{title}</span>
              <Icon name="arrow-up-right" />
            </a>
          </h3>
          <p className={styles.venue}>
            <span>{venue}</span>
            {distinction ? (
              <span className={styles.distinction}>
                <Icon name={distinction.icon} />
                <span>{distinction.label}</span>
              </span>
            ) : null}
          </p>
          <p>{authors}</p>
          {descriptionElement}
          <ResourceLinks
            className={styles.resourceLinks}
            links={links}
            label={`Resources for ${title}`}
          />
        </div>
        {hasVisualFragments ? (
          <a
            className={styles.decoration}
            href={decorationLink.href}
            {...newTabLinkProps}
            aria-label={`Open ${decorationLink.label} for ${title}`}
          >
            <div className={styles.paperStack}>
              <span
                className={cx(
                  styles.paper,
                  styles.paperLayer,
                  styles.paperLayerOne,
                )}
              />
              <span
                className={cx(
                  styles.paper,
                  styles.paperLayer,
                  styles.paperLayerTwo,
                )}
              />
              {visualFragments.map((image, index) => (
                <figure
                  className={cx(
                    styles.paper,
                    styles.imagePaper,
                    index === 0 ? styles.imagePaperOne : styles.imagePaperTwo,
                  )}
                  key={image.src}
                >
                  <img
                    src={image.src}
                    width={image.width}
                    height={image.height}
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </a>
        ) : null}
      </div>
    </article>
  );
}
