'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Professional Summary
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-64 sm:h-80 md:h-96 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/softwareengineer.jpg"
                alt="A picture of the developer"
                fill
                style={{ objectFit: 'cover' }} 
                priority
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Purpose-driven Software Engineer and Technical Project Manager with expertise in building robust, data-driven web applications from scratch. I combine full-stack engineering (React, Python, PostgreSQL) with intuitive UI/UX design, and translate complex organizational needs into high-performing digital assets. Experienced in managing full project lifecycles, optimizing relational databases and aligning tech infrastructure to support live, large-scale events and community-driven initiatives.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-8 py-3.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm shadow-md hover:shadow-lg"
              >
                Let&apos;s Connect
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}