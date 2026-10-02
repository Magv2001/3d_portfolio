import { socialImgs } from "../constants"
import { useLanguage } from "../i18n/useLanguage"

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="footer">
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
        </footer>
    )
}

export default Footer