import {
  createHighlighterCore,
  type LanguageRegistration,
  type ThemeRegistration,
} from "shiki/core";
import { createOnigurumaEngine } from "shiki/engine/oniguruma";
import heyvlGrammar from "./heyvl.tmLanguage.json";

export const heyvlGuideUrl =
  "https://www.caesarverifier.org/docs/getting-started/heyvl-guide/";

const heyvlExampleCode = `proc geo(init_c: UInt) -> (c: UInt)
  pre init_c + 1
  post c
  @invariant(c + 1) while cont { ... }`;

const heyvlLanguage = {
  ...heyvlGrammar,
  name: "heyvl",
} satisfies LanguageRegistration;

const heyvlTheme = {
  name: "heyvl-site",
  type: "light",
  colors: {
    "editor.background": "var(--code-bg)",
    "editor.foreground": "var(--code-text)",
  },
  tokenColors: [
    {
      scope: ["keyword.control.heyvl"],
      settings: {
        foreground: "var(--code-token-keyword)",
        fontStyle: "normal",
      },
    },
    {
      scope: ["keyword.operator.heyvl", "punctuation"],
      settings: {
        foreground: "var(--code-token-symbol)",
        fontStyle: "normal",
      },
    },
    {
      scope: ["entity.name.tag", "support.function.builtin"],
      settings: {
        foreground: "var(--code-token-name)",
        fontStyle: "normal",
      },
    },
    {
      scope: ["entity.name.type"],
      settings: {
        foreground: "var(--code-token-type)",
        fontStyle: "normal",
      },
    },
    {
      scope: ["constant.numeric", "constant.language"],
      settings: {
        foreground: "var(--code-token-number)",
        fontStyle: "normal",
      },
    },
    {
      scope: ["comment"],
      settings: {
        foreground: "var(--code-token-muted)",
        fontStyle: "normal",
      },
    },
  ],
} satisfies ThemeRegistration;

type HighlightedCodeToken = {
  key: string;
  content: string;
  color: string;
};

type HighlightedCodeLine = {
  key: string;
  tokens: readonly HighlightedCodeToken[];
  newlineAfter: boolean;
};

const heyvlHighlighter = await createHighlighterCore({
  engine: createOnigurumaEngine(import("shiki/wasm")),
  langs: [heyvlLanguage],
  themes: [heyvlTheme],
});

const highlightedHeyvlExample = heyvlHighlighter.codeToTokens(
  heyvlExampleCode,
  {
    lang: "heyvl",
    theme: "heyvl-site",
  },
);

heyvlHighlighter.dispose();

/** Static HeyVL snippet highlighted at build time for ResearchSoftwareSection. */
export const highlightedHeyvlExampleLines: readonly HighlightedCodeLine[] =
  highlightedHeyvlExample.tokens.map((line, lineIndex, lines) => {
    const lineText = line.map(({ content }) => content).join("");

    return {
      key: `${lineIndex}-${lineText}`,
      newlineAfter: lineIndex < lines.length - 1,
      tokens: line.map(({ color, content }, tokenIndex) => ({
        key: `${tokenIndex}-${content}`,
        color: color ?? "var(--code-text)",
        content,
      })),
    };
  });
