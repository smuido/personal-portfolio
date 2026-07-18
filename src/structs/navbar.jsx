import './navbar.css'
import resume from '../assets/resume.pdf'

function Navbar({ pathname, onNavigate, overlayOpen }) {
	const pathSegments = pathname.split('/').filter(Boolean)
	const basePath = import.meta.env.BASE_URL.replace(/\/$/, '')
	const toHref = (targetPath) => `${basePath}${targetPath}`.replace(/\/\/{2,}/g, '/')

	const handleNavigate = (targetPath) => (event) => {
		event.preventDefault()
		onNavigate(targetPath)
	}

	return (
		<header className={`site-navbar${overlayOpen ? ' navbar-overlay-open' : ''}`}>
			<nav className="navbar-inner" aria-label="Main navigation">
				<div className="terminal-mark" aria-label={`Current path ${pathname}`}>
					<a className="terminal-home" href={toHref('/')} onClick={handleNavigate('/')} aria-label="Go to home">
						<span className="mark-tilde">~</span>
					</a>
					<span className="mark-slash" aria-hidden="true">/</span>
					{pathSegments.map((segment, index) => (
						<span className="terminal-segment" key={`${segment}-${index}`}>
							<a
								className="terminal-link"
								href={toHref(`/${pathSegments.slice(0, index + 1).join('/')}`)}
								onClick={handleNavigate(`/${pathSegments.slice(0, index + 1).join('/')}`)}
								aria-label={`Go to ${segment}`}
							>
								{segment}
							</a>
							<span className="mark-slash" aria-hidden="true">/</span>
						</span>
					))}
					<span className="mark-cursor" aria-hidden="true" />
				</div>

				<div className="navbar-links">
					<a className="nav-btn" href={toHref('/about')} onClick={handleNavigate('/about')}>About</a>
					<a className="nav-btn" href={toHref('/experience')} onClick={handleNavigate('/experience')}>Experience</a>
					<a className="nav-btn" href={toHref('/projects')} onClick={handleNavigate('/projects')}>Projects</a>
					<a className="nav-btn" href={resume} target="_blank" rel="noreferrer noopener">Resume</a>
				</div>
			</nav>
		</header>
	)
}
export default Navbar
