'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'Ecotrack',
    description:
      'Carbon footprint companion that tracks daily actions, surfaces climate insights, and nudges users toward practical climate-positive habits.',
    tech: ['Next.js', 'Supabase', 'Cloudflare Workers', 'Tailwind CSS'],
    imageUrl: '/images/carbontracker.jpeg',
    links: [
      { label: 'Live Demo', href: 'https://ecotrackaiproject.netlify.app', type: 'external' },
      { label: 'Frontend Code', href: 'https://github.com/Stacy-JoyM/ecotrack', type: 'code' },
      { label: 'Backend Code', href: 'https://github.com/Stacy-JoyM/ecotrack-ai-backend', type: 'code' },
    ],
  },
  {
    title: 'Quizbot',
    description:
      'Conversational chatbot that delivers concise answers and runs entirely on Google Cloud Run for a fast, serverless experience.',
    tech: ['React', 'Google Cloud Run', 'Dialogflow', 'Tailwind CSS'],
    imageUrl: '/images/chatbot.jpeg',
    links: [
      { label: 'Live Demo', href: 'https://quizbot-frontend-795951427566.us-central1.run.app/', type: 'external' },
    ],
  },
  {
    title: 'Go-Eats (UI/UX)',
    description:
      'End-to-end food discovery experience that helps diners browse restaurant promos, filter by vibe, and plan outings based on mood.',
    tech: ['Figma', 'UX Research', 'Design Systems'],
    imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80',
    links: [
      { label: 'Presentation', href: 'https://stacy-portfolio.my.canva.site/goeats-portfolio-pdf', type: 'external' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Projects
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-200"
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/40 pointer-events-none" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-primary">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => {
                    const isCode = link.type === 'code'
                    const Icon = isCode ? Github : ExternalLink
                    return (
                      <a
                        key={`${project.title}-${link.label}`}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-semibold"
                      >
                        <Icon className="w-4 h-4" />
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

