import './projects.css'
import { projects } from '../structs/home'

const personalProjects = projects.filter((item) => item?.name && item?.description && item?.techStack?.length && item?.status)

const getProjectStatusClass = (status) => {
    if (!status) return 'project-status'

    const normalizedStatus = status.toLowerCase()
    if (normalizedStatus === 'active') return 'project-status active'
    if (normalizedStatus === 'completed') return 'project-status completed'
    if (normalizedStatus === 'paused') return 'project-status paused'

    return 'project-status'
}

export default function Projects() {
    return (
        <main className="projects-page">
            <section className="projects-page-header">
                <h1>Projects</h1>
                <p>Selected personal projects from the homepage, collected here as a dedicated view.</p>
            </section>

            <section className="personal-projects projects-page-projects">
                <div className="project-grid">
                    {personalProjects.map((project) => (
                        <article className="project-card" key={project.name}>
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
                                <span className="duration-badge"></span>
                            </div>
                            <div className="card-content">
                                <h3>{project.name}</h3>
                                <p className="description">{project.description}</p>
                                <p className="link">{project.link}</p>
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