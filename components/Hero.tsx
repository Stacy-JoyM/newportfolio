'use client'
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-white" 
      
    >
      <div className="absolute top-0 left-0 w-full h-[90vh] overflow-hidden">
        <img
          src="/images/workspace.jpg"
          alt="Workspace"
          className="object-cover w-full h-full"
          style={{ 
              objectFit: 'cover', 
              filter: 'grayscale(10%) brightness(0.7) contrast(1.1)',
              backgroundColor: '#4f6d7a' 
          }}
        />
        <div className="absolute inset-0 bg-gray-800/50 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          
          className="w-full text-center mx-auto" 
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-white mb-2 font-sans"
          >
            Hello, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 text-white font-serif"
          >
            Joy Stacy Muthoka
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl font-normal italic mb-6 text-white/90 font-sans"
          >
            Software Engineer | UI/UX Designer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base md:text-lg text-white/90 mb-10 font-sans leading-relaxed"
          >
            Explore my projects done using programming languages such as Python and Node. 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-5 flex-wrap justify-center items-center" 
          >
            <a
              href="#projects"
              className="px-8 py-3.5 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors text-sm min-w-[140px] text-center shadow-lg hover:shadow-xl"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3.5 border border-white/50 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-sm min-w-[140px] text-center"
            >
              Contact Me
            </a>
            <a
              href="https://docs.google.com/document/d/1eArrumi8VnFbMw5rzJ2wuXMJJB-YKH0eWF_6UYSegNc/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/50 text-white rounded-lg font-medium hover:bg-white/10 transition-colors text-sm min-w-[140px] text-center"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}