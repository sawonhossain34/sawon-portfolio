
import './App.css'
import Navber from './components/Navber/Navber'
import Projects from './components/ProjectsSection/Projects'
import About from './components/TopSectionAbout/About'

function App() {
 

  return (
    <div className='bg-[#282C33]'>
      <Navber />
      <About  />
      <Projects />
    </div>
  )
}

export default App
