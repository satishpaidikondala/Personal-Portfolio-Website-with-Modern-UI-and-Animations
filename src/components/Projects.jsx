import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, payment integration with Stripe, and a responsive admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com/satishpaidikondala/ecommerce-platform',
    live: 'https://ecommerce-demo.example.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop kanban boards, team workspaces, and automated workflow triggers.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    github: 'https://github.com/satishpaidikondala/task-manager',
    live: 'https://taskmanager-demo.example.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'An interactive weather dashboard that displays real-time weather data, 7-day forecasts, and historical trends using data visualization libraries and geolocation APIs.',
    tech: ['React', 'D3.js', 'OpenWeather API', 'Geolocation API', 'CSS Modules'],
    github: 'https://github.com/satishpaidikondala/weather-dashboard',
    live: 'https://weather-dashboard.example.com',
  },
  {
    title: 'AI Chat Assistant',
    description:
      'An intelligent chat assistant powered by large language models, featuring context-aware conversations, document uploads for RAG, and a polished chat UI.',
    tech: ['Next.js', 'OpenAI API', 'LangChain', 'Pinecone', 'Tailwind CSS'],
    github: 'https://github.com/satishpaidikondala/ai-chat',
    live: 'https://ai-chat.example.com',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Some things I've built recently">
      <div ref={ref} className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-dark-card border border-dark-border rounded-xl p-6 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-xl font-heading font-semibold text-white mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted hover:text-white transition-colors"
              >
                <FiGithub size={16} /> Source
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
              >
                <FiExternalLink size={16} /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
