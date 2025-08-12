import { useEffect, useState } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
// import Skills from "./components/Skills"
// import Projects from "./components/Projects"
// import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div
      className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Skills />
        <Projects />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
