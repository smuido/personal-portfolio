import './experience.css'
import { education, experience, volunteerExp } from '../structs/info'

export default function ExperiencePage({ onOpenExperience }) {
	const openExperience = (item, type) => {
		if (!item || !onOpenExperience) return

		onOpenExperience(item, type)
	}

	const handleExperienceKeyDown = (item, type) => (event) => {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			openExperience(item, type)
		}
	}

	return (
		<main className="experience-page">
			<section className="experience-page-section">
				<div className="experience-page-header">
					<h2>Work Experience</h2>
				</div>

				<div className="experience-page-grid">
					{experience.map((entry) => (
						<article
							className="experience-card experience-card-link"
							key={`${entry.jobTitle}-${entry.company}-${entry.duration}`}
							role="button"
							tabIndex={0}
							onClick={() => openExperience(entry, 'work')}
							onKeyDown={handleExperienceKeyDown(entry, 'work')}
							aria-label={`Open details for ${entry.jobTitle} at ${entry.company}`}
						>
							<div className="terminal-header">
								<div className="terminal-dots">
									<span className="dot red" />
									<span className="dot yellow" />
									<span className="dot green" />
								</div>
								<span className="terminal-title">
									<span className="company-name">{entry.company}</span>
									<span className="project-separator"> / </span>
									<span className="department-status">{entry.dept}</span>
								</span>
								<span className="duration-badge">{entry.duration}</span>
							</div>
							<div className="card-content">
								<h3>{entry.jobTitle}</h3>
								<p className="location">{entry.location}</p>
								<p className="description">{entry.description}</p>
								<div className="skills-tags">
									{entry.skills.map((skill) => (
										<span className="skill-tag" key={skill}>{skill}</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="experience-page-section">
				<div className="experience-page-header">
					<h2>Volunteer & Leadership Experience</h2>
				</div>
				<div className="experience-page-grid">
					{volunteerExp.map((entry) => (
						<article
							className="experience-card experience-card-link"
							key={`${entry.title}-${entry.org}-${entry.duration}`}
							role="button"
							tabIndex={0}
							onClick={() => openExperience(entry, 'volunteer')}
							onKeyDown={handleExperienceKeyDown(entry, 'volunteer')}
							aria-label={`Open details for ${entry.title} at ${entry.org}`}
						>
							<div className="terminal-header">
								<div className="terminal-dots">
									<span className="dot red" />
									<span className="dot yellow" />
									<span className="dot green" />
								</div>
								<span className="terminal-title">
									<span className="company-name">{entry.org}</span>
								</span>
								<span className="duration-badge">{entry.duration}</span>
							</div>
							<div className="card-content">
								<h3>{entry.title}</h3>
								<p className="location">{entry.location}</p>
								<p className="description">{entry.description}</p>
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="experience-page-section">
				<div className="experience-page-header">
					<h2>Education</h2>
				</div>
				<div className="experience-page-grid education-grid">
					{education.map((entry) => (
						<article className="experience-card" key={`${entry.degree}-${entry.gradYear}`}>
							<div className="terminal-header">
								<div className="terminal-dots">
									<span className="dot red" />
									<span className="dot yellow" />
									<span className="dot green" />
								</div>
								<span className="terminal-title">
									<span className="company-name">{entry.name}</span>
									<span className="project-separator"> / </span>
									<span className="department-status">Class of {entry.gradYear}</span>
								</span>
								<span className="duration-badge">Education</span>
							</div>
							<div className="card-content">
								<h3>{entry.degree}</h3>
								<p className="location">{entry.name}</p>
								<p className="description">Concentrating in {entry.concentration}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	)
}
