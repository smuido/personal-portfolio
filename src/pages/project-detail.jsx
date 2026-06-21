import { useEffect } from 'react'
import './project-detail.css'

export default function ProjectDetailPage({ project, onClose }) {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('keydown', handleKeyDown)
		document.body.style.overflow = 'hidden'

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
			document.body.style.overflow = ''
		}
	}, [onClose])

	if (!project) return null

	return (
		<div className="project-overlay" role="presentation" onClick={onClose}>
			<article
				className="project-detail-modal"
				role="dialog"
				aria-modal="true"
				aria-label={`${project.name} details`}
				onClick={(event) => event.stopPropagation()}
			>
				<div className="terminal-header detail-terminal-header">
					<div className="terminal-dots">
						<button type="button" className="dot red dot-close" onClick={onClose} aria-label="Close" />
						<span className="dot yellow" />
						<span className="dot green" />
					</div>
					<span className="terminal-title">
						<span className="project-name">{project.name}</span>
						<span className="project-separator"> / </span>
						<span className="project-status">{project.status}</span>
					</span>
				</div>

				<div className="detail-body">
					<div className="detail-meta">
						{project.date && <span className="detail-date">{project.date}</span>}
						{project.link && (
							<a className="detail-meta-link" href={project.link} target="_blank" rel="noreferrer noopener">
								GitHub ↗
							</a>
						)}
						{project.liveLink && (
							<a className="detail-meta-link" href={project.liveLink} target="_blank" rel="noreferrer noopener">
								Live Demo ↗
							</a>
						)}
					</div>

					<div className="detail-tags">
						{project.techStack.map((tech) => (
							<span className="detail-tag" key={tech}>{tech.toLowerCase()}</span>
						))}
					</div>

					<div className="detail-article">
						<p className="detail-desc">{project.cardDesc}</p>

						{project.highlights?.length > 0 && (
							<>
								<h2>Highlights</h2>
								<ul className="detail-highlight-list">
									{project.highlights.map((highlight) => (
										<li key={highlight}>{highlight}</li>
									))}
								</ul>
							</>
						)}
					</div>
				</div>
			</article>
		</div>
	)
}