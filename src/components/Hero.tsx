import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import React from "react"


const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,3c-6.627,0 -12,5.373 -12,12c0,5.623 3.872,10.328 9.092,11.63c-0.056,-0.162 -0.092,-0.35 -0.092,-0.583v-2.051c-0.487,0 -1.303,0 -1.508,0c-0.821,0 -1.551,-0.353 -1.905,-1.009c-0.393,-0.729 -0.461,-1.844 -1.435,-2.526c-0.289,-0.227 -0.069,-0.486 0.264,-0.451c0.615,0.174 1.125,0.596 1.605,1.222c0.478,0.627 0.703,0.769 1.596,0.769c0.433,0 1.081,-0.025 1.691,-0.121c0.328,-0.833 0.895,-1.6 1.588,-1.962c-3.996,-0.411 -5.903,-2.399 -5.903,-5.098c0,-1.162 0.495,-2.286 1.336,-3.233c-0.276,-0.94 -0.623,-2.857 0.106,-3.587c1.798,0 2.885,1.166 3.146,1.481c0.896,-0.307 1.88,-0.481 2.914,-0.481c1.036,0 2.024,0.174 2.922,0.483c0.258,-0.313 1.346,-1.483 3.148,-1.483c0.732,0.731 0.381,2.656 0.102,3.594c0.836,0.945 1.328,2.066 1.328,3.226c0,2.697 -1.904,4.684 -5.894,5.097c1.098,0.573 1.899,2.183 1.899,3.396v2.734c0,0.104 -0.023,0.179 -0.035,0.268c4.676,-1.639 8.035,-6.079 8.035,-11.315c0,-6.627 -5.373,-12 -12,-12z"></path></g></g>
    </svg>
  );

  const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M43.75391,6.40234c-1.2177,-0.05335 -2.45911,0.31055 -3.48242,1.06641l-2.74609,2.02734l-12.52539,9.25977l-12.4082,-9.17187c-0.17292,-0.16897 -0.4012,-0.26957 -0.64258,-0.2832h0.25l-2.46484,-1.82422c-1.02397,-0.75773 -2.26723,-1.12367 -3.48633,-1.07031c-1.2191,0.05336 -2.4131,0.52522 -3.33984,1.43945c-1.17726,1.16068 -1.9082,2.78413 -1.9082,4.56445v3.43359c-0.01457,0.09777 -0.01457,0.19715 0,0.29492v23.36133c0,1.92119 1.57881,3.5 3.5,3.5h7.5c0.55226,-0.00006 0.99994,-0.44774 1,-1v-16.62695l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0l11.40625,-8.43164v16.62695c0.00006,0.55226 0.44774,0.99994 1,1h7.5c1.92119,0 3.5,-1.57881 3.5,-3.5v-23.38086c0.01129,-0.08622 0.01129,-0.17355 0,-0.25977v-3.44922c0,-1.75846 -0.70954,-3.37437 -1.87109,-4.53711c-0.03357,-0.03357 -0.04482,-0.04287 -0.03125,-0.0293c-0.00194,-0.00196 -0.0039,-0.00391 -0.00586,-0.00586c-0.92656,-0.91221 -2.12019,-1.3822 -3.33789,-1.43555zM43.64453,8.40039c0.7563,0.02965 1.48952,0.3165 2.04492,0.86328c0.01891,0.01867 0.03272,0.03277 0.02344,0.02344c0.79645,0.79726 1.28711,1.9015 1.28711,3.12305v3.08594l-8,5.91211v-10.4082c0.00042,-0.0339 -0.00088,-0.0678 -0.00391,-0.10156l2.46289,-1.82031c0.00065,0 0.0013,0 0.00195,0c0.64864,-0.47915 1.42729,-0.70739 2.18359,-0.67773zM6.35742,8.40625c0.75715,-0.02964 1.53847,0.19746 2.1875,0.67773l2.45898,1.81836c-0.00289,0.03247 -0.0042,0.06506 -0.00391,0.09766v10.4082l-8,-5.91211v-3.08594c0,-1.23567 0.50176,-2.3413 1.3125,-3.14062c0.55526,-0.54776 1.28777,-0.83364 2.04492,-0.86328zM37,12.37109v10.51563l-12,8.86914l-12,-8.86914v-10.51367l11.40625,8.43164c0.353,0.26043 0.8345,0.26043 1.1875,0zM3,17.98242l8,5.91406v17.10352h-6.5c-0.84081,0 -1.5,-0.65919 -1.5,-1.5zM47,17.98242v21.51758c0,0.84081 -0.65919,1.5 -1.5,1.5h-6.5v-17.10352z"></path></g></g>
    </svg>
  );

  const TelegramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0,0,256,256">
      <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.33333,5.33333)"><path d="M39.175,10.016c1.687,0 2.131,1.276 1.632,4.272c-0.571,3.426 -2.216,14.769 -3.528,21.83c-0.502,2.702 -1.407,3.867 -2.724,3.867c-0.724,0 -1.572,-0.352 -2.546,-0.995c-1.32,-0.872 -7.984,-5.279 -9.431,-6.314c-1.32,-0.943 -3.141,-2.078 -0.857,-4.312c0.813,-0.796 6.14,-5.883 10.29,-9.842c0.443,-0.423 0.072,-1.068 -0.42,-1.068c-0.112,0 -0.231,0.034 -0.347,0.111c-5.594,3.71 -13.351,8.859 -14.338,9.53c-0.987,0.67 -1.949,1.1 -3.231,1.1c-0.655,0 -1.394,-0.112 -2.263,-0.362c-1.943,-0.558 -3.84,-1.223 -4.579,-1.477c-2.845,-0.976 -2.17,-2.241 0.593,-3.457c11.078,-4.873 25.413,-10.815 27.392,-11.637c1.928,-0.801 3.36,-1.246 4.357,-1.246M39.175,7.016v0c-1.368,0 -3.015,0.441 -5.506,1.474l-0.299,0.124c-10.635,4.416 -20.278,8.514 -27.152,11.538c-1.074,0.473 -4.341,1.91 -4.214,4.916c0.054,1.297 0.768,3.065 3.856,4.124l0.228,0.078c0.862,0.297 2.657,0.916 4.497,1.445c1.12,0.322 2.132,0.478 3.091,0.478c1.664,0 2.953,-0.475 3.961,-1.028c-0.005,0.168 -0.001,0.337 0.012,0.507c0.182,2.312 1.97,3.58 3.038,4.338l0.149,0.106c1.577,1.128 8.714,5.843 9.522,6.376c1.521,1.004 2.894,1.491 4.199,1.491c2.052,0 4.703,-1.096 5.673,-6.318c0.921,-4.953 1.985,-11.872 2.762,-16.924c0.331,-2.156 0.603,-3.924 0.776,-4.961c0.349,-2.094 0.509,-4.466 -0.948,-6.185c-0.612,-0.72 -1.74,-1.579 -3.645,-1.579z"></path></g></g>
    </svg>
  );


  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/vzharyi", label: "GitHub" },
    { icon: MailIcon, href: "https://mail.google.com/mail/u/0/?view=cm&fs=1&to=vadim.zhary@gmail.com", label: "Email" },
    { icon: TelegramIcon, href: "https://t.me/vadimka1349", label: "Telegram" },
  ]



  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Deep Blue Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-950 to-blue-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/20 via-transparent to-slate-950/30" />
      </div>

      {/* Programming Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Snippets */}
        <div className="absolute top-20 left-10 text-blue-400/40 font-mono text-sm animate-code-float">
          {"const developer = {"}
        </div>
        <div className="absolute top-32 left-16 text-blue-300/50 font-mono text-xs animate-code-float-delayed">
          {'  name: "Vadym Zharyi",'}
        </div>
        <div className="absolute top-44 left-16 text-blue-300/50 font-mono text-xs animate-code-float-delayed-2">
          {'  passion: "web development",'}
        </div>
        <div className="absolute top-56 left-16 text-blue-300/50 font-mono text-xs animate-code-float-delayed-3">
          {'  skills: ["React", "TypeScript"]'}
        </div>
        <div className="absolute top-68 left-10 text-blue-400/40 font-mono text-sm animate-code-float-delayed-4">
          {"};"}
        </div>

        <div className="absolute bottom-52 right-20 text-indigo-400/40 font-mono text-sm animate-code-float-reverse">
          {"function buildAwesome() {"}
        </div>
        <div className="absolute bottom-40 right-24 text-indigo-300/50 font-mono text-xs animate-code-float-reverse-delayed">
          {"  const result = passion + code;"}
        </div>
        <div className="absolute bottom-28 right-24 text-indigo-300/50 font-mono text-xs animate-code-float-reverse-delayed-2">
          {"  return result.optimize();"}
        </div>
        <div className="absolute bottom-16 right-20 text-indigo-400/40 font-mono text-sm animate-code-float-reverse">
          {"}"}
        </div>

        {/* Terminal Windows */}
        <div className="overflow-hidden hidden lg:block absolute top-1/5 right-1/3 w-52 h-36 bg-gray-900/10 rounded-lg border border-blue-500/10 backdrop-blur-sm animate-terminal-glow">
          <div className="flex items-center gap-2 p-2 border-b border-blue-500/10">
            <div className="w-3 h-3 rounded-full bg-red-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/30"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/30"></div>
            <span className="text-xs text-blue-300/15 ml-2">terminal</span>
          </div>
          <div className="p-3 font-mono text-xs text-blue-300/20 space-y-1">
            <div>$ npm run build</div>
            <div className="text-green-400/20">✓ Build completed</div>
            <div className="text-blue-400/15">📦 Bundle optimized</div>
          </div>
        </div>

        {/* Additional Code Window */}
        <div className="overflow-hidden hidden lg:block absolute top-4/5 left-1/5 w-44 h-28 bg-gray-900/8 rounded-lg border border-indigo-500/8 backdrop-blur-sm animate-terminal-glow" style={{ animationDelay: '2s' }}>
          <div className="flex items-center gap-2 p-2 border-b border-indigo-500/8">
            <div className="w-2 h-2 rounded-full bg-indigo-500/20"></div>
            <span className="text-xs text-indigo-300/12">app.tsx</span>
          </div>
          <div className="p-2 font-mono text-xs text-indigo-300/15">
            <div>export default App;</div>
          </div>
        </div>

        {/* Enhanced floating particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}

        {/* Enhanced grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-drift" />
      </div>
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Mobile Layout */}
          <div className="flex flex-col items-center text-center lg:hidden space-y-8 px-4">
            {/* Profile Image - Mobile */}
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-blue-500/20 shadow-2xl flex items-center justify-center bg-white/5 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                <img src="/vadym.png" alt="Vadym Zharyi - Full-Stack Developer" className="w-full h-full object-contain" />
              </div>
              <div className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-blue-400/20 animate-pulse-ring" />
            </div>

            {/* Content - Mobile */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-text-shimmer">
                  Vadym Zharyi
                </h1>
                <p className="text-xl sm:text-2xl text-blue-300 mb-4 font-light">Full-Stack Developer</p>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-md mx-auto">
                  Crafting modern web applications with passion for clean code and exceptional user experiences
                </p>
              </div>

              {/* CTA Buttons - Mobile */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 relative overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:scale-105 transition-all duration-300 border-white/20 text-white hover:bg-white/10 bg-transparent hover:border-blue-400/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Connect With Me - Mobile */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">Connect With Me</p>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group hover:-translate-y-1"
                    >
                      {React.createElement(social.icon, {
                        className: "w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300"
                      })}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-center px-8 xl:px-12">
            {/* Left Content - Desktop */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent animate-text-shimmer">
                  Vadym Zharyi
                </h1>
                <p className="text-2xl xl:text-3xl text-blue-300 mb-6 font-light">Aspiring Full-Stack Developer</p>
                <p className="text-lg xl:text-xl text-white/70 leading-relaxed max-w-lg">
                  Crafting modern web applications with passion for clean code and exceptional user experiences.
                  Turning ideas into reality through innovative solutions.
                </p>
              </div>

              {/* CTA Buttons - Desktop */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 relative overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:scale-105 transition-all duration-300 border-white/20 !text-white hover:bg-white/10 bg-transparent hover:border-blue-400/50 relative overflow-hidden group"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>

              {/* Connect With Me - Desktop */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">Connect With Me</p>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 group hover:-translate-y-1"
                    >
                      {React.createElement(social.icon, {
                        className: "w-5 h-5 text-white/80 group-hover:text-white transition-colors duration-300"
                      })}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image Desktop */}
            <div className="flex justify-center xl:justify-end">
              <div className="relative group">
                <div className="w-80 h-80 xl:w-96 xl:h-96 2xl:w-[420px] 2xl:h-[420px] rounded-full overflow-hidden border-2 border-blue-500/20 shadow-2xl bg-white/5 backdrop-blur-sm group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/vadym.png"
                    alt="Vadym Zharyi - Full-Stack Developer"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Enhanced animated rings */}
                <div className="absolute inset-0 w-80 h-80 xl:w-96 xl:h-96 2xl:w-[420px] 2xl:h-[420px] rounded-full border border-blue-400/20 animate-pulse-ring" />
                <div className="absolute inset-0 w-80 h-80 xl:w-96 xl:h-96 2xl:w-[420px] 2xl:h-[420px] rounded-full border border-indigo-400/10 animate-pulse-ring-delayed" />

                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-blue-400/60 rounded-full animate-bounce-slow delay-300" />
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-indigo-300/60 rounded-full animate-bounce-slow delay-700" />
                <div className="absolute top-1/4 -left-8 w-3 h-3 bg-blue-500/60 rounded-full animate-pulse-glow delay-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 animate-bounce-gentle text-white/60 hover:text-white transition-colors duration-200 group"
        >
          <div className="flex flex-col items-center space-y-2">
            <ArrowDown className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            <div className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full" />
          </div>
        </button>
      </div>

      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-40px) translateX(-20px);
            opacity: 0.9;
          }
        }

        @keyframes code-float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-10px);
            opacity: 0.4;
          }
        }

        @keyframes code-float-reverse {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.4;
          }
        }

        @keyframes terminal-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes text-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-ring {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-ring-delayed {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.15);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }

        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes grid-drift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        .animate-text-shimmer {
          background-size: 200% 200%;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        .animate-pulse-ring {
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .animate-pulse-ring-delayed {
          animation: pulse-ring-delayed 3s ease-in-out infinite 1.5s;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-grid-drift {
          animation: grid-drift 20s linear infinite;
        }

        .animate-code-float {
          animation: code-float 4s ease-in-out infinite;
        }

        .animate-code-float-delayed {
          animation: code-float 4s ease-in-out infinite 0.5s;
        }

        .animate-code-float-delayed-2 {
          animation: code-float 4s ease-in-out infinite 1s;
        }

        .animate-code-float-delayed-3 {
          animation: code-float 4s ease-in-out infinite 1.5s;
        }

        .animate-code-float-delayed-4 {
          animation: code-float 4s ease-in-out infinite 2s;
        }

        .animate-code-float-reverse {
          animation: code-float-reverse 4s ease-in-out infinite;
        }

        .animate-code-float-reverse-delayed {
          animation: code-float-reverse 4s ease-in-out infinite 0.5s;
        }

        .animate-code-float-reverse-delayed-2 {
          animation: code-float-reverse 4s ease-in-out infinite 1s;
        }

        .animate-terminal-glow {
          animation: terminal-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero
