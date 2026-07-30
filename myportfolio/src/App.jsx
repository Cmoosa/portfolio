import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'

function App() {
  return (
    <div className="bg-[#050414] relative min-h-screen">
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,_#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,_#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_#000_70%)] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,_#000_70%)]">
      </div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App