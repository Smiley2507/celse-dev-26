import React from 'react'
import { motion } from 'framer-motion'
import { RiCodeLine, RiDatabaseLine, RiPaletteLine } from '@remixicon/react'

const services = [
  {
    title: 'Website Development',
    description: 'Crafting responsive, high-performance websites with modern frameworks and a focus on SEO and user experience.',
    icon: <RiCodeLine size={32} className="text-accent" />,
  },
  {
    title: 'Full-stack System Development',
    description: 'Building robust end-to-end systems, from scalable backends and databases to interactive, data-driven interfaces.',
    icon: <RiDatabaseLine size={32} className="text-accent" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, visually stunning interfaces that prioritize user needs and brand identity.',
    icon: <RiPaletteLine size={32} className="text-accent" />,
  },
]

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="space-y-16">
        <div className="text-center space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary"
          >
            What I Offer
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight"
          >
            Core Services
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card group p-10 rounded-md border border-light-border dark:border-dark-border hover:border-accent/50 transition-all duration-300 flex flex-col items-center text-center space-y-6"
            >
              <div className="p-4 bg-accent/10 rounded-md group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-light-text-primary dark:text-dark-text-primary">
                {service.title}
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary leading-relaxed font-normal">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
