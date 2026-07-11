const root = document.documentElement;
const themeToggle = document.querySelector("[data-theme-toggle]");
const themeColor = document.querySelector('meta[name="theme-color"]');

const syncThemeColor = () => {
    themeColor?.setAttribute("content", root.classList.contains("dark") ? "#101010" : "#ffffff");
};

themeToggle?.addEventListener("click", () => {
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    syncThemeColor();
});

syncThemeColor();

const accordionTriggers = [...document.querySelectorAll("[data-accordion-trigger]")];

const setAccordionState = (trigger, isOpen) => {
    const panelId = trigger.getAttribute("aria-controls");
    const panel = panelId ? document.getElementById(panelId) : null;
    trigger.setAttribute("aria-expanded", String(isOpen));
    trigger.dataset.state = isOpen ? "open" : "closed";
    trigger.closest(".accordion-item")?.setAttribute("data-state", isOpen ? "open" : "closed");
    if (panel) panel.hidden = !isOpen;
};

accordionTriggers.forEach((trigger) => {
    setAccordionState(trigger, false);
    trigger.addEventListener("click", () => {
        const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
        accordionTriggers.forEach((otherTrigger) => setAccordionState(otherTrigger, false));
        if (shouldOpen) setAccordionState(trigger, true);
    });
});

const revealElements = [...document.querySelectorAll(".reveal")];
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { rootMargin: "0px 0px -6%", threshold: 0.06 },
    );
    revealElements.forEach((element) => revealObserver.observe(element));
}

const dock = document.querySelector("[data-dock]");
const dockItems = dock ? [...dock.querySelectorAll(".dock-item")] : [];
let dockFrame = 0;

const resetDock = () => {
    dockItems.forEach((item) => {
        item.style.setProperty("--dock-size", "40px");
        item.style.transform = "translateY(0)";
        delete item.dataset.hovered;
    });
};

const updateDock = (pointerX) => {
    let nearestIndex = -1;
    let nearestDistance = Number.POSITIVE_INFINITY;

    dockItems.forEach((item, index) => {
        const bounds = item.getBoundingClientRect();
        const center = bounds.left + bounds.width / 2;
        const distance = Math.abs(pointerX - center);
        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
        }
        const influence = Math.max(0, 1 - distance / 92);
        const eased = influence * influence * (3 - 2 * influence);
        const size = 40 + eased * 20;
        item.style.setProperty("--dock-size", `${size.toFixed(2)}px`);
        item.style.transform = `translateY(${(-(size - 40) / 2).toFixed(2)}px)`;
    });

    dockItems.forEach((item, index) => {
        if (index === nearestIndex && nearestDistance <= 32) item.dataset.hovered = "true";
        else delete item.dataset.hovered;
    });
};

dock?.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch" || reducedMotion.matches) return;
    cancelAnimationFrame(dockFrame);
    dockFrame = requestAnimationFrame(() => updateDock(event.clientX));
});

dock?.addEventListener("pointerleave", resetDock);
dock?.addEventListener("focusout", (event) => {
    if (!dock.contains(event.relatedTarget)) resetDock();
});

dockItems.forEach((item) => {
    item.addEventListener("focus", () => {
        if (reducedMotion.matches) return;
        const bounds = item.getBoundingClientRect();
        updateDock(bounds.left + bounds.width / 2);
    });
});

reducedMotion.addEventListener?.("change", resetDock);
