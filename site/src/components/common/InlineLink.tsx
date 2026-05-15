import type { ReactNode } from "react";
import { optionalNewTabLinkProps } from "./linkProps";
import styles from "./InlineLink.module.css";

type InlineLinkProps = {
  href: string;
  children: ReactNode;
};

/** Inline prose link used by LinkedText for mixed text/link copy. */
export function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <a className={styles.link} href={href} {...optionalNewTabLinkProps(href)}>
      {children}
    </a>
  );
}
