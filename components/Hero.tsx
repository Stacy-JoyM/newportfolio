'use client'

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
            className="text-base md:text-lg text-white/90 mb-8 font-sans leading-relaxed"
          >
            Explore my projects done using programming languages such as Python and Node. 
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex gap-12 flex-wrap justify-center" 
          >
            <a
              href="#projects"
              className="px-6 md:px-8 py-3 bg-green-700 text-white rounded font-semibold hover:bg-green-700 transition-all shadow-lg hover:shadow-xl font-sans"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 md:px-8 py-3 bg-white text-gray-800 rounded font-semibold hover:bg-gray-100 transition-all font-sans shadow-md"
            >
              Contact Me
            </a>
            <a
              href="https://docs.google.com/document/d/1eArrumi8VnFbMw5rzJ2wuXMJJB-YKH0eWF_6UYSegNc/edit?tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 md:px-8 py-3 border border-white text-white rounded font-semibold hover:bg-white/10 transition-all font-sans shadow-md"
            >
              View Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}