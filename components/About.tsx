'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            About Me
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-96 relative rounded-lg overflow-hidden shadow-xl">
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
                className="inline-block px-6 py-3 bg-green-700 text-white rounded-lg font-semibold hover:bg-primary-800 transition-all hover:shadow-lg"
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