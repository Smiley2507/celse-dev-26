import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: '-100px' }}
        className="glass-card rounded-md border border-light-border dark:border-dark-border overflow-hidden"
      >
        <div className="flex flex-col md:flex-row min-h-[500px]">
          {/* Image Side */}
          <div className="w-full md:w-[40%] relative min-h-[400px] md:min-h-full">
            <img 
              src="/celse-pic-comp.jpeg" 
              alt="Celse" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-l from-light-bg/20 dark:from-dark-bg/20 to-transparent"></div>
          </div>

          {/* Text Side */}
          <div className="flex-1 p-8 md:p-14 lg:p-16 flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                My Story
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Me</h2>
            </div>

            <div className="space-y-6 text-base md:text-lg leading-relaxed text-light-text-secondary dark:text-dark-text-secondary font-normal">
              <p>
                Hey there, I'm Celse, a software engineer based in Kigali, Rwanda.
                I didn't start with code — I started with design. I used to spend hours in Figma,
                exploring layouts and ideas, thinking about how things should look and feel.
              </p>
              <p>
                That curiosity pulled me deeper. I moved from interfaces to full systems — working on
                backends, structuring databases, and figuring out how everything connects. Recently,
                I've been exploring Docker and Linux environments to build more resilient applications.
              </p>
              <p>
                I still think like a designer, but now I build like an engineer. For me, it's always
                about making things that are not just functional, but clear, useful, and well-put-together.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
