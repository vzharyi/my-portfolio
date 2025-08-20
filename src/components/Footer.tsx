"use client"


import { Github, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId: string) => {
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

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
  ]

  const TelegramIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0,0,256,256"
      fill="currentColor"
    >
      <g
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M39.175,10.016c1.687,0 2.131,1.276 1.632,4.272c-0.571,3.426 -2.216,14.769 -3.528,21.83c-0.502,2.702 -1.407,3.867 -2.724,3.867c-0.724,0 -1.572,-0.352 -2.546,-0.995c-1.32,-0.872 -7.984,-5.279 -9.431,-6.314c-1.32,-0.943 -3.141,-2.078 -0.857,-4.312c0.813,-0.796 6.14,-5.883 10.29,-9.842c0.443,-0.423 0.072,-1.068 -0.42,-1.068c-0.112,0 -0.231,0.034 -0.347,0.111c-5.594,3.71 -13.351,8.859 -14.338,9.53c-0.987,0.67 -1.949,1.1 -3.231,1.1c-0.655,0 -1.394,-0.112 -2.263,-0.362c-1.943,-0.558 -3.84,-1.223 -4.579,-1.477c-2.845,-0.976 -2.17,-2.241 0.593,-3.457c11.078,-4.873 25.413,-10.815 27.392,-11.637c1.928,-0.801 3.36,-1.246 4.357,-1.246M39.175,7.016v0c-1.368,0 -3.015,0.441 -5.506,1.474l-0.299,0.124c-10.635,4.416 -20.278,8.514 -27.152,11.538c-1.074,0.473 -4.341,1.91 -4.214,4.916c0.054,1.297 0.768,3.065 3.856,4.124l0.228,0.078c0.862,0.297 2.657,0.916 4.497,1.445c1.12,0.322 2.132,0.478 3.091,0.478c1.664,0 2.953,-0.475 3.961,-1.028c-0.005,0.168 -0.001,0.337 0.012,0.507c0.182,2.312 1.97,3.58 3.038,4.338l0.149,0.106c1.577,1.128 8.714,5.843 9.522,6.376c1.521,1.004 2.894,1.491 4.199,1.491c2.052,0 4.703,-1.096 5.673,-6.318c0.921,-4.953 1.985,-11.872 2.762,-16.924c0.331,-2.156 0.603,-3.924 0.776,-4.961c0.349,-2.094 0.509,-4.466 -0.948,-6.185c-0.612,-0.72 -1.74,-1.579 -3.645,-1.579z"></path>
        </g>
      </g>
    </svg>
  )

  return (
    <footer className="relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-slate-950"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/50 to-slate-950"></div>

      {/* Very subtle pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vadym Zharyi
            </div>
            <p className="text-gray-400 leading-relaxed">
              Aspiring Full-Stack Developer creating modern web applications with passion for clean code and great user
              experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <div className="flex flex-col space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-gray-400 hover:text-white transition-colors duration-300 hover:scale-105 hover:translate-x-1 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Let's Connect</h4>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://github.com/vzharyi" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=vadim.zhary@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://t.me/vadimka1349" target="_blank" rel="noopener noreferrer">
                  <TelegramIcon />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Vadym Zharyi. Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> and lots of
            coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
