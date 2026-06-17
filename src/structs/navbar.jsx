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

	const terminalPath = useMemo(() => {
		if (pathname === '/') return '/'
		return pathname.endsWith('/') ? pathname : `${pathname}/`
	}, [pathname])

	return (
		<header className="site-navbar">
			<nav className="navbar-inner" aria-label="Main navigation">
				<a className="terminal-home" href="#top" aria-label="Go to home">
					<span className="terminal-mark" aria-hidden="true">
						<span className="mark-tilde">~</span>
						<span className="mark-slash">{terminalPath}</span>
						<span className="mark-cursor" />
					</span>
				</a>

				<div className="navbar-links">
					<a className="nav-btn" href="#top">About</a>
					<a className="nav-btn" href="#experience">Posts</a>
					<a className="nav-btn" href="#projects">Projects</a>
					<a className="nav-btn" href="#skills">Pics</a>
					<a className="nav-btn" href="#skills">More...</a>
				</div>
			</nav>
		</header>
	)
}

export default Navbar
