import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X, FileText, ChevronDown } from "lucide-react"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          const headerOffset = 60
          const elementPosition = element.getBoundingClientRect().top + window.scrollY
          const offsetPosition = elementPosition - headerOffset

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 60
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        const offsetPosition = elementPosition - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleResumeClick = () => {
    navigate('/cv')
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Resume", id: "resume", isResume: true },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/98 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-slate-950/90 backdrop-blur-md border-b border-white/5"
      }`}
    >
      <div className="container mx-auto px-4 py-2 sm:py-3 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Portfolio
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {location.pathname === '/' ? (
              <>
                {navItems.slice(0, -1).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative px-4 py-2 text-white/80 hover:text-cyan-300 transition-all duration-300 hover:scale-105 transform rounded-lg group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-400/50 to-purple-400/50 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </button>
                ))}

                {/* Resume Button */}
                <Button
                  onClick={handleResumeClick}
                  className="ml-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-white transition-all duration-300 hover:scale-105 transform shadow-lg"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </>
            ) : (
              <Button
                onClick={() => navigate('/')}
                className="ml-6 px-6 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-white transition-all duration-300 hover:scale-105 transform shadow-lg"
              >
                Portfolio
              </Button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 hover:scale-110 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 transition-transform duration-300 rotate-90" />
            ) : (
              <Menu className="w-5 h-5 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-6 border-t border-white/10 pt-6">
            <div className="flex flex-col space-y-2">
              {location.pathname === '/' ? (
                <>
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => item.isResume ? handleResumeClick() : scrollToSection(item.id)}
                      className="flex items-center justify-between text-left text-white/80 hover:text-cyan-300 transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white/5 group"
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                  ))}
                </>
              ) : (
                <Button
                  onClick={() => navigate('/')}
                  className="mx-4 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 text-white hover:from-cyan-500/20 hover:to-purple-500/20 hover:border-cyan-400/30 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10"
                >
                  Back to Portfolio
                </Button>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
