'use client'

import { motion } from 'framer-motion'

const education = [
  {
    institution: 'Moringa School',
    degree: 'Certificate in Software Engineering',
    location: 'Nairobi, Kenya',
    period: '09/2024 - 11/2025',
  },
  {
    institution: 'University of Nairobi',
    degree: "Bachelor of Arts in Design",
    location: 'Nairobi, Kenya',
    period: '09/2019 - 11/2023',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-12 bg-white">
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
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-green-50 to-teal-50 border-l-4 border-tertiary1 rounded-r-xl p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">{item.institution}</h3>
                    <p className="text-gray-700 font-medium">{item.degree}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="inline-block px-3 py-1 bg-tertiary1/10 rounded-full mb-2">
                      <p className="text-xs font-medium text-tertiary1-700">{item.location}</p>
                    </div>
                    <p className="text-sm text-gray-600">{item.period}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200">
                  <span className="text-2xl">🎓</span>
                  <span className="text-sm text-gray-600">Certificate</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

