import { useSyncExternalStore } from "react";

export const PROJECTS_HASH = "#/projects";

const subscribe = (callback) => {
    window.addEventListener("hashchange", callback);
    return () => window.removeEventListener("hashchange", callback);
};

const getSnapshot = () =>
    window.location.hash === PROJECTS_HASH ? "projects" : "home";

// "home" | "projects"  (driven by the URL hash, no extra dependency needed)
export const useRoute = () => useSyncExternalStore(subscribe, getSnapshot, () => "home");
