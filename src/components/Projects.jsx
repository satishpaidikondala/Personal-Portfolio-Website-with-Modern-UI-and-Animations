import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    title: 'Real-Time Collaborative Editor',
    description:
      'A real-time collaborative text editor built with Java 21, Spring Boot, and WebSockets. Implements Operational Transformation (OT) algorithm to handle concurrent edits across multiple users seamlessly.',
    tech: ['Java 21', 'Spring Boot', 'WebSockets', 'PostgreSQL', 'OT Algorithm'],
    github: 'https://github.com/satishpaidikondala/Real-Time_Collobrative_Editor',
  },
  {
    title: 'Blog Platform',
    description:
      'A high-performance, SEO-optimized blog platform built with Next.js, TypeScript, Tailwind CSS, and MDX. Features server-side rendering, dynamic routing, and a rich content authoring experience.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
    github: 'https://github.com/satishpaidikondala/Blog_Platform',
  },
  {
    title: 'Offline Customer Support Chatbot',
    description:
      'A privacy-first offline chatbot powered by Ollama and Meta Llama 3.2 3B, deployed locally for e-commerce customer support. Demonstrates local LLM deployment without cloud dependency.',
    tech: ['Python', 'Ollama', 'Llama 3.2', 'Local LLM'],
    github: 'https://github.com/satishpaidikondala/Offline_Customer_Support_Chatbot',
  },
  {
    title: 'Distributed Shopping Cart Service',
    description:
      'A production-ready, session-based shopping cart microservice built with Spring Boot and Redis. Implements centralized distributed caching for efficient e-commerce cart management.',
    tech: ['Spring Boot', 'Redis', 'Java', 'Microservices', 'Distributed Caching'],
    github: 'https://github.com/satishpaidikondala/Distributed-Shopping-Cart-Service',
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
                >
                  <FiExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
