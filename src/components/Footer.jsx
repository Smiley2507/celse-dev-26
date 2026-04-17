import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-32 border-t border-light-border dark:border-dark-border overflow-hidden">
      {/* Bottom-corner grid decorations (blueprint brackets) */}
      <div className="absolute bottom-0 left-0 w-24 h-24 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          color: '#6B7280',
          opacity: 0.12,
          WebkitMaskImage: 'linear-gradient(135deg, black 30%, transparent 80%)',
          maskImage: 'linear-gradient(135deg, black 30%, transparent 80%)',
        }}
      />
      <div className="absolute bottom-0 right-0 w-24 h-24 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          color: '#6B7280',
          opacity: 0.12,
          WebkitMaskImage: 'linear-gradient(225deg, black 30%, transparent 80%)',
          maskImage: 'linear-gradient(225deg, black 30%, transparent 80%)',
        }}
      />
      <div className="absolute top-0 left-0 w-24 h-24 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          color: '#6B7280',
          opacity: 0.12,
          WebkitMaskImage: 'linear-gradient(315deg, black 30%, transparent 80%)',
          maskImage: 'linear-gradient(315deg, black 30%, transparent 80%)',
        }}
      />
      <div className="absolute top-0 right-0 w-24 h-24 pointer-events-none" aria-hidden="true"
        style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '12px 12px',
          color: '#6B7280',
          opacity: 0.12,
          WebkitMaskImage: 'linear-gradient(45deg, black 30%, transparent 80%)',
          maskImage: 'linear-gradient(45deg, black 30%, transparent 80%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-base font-bold tracking-tighter">Celse</span>
          <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
            Building with care and curiosity.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex gap-6 text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary">
            <a href="#about"    className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">About</a>
            <a href="#projects" className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Projects</a>
            <a href="#tech"     className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Tech</a>
            <a href="#contact"  className="hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors">Contact</a>
          </div>
          <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary opacity-60">
            © {currentYear} Celse Mizeromahire. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
