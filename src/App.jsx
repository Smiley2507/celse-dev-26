import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const next = !prev
      if (next) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      return next
    })
  }

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg transition-colors duration-300 relative">
      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />
      {/* Global page grid */}
      <div className="page-grid" aria-hidden="true" />

      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      <main className="max-w-7xl mx-auto px-6 pt-20 space-y-32 relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <TechStack />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
