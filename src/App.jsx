import { useState } from 'react'

import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skill from './component/Skill'
import Project from './component/Project'
import Contact from './component/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
    </>
  )
}

export default App
