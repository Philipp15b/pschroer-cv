import { domHooks, hookSelector } from "../domHooks";

const clickAnimations = [
  "spin-y",
  "side-swoop",
  "tilt-twirl",
  "coin-pop",
  "barrel-twist",
] as const;

type ClickAnimation = (typeof clickAnimations)[number];

let lastAnimation: ClickAnimation | undefined;

/** Picks a click animation without repeating the previous one. */
function chooseClickAnimation(): ClickAnimation {
  const choices = clickAnimations.filter(
    (animation) => animation !== lastAnimation,
  );
  const animation =
    choices[Math.floor(Math.random() * choices.length)] ?? clickAnimations[0];
  lastAnimation = animation;
  return animation;
}

/** Attaches the randomized profile-picture click animation. */
export function setupProfilePicture() {
  const profilePicture = document.querySelector<HTMLElement>(
    hookSelector(domHooks.profilePicture),
  );
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!profilePicture) return;

  profilePicture.addEventListener("click", () => {
    if (reducedMotion.matches) return;

    profilePicture.removeAttribute(domHooks.profileSpinning);
    profilePicture.setAttribute(
      domHooks.profileAnimation,
      chooseClickAnimation(),
    );
    void profilePicture.offsetWidth;
    profilePicture.setAttribute(domHooks.profileSpinning, "true");
  });

  profilePicture.addEventListener("animationend", (event) => {
    if (event.target !== profilePicture) return;
    profilePicture.removeAttribute(domHooks.profileSpinning);
    profilePicture.removeAttribute(domHooks.profileAnimation);
  });
}
