'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Volunteer Junior Developer',
    company: 'African Center for Women in Information and Communication Technology',
    period: 'November 2023 - December 2023',
    achievements: [
      'Collaborated with other junior developers and brainstormed on ideas that would improve tech in University of Nairobi',
      'Came up with figma wireframes and prototypes that clearly showcased the conceptualized ideas',
      'Developed the frontend using basic HTML, CSS and Javascript for Minimum Viable Product presentation',
    ],
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
            WORK EXPERIENCE
          </h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-secondary rounded-r-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-secondary">{exp.title}</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-lg font-semibold text-secondary">{exp.company}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
                    <p className="text-sm font-medium text-secondary">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (achIndex * 0.1) }}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <span className="text-secondary mt-1.5">▸</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

