'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      // Check if window is defined (for SSR safety, though 'use client' helps)
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 50)
      }
    }
    
    // Add event listener only on the client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Determine the navigation bar background and text color based on scroll state
  const navClass = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-black/90 shadow-lg'

  const textClass = 'text-white' // White text for all elements

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass} backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/#home"
            className={`text-xl font-semibold ${textClass} cursor-pointer`}
          >
            Joy Muthoka
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${textClass} text-sm font-medium hover:opacity-80 transition-opacity`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              // Apply white text class to the menu icon button
              className={textClass} 
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            // Use a semi-transparent black background for the mobile menu
            className="md:hidden bg-black/95 border-t border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="pt-2 pb-3 space-y-1 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-gray-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
    </motion.nav>
  )
}