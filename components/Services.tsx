'use client'

import { motion } from 'framer-motion'

const services = [
  {
    title: 'Software Development',
    icon: '💻',
    description: 'Building robust, data-driven web applications from scratch using modern full-stack technologies.',
    features: ['Full-Stack Web & Mobile', 'React & Node.js', 'API Design & Integration'],
  },
  {
    title: 'DevOps Engineering',
    icon: '☁️',
    description: 'Deploying and maintaining cloud-native infrastructure with automated pipelines and performance optimization.',
    features: ['Docker & Fly.io', 'AWS & Cloudflare', 'CI/CD & Monitoring'],
  },
  {
    title: 'Technical Project Management',
    icon: '📋',
    description: 'Managing full project lifecycles and aligning technical delivery with organizational goals.',
    features: ['Agile & Scrum', 'Notion & Jira', 'Stakeholder Coordination'],
  },
  {
    title: 'UI/UX Design',
    icon: '🎨',
    description: 'Creating intuitive and beautiful user interfaces that provide exceptional user experiences.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
  },
]

export default function Services() {
  return (
    <section 
      id="services" 
      className="py-16 md:py-24 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Services 
          </h2>
          <div className="w-16 h-0.5 bg-emerald-600 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300 hover:border-emerald-200"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}