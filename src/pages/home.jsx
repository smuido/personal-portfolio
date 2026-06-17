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
	const carouselCopies = 3
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

	const renderCarouselGroups = (items, renderItem, keyPrefix) => (
		Array.from({ length: carouselCopies }, (_, copyIndex) => (
			<div className="group" aria-hidden={copyIndex > 0} key={`${keyPrefix}-group-${copyIndex}`}>
				{items.map((item) => renderItem(item, copyIndex))}
			</div>
		))
	)

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
					<h1 className='nameLine'>
						<span className="namePrefix">Hi,I'm </span>
						<span className="nameValue"> Smaya Guido</span>
					</h1>
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
								{renderCarouselGroups(
									techIcons,
									(icon, copyIndex) => (
										<div className="item" key={`tech-${copyIndex}-${icon.alt}`}>
											<img src={icon.src} alt={copyIndex === 0 ? icon.alt : ''} />
										</div>
									),
									'tech'
								)}
							</div>
						</div>
					</div>

					<div className="carousel-panel">
						<div className="section-header">
							<h2>Other Tools</h2>
						</div>
						<div className="carousel">
							<div className="carousel-track">
								{renderCarouselGroups(
									otherTools,
									(tool, copyIndex) => (
										<div className="item" key={`tool-${copyIndex}-${tool.name}`}>
											<img src={tool.icon} alt={copyIndex === 0 ? `${tool.name} logo` : ''} />
										</div>
									),
									'tool'
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

export default HomePage
