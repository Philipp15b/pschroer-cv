export const newTabLinkProps = {
  target: "_blank",
  rel: "noreferrer",
} as const;

export function optionalNewTabLinkProps(href: string, forceNewTab = false) {
  return forceNewTab || href.startsWith("http") ? newTabLinkProps : {};
}
