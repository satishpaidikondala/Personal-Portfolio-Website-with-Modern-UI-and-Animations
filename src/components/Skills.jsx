import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript,
  SiTailwindcss, SiFigma, SiGit, SiVite,
  SiPython, SiJavascript, SiCss, SiHtml5
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: SiCss, color: '#1572B6' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="skills" title="Skills & Technologies" subtitle="Technologies I work with on a daily basis">
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
