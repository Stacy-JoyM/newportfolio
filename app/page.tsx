import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import WorkExperience from '@/components/WorkExperience'
import Education from '@/components/Education'
import Navigation from '@/components/Navigation'
import SkillSummary from '@/components/SkillSummary'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <WorkExperience />
      <Education />
      <SkillSummary />
      <Contact />
    </main>
  )
}

