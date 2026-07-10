const navigationToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".primary-nav");
const navigationLinks = [...document.querySelectorAll("[data-nav]")];
const sections = [...document.querySelectorAll("main section[id]")];

const closeNavigation = () => {
    document.body.classList.remove("nav-open");
    navigationToggle?.setAttribute("aria-expanded", "false");
};

navigationToggle?.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navigationToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation?.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-nav]");
    if (link) {
        setCurrentSection(link.dataset.nav);
        closeNavigation();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNavigation();
});

const setCurrentSection = (sectionId) => {
    navigationLinks.forEach((link) => {
        if (link.dataset.nav === sectionId) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
    });
};

const isPageBottom = () => window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

const syncNavigationState = () => {
    if (isPageBottom()) {
        setCurrentSection(window.location.hash === "#profiles" ? "profiles" : "education");
        return;
    }
    const sectionId = window.location.hash.slice(1);
    if (navigationLinks.some((link) => link.dataset.nav === sectionId)) setCurrentSection(sectionId);
};

window.addEventListener("hashchange", syncNavigationState);
window.addEventListener("scroll", syncNavigationState, { passive: true });
window.addEventListener("load", () => requestAnimationFrame(syncNavigationState));

const sectionObserver = new IntersectionObserver(
    (entries) => {
        if (isPageBottom()) {
            setCurrentSection(window.location.hash === "#profiles" ? "profiles" : "education");
            return;
        }
        const activeEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (activeEntry) setCurrentSection(activeEntry.target.id);
    },
    { rootMargin: "-22% 0px -62%", threshold: [0.05, 0.2, 0.5] },
);

sections.forEach((section) => sectionObserver.observe(section));

const projectOrbit = document.querySelector("[data-project-orbit]");
const orbitCards = [...document.querySelectorAll(".orbit-card")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let orbitFrame = 0;
let orbitIsActive = false;

const resetOrbit = () => {
    orbitIsActive = false;
    orbitCards.forEach((card) => {
        card.style.setProperty("--parallax-x", "0px");
        card.style.setProperty("--parallax-y", "0px");
    });
};

projectOrbit?.addEventListener("pointermove", (event) => {
    if (reducedMotion.matches || event.pointerType === "touch" || window.innerWidth <= 900) return;
    orbitIsActive = true;
    cancelAnimationFrame(orbitFrame);
    orbitFrame = requestAnimationFrame(() => {
        const bounds = projectOrbit.getBoundingClientRect();
        const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
        const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;
        orbitCards.forEach((card) => {
            const depth = Number(card.dataset.depth || 0.5);
            card.style.setProperty("--parallax-x", `${(horizontal * depth * 18).toFixed(2)}px`);
            card.style.setProperty("--parallax-y", `${(vertical * depth * 14).toFixed(2)}px`);
        });
    });
});

projectOrbit?.addEventListener("pointerleave", resetOrbit);
document.addEventListener("pointermove", (event) => {
    if (orbitIsActive && projectOrbit && !projectOrbit.contains(event.target)) resetOrbit();
});
reducedMotion.addEventListener?.("change", resetOrbit);
