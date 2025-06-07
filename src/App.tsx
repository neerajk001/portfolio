
import Hero from './components/Hero'
import { About } from './components/About'
import Projects from './components/projects'
import { Languages } from './components/Languages'
import { Tools } from './components/Tools'
import { Contact } from './components/Contact'
import FooterBar from './components/FooterBar'



function App() {
  return (<>
    <div className='min-h-screen bg-gradient-to-b from-black to-gray-800
 text-white items-center justify-center flex flex-col text-center'>
  
      <Hero/>
      <About/>
      <Projects/>
      <Languages/>
      <Tools/>
      <Contact/>
      <FooterBar/>
    </div>
    </>
  )
}

export default App