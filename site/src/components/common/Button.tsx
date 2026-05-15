import { Icon, type IconName } from "./Icon";
import { cx } from "./classNames";
import controlStyles from "./ControlButton.module.css";
import { optionalNewTabLinkProps } from "./linkProps";

type ButtonProps = {
  href: string;
  icon: IconName;
  label: string;
  openInNewTab?: boolean;
  variant?: "primary";
};

/** Prominent action link used by HeroSection for profile calls to action. */
export function Button({
  href,
  icon,
  label,
  openInNewTab,
  variant,
}: ButtonProps) {
  const className = cx(
    controlStyles.control,
    controlStyles.callToAction,
    variant && controlStyles[variant],
  );

  return (
    <a
      className={className}
      href={href}
      {...optionalNewTabLinkProps(href, openInNewTab)}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </a>
  );
}
