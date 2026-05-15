import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const links = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'satish.paidikondala@example.com',
      href: 'mailto:satish.paidikondala@example.com',
    },
    {
      icon: FiGithub,
      label: 'GitHub',
      value: '@satishpaidikondala',
      href: 'https://github.com/satishpaidikondala',
    },
    {
      icon: FiLinkedin,
      label: 'LinkedIn',
      value: 'Satish Paidikondala',
      href: 'https://linkedin.com/in/satishpaidikondala',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'India',
      href: null,
    },
  ]

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Let's work together">
      <div ref={ref} className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="bg-dark-card border border-dark-border rounded-2xl p-8 sm:p-10"
        >
          <p className="text-muted text-center mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a project
            idea, a question, or just want to say hi — feel free to reach out!
          </p>

          <div className="space-y-4">
            {links.map((link) => {
              const Icon = link.icon
              const content = (
                <div className="flex items-center gap-4 p-4 bg-dark/50 rounded-xl hover:bg-dark/80 transition-colors">
                  <Icon className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{link.label}</p>
                    <p className="text-white text-sm">{link.value}</p>
                  </div>
                </div>
              )

              return link.href ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={link.label}>{content}</div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
