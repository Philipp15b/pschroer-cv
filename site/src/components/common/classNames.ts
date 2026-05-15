type ClassName = string | false | null | undefined;

/** Joins optional CSS module class names without leaking falsey placeholders. */
export function cx(...classNames: readonly ClassName[]) {
  return classNames.filter(Boolean).join(" ");
}
