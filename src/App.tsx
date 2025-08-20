import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import CV from "./components/CV"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <Router>
      <div
        className={`min-h-screen bg-background transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <Header />

        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
            </main>
          } />
          <Route path="/cv" element={<CV />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
