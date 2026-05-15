import { Icon, type IconName } from "./Icon";
import { cx } from "./classNames";
import { newTabLinkProps } from "./linkProps";
import styles from "./ResourceLinks.module.css";

/** Metadata for one small resource chip under a publication or presentation. */
export type ResourceLink = {
  label: string;
  href: string;
  kind?:
    | "artifact"
    | "blog"
    | "event"
    | "github"
    | "materials"
    | "paper"
    | "preprint"
    | "slides"
    | "video";
};

const linkIcons: Record<NonNullable<ResourceLink["kind"]>, IconName> = {
  artifact: "archive",
  blog: "newspaper",
  event: "calendar",
  github: "github",
  materials: "folder",
  paper: "info",
  preprint: "file-text",
  slides: "presentation",
  video: "play",
};

type ResourceLinksProps = {
  links?: readonly ResourceLink[];
  label: string;
  className?: string;
};

/** Renders resource chips used by Publication and CompactItem entries. */
export function ResourceLinks({
  links = [],
  label,
  className,
}: ResourceLinksProps) {
  if (!links.length) {
    return null;
  }

  return (
    <div className={cx(styles.links, className)} aria-label={label}>
      {links.map((link) => (
        <a
          className={styles.link}
          href={link.href}
          key={`${link.label}-${link.href}`}
          {...newTabLinkProps}
        >
          {link.kind ? <Icon name={linkIcons[link.kind]} /> : null}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
