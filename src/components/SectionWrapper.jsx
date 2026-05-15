import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  )
}
