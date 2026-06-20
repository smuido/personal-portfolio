import { useEffect, useMemo, useState } from 'react'
import './navbar.css'

function Navbar() {
	const [pathname, setPathname] = useState(window.location.pathname)

	useEffect(() => {
		const handleLocationChange = () => setPathname(window.location.pathname)
		window.addEventListener('popstate', handleLocationChange)
		window.addEventListener('hashchange', handleLocationChange)

		return () => {
			window.removeEventListener('popstate', handleLocationChange)
			window.removeEventListener('hashchange', handleLocationChange)
		}
	}, [])

	const pathSegments = useMemo(() => pathname.split('/').filter(Boolean), [pathname])

	return (
		<header className="site-navbar">
			<nav className="navbar-inner" aria-label="Main navigation">
				<div className="terminal-mark" aria-label={`Current path ${pathname}`}>
					<a className="terminal-home" href="/" aria-label="Go to home">
						<span className="mark-tilde">~</span>
					</a>
					<span className="mark-slash" aria-hidden="true">/</span>
					{pathSegments.map((segment, index) => (
						<span className="terminal-segment" key={`${segment}-${index}`}>
							<a
								className="terminal-link"
								href={`/${pathSegments.slice(0, index + 1).join('/')}`}
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
					<a className="nav-btn" href="/about">About</a>
					<a className="nav-btn" href="/#experience">Posts</a>
					<a className="nav-btn" href="/projects">Projects</a>
					<a className="nav-btn" href="/#skills">Pics</a>
					<a className="nav-btn" href="/about">More...</a>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
