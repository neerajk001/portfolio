import React from 'react'
import Hero from './components/Hero'
import { About } from './components/About'


function App() {
  return (<>
    <div className='min-h-screen bg-gray-900 text-white'>
      <Hero/>
      <About/>
    </div>
    </>
  )
}

export default App