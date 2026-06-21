import './navbar.css'

function Navbar({ pathname, onNavigate, overlayOpen }) {
	const pathSegments = pathname.split('/').filter(Boolean)

	const handleNavigate = (targetPath) => (event) => {
		event.preventDefault()
		onNavigate(targetPath)
	}

	return (
		<header className={`site-navbar${overlayOpen ? ' navbar-overlay-open' : ''}`}>
			<nav className="navbar-inner" aria-label="Main navigation">
				<div className="terminal-mark" aria-label={`Current path ${pathname}`}>
					<a className="terminal-home" href="/" onClick={handleNavigate('/')} aria-label="Go to home">
						<span className="mark-tilde">~</span>
					</a>
					<span className="mark-slash" aria-hidden="true">/</span>
					{pathSegments.map((segment, index) => (
						<span className="terminal-segment" key={`${segment}-${index}`}>
							<a
								className="terminal-link"
								href={`/${pathSegments.slice(0, index + 1).join('/')}`}
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
					<a className="nav-btn" href="/about" onClick={handleNavigate('/about')}>About</a>
					<a className="nav-btn" href="/#experience">Experience</a>
					<a className="nav-btn" href="/projects" onClick={handleNavigate('/projects')}>Projects</a>
					<a className="nav-btn" href="/resume" onClick={handleNavigate('/resume')}>Resume</a>
				</div>
			</nav>
		</header>
	)
}
export default Navbar
