import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const blob1Y = useTransform(scrollYProgress, [0, 1], ['0%', '-30%'])
  const blob2Y = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: bgY }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, #6366f1 0%, transparent 50%), radial-gradient(circle at 75% 75%, #6366f1 0%, transparent 50%)',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        style={{ y: blob1Y }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        style={{ y: blob2Y }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        style={{ y: contentY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-medium mb-4 tracking-wider uppercase text-sm"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
            Satish Paidikondala
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build modern, performant web applications with clean code and great user experiences.
          Passionate about frontend development, animations, and bringing ideas to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-dark-border hover:border-primary/50 text-white rounded-full font-medium transition-all"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-white transition-colors"
      >
        <HiArrowDown className="animate-float" size={24} />
      </motion.a>
    </section>
  )
}
