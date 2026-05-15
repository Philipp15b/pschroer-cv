import { Fragment } from "react";
import type { LinkedTextPart } from "../../data/homeContent";
import { InlineLink } from "../common/InlineLink";

/** Renders hero copy fragments from homeContent.ts, using InlineLink for linked spans. */
export function LinkedText({ parts }: { parts: readonly LinkedTextPart[] }) {
  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <Fragment key={linkedTextPartKey(part, index)}>{part}</Fragment>
        ) : (
          <InlineLink href={part.href} key={linkedTextPartKey(part, index)}>
            {part.label}
          </InlineLink>
        ),
      )}
    </>
  );
}

/** Stable key for static LinkedText arrays rendered by timeline and service rows. */
export function linkedTextKey(parts: readonly LinkedTextPart[]) {
  return parts.map((part, index) => linkedTextPartKey(part, index)).join("|");
}

function linkedTextPartKey(part: LinkedTextPart, index: number) {
  return typeof part === "string"
    ? `${index}-text-${part}`
    : `${index}-link-${part.href}-${part.label}`;
}
