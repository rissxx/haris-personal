import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-300 font-sans selection:bg-blue-600/30 selection:text-blue-200">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero: Focus on Haris Rusnanda */}
        <Hero />

        {/* 2. About Me: Background & Profile */}
        <About />

        {/* 3. Core Skills: IoT, Software, IT Support */}
        <Skills />

        {/* 4. Projects: Clean cards featuring Automatic Chili Irrigation System */}
        <Projects />

        {/* 5. Experience & Education Timeline */}
        <Experience />

        {/* 6. Contact: Let's Work Together */}
        <Contact />
      </main>

      {/* 7. Minimal Footer */}
      <Footer />
    </div>
  )
}

export default App
