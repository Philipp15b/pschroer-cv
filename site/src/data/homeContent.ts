import type { ExpandableDetailsText } from "../components/common/ExpandableDetails";
import type { IconName } from "../components/common/Icon";
import type { ResourceLink } from "../components/common/ResourceLinks";
import type { PublicationDecorationKey } from "../images";

/** A prose fragment; object fragments become inline links. */
export type LinkedTextPart = string | { label: string; href: string };

type ActionLink = {
  href: string;
  icon: IconName;
  label: string;
  openInNewTab?: boolean;
  variant?: "primary";
};

type ContactItem = {
  href: string;
  icon: IconName;
  label: string;
  /** Optional replacement text when the contact strip is printed. */
  printLabel?: string;
  /** Hide links whose label is not useful without clickable browser context. */
  printHidden?: boolean;
};

type PublicationItem = {
  year: string;
  title: string;
  venue: string;
  distinction?: {
    label: string;
    icon: IconName;
  };
  authors: string;
  href: string;
  description?: string;
  details?: ExpandableDetailsText;
  links?: readonly ResourceLink[];
  decoration?: readonly PublicationDecorationKey[];
  highlight?: boolean;
};

type TimelineEntry = {
  period: string;
  title: string;
  affiliation: readonly LinkedTextPart[];
  bullets: readonly LinkedTextPart[][];
};

type EducationEntry = {
  period: string;
  title: string;
  description: readonly LinkedTextPart[];
};

type TeachingCourse = {
  label: string;
  href: string;
  terms: readonly { label: string; href: string }[];
};

/** Group of related teaching courses, such as lectures or seminars. */
export type TeachingGroup = {
  title: string;
  courses: readonly TeachingCourse[];
};

type CompactPresentation = {
  year: string;
  title: string;
  venue?: string;
  location?: string;
  href?: string;
  description?: string;
  details?: ExpandableDetailsText;
  links?: readonly ResourceLink[];
};

type RecognitionItem = {
  year: string;
  title: string;
  body: string;
  href: string;
  linkLabel: string;
  icon: IconName;
};

type ToolkitItem = {
  title: string;
  body: string;
};

