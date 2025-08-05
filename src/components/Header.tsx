import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Download } from "lucide-react"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between px-4 lg:px-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-cyan-300 transition-colors duration-200 hover:scale-105 transform"
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-4 bg-white/5 border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-400/50"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-white/80 hover:text-cyan-300 transition-colors duration-200 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="mt-4 self-start bg-white/5 border-white/20 text-white hover:bg-cyan-500/20 hover:border-cyan-400/50"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
