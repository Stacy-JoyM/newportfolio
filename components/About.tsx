'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/tech9.jpg"
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
            <p className="text-lg text-gray-600">
              I am a passionate developer who loves creating beautiful and functional web applications.
              With a focus on user experience and clean code, I bring ideas to life through modern
              web technologies.
            </p>
            <p className="text-lg text-gray-600">
              When I am not coding, you can find me exploring new technologies, contributing to open
              source projects, or sharing knowledge with the developer community.
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