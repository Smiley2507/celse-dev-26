import React from 'react'
import { motion } from 'framer-motion'
import {
  RiCodeSSlashLine,
  RiStackLine,
  RiSettings4Line,
  RiDatabase2Line,
  RiCpuLine,
} from '@remixicon/react'

const techStack = [
  { category: 'Languages',  items: ['Java', 'JavaScript', 'C#', 'Python', 'SQL'] },
  { category: 'Frameworks', items: ['React', 'Spring Boot', 'ASP.NET Core'] },
  { category: 'Tools',      items: ['Docker', 'Git', 'Linux', 'Postman', 'Figma'] },
  { category: 'Databases',  items: ['PostgreSQL', 'SQL Server', 'MySQL'] },
]

const icons = {
  Languages:  RiCodeSSlashLine,
  Frameworks: RiStackLine,
  Tools:      RiSettings4Line,
  Databases:  RiDatabase2Line,
}

const TechCategory = ({ category, items, index }) => {
  const Icon = icons[category] ?? RiCpuLine
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="p-6 bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-md hover:border-light-border-strong dark:hover:border-dark-border-strong transition-all"
    >
      <div className="flex items-center gap-2.5 mb-5">
        <div className="w-8 h-8 rounded-md bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border flex items-center justify-center">
          <Icon size={16} className="text-light-text-secondary dark:text-dark-text-secondary" />
        </div>
        <h3 className="text-sm font-bold tracking-tight">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-2.5 py-1 text-xs font-medium border border-light-border dark:border-dark-border rounded text-light-text-secondary dark:text-dark-text-secondary hover:border-light-border-strong dark:hover:border-dark-border-strong hover:text-light-text-primary dark:hover:text-dark-text-primary transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const TechStack = () => (
  <section id="tech" className="py-20 space-y-12 corner-grid">
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary">
        Skills
      </p>
      <h2 className="text-4xl md:text-5xl font-bold">Tech Stack</h2>
      <p className="text-base text-light-text-secondary dark:text-dark-text-secondary max-w-lg leading-relaxed">
        Technologies and tools I use to bring ideas to life.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {techStack.map((stack, i) => (
        <TechCategory
          key={stack.category}
          category={stack.category}
          items={stack.items}
          index={i}
        />
      ))}
    </div>
  </section>
)

export default TechStack
