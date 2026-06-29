import { useEffect } from 'react'
import './project-detail.css'

export default function ProjectDetailPage({ detail, onClose }) {
	const item = detail?.item
	const kind = detail?.type || 'project'
	const isProject = kind === 'project'
	const title = isProject ? item?.name : item?.jobTitle || item?.title || item?.name || 'Details'
	const subtitle = isProject ? item?.status : item?.company || item?.org || item?.dept || ''
	const headerDate = item?.date || item?.duration || ''
	const description = isProject ? item?.cardDesc || item?.description : item?.description
	const highlights = item?.highlights || []
	const tags = isProject ? item?.techStack || [] : item?.skills || []
	const metaItems = []

	if (!isProject && item?.dept) metaItems.push(item.dept)
	if (item?.location) metaItems.push(item.location)
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

	if (!item) return null

	return (
		<div className="project-overlay" role="presentation" onClick={onClose}>
			<article
				className="project-detail-modal"
				role="dialog"
				aria-modal="true"
				aria-label={`${title} details`}
				onClick={(event) => event.stopPropagation()}
			>
				<div className="terminal-header detail-terminal-header">
					<div className="terminal-dots">
						<button type="button" className="dot red dot-close" onClick={onClose} aria-label="Close" />
						<span className="dot yellow" />
						<span className="dot green" />
					</div>
					<span className="terminal-title">
						<span className="project-name">{title}</span>
						<span className="project-separator"> / </span>
						<span className="project-status">{subtitle}</span>
					</span>
					{headerDate && <span className="duration-badge">{headerDate}</span>}
				</div>

				<div className="detail-body">
					<div className="detail-meta">
						{metaItems.map((metaItem) => (
							<span className="detail-date" key={metaItem}>{metaItem}</span>
						))}
						{isProject && item?.link && (
							<a className="detail-meta-link" href={item.link} target="_blank" rel="noreferrer noopener">
								GitHub ↗
							</a>
						)}
						{isProject && item?.liveLink && (
							<a className="detail-meta-link" href={item.liveLink} target="_blank" rel="noreferrer noopener">
								Live Demo ↗
							</a>
						)}
					</div>

					{tags.length > 0 && (
						<div className="detail-tags">
							{tags.map((tag) => (
								<span className="detail-tag" key={tag}>{tag.toLowerCase()}</span>
							))}
						</div>
					)}

					<div className="detail-article">
						<p className="detail-desc">{description}</p>

						{highlights.length > 0 && (
							<>
								<h2>Highlights</h2>
								<ul className="detail-highlight-list">
									{highlights.map((highlight) => (
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