'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Developer & Technical Project Manager',
    company: 'Momentum Sports Africa',
    period: 'January 2026 - Present',
    achievements: [
      'Ecosystem Architecture & Delivery: Architected sports-fintech platforms and micro-websites to bridge the gap between technical development and high-level business strategy.',
      'Liaison Group Collaboration: Co-launched an end-to-end sports-fintech and athlete management platform (tawc.co.ke) in partnership with Liaison Group, provisioning medical insurance, equipment coverage, and retirement pension tracking for Kenyan athletes.',
      'High-Stakes Stakeholder Meetings: Represented the technical team in high-stakes meetings with Liaison Group to successfully plan, secure, and clear critical system integrations for commercial rollout.',
      'Customer Relations & Growth: Partnered with marketing and sales teams to design social media content and conduct direct customer calls, improving client relations and driving signups for elite athlete camps.',
      'On-Site Event Operations: Participated in on-ground operations for athletic tournaments by managing participant check-ins and on-site system troubleshooting.',
    ],
  },
  {
    title: 'Project Management Associate Intern',
    company: 'Excelerate',
    period: 'December 2025 - January 2026',
    achievements: [
      'Agile Project Delivery: Collaborated with a cross-functional, global team to plan and execute a 4-week structured project sprint targeted at resolving critical AI-driven operational inefficiencies and workflow bottlenecks.',
      'Workflow Optimization & Metrics: Conducted deep-dive workflow audits to design an automation proposal (OCR/NLP tracking) that eliminated manual marketing data bottlenecks, driving a projected 70% increase in team efficiency and reclaiming 10+ hours weekly per team member.',
      'Sprint & Backlog Management: Utilized Jira to architect project timelines, build comprehensive roadmap sprints, and assign task ownership through visual dashboards and reporting.',
      'Change Management & Risk Mitigation: Formulated professional-grade Risk Assessment frameworks and Change Management strategies to mitigate human resistance to automation, ensuring 100% stakeholder buy-in and clear team alignment.',
    ],
  },
  {
    title: 'Volunteer Junior Developer',
    company: 'African Center for Women in Information and Communication Technology',
    period: 'November 2023 - December 2023',
    achievements: [
      'Collaborative Ideation: Partnered within a developer cohort to conceptualize and brainstorm scalable tech solutions tailored to optimize student workflows at the University of Nairobi.',
      'UI/UX Prototyping: Designed high-fidelity Figma wireframes and interactive prototypes to visually map out user journeys and secure stakeholder alignment.',
      'Frontend Development: Built the responsive frontend layer using HTML, CSS, and JavaScript to deliver a functional Minimum Viable Product (MVP) for executive presentation.',
    ],
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">
            WORK EXPERIENCE
          </h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-1 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 border-l-4 border-secondary rounded-r-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="mb-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 mb-2">
                    <span className="text-lg sm:text-xl font-bold text-secondary leading-snug">{exp.title}</span>
                    <span className="hidden sm:inline text-gray-400">|</span>
                    <span className="text-base sm:text-lg font-semibold text-secondary leading-snug">{exp.company}</span>
                  </div>
                  <div className="inline-block px-3 py-1 bg-secondary/10 rounded-full">
                    <p className="text-sm font-medium text-secondary">{exp.period}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.li
                      key={achIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (achIndex * 0.1) }}
                      className="flex items-start gap-2 text-sm sm:text-base text-gray-700"
                    >
                      <span className="text-secondary mt-1 shrink-0">▸</span>
                      <span className="break-words">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

