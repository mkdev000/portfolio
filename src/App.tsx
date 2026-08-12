import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <div className="bg-[#FAFAFA] dark:bg-[#242424] text-[#1F1F1F] dark:text-[#e3e3e3] min-h-screen overflow-x-hidden">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />
    </div>
  )
}

export default App