/** Longer publication abstracts kept out of the row data for readability. */
const publicationAbstracts = {
  highlyIncremental: [
    "We present a one-fits-all programmatic approach to reason about a plethora of objectives on probabilistic programs. The first ingredient is to add a reward-statement to the language. We then define a program transformation applying a monotone function to the cumulative reward of the program. The key idea is that this transformation uses incremental differences in the reward.",
    "This simple, elegant approach enables to express e.g., higher moments, threshold probabilities of rewards, the expected excess over a budget, and moment-generating functions. All these objectives can now be analyzed using a single existing approach: probabilistic wp-reasoning. We automated verification using the Caesar deductive verifier and report on the application of the transformation to some examples.",
  ],
  slicing: [
    "This paper focuses on effective user diagnostics generated during the deductive verification of probabilistic programs. Our key principle is based on providing slices for (1) error reporting, (2) proof simplification, and (3) preserving successful verification results.",
    "By formally defining these different notions on HeyVL, an existing quantitative intermediate verification language (IVL), our concepts (and implementation) can be used to obtain diagnostics for a range of probabilistic programming languages. Slicing for error reporting is a novel notion of error localization for quantitative assertions. We demonstrate slicing-based diagnostics on a variety of proof rules such as quantitative versions of the specification statement and invariant-based loop rules, and formally prove the correctness of specialized error messages and verification hints.",
    "We implemented our user diagnostics into the deductive verifier Caesar. Our novel implementation, called Brutus, can search for slices which do or do not verify, corresponding to each of the three diagnostic notions. For error reporting (1), it exploits a binary search-based algorithm that minimizes error-witnessing slices.",
    "To solve for slices that verify (2 and 3), we empirically compare different algorithms based on unsatisfiable cores, minimal unsatisfiable subset enumeration, and a direct SMT encoding of the slicing problem. Our empirical evaluation of Brutus on existing and new benchmarks shows that we can find slices that are both small and informative.",
  ],
  qif: [
    "It is of utmost importance to ensure that modern data intensive systems do not leak sensitive information. In this paper, the authors, who met thanks to Joost-Pieter Katoen, discuss symbolic methods to compute information-theoretic measures of leakage: entropy, conditional entropy, Kullback-Leibler divergence, and mutual information.",
    "We build on two semantic frameworks for symbolic execution of probabilistic programs. For discrete programs, we use weakest pre-expectation calculus to compute exact symbolic expressions for the leakage measures. Using Second Order Gaussian Approximation (SOGA), we handle programs that combine discrete and continuous distributions. However, in the SOGA setting, we approximate the exact semantics using Gaussian mixtures and compute bounds for the measures.",
    "We demonstrate the use of our methods in two widely used mechanisms to ensure differential privacy: randomized response and the Gaussian mechanism.",
  ],
  infrastructure: [
    "This paper presents a quantitative program verification infrastructure for discrete probabilistic programs. Our infrastructure can be viewed as the probabilistic analogue of Boogie: its central components are an intermediate verification language (IVL) together with a real-valued logic.",
    "Our IVL provides a programming-language-style for expressing verification conditions whose validity implies the correctness of a program under investigation. As our focus is on verifying quantitative properties such as bounds on expected outcomes, expected run-times, or termination probabilities, off-the-shelf IVLs based on Boolean first-order logic do not suffice. Instead, a paradigm shift from the standard Boolean to a real-valued domain is required.",
    "Our IVL features quantitative generalizations of standard verification constructs such as assume- and assert-statements. Verification conditions are generated by a weakest-precondition-style semantics, based on our real-valued logic.",
    "We show that our verification infrastructure supports natural encodings of numerous verification techniques from the literature. With our SMT-based implementation, we automatically verify a variety of benchmarks. To the best of our knowledge, this establishes the first deductive verification infrastructure for expectation-based reasoning about probabilistic programs.",
  ],
  latticedKInduction: [
    "We revisit two well-established verification techniques, k-induction and bounded model checking (BMC), in the more general setting of fixed point theory over complete lattices.",
    "Our main theoretical contribution is latticed k-induction, which (i) generalizes classical k-induction for verifying transition systems, (ii) generalizes Park induction for bounding fixed points of monotonic maps on complete lattices, and (iii) extends from naturals k to transfinite ordinals κ, thus yielding κ-induction.",
    "The lattice-theoretic understanding of k-induction and BMC enables us to apply both techniques to the fully automatic verification of infinite-state probabilistic programs. Our prototypical implementation manages to automatically verify non-trivial specifications for probabilistic programs taken from the literature that—using existing techniques—cannot be verified without synthesizing a stronger inductive invariant first.",
  ],
  pric3: [
    "IC3 has been a leap forward in symbolic model checking. This paper proposes PrIC3 (pronounced pricy-three), a conservative extension of IC3 to symbolic model checking of MDPs.",
    "Our main focus is to develop the theory underlying PrIC3. Alongside, we present a first implementation of PrIC3 including the key ingredients from IC3 such as generalization, repushing, and propagation.",
  ],
} as const;

/** Longer talk details kept out of the compact presentation rows. */
const talkAbstracts = {
  ssft25: [
    'Probabilistic programs encode randomized algorithms, robot controllers, learning components, security mechanisms, and much more. They are however hard to grasp. Not only by humans, also by computers: checking elementary properties related to e.g., termination are "more undecidable" than for ordinary programs. The analysis of probabilistic programs requires manipulating irrational or even transcendental numbers.',
    "Although this all sounds like a no-go for (semi-)automated analysis, I will present a deductive verification technique to analyse probabilistic programs. In contrast to simulation (like MCMC), this analysis yields exact results.",
    "Our technique is based on weakest precondition reasoning. We will explain the foundations of this approach, present some proof rules to reason about probabilistic while-loops, and discuss how the analysis can be automated — either fully or with the help of invariants.",
  ],
} as const;

export const heroCopy: readonly LinkedTextPart[] = [
  "I am a PhD student in the ",
  {
    label: "Software Modeling and Verification Group (MOVES)",
    href: "https://moves.rwth-aachen.de/",
  },
  " at RWTH Aachen University. I care about solid foundations for probabilistic verification and bringing theory into practice by developing ",
  { label: "Caesar", href: "https://www.caesarverifier.org/" },
  ", an automated verification infrastructure for reasoning about software with randomness and proving quantitative correctness properties.",
];

