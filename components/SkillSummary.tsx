'use client'

import { motion } from 'framer-motion'

const highlightCards = [
  {
    title: 'Frontend',
    description: 'Next.js, React, Tailwind and modern UI motion for production apps.',
    icon: '🎯',
    accent: 'bg-blue-500/10 text-blue-600 border-blue-200',
  },
  {
    title: 'Backend',
    description: 'Node.js, Cloudflare Workers, Supabase/Postgres tuned for scale.',
    icon: '⚙️',
    accent: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
  },
  {
    title: 'Design ',
    description: 'Figma prototypes and TailwindCSS for development.',
    icon: '🧩',
    accent: 'bg-amber-500/10 text-amber-600 border-amber-200',
  },
]

const capabilityBars = [
  { label: 'Frontend Craft', value: 95, detail: 'Next.js · React · Tailwind' },
  { label: 'APIs & Cloud', value: 88, detail: 'Node.js ·  Supabase · Cloudflare' },
  { label: 'Data & Automation', value: 82, detail: 'PostgreSQL · SQL · Python' },
]

const toolkitPills = [
  'Python',
  'Node.js',
  'Next.js',
  'React',
  'Google Cloud Platform',
  'Supabase',
  'Cloudflare',
  'PostgreSQL',
  'TypeScript',
  'SQL',
  'Javascript',
  'Figma',
]

export default function SkillSummary() {
  return (
    <section className="py-20 bg-slate-50" id="skill-summary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Skill Summary
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Quick overview of the stacks and strengths I rely on most often when shipping products end-to-end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl border ${card.accent} p-6 h-full flex flex-col gap-3`}
            >
              <div className="text-3xl">{card.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-600 flex-1">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-5">
            {capabilityBars.map((capability, index) => (
              <motion.div
                key={capability.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm font-semibold text-slate-600 mb-2">
                  <span>{capability.label}</span>
                  <span>{capability.value}%</span>
                </div>
                <div className="h-2 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${capability.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.2 + index * 0.1 }}
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400 mt-2">
                  {capability.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-lg border border-slate-100 space-y-4"
          >
            <h3 className="text-lg font-semibold text-slate-900">Tech Stack</h3>
            <p className="text-sm text-slate-600">
              These are the tools I reach for daily while architecting product experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              {toolkitPills.map(tool => (
                <span
                  key={tool}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full bg-slate-100 text-slate-600"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

