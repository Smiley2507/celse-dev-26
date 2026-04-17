import React from 'react'
import { motion } from 'framer-motion'
import { RiExternalLinkLine } from '@remixicon/react'
import CelseVector from './CelseVector'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col lg:flex-row items-center justify-between pt-24 pb-12"
    >
      {/* Text content */}
      <div className="flex-1 z-10 space-y-7 relative max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary mb-3">
            Software Engineer
          </p>
          <h1 className="text-5xl md:text-8xl font-extrabold leading-[1.05] tracking-tighter text-light-text-primary dark:text-dark-text-primary">
            Celse<br />
            <span className="text-accent">Mizeromahire</span>
          </h1>
        </motion.div>

        <motion.p
          className="text-base md:text-xl text-light-text-secondary dark:text-dark-text-secondary max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          I build clean, scalable web applications and systems with a focus on usability and real-world impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-light-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg text-sm font-semibold rounded-md transition-all hover:opacity-80 active:scale-95"
          >
            Let's Connect
          </a>
          <a
            href="/cv.pdf"
            className="px-6 py-3 border border-light-border dark:border-dark-border text-sm font-semibold rounded-md transition-all hover:bg-light-surface dark:hover:bg-dark-surface active:scale-95 flex items-center gap-2 text-light-text-primary dark:text-dark-text-primary"
          >
            View CV <RiExternalLinkLine size={16} />
          </a>
        </motion.div>
      </div>

      {/* Illustration */}
      <motion.div
        className="flex-1 w-full flex justify-center lg:justify-end relative mt-24 lg:mt-0 md:ml-12 lg:ml-20"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
         <motion.div
            animate={{
              y: [-10, 10, -10],
            }}
            transition={{
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            className="relative lg:mr-10"
         >
             {/* Theme-aware Vector Illustration */}
             <CelseVector 
              className="max-w-full lg:max-w-none h-auto drop-shadow-2xl w-[450px] lg:w-[600px] xl:w-[650px] lg:scale-100 xl:scale-100 origin-right object-contain text-light-text-primary dark:text-dark-text-primary opacity-90 transition-colors duration-500 mb-20"
             />

             {/* Subtle glow behind the illustration for dark mode */}
             <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full -z-10 hidden dark:block"></div>
         </motion.div>
      </motion.div>

    </section>
  )
}

export default Hero

