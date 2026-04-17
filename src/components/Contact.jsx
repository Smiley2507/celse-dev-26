import React from 'react'
import { motion } from 'framer-motion'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiDribbbleLine, RiArrowRightLine } from '@remixicon/react'

const socials = [
  { icon: RiLinkedinBoxFill, href: 'https://www.linkedin.com/in/celse-mizeromahire-069421178', name: 'LinkedIn' },
  { icon: RiGithubFill, href: 'https://github.com/Smiley2507', name: 'GitHub' },
  { icon: RiMailLine, href: `mailto:${import.meta.env.EMAIL_ADDRESS}`, name: 'Email' },
  { icon: RiDribbbleLine, href: 'https://dribbble.com/Highrunner01', name: 'Dribbble' },
]

const Contact = () => {
  const accessKey = import.meta.env.WEB3FORMS_ACCESS_KEY || ""

  return (
    <section id="contact" className="py-20 corner-grid">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-text-secondary dark:text-dark-text-secondary">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">Let's Work Together</h2>
            <p className="text-base text-light-text-secondary dark:text-dark-text-secondary max-w-sm leading-relaxed">
              Have a project in mind or just want to say hi? I'm always open to new opportunities and conversations.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, name }) => (
              <motion.a
                key={name}
                href={href}
                title={name}
                whileHover={{ y: -3 }}
                // Only use target="_blank" for external links, not email
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="..."
              >
                <Icon size={25} />
              </motion.a>
            ))}

          </div>

          {/* Location chip */}
          <div className="flex items-center gap-2 text-sm text-light-text-secondary dark:text-dark-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            Kigali, Rwanda &mdash; Remote Friendly
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-md p-7"
        >
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="from_name" value="Celse Portfolio" />
            <input type="hidden" name="subject" value="New Contact Form Submission" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors placeholder:text-light-text-secondary/40 dark:placeholder:text-dark-text-secondary/40"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors placeholder:text-light-text-secondary/40 dark:placeholder:text-dark-text-secondary/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject_display"
                placeholder="Project Inquiry"
                required
                className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors placeholder:text-light-text-secondary/40 dark:placeholder:text-dark-text-secondary/40"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-light-text-secondary dark:text-dark-text-secondary">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me about your project…"
                required
                className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors resize-none placeholder:text-light-text-secondary/40 dark:placeholder:text-dark-text-secondary/40"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-light-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg text-sm font-semibold rounded-md flex items-center justify-center gap-2 hover:opacity-80 transition-opacity active:scale-[0.98]"
            >
              Send Message
              <RiArrowRightLine size={16} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
