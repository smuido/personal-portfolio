import './App.css'
import { useEffect, useState } from 'react'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import ExperiencePage from './pages/experience'
import ProjectsPage from './pages/projects'
import ProjectDetailPage from './pages/project-detail'
import Navbar from './structs/navbar'
import { projects } from './structs/home'

function App() {
  const [pathname, setPathname] = useState(window.location.pathname)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const handleLocationChange = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handleLocationChange)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
    }
  }, [])

  const navigateTo = (nextPath) => {
    if (nextPath === window.location.pathname) return

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const openProject = (slug) => {
    const project = projects.find((item) => item.slug === slug)
    if (!project) return

    setActiveProject(project)
  }

  const closeProject = () => {
    setActiveProject(null)
  }

  function currPath() {
    if (pathname === '/about') {
      return <AboutPage />
    }
    if (pathname === '/experience') {
      return <ExperiencePage />
    }
    if (pathname === '/projects') {
      return <ProjectsPage onOpenProject={openProject} />
    }
    return <HomePage onOpenProject={openProject} />
  }
  const currentPage = currPath()

  return (
    <>
      <Navbar pathname={pathname} onNavigate={navigateTo} overlayOpen={!!activeProject} />
      <div className="app-route-shell">
        {currentPage}
      </div>
      {activeProject ? (
        <ProjectDetailPage project={activeProject} onClose={closeProject} />
      ) : null}
    </>
  )
}

export default App
