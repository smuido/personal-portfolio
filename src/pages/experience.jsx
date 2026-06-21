import './experience.css'
import { education, experience, volunteerExp } from '../structs/home'

export default function ExperiencePage() {
	return (
		<main className="experience-page">
			<section className="experience-page-section">
				<div className="experience-page-header">
					<h1>Work Experience</h1>
					<p>Professional roles presented with the same card style as the homepage projects.</p>
				</div>

				<div className="experience-page-grid">
					{experience.map((entry) => (
						<article className="experience-card" key={`${entry.jobTitle}-${entry.company}-${entry.duration}`}>
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
					<h2>Volunteer Experience</h2>
					<p>Campus and community leadership shown in the same card layout.</p>
				</div>
				<div className="experience-page-grid">
					{volunteerExp.map((entry) => (
						<article className="experience-card" key={`${entry.title}-${entry.org}-${entry.duration}`}>
							<div className="terminal-header">
								<div className="terminal-dots">
									<span className="dot red" />
									<span className="dot yellow" />
									<span className="dot green" />
								</div>
								<span className="terminal-title">
									<span className="company-name">{entry.org}</span>
									<span className="project-separator"> / </span>
									<span className="department-status">Volunteer</span>
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
					<p>Academic background displayed in the same card style.</p>
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
								<p className="description">Expected graduation: {entry.gradYear}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	)
}
