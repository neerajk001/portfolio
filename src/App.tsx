
import Hero from './components/Hero'
import { About } from './components/About'
import Projects from './components/projects'
import { Languages } from './components/Languages'
import { Tools } from './components/Tools'
import { Contact } from './components/Contact'


function App() {
  return (<>
    <div className='min-h-screen bg-gray-900 text-white'>
      <Hero/>
      <About/>
      <Projects/>
      <Languages/>
      <Tools/>
      <Contact/>
    </div>
    </>
  )
}

export default App