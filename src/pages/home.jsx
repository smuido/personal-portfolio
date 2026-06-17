import { useEffect } from 'react'
import './home.css'
import { experience, projects } from '../structs/home'
import cImg from '../assets/c.png'
import pythonImg from '../assets/python.png'
import jsImg from '../assets/js.png'
import htmlImg from '../assets/html.png'
import cssImg from '../assets/css.png'
import reactImg from '../assets/react.png'
import sqlImg from '../assets/sql.png'
import gitImg from '../assets/git.png'
import githubImg from '../assets/github.svg'
import vscodeImg from '../assets/vscode.png'
import pycharmImg from '../assets/pycharm.png'
import wordImg from '../assets/word.png'
import excelImg from '../assets/excel.png'

function HomePage() {
	const personalProjects = projects.filter((item) => item?.name && item?.description && item?.techStack?.length && item?.status)
	const currentExperience = experience.filter((item) => item?.jobTitle && item?.company && item?.location && item?.duration && item?.description)
	const techIcons = [
		{ src: cImg, alt: 'C Programming Language' },
		{ src: pythonImg, alt: 'Python Programming Language' },
		{ src: jsImg, alt: 'JavaScript Programming Language' },
		{ src: htmlImg, alt: 'HTML' },
		{ src: cssImg, alt: 'CSS' },
		{ src: reactImg, alt: 'React Library' },
		{ src: sqlImg, alt: 'SQL' },
	]
	const otherTools = [
		{ name: 'Git', icon: gitImg },
		{ name: 'GitHub', icon: githubImg },
		{ name: 'VS Code', icon: vscodeImg },
		{ name: 'PyCharm', icon: pycharmImg },
		{ name: 'Word', icon: wordImg },
		{ name: 'Excel', icon: excelImg },
	]

	const getProjectStatusClass = (status) => {
		if (!status) return 'project-status'

		const normalizedStatus = status.toLowerCase()
		if (normalizedStatus === 'active') return 'project-status active'
		if (normalizedStatus === 'completed') return 'project-status completed'
		if (normalizedStatus === 'paused') return 'project-status paused'

		return 'project-status'
	}

	useEffect(() => {
		const updateLoopDistances = () => {
			const tracks = document.querySelectorAll('.carousel-track')
			tracks.forEach((track) => {
				const firstGroup = track.querySelector('.group')
				if (!firstGroup) return

				const loopDistance = firstGroup.getBoundingClientRect().width
				track.style.setProperty('--loop-distance', `${loopDistance}px`)
			})
		}

		updateLoopDistances()
		window.addEventListener('resize', updateLoopDistances)

		return () => {
			window.removeEventListener('resize', updateLoopDistances)
		}
	}, [])


	return ( 
		<main className="home-page">


			<section className="intro">
					<h1>Hi, I'm Smaya Guido</h1>
					<p>Welcome to my personal portfolio website. I'm a computer engineering and political science student at Cal Poly with a passion 
						for technological advancement and innovation, politics, and blending the two to create a positive impact on society.</p>				
			</section>


			<section className="experience">
				<div className="section-header">
					<h2>Experience</h2>
					<a href="#" className="view-all">View all →</a>
				</div>
				<div className="experience-grid">
					{currentExperience.map((exp) => (
						<article className="experience-card" key={`${exp.jobTitle}-${exp.company}-`}>
							<div className="terminal-header">
								<div className="terminal-dots">
									<span className="dot red" />
									<span className="dot yellow" />
									<span className="dot green" />
								</div>
								<span className="terminal-title">{exp.company}</span>
								<span className="duration-badge">{exp.duration}</span>
							</div>
							<div className="card-content">
								<h3>{exp.jobTitle}</h3>
								<p className="location">{exp.location}</p>
								<p className="description">{exp.description}</p>
								<div className="skills-tags">
									{exp.skills.map((skill) => (
										<span className="skill-tag" key={skill}>{skill}</span>
									))}
								</div>
							</div>
						</article>
					))}
				</div>
			</section>


			<section className="personal-projects">
				<div className="section-header">
					<h2>Personal Projects</h2>
					<a href="#" className="view-all">View all →</a>
				</div>
				<div className="project-grid">
					{personalProjects.map((project) => (
						<article className="project-card" key={`${project.name}`}>
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


			<section className="carousel-section">
				<div className="carousels-row">
					<div className="carousel-panel">
						<div className="section-header">
							<h2>Languages & Frameworks</h2>
						</div>
						<div className="carousel">
							<div className="carousel-track">
								<div className="group">
									{techIcons.map((icon) => (
										<div className="item" key={`tech-${icon.alt}`}>
											<img src={icon.src} alt={icon.alt} />
										</div>
									))}
								</div>
								<div className="group" aria-hidden="true">
									{techIcons.map((icon) => (
										<div className="item" key={`tech-loop-${icon.alt}`}>
											<img src={icon.src} alt="" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>

					<div className="carousel-panel">
						<div className="section-header">
							<h2>Other Tools</h2>
						</div>
						<div className="carousel">
							<div className="carousel-track">
								<div className="group">
									{otherTools.map((tool) => (
										<div className="item" key={`tool-${tool.name}`}>
											<img src={tool.icon} alt={`${tool.name} logo`} />
										</div>
									))}
								</div>
								<div className="group" aria-hidden="true">
									{otherTools.map((tool) => (
										<div className="item" key={`tool-loop-${tool.name}`}>
											<img src={tool.icon} alt="" />
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default HomePage
