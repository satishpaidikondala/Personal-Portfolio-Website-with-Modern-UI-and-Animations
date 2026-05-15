import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="about" title="About Me" subtitle="Get to know me">
      <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-500 rounded-2xl rotate-6" />
            <div className="absolute inset-0 bg-dark-card border border-dark-border rounded-2xl overflow-hidden flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-500">
              <span className="text-6xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-muted text-lg leading-relaxed mb-4">
            I'm a passionate Full Stack Developer with a strong focus on creating 
            beautiful, functional, and performant web applications. I specialize in 
            React, Node.js, and modern JavaScript ecosystems.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            Currently, I'm diving deep into advanced animation techniques, cloud 
            deployment strategies, and building accessible user interfaces that 
            work for everyone.
          </p>
          <p className="text-muted leading-relaxed mb-6">
            When I'm not coding, you'll find me exploring new technologies, 
            contributing to open source projects, or sharing knowledge with the 
            developer community.
          </p>
          <div className="flex flex-wrap gap-3">
            {['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Git', 'UI/UX'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
