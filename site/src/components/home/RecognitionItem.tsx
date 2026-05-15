import { Icon, type IconName } from "../common/Icon";
import { newTabLinkProps } from "../common/linkProps";
import styles from "./RecognitionItem.module.css";

type RecognitionItemProps = {
  year: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  icon: IconName;
};

/** Funding or award entry used by PresentationsRecognitionSection. */
export function RecognitionItem({
  year,
  title,
  body,
  href,
  linkLabel,
  icon,
}: RecognitionItemProps) {
  return (
    <article className={styles.item}>
      <time>{year}</time>
      <div className={styles.body}>
        <h3 className={styles.title}>
          <Icon name={icon} />
          <span>{title}</span>
        </h3>
        <p>{body}</p>
        <a className={styles.link} href={href} {...newTabLinkProps}>
          {linkLabel} <Icon name="arrow-up-right" />
        </a>
      </div>
    </article>
  );
}
