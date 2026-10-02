import { useLanguage } from "../i18n/useLanguage";
import { SUPPORTED_LANGS } from "../i18n/translations";

const LanguageSwitcher = () => {
    const { lang, setLang, t } = useLanguage();

    return (
        <div
            role="group"
            aria-label={t("language.label")}
            className="flex items-center rounded-lg border border-white/20 overflow-hidden text-sm font-semibold"
        >
            {SUPPORTED_LANGS.map((code) => (
                <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    title={t(`language.${code}`)}
                    className={`px-3 py-2 uppercase cursor-pointer transition-colors duration-300 ${
                        lang === code
                            ? "bg-white text-black"
                            : "text-white-50 hover:text-white"
                    }`}
                >
                    {code}
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
