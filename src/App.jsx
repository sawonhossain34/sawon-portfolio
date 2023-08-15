
import './App.css'
import Footer from './components/Footer/Footer'
import Navber from './components/Navber/Navber'
import Projects from './components/ProjectsSection/Projects'
import Skills from './components/Skills/Skills'
import About from './components/TopSectionAbout/About'

function App() {
 

  return (
    <div className='bg-[#282C33]'>
      <Navber />
      <About  />
      <Projects />
      <Skills></Skills>
      <Footer></Footer>
    </div>
  )
}

export default App
