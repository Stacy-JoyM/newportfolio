'use client'

import { motion } from 'framer-motion'

const education = [
  {
    institution: 'Moringa School',
    degree: 'DevOps Engineering (Professional AWS Cloud Certification Inclusive)',
    location: 'Nairobi, Kenya',
    period: 'June 2026 - August 2026',
    credentialType: 'Certificate',
  },
  {
    institution: 'Saint Louis University',
    degree: 'Project Management Certification',
    location: 'Missouri, USA',
    period: 'Dec 2025 - Jan 2026',
    credentialType: 'Certificate',
  },
  {
    institution: 'Moringa School',
    degree: 'Software Engineering Certification',
    location: 'Nairobi, Kenya',
    period: 'Jun 2025 - Nov 2025',
    credentialType: 'Certificate',
  },
  {
    institution: 'University of Nairobi',
    degree: 'Bachelor of Arts in Design',
    location: 'Nairobi, Kenya',
    period: 'Sep 2019 - Nov 2023',
    credentialType: 'Degree',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
            EDUCATION
          </h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-tertiary1 rounded-r-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-primary mb-1">{item.institution}</h3>
                    <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">{item.degree}</p>
                  </div>
                  <div className="sm:text-right sm:ml-4 shrink-0">
                    <div className="inline-block px-3 py-1 bg-tertiary1/10 rounded-full mb-2">
                      <p className="text-xs font-medium text-tertiary1-700">{item.location}</p>
                    </div>
                    <p className="text-sm text-gray-600">{item.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                  <span className="text-2xl">🎓</span>
                  <span className="text-sm text-gray-600">{item.credentialType}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

