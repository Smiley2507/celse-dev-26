import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiMoonLine, RiSunLine } from '@remixicon/react'

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navLinks = [
    { name: 'About',    href: '#about',    id: 'about' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Tech',     href: '#tech',     id: 'tech' },
    { name: 'Contact',  href: '#contact',  id: 'contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })

    // Intersection Observer for scroll spying
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Center-ish trigger
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    // Watch all sections, plus the "home" (Hero) section
    const sectionIds = ['home', ...navLinks.map(l => l.id)]
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
      <motion.nav
        layout
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className={`pointer-events-auto transition-all duration-300 ${
          scrolled
            ? 'navbar-island rounded-full px-5 py-2.5 mx-4'
            : 'bg-transparent border-transparent shadow-none w-full max-w-7xl px-6 py-4 rounded-none'
        }`}
      >
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-base font-bold tracking-tighter hover:opacity-60 transition-opacity shrink-0 text-light-text-primary dark:text-dark-text-primary flex items-center gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Celse <span className='text-accent'>• Dev</span>
          </motion.a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-1.5 p-1 bg-light-surface/50 dark:bg-dark-surface/50 rounded-full border border-light-border dark:border-dark-border">
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.id
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive 
                      ? 'text-light-text-primary dark:text-dark-text-primary' 
                      : 'text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary'
                  }`}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-full shadow-sm -z-10"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  {link.name}
                </motion.a>
              )
            })}
          </div>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors shrink-0"
            aria-label="Toggle Theme"
          >
            {isDarkMode
              ? <RiSunLine size={17} className="text-dark-text-secondary" />
              : <RiMoonLine size={17} className="text-light-text-secondary" />
            }
          </button>
        </div>
      </motion.nav>
    </div>
  )
}

export default Navbar
