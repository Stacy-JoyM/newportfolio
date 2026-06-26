'use client'
/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion'

interface Category {
  name: string;
  icon: string;
  bgColor: string;
  borderColor: string;
}

interface Skill {
  name: string;
  categories: string[];
  level: number;
  iconUrl?: string;
}

interface SkillBubbleProps {
  name: string;
  iconData: Category;
  iconUrl?: string;
}

const skills: Skill[] = [
  { name: 'Next.js', categories: ['Framework'], level: 95, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
  { name: 'Tailwind CSS', categories: ['Styling'], level: 95, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'React', categories: ['Frontend'], level: 90, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Python', categories: ['Language'], level: 90, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'JavaScript', categories: ['Language'], level: 90, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { name: 'TypeScript', categories: ['Language'], level: 85, iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'PostgreSQL', categories: ['Database'], level: 80 },
  { name: 'Node.js', categories: ['Backend'], level: 80 },
  { name: 'Supabase', categories: ['Database'], level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
  { name: 'Cloudflare', categories: ['Backend'], level: 75, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg' },
  { name: 'Docker', categories: ['DevOps'], level: 80, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'AWS', categories: ['DevOps'], level: 75, iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'SQL', categories: ['Database'], level: 85 },
]

const techStackCategories = [
  { title: 'Software Development', items: 'Full Stack Web & Mobile' },
  { title: 'Front-End Development', items: 'HTML, CSS, Tailwind CSS, Javascript, React' },
  { title: 'Back-End Programming', items: 'Node.js, Flask' },
  { title: 'Python Programming', items: 'Python, Pandas, Numpy' },
  { title: 'API Design & Integration', items: 'REST APIs' },
  { title: 'SQL & Relational Databases', items: 'SQL, PostgreSQL' },
  { title: 'Project & Workflow Management', items: 'Notion, Jira, Agile, Scrum' },
  { title: 'Cloud Infrastructure, DevOps & Deployment', items: 'Fly.io, Docker, Google Cloud Console, Cloudflare, AWS' },
  { title: 'Technical Documentation', items: 'API Documentation, User Manuals' },
  { title: 'Software Testing', items: 'Unit Testing, Performance Testing' },
  { title: 'Microsoft', items: 'MS Excel, MS Powerpoint, MS Word' },
]

const categories: Category[] = [
  { name: 'Frontend', icon: '🎨', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
  { name: 'Backend', icon: '⚙️', bgColor: 'bg-rose-50', borderColor: 'border-rose-200' },
  { name: 'Language', icon: '💻', bgColor: 'bg-emerald-50', borderColor: 'border-emerald-200' },
  { name: 'Framework', icon: '🚀', bgColor: 'bg-orange-50', borderColor: 'border-orange-200' },
  { name: 'Database', icon: '🗄️', bgColor: 'bg-purple-50', borderColor: 'border-purple-200' },
  { name: 'Styling', icon: '✨', bgColor: 'bg-indigo-50', borderColor: 'border-indigo-200' },
  { name: 'DevOps', icon: '☁️', bgColor: 'bg-amber-50', borderColor: 'border-amber-200' },
]

const SkillBubble: React.FC<SkillBubbleProps> = ({ name, iconData, iconUrl }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.2 }}
    className="flex flex-col items-center text-center gap-2 sm:gap-3 min-w-[72px] sm:min-w-[90px]"
  >
    <div className={`relative flex items-center justify-center w-16 h-16 rounded-xl ${iconData.bgColor} border ${iconData.borderColor} p-3 shadow-sm hover:shadow-md transition-shadow`}>
      {iconUrl ? (
        <img
          src={iconUrl}
          alt={`${name} Logo`}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-2xl">{iconData.icon}</span>
      )}
    </div>
    <p className="text-xs font-medium text-gray-700">{name}</p>
  </motion.div>
)

export default function Skills() {
  const proficiencySkills = skills
    .map(skill => {
      const mainCategory = categories.find(c => c.name === skill.categories[0]);
      return {
        ...skill,
        iconData: mainCategory,
      };
    })
    .filter(skill => skill.iconData)

  const marqueeItems = [...proficiencySkills, ...proficiencySkills]

  return (
    <section 
      id="skills" 
      className="py-12 md:py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden border-y border-gray-200 py-8">
          <motion.div
            className="flex gap-8 sm:gap-14 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          >
            {marqueeItems.map((skill, index) => (
              <SkillBubble
                key={`${skill.name}-${index}`}
                name={skill.name}
                iconData={skill.iconData!}
                iconUrl={skill.iconUrl}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-10 sm:mt-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 px-2">
            Tech Stack
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {techStackCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-lg border border-gray-200 bg-gray-50 px-5 py-4"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-1">{category.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{category.items}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
