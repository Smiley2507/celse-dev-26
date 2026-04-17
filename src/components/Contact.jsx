import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { RiGithubFill, RiLinkedinBoxFill, RiMailLine, RiDribbbleLine, RiArrowRightLine, RiCheckboxCircleLine, RiErrorWarningLine } from '@remixicon/react'

const socials = [
  { icon: RiLinkedinBoxFill, href: 'https://www.linkedin.com/in/celse-mizeromahire-069421178', name: 'LinkedIn' },
  { icon: RiGithubFill, href: 'https://github.com/Smiley2507', name: 'GitHub' },
  { icon: RiMailLine, href: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`, name: 'Email' },
  { icon: RiDribbbleLine, href: 'https://dribbble.com/Highrunner01', name: 'Dribbble' },
]

const Toast = ({ status, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = status === 'success'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: '-50%' }}
      animate={{ opacity: 1, y: 0, x: '-50%' }}
      exit={{ opacity: 0, y: 20, x: '-50%' }}
      className={`fixed bottom-8 left-1/2 z-100 flex items-center gap-3 px-6 py-4 rounded-md border shadow-2xl backdrop-blur-md min-w-[320px] ${
        isSuccess 
          ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' 
          : 'bg-red-500/10 border-red-500/20 text-red-500'
      }`}
    >
      {isSuccess ? <RiCheckboxCircleLine size={20} /> : <RiErrorWarningLine size={20} />}
      <div className="flex-1 text-sm font-medium">
        {isSuccess ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
      </div>
      <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity">
        <RiArrowRightLine size={16} className="rotate-45" />
      </button>
    </motion.div>
  )
}

const Contact = () => {
  const [status, setStatus] = useState('idle') // idle, loading, success, error
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || ""

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-20 corner-grid relative">
      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <Toast status={status} onClose={() => setStatus('idle')} />
        )}
      </AnimatePresence>

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
                target={href.startsWith('mailto:') ? '_self' : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="w-12 h-12 flex items-center justify-center border border-light-border dark:border-dark-border rounded-md text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text-primary dark:hover:text-dark-text-primary hover:border-light-border-strong dark:hover:border-dark-border-strong transition-all overflow-hidden"
              >
                <Icon size={24} />
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
            onSubmit={handleSubmit}
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
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors disabled:opacity-50"
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
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors disabled:opacity-50"
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
                disabled={status === 'loading'}
                className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors disabled:opacity-50"
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
                disabled={status === 'loading'}
                className="w-full px-4 py-2.5 text-sm bg-light-surface dark:bg-dark-bg border border-light-border dark:border-dark-border rounded-md focus:outline-none focus:border-accent dark:focus:border-accent transition-colors resize-none disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-3 bg-light-text-primary dark:bg-dark-text-primary text-white dark:text-dark-bg text-sm font-semibold rounded-md flex items-center justify-center gap-2 hover:opacity-80 transition-all active:scale-[0.98] disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <RiArrowRightLine size={16} className={status === 'loading' ? 'animate-pulse' : ''} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
