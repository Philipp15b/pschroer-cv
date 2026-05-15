import { Icon, type IconName } from "../common/Icon";
import { cx } from "../common/classNames";
import { optionalNewTabLinkProps } from "../common/linkProps";
import styles from "./ContactLink.module.css";

type ContactLinkProps = {
  href: string;
  icon: IconName;
  label: string;
  printLabel?: string;
  printHidden?: boolean;
};

/** Contact/profile link used by ContactStrip. */
export function ContactLink({
  href,
  icon,
  label,
  printLabel,
  printHidden = false,
}: ContactLinkProps) {
  const screenLabelClassName = cx(
    styles.screenLabel,
    printLabel && styles.screenLabelWithPrintAlternative,
  );

  return (
    <a
      className={cx(styles.link, printHidden && styles.printHidden)}
      href={href}
      {...optionalNewTabLinkProps(href)}
    >
      <Icon name={icon} />
      <span className={screenLabelClassName}>{label}</span>
      {printLabel ? (
        <span className={styles.printLabel}>{printLabel}</span>
      ) : null}
    </a>
  );
}
