import { useEffect, useState } from "react"
import { navLinks } from "../constants"
import { useLanguage } from "../i18n/useLanguage"
import LanguageSwitcher from "./LanguageSwitcher"

const NavBar = () => {
    const { t } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Martin | MartinDev
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, id }) => (
                            <li key={id} className="group">
                                <a href={link}>
                                    <span>{t(`nav.${id}`)}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <LanguageSwitcher />

                    <a href="#contact" className="contact-btn group">
                        <div className="inner">
                            <span>{t("nav.contactMe")}</span>
                        </div>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default NavBar
