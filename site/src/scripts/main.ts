import { domHooks, hookSelector } from "../domHooks";
import { setupProfilePicture } from "./profilePicture";

setupProfilePicture();

type ThemeName = "dark" | "light";

const themeStorageKey = "theme";

const isThemeName = (value: string | null): value is ThemeName =>
  value === "dark" || value === "light";

/** Wires the persisted light/dark theme toggle and system-preference fallback. */
const setupThemeToggle = () => {
  const root = document.documentElement;
  const toggle = document.querySelector<HTMLButtonElement>(
    hookSelector(domHooks.themeToggle),
  );
  const media = window.matchMedia("(prefers-color-scheme: dark)");

  const getStoredTheme = () => {
    try {
      const stored = localStorage.getItem(themeStorageKey);
      return isThemeName(stored) ? stored : null;
    } catch {
      return null;
    }
  };

  const getActiveTheme = (): ThemeName =>
    getStoredTheme() ?? (media.matches ? "dark" : "light");

  const renderTheme = () => {
    const activeTheme = getActiveTheme();
    // data-active-theme drives theme-specific CSS variables and icon visibility.
    root.dataset.activeTheme = activeTheme;

    if (!toggle) return;

    const nextTheme = activeTheme === "dark" ? "light" : "dark";
    toggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
    toggle.setAttribute("aria-pressed", String(activeTheme === "dark"));
  };

  toggle?.addEventListener("click", () => {
    const nextTheme = getActiveTheme() === "dark" ? "light" : "dark";
    root.dataset.activeTheme = nextTheme;

    try {
      localStorage.setItem(themeStorageKey, nextTheme);
    } catch {
      // Ignore storage failures; the in-page theme still changes.
    }

    renderTheme();
  });

  media.addEventListener("change", () => {
    if (getStoredTheme()) return;
    renderTheme();
  });

  renderTheme();
};

setupThemeToggle();

const navLinks = [
  ...document.querySelectorAll<HTMLAnchorElement>(
    hookSelector(domHooks.sectionLink),
  ),
];
const sections = [
  ...document.querySelectorAll<HTMLElement>(
    hookSelector(domHooks.observeSection),
  ),
];
const activeById = new Map(
  navLinks.map((link) => [link.getAttribute(domHooks.sectionLink), link]),
);
const navSections = sections.filter((section) => activeById.has(section.id));
const defaultActiveSectionId = navSections[0]?.id ?? null;

let activeSectionId =
  navLinks
    .find(
      (link) => link.getAttribute(domHooks.activeSectionLink) === "true",
    )
    ?.getAttribute(domHooks.sectionLink) ?? null;
let activeSectionFrame = 0;

const navActivationViewportLead = 0.14;
const navActivationLeadMin = 64;
const navActivationLeadMax = 150;

const clearActiveNavLinks = () => {
  navLinks.forEach((link) => link.removeAttribute(domHooks.activeSectionLink));
};

const getNavActivationOffset = () => {
  const headerHeight =
    document.querySelector("header")?.getBoundingClientRect().height ?? 0;
  const viewportLead = Math.min(
    Math.max(
      window.innerHeight * navActivationViewportLead,
      navActivationLeadMin,
    ),
    navActivationLeadMax,
  );

  return headerHeight + viewportLead;
};

/** Keeps the active Header link stable while scrolling between short sections. */
const updateActiveSectionLink = () => {
  const activationOffset = getNavActivationOffset();
  let nextSectionId = defaultActiveSectionId;

  for (const section of navSections) {
    if (section.getBoundingClientRect().top > activationOffset) break;
    nextSectionId = section.id;
  }

  if (nextSectionId === activeSectionId) return;

  activeSectionId = nextSectionId;
  clearActiveNavLinks();

  if (nextSectionId) {
    activeById
      .get(nextSectionId)
      ?.setAttribute(domHooks.activeSectionLink, "true");
  }
};

const scheduleActiveSectionUpdate = () => {
  if (activeSectionFrame) return;

  activeSectionFrame = window.requestAnimationFrame(() => {
    activeSectionFrame = 0;
    updateActiveSectionLink();
  });
};

updateActiveSectionLink();
window.addEventListener("scroll", scheduleActiveSectionUpdate, {
  passive: true,
});
window.addEventListener("resize", scheduleActiveSectionUpdate);
window.addEventListener("load", scheduleActiveSectionUpdate);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute(domHooks.revealVisible, "true");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );

  document
    .querySelectorAll(hookSelector(domHooks.reveal))
    .forEach((element) => revealObserver.observe(element));
}

/** Updates the header progress bar token from the current document scroll. */
const setScrollProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  document.documentElement.style.setProperty(
    "--scroll-progress",
    progress.toFixed(4),
  );
};

setScrollProgress();
window.addEventListener("scroll", setScrollProgress, { passive: true });
window.addEventListener("resize", setScrollProgress);
