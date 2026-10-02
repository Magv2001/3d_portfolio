import { useCallback, useEffect, useMemo, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LanguageContext } from "./LanguageContext";
import translations, { DEFAULT_LANG, SUPPORTED_LANGS } from "./translations";

gsap.registerPlugin(ScrollTrigger);

const STORAGE_KEY = "portfolio-lang";

// Read the saved language (English is the default).
const getInitialLang = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (SUPPORTED_LANGS.includes(saved)) return saved;
    } catch {
        // localStorage may be unavailable (private mode, etc.)
    }
    return DEFAULT_LANG;
};

// Resolve "a.b.c" inside an object.
const resolve = (dict, path) =>
    path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), dict);

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang);

    // Keep <html lang>, localStorage and scroll animations in sync.
    useEffect(() => {
        document.documentElement.lang = lang;

        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            // ignore
        }

        // Text length changes between languages, so page height can change.
        const id = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(id);
    }, [lang]);

    // t("hero.cta") -> string (falls back to English, then to the key itself)
    const t = useCallback(
        (path) =>
            resolve(translations[lang], path) ??
            resolve(translations[DEFAULT_LANG], path) ??
            path,
        [lang]
    );

    const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
