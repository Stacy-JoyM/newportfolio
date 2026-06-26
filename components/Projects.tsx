'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    title: 'The Athletes Wellness Club',
    highlights: [
      'Conceptualized and built high-fidelity web interfaces using React and Tailwind CSS, optimizing the end-to-end onboarding workflow.',
      'Built Express REST proxy for Liaison API with Bearer authentication, request timeouts, and defensive parsing of inconsistent third-party response formats.',
      'Implemented server-side Safaricom M-Pesa number validation and structured error codes for payment-related failures.',
      'Engineered and styled custom multi-step data collection workflows, programmatically capturing athlete package selection and routing selections securely to the partner payment gateway via API calls.',
    ],
    tech: ['React', 'Node.js', 'Python', 'Figma', 'REST APIs', 'Bitbucket', 'Fly.io', 'M-Pesa STK'],
    imageUrl: '/images/tawc.png',
    imageClassName: 'object-contain object-center p-6',
    imageContainerClassName: 'bg-gray-50',
    links: [
      { label: 'Live Site', href: 'https://tawc.co.ke', type: 'external' },
    ],
  },
  {
    title: 'Momentum Sports Africa Events',
    highlights: [
      'Integrated new features into the Momentum Sports main website — for example, added an Events tab that required a backend; built a Node.js + Express app that serves the site in production.',
      'Engineered the backend architecture for the core MSA platform and the events sub-domain (events.msa.co.ke) using a modern JavaScript/TypeScript stack (React/Node.js), robust API design, and PostgreSQL database.',
      'Developed scalable registration workflows and data persistence layers to handle real-time attendee data, transaction monitoring, and secure information routing.',
      'Automated deployment pipelines using cloud-native infrastructure (Fly.io/AWS/Cloudflare), optimizing bundle sizes, asset delivery, and database query performance to support massive spikes during major athletic campaigns and tournament registrations.',
      'Added SEO metadata, Google Analytics, and health checks for production monitoring.',
    ],
    tech: ['React', 'Express.js', 'Node.js', 'ImageKit', 'Fly.io', 'Cloudflare', 'Google Search Console', 'Supabase', 'Docker'],
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1000&q=80',
    links: [
      { label: 'Live Site', href: 'https://events.msa.co.ke', type: 'external' },
    ],
  },
  {
    title: 'The Great Muranga Community Run',
    highlights: [
      'Built event website with a 4-step registration flow for athletes across 8 race categories — Main Race, Corporate Run, Family Run, Kids, Seniors, Men Under 20, and Women Under 20.',
      'Integrated Supabase (PostgreSQL) as the backend for registration storage, including schema design, SQL migrations, and Row Level Security.',
      'Delivered a password-protected admin dashboard for race-day operations with live registration search and filtering, attendance check-in, automated bib allocation by age, and printable PDF and Word (.docx) export.',
      'Containerised the app with Docker and deployed it to Fly.io (Johannesburg region) with environment-based configuration.',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Docker', 'Fly.io', 'Tailwind CSS'],
    imageUrl: '/images/thegreat.webp',
    links: [
      { label: 'Live Site', href: 'https://thegreatmurangacommunityrun.co.ke', type: 'external' },
    ],
  },
  {
    title: 'Go-Eats UI/UX Design Project',
    highlights: [
      'A food app that allows users to keep track of restaurant promotions and choose restaurants based on aesthetics and mood.',
      'Conducted user research and created detailed wireframes and user flow diagrams.',
      'Designed an intuitive navigation structure with clear content hierarchy and seamless user flows from onboarding to restaurant discovery.',
      'Established a comprehensive design system with typography hierarchy and a cohesive color palette.',
      'Integrated location-based recommendations, mood-based discovery, and social features such as ratings and reviews.',
    ],
    tech: ['Figma', 'UX Research', 'Wireframing', 'Design Systems'],
    imageUrl: '/images/goeats.jpeg',
    links: [
      { label: 'Live Demo', href: 'https://stacy-portfolio.my.canva.site/goeats-portfolio-pdf', type: 'external' },
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Projects
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200"
            >
              <div className={`h-52 relative overflow-hidden ${project.imageContainerClassName ?? ''}`}>
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} preview`}
                  fill
                  className={project.imageClassName ?? 'object-cover object-center'}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={index === 0}
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900 leading-snug">{project.title}</h3>
                <ul className="text-gray-600 mb-4 text-sm leading-relaxed space-y-2 list-disc pl-4">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
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
                        className="flex items-center gap-2 text-gray-700 hover:text-emerald-600 transition-colors text-sm font-medium"
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

