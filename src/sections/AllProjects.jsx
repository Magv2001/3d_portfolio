import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import TitleHeader from "../components/TitleHeader";
import ProjectLinks from "../components/ProjectLinks";
import { projects } from "../constants";
import { useLanguage } from "../i18n/useLanguage";

const AllProjects = () => {
    const { t } = useLanguage();
    const gridRef = useRef(null);

    useGSAP(
        () => {
            gsap.fromTo(
                ".project-card",
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" }
            );
        },
        { scope: gridRef, dependencies: [] }
    );

    return (
        <section id="all-projects" className="all-projects">
            <a
                href="#work"
                className="inline-flex items-center gap-2 mb-10 text-white-50 hover:text-white transition-colors duration-300"
            >
                <span aria-hidden="true">←</span>
                {t("projects.back")}
            </a>

            <TitleHeader title={t("projects.title")} sub={t("projects.sub")} />

            <div className="projects-grid" ref={gridRef}>
                {projects.map((project) => (
                    <article key={project.id} className="project-card">
                        <div className="card-image" style={{ backgroundColor: project.bg }}>
                            <img
                                src={project.imgPath}
                                alt={t(`projects.items.${project.id}.alt`)}
                                className={project.fit === "cover" ? "object-cover" : "object-contain"}
                            />
                        </div>

                        <h3>{t(`projects.items.${project.id}.name`)}</h3>

                        <ProjectLinks project={project} />
                    </article>
                ))}
            </div>
        </section>
    );
};

export default AllProjects;
