'use client'

import { motion } from 'framer-motion'

interface Category {
  name: string;
  icon: string;
  bgColor: string;
  textColor: string;
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
  { name: 'SQL', categories: ['Database'], level: 85 },
]

const categories: Category[] = [
  { name: 'Frontend', icon: '🎨', bgColor: 'bg-blue-50', textColor: 'text-blue-700', borderColor: 'border-blue-500' },
  { name: 'Backend', icon: '⚙️', bgColor: 'bg-rose-50', textColor: 'text-rose-700', borderColor: 'border-rose-500' },
  { name: 'Language', icon: '💻', bgColor: 'bg-green-50', textColor: 'text-green-700', borderColor: 'border-green-500' },
  { name: 'Framework', icon: '🚀', bgColor: 'bg-orange-50', textColor: 'text-orange-700', borderColor: 'border-orange-500' },
  { name: 'Database', icon: '🗄️', bgColor: 'bg-purple-50', textColor: 'text-purple-700', borderColor: 'border-purple-500' },
  { name: 'Styling', icon: '✨', bgColor: 'bg-indigo-50', textColor: 'text-indigo-700', borderColor: 'border-indigo-500' },
]

const SkillBubble: React.FC<SkillBubbleProps> = ({ name, iconData, iconUrl }) => (
  <motion.div
    whileHover={{ scale: 1.07 }}
    className="flex flex-col items-center text-center gap-1.5"
  >
    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md border border-gray-100 p-1.5">
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
    <p className="text-[11px] font-semibold text-gray-600">{name}</p>
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
      className="py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 w-max py-4"
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
        
      </div>
    </section>
  )
}