export const heroActions = [
  {
    href: "https://www.caesarverifier.org/",
    icon: "code",
    label: "Caesar",
    variant: "primary",
  },
  { href: "https://github.com/Philipp15b/", icon: "github", label: "GitHub" },
  {
    href: "files/philipp-schroer-cv.pdf",
    icon: "download",
    label: "CV PDF",
    openInNewTab: true,
  },
] as const satisfies readonly ActionLink[];

export const contactLinks = [
  {
    href: "mailto:mail@pschroer.de",
    icon: "envelope",
    label: "mail@pschroer.de",
  },
  {
    href: "mailto:phisch@cs.rwth-aachen.de",
    icon: "envelope",
    label: "phisch@cs.rwth-aachen.de",
  },
  {
    href: "https://moves.rwth-aachen.de/people/philipp-schroer/",
    icon: "globe",
    label: "My MOVES page",
    printLabel: "https://moves.rwth-aachen.de/people/philipp-schroer/",
  },
  {
    href: "https://www.linkedin.com/in/philipp-schroer/",
    icon: "linkedin",
    label: "LinkedIn",
    printHidden: true,
  },
  {
    href: "https://orcid.org/0000-0002-4329-530X",
    icon: "id",
    label: "ORCID",
    printHidden: true,
  },
] as const satisfies readonly ContactItem[];

export const caesarFocusAreas = [
  {
    title: "Probabilistic programs",
    body: "probabilities and expected values",
  },
  { title: "HeyVL / HeyLo", body: "specification language and logic" },
  { title: "Automation", body: "SMT solving and model checking" },
] as const;

