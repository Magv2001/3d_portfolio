import { useLanguage } from "../i18n/useLanguage";

const LiveIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const CodeIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
    </svg>
);

// "Live link" + "Code link" buttons. A button is hidden when its link is empty.
const ProjectLinks = ({ project }) => {
    const { t } = useLanguage();
    const name = t(`projects.items.${project.id}.name`);

    if (!project.liveLink && !project.codeLink) return null;

    return (
        <div className="project-links">
            {project.liveLink && (
                <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn primary"
                    aria-label={`${t("projects.liveLink")} - ${name}`}
                >
                    <LiveIcon />
                    {t("projects.liveLink")}
                </a>
            )}

            {project.codeLink && (
                <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn secondary"
                    aria-label={`${t("projects.codeLink")} - ${name}`}
                >
                    <CodeIcon />
                    {t("projects.codeLink")}
                </a>
            )}
        </div>
    );
};

export default ProjectLinks;
