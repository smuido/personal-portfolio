import './experience.css'
import { education, experience, volunteerExp } from '../structs/home'

export default function ExperiencePage() {
	return (
		<main className="experience-page">
			<section className="experience-page-section">
				<div className="experience-page-header">
					<h1>Experience</h1>
					<p>Professional roles, campus leadership, and selected personal projects.</p>
				</div>

				<div className="experience-page-grid">
					{experience.map((entry) => (
						<article className="experience-page-card" key={`${entry.jobTitle}-${entry.company}-${entry.duration}`}>
							<p className="experience-page-meta">{entry.duration}</p>
							<h2>{entry.jobTitle}</h2>
							<h3>{entry.company}</h3>
							<p className="experience-page-subtitle">{entry.dept}</p>
							<p className="experience-page-location">{entry.location}</p>
							<p>{entry.description}</p>
							<div className="experience-page-tags">
								{entry.skills.map((skill) => (
									<span className="experience-page-tag" key={skill}>{skill}</span>
								))}
							</div>
						</article>
					))}
				</div>
			</section>

			<section className="experience-page-section">
				<div className="experience-page-header">
					<h2>Projects</h2>
					<p>The project cards are now on the dedicated projects page as well.</p>
				</div>
			</section>

			<section className="experience-page-section">
				<div className="experience-page-header">
					<h2>Leadership & Involvement</h2>
				</div>
				<div className="experience-page-grid">
					{volunteerExp.map((entry) => (
						<article className="experience-page-card" key={`${entry.title}-${entry.org}-${entry.duration}`}>
							<p className="experience-page-meta">{entry.duration}</p>
							<h3>{entry.title}</h3>
							<p className="experience-page-subtitle">{entry.org}</p>
							<p className="experience-page-location">{entry.location}</p>
							<p>{entry.description}</p>
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
						<article className="experience-page-card" key={`${entry.degree}-${entry.gradYear}`}>
							<p className="experience-page-meta">Class of {entry.gradYear}</p>
							<h3>{entry.degree}</h3>
							<p className="experience-page-subtitle">{entry.name}</p>
						</article>
					))}
				</div>
			</section>
		</main>
	)
}
