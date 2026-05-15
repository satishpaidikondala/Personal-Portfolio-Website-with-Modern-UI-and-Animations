import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'
import { FaJava } from 'react-icons/fa6'
import {
  SiSpring, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiPython, SiSolidity,
  SiDocker, SiGit, SiApachekafka, SiRedis
} from 'react-icons/si'

const skills = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Solidity', icon: SiSolidity, color: '#363636' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'Kafka', icon: SiApachekafka, color: '#231F20' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="skills" title="Skills & Technologies" subtitle="Technologies I work with based on my projects">
      <div ref={ref} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group bg-dark-card border border-dark-border rounded-xl p-6 text-center hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <Icon
                className="w-10 h-10 mx-auto mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ color: skill.color }}
              />
              <p className="text-sm text-muted group-hover:text-white transition-colors">
                {skill.name}
              </p>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
