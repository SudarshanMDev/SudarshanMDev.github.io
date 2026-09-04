import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Services } from './sections/Services'
import { Projects } from './sections/Projects'
import { Approach } from './sections/Approach'
import { Experience } from './sections/Experience'
import { Contact } from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      {/* Skip link for keyboard / screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Approach />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