export const publications: readonly PublicationItem[] = [
  {
    year: "2026",
    title: "Caesar: A Deductive Verifier for Probabilistic Programs.",
    venue: "CAV 2026.",
    authors:
      "Philipp Schröer, Kevin Batz, Umut Yiğit Dural, Darion Haase, Benjamin Lucien Kaminski, Joost-Pieter Katoen, Christoph Matheja.",
    href: "https://www.caesarverifier.org/docs/publications#cav-26-caesar-a-deductive-verifier-for-probabilistic-programs",
    description:
      "A tool paper presenting Caesar as a deductive verifier, from its quantitative core language to its practical tooling.",
    links: [
      {
        label: "Blog post",
        href: "https://www.caesarverifier.org/blog/2026/04/20/caesar-tool-paper-cav",
        kind: "blog",
      },
      {
        label: "More details",
        href: "https://www.caesarverifier.org/docs/publications#cav-26-caesar-a-deductive-verifier-for-probabilistic-programs",
        kind: "paper",
      },
    ],
  },
  {
    year: "2026",
    title:
      "Highly Incremental: A Simple Programmatic Approach for Many Objectives.",
    venue: "FM 2026.",
    authors: "Philipp Schröer, Joost-Pieter Katoen.",
    href: "https://www.caesarverifier.org/docs/publications#fm-26-highly-incremental-a-simple-programmatic-approach-for-many-objectives",
    description:
      "A reward-based program transformation that lets many quantitative objectives reuse standard probabilistic wp reasoning.",
    details: publicationAbstracts.highlyIncremental,
    decoration: ["paperHighlyIncremental"],
    links: [
      {
        label: "Blog post",
        href: "https://www.caesarverifier.org/blog/2026/03/04/highly-incremental/",
        kind: "blog",
      },
      {
        label: "Extended version",
        href: "https://arxiv.org/abs/2603.02405",
        kind: "preprint",
      },
      {
        label: "More details",
        href: "https://www.caesarverifier.org/docs/publications#fm-26-highly-incremental-a-simple-programmatic-approach-for-many-objectives",
        kind: "paper",
      },
    ],
  },
  {
    year: "2026",
    title:
      "Error Localization, Certificates, and Hints for Probabilistic Program Verification via Slicing.",
    venue: "ESOP 2026.",
    authors: "Philipp Schröer, Darion Haase, Joost-Pieter Katoen.",
    href: "https://www.caesarverifier.org/docs/publications#esop-26-error-localization-certificates-and-hints-for-probabilistic-program-verification-via-slicing",
    description:
      "Slicing-based diagnostics for Caesar that localize errors, simplify proofs, and preserve successful verification results.",
    details: publicationAbstracts.slicing,
    decoration: ["paperSlicing", "caesarSlicing"],
    links: [
      {
        label: "Blog post",
        href: "https://www.caesarverifier.org/blog/2025/12/23/esop26-slicing/",
        kind: "blog",
      },
      {
        label: "Extended version",
        href: "https://arxiv.org/abs/2512.20214",
        kind: "preprint",
      },
      {
        label: "Slides",
        href: "https://www.caesarverifier.org/blog/2026/01/11/dafny26-slicing/",
        kind: "slides",
      },
      {
        label: "More details",
        href: "https://www.caesarverifier.org/docs/publications#esop-26-error-localization-certificates-and-hints-for-probabilistic-program-verification-via-slicing",
        kind: "paper",
      },
    ],
  },
  {
    year: "2025",
    title: "Symbolic Quantitative Information Flow for Probabilistic Programs.",
    venue: "Principles of Verification: Cycling the Probabilistic Landscape.",
    authors:
      "Philipp Schröer, Francesca Randone, Raúl Pardo, Andrzej Wąsowski.",
    href: "https://link.springer.com/chapter/10.1007/978-3-031-75783-9_6",
    description:
      "Symbolic methods for computing information-theoretic leakage measures of probabilistic programs.",
    details: publicationAbstracts.qif,
    decoration: ["paperQif"],
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2412.00907",
        kind: "preprint",
      },
    ],
  },
  {
    year: "2023",
    title:
      "A Deductive Verification Infrastructure for Probabilistic Programs.",
    venue: "OOPSLA 2023.",
    distinction: {
      label: "Distinguished Artifact",
      icon: "award",
    },
    authors:
      "Philipp Schröer, Kevin Batz, Benjamin Lucien Kaminski, Joost-Pieter Katoen, Christoph Matheja.",
    href: "https://www.caesarverifier.org/docs/publications#oopsla-23",
    description:
      "The foundational Caesar paper: a Boogie-like verification infrastructure for probabilistic programs with a quantitative IVL and real-valued logic.",
    details: publicationAbstracts.infrastructure,
    decoration: ["paperInfrastructure"],
    links: [
      {
        label: "Blog post",
        href: "https://www.caesarverifier.org/blog/2023/09/28/oopsla23/",
        kind: "blog",
      },
      {
        label: "Extended version",
        href: "https://arxiv.org/abs/2309.07781",
        kind: "preprint",
      },
      {
        label: "Artifact",
        href: "https://doi.org/10.5281/zenodo.8146987",
        kind: "artifact",
      },
      {
        label: "Video",
        href: "https://www.youtube.com/watch?v=2cHo4HsuYJY",
        kind: "video",
      },
      {
        label: "Slides",
        href: "https://www.caesarverifier.org/assets/talks/dafny2024.pdf",
        kind: "slides",
      },
      {
        label: "More details",
        href: "https://www.caesarverifier.org/docs/publications#oopsla-23",
        kind: "paper",
      },
    ],
    highlight: true,
  },
  {
    year: "2021",
    title:
      "Latticed k-Induction with an Application to Probabilistic Programs.",
    venue: "CAV 2021.",
    authors:
      "Kevin Batz, Mingshuai Chen, Benjamin Lucien Kaminski, Joost-Pieter Katoen, Christoph Matheja, Philipp Schröer.",
    href: "https://link.springer.com/chapter/10.1007/978-3-030-81688-9_25",
    description:
      "A lattice-theoretic generalization of k-induction and bounded model checking, applied to probabilistic programs.",
    details: publicationAbstracts.latticedKInduction,
    decoration: ["paperLatticedKInduction"],
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2105.14100",
        kind: "preprint",
      },
      {
        label: "Slides",
        href: "https://fiction-zju.github.io/slides/ISCAS22.pdf",
        kind: "slides",
      },
      {
        label: "Artifact",
        href: "https://doi.org/10.5281/zenodo.4723882",
        kind: "artifact",
      },
      {
        label: "GitHub",
        href: "https://github.com/moves-rwth/kipro2",
        kind: "github",
      },
    ],
  },
  {
    year: "2020",
    title: "PrIC3: Property Directed Reachability for MDPs.",
    venue: "CAV 2020.",
    authors:
      "Kevin Batz, Sebastian Junges, Benjamin Lucien Kaminski, Joost-Pieter Katoen, Christoph Matheja, Philipp Schröer.",
    href: "https://link.springer.com/chapter/10.1007/978-3-030-53291-8_27",
    description:
      "An IC3/PDR-style symbolic model-checking framework for quantitative reachability in Markov decision processes.",
    details: publicationAbstracts.pric3,
    decoration: ["paperPric3"],
    links: [
      {
        label: "arXiv",
        href: "https://arxiv.org/abs/2004.14835",
        kind: "preprint",
      },
      {
        label: "Video",
        href: "https://youtu.be/dAuBRF3AWos?t=3600",
        kind: "video",
      },
      {
        label: "GitHub",
        href: "https://github.com/moves-rwth/pric3",
        kind: "github",
      },
    ],
  },
];

