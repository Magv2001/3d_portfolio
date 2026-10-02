import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLanguage } from "../i18n/useLanguage";
import { projects } from "../constants";
import ProjectLinks from "../components/ProjectLinks";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const { t } = useLanguage();
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    // The three projects shown on the home page
    const [first, second, third] = projects.filter((project) => project.featured);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, 
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100"
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0 }, 
            { opacity: 1, duration: 1.5 }
        )
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* LEFT */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src={first.imgPath} alt={t(`projects.items.${first.id}.alt`)} />
                        </div>
                        <div className="text-content">
                            <h2>{t(`projects.items.${first.id}.title`)}</h2>
                            <p className="text-white-50 md:text-xl">
                                {t(`projects.items.${first.id}.desc`)}
                            </p>
                            <ProjectLinks project={first} />
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper" style={{ backgroundColor: second.bg }}>
                                <img src={second.imgPath} alt={t(`projects.items.${second.id}.alt`)} />
                            </div>
                            <h2>{t(`projects.items.${second.id}.title`)}</h2>
                            <ProjectLinks project={second} />
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper" style={{ backgroundColor: third.bg }}>
                                <img src={third.imgPath} alt={t(`projects.items.${third.id}.alt`)} />
                            </div>
                            <h2>{t(`projects.items.${third.id}.title`)}</h2>
                            <ProjectLinks project={third} />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-16">
                    <a href="#/projects" className="project-link-btn primary large">
                        {t("projects.more")}
                        <img src="/images/arrow-right.svg" alt="" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection
