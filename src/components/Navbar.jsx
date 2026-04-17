import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RiMoonLine, RiSunLine } from '@remixicon/react'

const Navbar = ({ toggleTheme, isDarkMode }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: 'About',    href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Tech',     href: '#tech' },
    { name: 'Contact',  href: '#contact' },
  ]

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
            className="text-base font-bold tracking-tighter hover:opacity-60 transition-opacity shrink-0 text-light-text-primary dark:text-dark-text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Celse <span className='text-accent'>• Dev</span>
          </motion.a>

          {/* Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {link.name}
              </motion.a>
            ))}
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
