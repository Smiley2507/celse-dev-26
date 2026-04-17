import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 corner-grid">
      <motion.div
        className="max-w-2xl w-full space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary">
            My Story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        </div>

        <div className="space-y-5 text-base leading-[1.85] text-light-text-secondary dark:text-dark-text-secondary">
          <p>
            Hey there, I'm Celse, a software engineer based in Kigali, Rwanda.
            I didn't start with code — I started with design. I used to spend hours in Figma,
            exploring layouts and ideas, thinking about how things should look and feel. At some
            point, designing wasn't enough anymore. I wanted to actually build what I had in mind,
            so I started learning how to code.
          </p>
          <p>
            That curiosity pulled me deeper. I moved from interfaces to full systems — working on
            backends, structuring databases, and figuring out how everything connects. Recently,
            I've been getting into Docker and Linux, trying to understand what happens after
            development and how applications run in real-world environments.
          </p>
          <p>
            I still think like a designer, but now I build like an engineer. For me, it's always
            about making things that are not just functional, but clear, useful, and well-put-together.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default About
