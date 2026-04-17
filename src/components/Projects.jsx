import React from 'react'
import { motion } from 'framer-motion'
import { RiGithubFill, RiExternalLinkLine } from '@remixicon/react'

const projects = [
  {
    title: 'Pharmacy Management System',
    description:
      'Full-stack system for managing inventory, sales, and pharmacy operations in real time.',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Docker', 'Linux'],
    github: '#',
    demo: '#',
    image:
      'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'EverGo – Bus Management System',
    description:
      'A full-stack bus management system designed to streamline booking and operations.',
    tech: ['ASP.NET Core', 'SQL Server'],
    github: '#',
    demo: '#',
    image:
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Kuranga Website Redesign',
    description:
      'A complete redesign of the Kuranga website to improve usability and visual clarity.',
    tech: ['React', 'UI/UX'],
    github: '#',
    demo: '#',
    image:
      'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
  },
]

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group flex flex-col bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-md overflow-hidden hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40 transition-all hover:-translate-y-1"
  >
    {/* Image */}
    <div className="relative aspect-video overflow-hidden bg-light-surface dark:bg-dark-bg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
      />
      {/* Overlay links */}
      <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
        <a
          href={project.github}
          title="GitHub"
          className="w-9 h-9 bg-white dark:bg-dark-surface rounded-md flex items-center justify-center text-light-text-primary dark:text-dark-text-primary hover:scale-110 transition-transform shadow-md"
        >
          <RiGithubFill size={18} />
        </a>
        <a
          href={project.demo}
          title="Live Demo"
          className="w-9 h-9 bg-white dark:bg-dark-surface rounded-md flex items-center justify-center text-light-text-primary dark:text-dark-text-primary hover:scale-110 transition-transform shadow-md"
        >
          <RiExternalLinkLine size={18} />
        </a>
      </div>
    </div>

    {/* Content */}
    <div className="p-5 space-y-3 flex-1 flex flex-col">
      <h3 className="text-base font-bold text-light-text-primary dark:text-dark-text-primary leading-snug">
        {project.title}
      </h3>
      <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary leading-relaxed flex-1">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 border border-light-border dark:border-dark-border rounded text-light-text-secondary dark:text-dark-text-secondary"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
)

const Projects = () => (
  <section id="projects" className="py-20 space-y-12 corner-grid">
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary">
        Portfolio
      </p>
      <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
      <p className="text-base text-light-text-secondary dark:text-dark-text-secondary max-w-lg leading-relaxed">
        Some of the things I've built recently.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </div>
  </section>
)

export default Projects