export const experienceEntries = [
  {
    period: "2022-present · Aachen",
    title: "Doctoral Researcher / PhD Student",
    affiliation: [
      {
        label: "Software Modeling and Verification Group",
        href: "https://moves.rwth-aachen.de/",
      },
      ", ",
      { label: "RWTH Aachen University", href: "https://www.rwth-aachen.de/" },
    ],
    bullets: [
      [
        "Design and implementation of Caesar: an open-source deductive verifier for probabilistic programs, including HeyVL, HeyLo, SMT-based verification, model-checking integration, diagnostics, and VS Code tooling.",
      ],
      [
        "Teach lectures, seminars, and practical courses in probabilistic programming, model checking, concurrency theory, and software verification; prepare exercises, lead sessions, supervise students, and support course organization.",
      ],
      [
        "Publish and present research on probabilistic program verification, including work at OOPSLA, CAV, ESOP, and FM.",
      ],
    ],
  },
  {
    period: "2019-2021 · Aachen",
    title: "Student Assistant",
    affiliation: [
      {
        label: "Software Modeling and Verification Group",
        href: "https://moves.rwth-aachen.de/",
      },
      ", ",
      { label: "RWTH Aachen University", href: "https://www.rwth-aachen.de/" },
    ],
    bullets: [
      [
        "Built research prototypes for the PrIC3 and latticed k-induction publications, covering MDP analysis and probabilistic-program verification.",
      ],
      [
        "Developed ",
        { label: "probably", href: "https://philipp15b.github.io/probably/" },
        ", a Python library for exact and symbolic calculations with probability distributions, alongside the publication-specific verification tools.",
      ],
    ],
  },
  {
    period: "2019 · Graz / Aachen",
    title: "Software Consultant",
    affiliation: [
      { label: "CAMPUSonline", href: "https://www.campusonline.tugraz.at/" },
      ", ",
      { label: "TU Graz", href: "https://www.tugraz.at/" },
    ],
    bullets: [
      [
        "Improved performance and user-interface behavior in the ",
        {
          label: "RWTHonline",
          href: "https://www.rwth-aachen.de/cms/root/studium/beratung-hilfe/~dxla/rwthonline/",
        },
        " frontend.",
      ],
      [
        "Developed components of the ",
        { label: "CoCommunity", href: "https://campusonline.community/" },
        " communication program.",
      ],
    ],
  },
  {
    period: "2018 · Aachen",
    title: "Student Assistant",
    affiliation: [
      { label: "LuFG i9", href: "https://learntech.rwth-aachen.de/" },
      ", ",
      { label: "RWTH Aachen University", href: "https://www.rwth-aachen.de/" },
    ],
    bullets: [
      [
        "Designed and implemented features for ",
        { label: "SWOFI", href: "https://swofi.net/" },
        ", a scientific-workflow learning platform.",
      ],
    ],
  },
] as const satisfies readonly TimelineEntry[];

