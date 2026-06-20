import HomePage from './pages/home'
import AboutPage from './pages/about'
import ExperiencePage from './pages/experience'
import ProjectsPage from './pages/projects'
import Navbar from './structs/navbar'

function App() {
  const pathname = window.location.pathname

  function currPath() {
    if (pathname === '/about') {
      return <AboutPage />
    }
    if (pathname === '/experience') {
      return <ExperiencePage />
    }
    if (pathname === '/projects') {
      return <ProjectsPage />
    }
    return <HomePage />
  }
  const currentPage = currPath()

  return (
    <>
      <Navbar />
      {currentPage}
    </>
  )
}

export default App
