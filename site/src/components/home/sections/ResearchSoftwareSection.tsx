import caesarLaurel from "../../../assets/caesar-laurel.svg";
import { revealProps } from "../../../domHooks";
import { caesarFocusAreas } from "../../../data/homeContent";
import {
  heyvlGuideUrl,
  highlightedHeyvlExampleLines,
} from "../../../syntax/heyvl";
import { Icon } from "../../common/Icon";
import { SectionHeading } from "../../common/SectionHeading";
import { newTabLinkProps } from "../../common/linkProps";
import { HomeSection } from "./HomeSection";
import styles from "./ResearchSoftwareSection.module.css";

export function ResearchSoftwareSection() {
  return (
    <HomeSection id="research" tone="light">
      <SectionHeading title="Research Software: Caesar" />
      <div className={styles.feature} {...revealProps}>
        <div className={styles.titleBlock}>
          <img src={caesarLaurel.src} alt="" />
          <div>
            <h3>Caesar verifier</h3>
            <p>Deductive verification for probabilistic programs</p>
            <HeyvlCodeAccent />
          </div>
        </div>
        <p>
          Caesar is a deductive verifier for probabilistic programs. Its core
          language HeyVL, based on the real-valued logic HeyLo, expresses
          programs, specifications, and proof rules based on weakest
          pre-expectation-style semantics. Caesar uses SMT-based reasoning for
          verification and also provides a probabilistic model-checking backend
          for a subset of HeyVL.
        </p>
        <div className={styles.stats} aria-label="Caesar focus areas">
          {caesarFocusAreas.map((area) => (
            <div key={area.title}>
              <strong>{area.title}</strong>
              <span>{area.body}</span>
            </div>
          ))}
        </div>
        <div className={styles.links}>
          <a href="https://www.caesarverifier.org/" {...newTabLinkProps}>
            Caesar website <Icon name="arrow-up-right" />
          </a>
          <a
            href="https://www.caesarverifier.org/docs/publications/"
            {...newTabLinkProps}
          >
            Publications <Icon name="arrow-up-right" />
          </a>
        </div>
      </div>
    </HomeSection>
  );
}

function HeyvlCodeAccent() {
  return (
    <a
      className={styles.codeLink}
      href={heyvlGuideUrl}
      {...newTabLinkProps}
      aria-label="Open the Caesar Guide to HeyVL"
    >
      <pre className={styles.code} aria-hidden="true">
        <code>
          {highlightedHeyvlExampleLines.map((line) => (
            <span className={styles.codeLine} key={line.key}>
              {line.tokens.map((token) => (
                <span
                  className={styles.codeToken}
                  key={token.key}
                  style={{ color: token.color }}
                >
                  {token.content}
                </span>
              ))}
              {line.newlineAfter ? "\n" : null}
            </span>
          ))}
        </code>
      </pre>
    </a>
  );
}
