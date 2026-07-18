import './App.css'
import { useEffect, useState } from 'react'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ExperiencePage from './pages/experience'
import ProjectsPage from './pages/projects'
import ProjectDetailPage from './pages/project-detail'
import Navbar from './structs/navbar'
import Footer from './structs/footer'
import { experience, projects, volunteerExp } from './structs/home'

const APP_BASE = import.meta.env.BASE_URL.replace(/\/$/, '')

const normalizeAppPath = (browserPath) => {
  if (!browserPath) return '/'

  const stripped = APP_BASE && browserPath.startsWith(APP_BASE)
    ? browserPath.slice(APP_BASE.length)
    : browserPath

  if (!stripped || stripped === '/') return '/'

  return stripped.startsWith('/') ? stripped : `/${stripped}`
}

const toBrowserPath = (appPath) => {
  const normalizedPath = appPath?.startsWith('/') ? appPath : `/${appPath || ''}`
  const joinedPath = `${APP_BASE}${normalizedPath}`

  return joinedPath.replace(/\/\/{2,}/g, '/')
}

function App() {
  const [pathname, setPathname] = useState(() => normalizeAppPath(window.location.pathname))
  const [activeDetail, setActiveDetail] = useState(null)

  useEffect(() => {
    const handleLocationChange = () => setPathname(normalizeAppPath(window.location.pathname))

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const navigateTo = (nextPath) => {
    const targetAppPath = nextPath?.startsWith('/') ? nextPath : `/${nextPath || ''}`
    const targetBrowserPath = toBrowserPath(targetAppPath)

    if (targetBrowserPath === window.location.pathname) return

    window.history.pushState({}, '', targetBrowserPath)
    setPathname(targetAppPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProject = (slug) => {
    const project = projects.find((item) => item.slug === slug)
    if (!project) return

    setActiveDetail({ type: 'project', item: project })
  }

  const openExperience = (item, type = 'work') => {
    if (!item) return

    const source = type === 'volunteer' ? volunteerExp : experience
    const matchedItem = source.find((entry) => entry === item)

    setActiveDetail({ type, item: matchedItem || item })
  }

  const closeProject = () => {
    setActiveDetail(null)
  }

  function currPath() {
    if (pathname === '/about') {
      return <AboutPage />
    }
    if (pathname === '/experience') {
      return <ExperiencePage onOpenExperience={openExperience} />
    }
    if (pathname === '/projects') {
      return <ProjectsPage onOpenProject={openProject} />
    }
    return <HomePage onOpenProject={openProject} onOpenExperience={openExperience} onNavigate={navigateTo} />
  }
  const currentPage = currPath()

  return (
    <div className="app-shell">
      <Navbar pathname={pathname} onNavigate={navigateTo} overlayOpen={!!activeDetail} />
      <div className="app-route-shell">
        {currentPage}
      </div>
      <Footer />
      {activeDetail ? (
        <ProjectDetailPage detail={activeDetail} onClose={closeProject} />
      ) : null}
    </div>
  )
}

export default App