export const educationEntries = [
  {
    period: "2022-present",
    title: "PhD Student in Computer Science",
    description: [
      {
        label: "Software Modeling and Verification Group",
        href: "https://moves.rwth-aachen.de/",
      },
      "; supervisor: ",
      {
        label: "Joost-Pieter Katoen",
        href: "https://moves.rwth-aachen.de/people/katoen/",
      },
      ".",
    ],
  },
  {
    period: "2019-2022",
    title: "M.Sc. Computer Science",
    description: [
      "Thesis: ",
      {
        label: "A Deductive Verifier for Probabilistic Programs",
        href: "https://www.caesarverifier.org/docs/publications#master-thesis-22-a-deductive-verifier-for-probabilistic-programs",
      },
      ".",
    ],
  },
  {
    period: "2015-2019",
    title: "B.Sc. Computer Science",
    description: [
      "Thesis: Understanding Abstraction of Probabilistic Programs.",
    ],
  },
] as const satisfies readonly EducationEntry[];

export const teachingGroups = [
  {
    title: "Practical Courses",
    courses: [
      {
        label: "Implementation of Heuristic Algorithms for Board Games",
        href: "https://moves.rwth-aachen.de/teaching/ss-26/swp/",
        terms: [
          {
            label: "SS26",
            href: "https://moves.rwth-aachen.de/teaching/ss-26/swp/",
          },
          {
            label: "SS25",
            href: "https://moves.rwth-aachen.de/teaching/ss-25/swp/",
          },
        ],
      },
      {
        label: "Model Checking",
        href: "https://moves.rwth-aachen.de/teaching/ws-2025-26/practical-course-model-checking/",
        terms: [
          {
            label: "WS25/26",
            href: "https://moves.rwth-aachen.de/teaching/ws-2025-26/practical-course-model-checking/",
          },
          {
            label: "WS24/25",
            href: "https://moves.rwth-aachen.de/teaching/ws-2024-25/gntmc/",
          },
        ],
      },
    ],
  },
  {
    title: "Lectures",
    courses: [
      {
        label: "Probabilistic Programming",
        href: "https://moves.rwth-aachen.de/teaching/ws-2025-26/probabilistic-programming/",
        terms: [
          {
            label: "WS25/26",
            href: "https://moves.rwth-aachen.de/teaching/ws-2025-26/probabilistic-programming/",
          },
          {
            label: "SS24",
            href: "https://moves.rwth-aachen.de/teaching/ss-24/probabilistic-programming/",
          },
          {
            label: "WS22/23",
            href: "https://moves.rwth-aachen.de/teaching/ws-22-23/probabilistic-programming-winter-22-23/",
          },
        ],
      },
      {
        label: "Concurrency Theory",
        href: "https://moves.rwth-aachen.de/teaching/ws-23-24/ct/",
        terms: [
          {
            label: "WS23/24",
            href: "https://moves.rwth-aachen.de/teaching/ws-23-24/ct/",
          },
        ],
      },
      {
        label: "Semantics and Verification of Software",
        href: "https://moves.rwth-aachen.de/teaching/ss-23/savos/",
        terms: [
          {
            label: "SS23",
            href: "https://moves.rwth-aachen.de/teaching/ss-23/savos/",
          },
        ],
      },
    ],
  },
  {
    title: "Seminars",
    courses: [
      {
        label: "Probabilistic Programming",
        href: "https://moves.rwth-aachen.de/teaching/ws-2024-25/propro/",
        terms: [
          {
            label: "WS24/25",
            href: "https://moves.rwth-aachen.de/teaching/ws-2024-25/propro/",
          },
          {
            label: "SS23",
            href: "https://moves.rwth-aachen.de/teaching/ss-23/propro/",
          },
          {
            label: "WS22/23",
            href: "https://moves.rwth-aachen.de/teaching/ws-22-23/proprosem/",
          },
        ],
      },
      {
        label: "Deductive Verification",
        href: "https://moves.rwth-aachen.de/teaching/ws-23-24/verification/",
        terms: [
          {
            label: "WS23/24",
            href: "https://moves.rwth-aachen.de/teaching/ws-23-24/verification/",
          },
        ],
      },
      {
        label: "Trends in Computer-Aided Verification",
        href: "https://moves.rwth-aachen.de/teaching/ss-22/cav/",
        terms: [
          {
            label: "SS22",
            href: "https://moves.rwth-aachen.de/teaching/ss-22/cav/",
          },
        ],
      },
    ],
  },
] as const satisfies readonly TeachingGroup[];

