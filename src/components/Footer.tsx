import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      {/* Unified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/10 via-transparent to-slate-950/20" />
      </div>

      {/* Subtle Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-cyan-300/60 rounded-full animate-star-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              opacity: Math.random() * 0.6 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-4 py-12 max-w-7xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 px-4 lg:px-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-white/70 leading-relaxed">
              Creating digital experiences that make a difference. Let's build something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#about" className="text-white/60 hover:text-cyan-300 transition-colors duration-200">
                About
              </a>
              <a href="#skills" className="text-white/60 hover:text-cyan-300 transition-colors duration-200">
                Skills
              </a>
              <a href="#projects" className="text-white/60 hover:text-cyan-300 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-white/60 hover:text-cyan-300 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-200 bg-white/5 border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 text-white/80 hover:text-cyan-300"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-200 bg-white/5 border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 text-white/80 hover:text-cyan-300"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:scale-110 transition-transform duration-200 bg-white/5 border-white/20 hover:bg-cyan-500/20 hover:border-cyan-400/50 text-white/80 hover:text-cyan-300"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center px-4">
          <p className="text-white/70 flex items-center justify-center gap-2">
            © {currentYear} John Doe. Made with <Heart className="w-4 h-4 text-cyan-400 animate-pulse" /> and lots of
            coffee.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </footer>
  )
}

export default Footer
