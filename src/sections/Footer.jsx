import { socialImgs, modelCredits, modelLicense } from "../constants"
import { useLanguage } from "../i18n/useLanguage"

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="w-full flex flex-col gap-6">
                <div className="footer-container">
                    <div className="flex flex-col justify-center md:items-start items-center">
                        <a href="/">{t("footer.blog")}</a>
                    </div>

                    <div className="socials">
                        {socialImgs.map((img) => (
                            <a
                                className="icon"
                                target="_blank"
                                rel="noopener noreferrer"
                                href={img.url}
                                key={img.url}
                                aria-label={img.name}
                            >
                                <img src={img.imgPath} alt={img.name} />
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col justify-center">
                        <p className="text-center md:text-end">
                            © {new Date().getFullYear()} Martin | MartinDev. {t("footer.rights")}
                        </p>
                    </div>
                </div>

                <div className="footer-credits">
                    {t("footer.modelsBy")}{" "}
                    {modelCredits.map((group, groupIndex) => (
                        <span key={group.author}>
                            {groupIndex > 0 && " · "}
                            {group.works.map((work, workIndex) => (
                                <span key={work.title}>
                                    {workIndex > 0 && ", "}
                                    <a href={work.sourceUrl} target="_blank" rel="noopener noreferrer">
                                        “{work.title}”
                                    </a>
                                </span>
                            ))}{" "}
                            {t("footer.by")}{" "}
                            <a href={group.authorUrl} target="_blank" rel="noopener noreferrer">
                                {group.author}
                            </a>
                        </span>
                    ))}{" "}
                    (
                    <a href={modelLicense.url} target="_blank" rel="noopener noreferrer">
                        {modelLicense.name}
                    </a>
                    )
                </div>
            </div>
        </footer>
    )
}

export default Footer