export const presentations = [
  {
    year: "2025",
    title: "Caesar at Summer School for Formal Techniques",
    venue: "SSFT 2025",
    location: "Menlo Park, CA, USA",
    description:
      "Lecture and labs introducing weakest-pre-expectation reasoning and hands-on verification with Caesar.",
    details: talkAbstracts.ssft25,
    links: [
      {
        label: "Blog post",
        href: "https://www.caesarverifier.org/blog/2025/06/10/caesar-at-ssft-25/",
        kind: "blog",
      },
      {
        label: "Recordings",
        href: "https://ssft-sri.github.io/old/2025/materials/zoom.txt",
        kind: "video",
      },
      {
        label: "Slides",
        href: "https://www.caesarverifier.org/assets/ssft25/SSFT25-lectures.pdf",
        kind: "slides",
      },
    ],
  },
  {
    year: "2022",
    title: "A Quantitative Verification Infrastructure",
    venue: "VeriProP",
    location: "Haifa, Israel",
    href: "https://veriprop.github.io/2022/",
    description:
      "Workshop presentation of the quantitative verification infrastructure behind Caesar.",
  },
  {
    year: "2022",
    title: "Building a Deductive Verifier for Probabilistic Programs",
    venue: "Logic of Probabilistic Programming",
    location: "CIRM, Marseille, France",
    href: "https://conferences.cirm-math.fr/2686.html",
    description:
      "Talk on the design path from probabilistic verification foundations to an implemented deductive verifier.",
    links: [
      {
        label: "Slides",
        href: "https://www.cirm-math.fr/RepOrga/2686/Slides/Schroer.pdf",
        kind: "slides",
      },
      {
        label: "Slides / videos",
        href: "https://www.cirm-math.fr/Schedule/screen_display.php?id_renc=2686",
        kind: "materials",
      },
    ],
  },
] as const satisfies readonly CompactPresentation[];

export const recognitions = [
  {
    year: "2024",
    title: "ERC Proof of Concept Grant: VERIPROB",
    body: "Funding for the MOVES group to improve Caesar for practical use.",
    href: "https://www.caesarverifier.org/blog/2024/01/18/erc-poc-grant/",
    linkLabel: "Grant note",
    icon: "landmark",
  },
  {
    year: "2022",
    title: "WhatsApp Privacy Aware Program Analysis Research Award",
    body: "Awarded with Joost-Pieter Katoen for A Deductive Verification Infrastructure for Probabilistic Programs.",
    href: "https://www.caesarverifier.org/blog/2022/10/10/whatsapp-privacy-aware-program-analysis/",
    linkLabel: "Award note",
    icon: "award",
  },
] as const satisfies readonly RecognitionItem[];

export const serviceParagraphs = [
  [
    "Artifact evaluation program committees: ",
    {
      label: "ECOOP 2024",
      href: "https://2024.ecoop.org/track/ecoop-2024-artifact-evaluation",
    },
    ", ",
    {
      label: "OOPSLA 2024",
      href: "https://2024.splashcon.org/track/splash-2024-oopsla-artifacts",
    },
    ", ",
    {
      label: "QEST 2023",
      href: "https://www.qest.org/qest2023/committees.html",
    },
    ", ",
    { label: "CAV 2022", href: "https://i-cav.org/2022/organization/" },
    ", ",
    {
      label: "POPL 2022",
      href: "https://popl22.sigplan.org/track/POPL-2022-artifact-evaluation",
    },
    ", ",
    { label: "CAV 2021", href: "https://i-cav.org/2021/organization/" },
    ".",
  ],
  [
    "External review: ",
    { label: "FM 2024", href: "https://www.fm24.polimi.it/" },
    ", ",
    { label: "TACAS 2023", href: "https://etaps.org/2023/conferences/" },
    ".",
  ],
] as const satisfies readonly (readonly LinkedTextPart[])[];

export const toolkitItems = [
  {
    title: "Research Areas",
    body: "Probabilistic programs, deductive verification, weakest pre-expectation reasoning, quantitative logics, model checking, and program analysis.",
  },
  {
    title: "Tool Building",
    body: "Verification-condition generation, SMT automation, diagnostics, slicing, proof rules, and VS Code support for Caesar.",
  },
  {
    title: "Programming",
    body: "Rust, Python, Haskell, Java, TypeScript/React, HTML/CSS, Go, and Docker.",
  },
] as const satisfies readonly ToolkitItem[];
