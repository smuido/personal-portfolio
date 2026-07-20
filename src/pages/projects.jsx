import './projects.css'
import { projects } from '../structs/info'

const allProjects = projects

const getProjectStatusClass = (status) => {
    if (!status) return 'project-status'

    const normalizedStatus = status.toLowerCase()
    if (normalizedStatus.includes('progress') || normalizedStatus === 'active') return 'project-status in-progress'
    if (normalizedStatus.includes('complete') || normalizedStatus === 'done') return 'project-status completed'

    return 'project-status'
}

export default function Projects({ onOpenProject }) {
    const openProject = (slug) => {
        if (!slug || !onOpenProject) return

        onOpenProject(slug)
    }

    const handleProjectKeyDown = (slug) => (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault()
            openProject(slug)
        }
    }

    return (
        <main className="projects-page">
            <section className="projects-page-header">
                <h1>Projects</h1>
                <p>Selected personal projects from the homepage, collected here as a dedicated view.</p>
            </section>

            <section className="personal-projects projects-page-projects">
                <div className="project-grid">
                    {allProjects.map((project) => (
                        <article
                            className="project-card project-card-link"
                            key={project.name}
                            role="link"
                            tabIndex={0}
                            onClick={() => openProject(project.slug)}
                            onKeyDown={handleProjectKeyDown(project.slug)}
                            aria-label={`Open details for ${project.name}`}
                        >
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <span className="dot red" />
                                    <span className="dot yellow" />
                                    <span className="dot green" />
                                </div>
                                <span className="terminal-title">
                                    <span className="project-name">{project.name}</span>
                                    <span className="project-separator"> / </span>
                                    <span className={getProjectStatusClass(project.status)}>{project.status}</span>
                                </span>
                                {project.link ? (
                                    <a
                                        className="repo-link"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        onClick={(event) => event.stopPropagation()}
                                    >
                                        GitHub
                                    </a>
                                ) : (
                                    <span className="repo-link disabled">GitHub</span>
                                )}
                            </div>
                            <div className="card-content">
                                <h3>{project.name}</h3>
                                <p className="description">{project.description}</p>
                                <div className="skills-tags">
                                    {project.techStack.map((tech) => (
                                        <span className="skill-tag" key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}