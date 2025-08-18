"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Star, Code, ArrowUpRight, Github, Sparkles, Zap } from "lucide-react"
import calendulaPreview from "../assets/projects/calendula/preview.png"
import calendulaPhotoFirst from "../assets/projects/calendula/first.png"
import calendulaPhotoSecond from "../assets/projects/calendula/second.png"
import univentPreview from "../assets/projects/univent/preview.png"
import univentPhotoFirst from "../assets/projects/univent/first.png"
import univentPhotoSecond from "../assets/projects/univent/second.png"
import univentPhotoThird from "../assets/projects/univent/third.png"
import univentPhotoFourth from "../assets/projects/univent/fourth.png"
import univentPhotoFifth from "../assets/projects/univent/fifth.png"
import flowyPreview from "../assets/projects/flowy/preview.png"
import flowyPhotoFirst from "../assets/projects/flowy/first.png"
import flowyPhotoSecond from "../assets/projects/flowy/second.png"
import flowyPhotoThird from "../assets/projects/flowy/third.png"
import flowyPhotoFourth from "../assets/projects/flowy/fourth.png"


const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [currentProject, setCurrentProject] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Only update mouse position for background effects, not when hovering over project cards
      const target = e.target as HTMLElement
      const isHoveringCard = target.closest(".project-card")

      if (!isHoveringCard) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const projects = [
    {
      title: "Calendula",
      description:
        "Calendula is a convenient calendar for tasks and events. It supports shared calendars, drag-and-drop, and flexible participant management.",
      images: [
        calendulaPreview,
        calendulaPhotoFirst,
        calendulaPhotoSecond,
      ],
      technologies: ["TypeScript", "React", "Redux", "Axios", "Shadcn UI", "FullCalendar", "JavaScript", "Node.js", "Express.js", "MySQL", "+19 more"],
      liveUrl: "https://calendula-application.vercel.app",
      githubUrl: {
        frontend: "https://github.com/Strawberry-Team/ucode-connect-Track-FullStack-chronos-Calendula-frontend",
        backend: "https://github.com/Strawberry-Team/ucode-connect-Track-FullStack-chronos-Calendula-backend",
      },
      year: "2025",
      duration: "25 days",
      status: "Live",
      stats: {
        type: "Full-Stack",
        completion: "100%",
      },
      featured: false,
      color: "from-slate-600 to-gray-700",
      hoverColor: "from-slate-500 to-gray-600",
      glowColor: "slate-400/30",
      accentColor: "slate",
    },
    {
      title: "Univent",
      description:
        "Univent is a dynamic platform for event management and ticketing. Users can create events, sell tickets with interactive seating maps, and manage bookings through a personal profile.",
      images: [
        univentPreview, 
        univentPhotoFirst, 
        univentPhotoSecond, 
        univentPhotoThird,
        univentPhotoFourth,
        univentPhotoFifth
      ],
      technologies: ["Next.js", "TypeScript", "React", "Shadcn UI", "Stripe", "Google Maps", "Zod", "Node.js", "NestJS", "MySQL", "Prisma", "+24 more"],
      liveUrl: "https://univent-platform.vercel.app",
      githubUrl: {
        frontend: "https://github.com/Strawberry-Team/ucode-connect-Track-FullStack-uevent-Univent-frontend",
        backend: "https://github.com/Strawberry-Team/ucode-connect-Track-FullStack-uevent-Univent-backend",
      },
      year: "2025",
      duration: "1 months",
      status: "Live",
      stats: {
        type: "Full-Stack",
        completion: "100%",
      },
      featured: false,
      color: "from-blue-900 to-indigo-900",
      hoverColor: "from-blue-800 to-indigo-800",
      glowColor: "blue-400/25",
      accentColor: "blue",
    },
    {
      title: "Flowy",
      description:
        "Flowy is a web-based graphic design platform for creating and editing visuals. It offers canvas drawing tools, advanced image editing, and multiple integrations, including AI-powered image generation.",
      images: [
        flowyPreview,
        flowyPhotoFirst,
        flowyPhotoSecond,
        flowyPhotoThird,
        flowyPhotoFourth
      ],
      technologies: ["TypeScript", "React", "Konva", "Shadcn UI", "Tailwind CSS", "Pollinations.AI", "ImgBB", "Node.js", "NestJS", "MySQL", "Prisma", "+28 more"],
      liveUrl: "https://flowy-photoshop.vercel.app",
      githubUrl: {
        frontend: "https://github.com/Strawberry-Team/ucode-connect-Track-FullStack-webster-Flowy-frontend",
        backend: "https://github.com/Strawberry-Team/ucode-connect-Track-FullStack-webster-Flowy-backend",
      },
      year: "2025",
      duration: "1.5 months",
      status: "Live",
      stats: {
        type: "Full-Stack",
        completion: "100%",
      },
      featured: false,
      color: "from-emerald-900 to-teal-900",
      hoverColor: "from-emerald-800 to-teal-800",
      glowColor: "emerald-400/25",
      accentColor: "emerald",
    },
  ]

  const openGallery = (project: any, imageIndex = 0) => {
    console.log("Opening gallery for:", project.title, "Image index:", imageIndex)
    setCurrentProject(project)
    setCurrentImageIndex(imageIndex)
    setGalleryOpen(true)
    document.body.style.overflow = "hidden"

    // Приостанавливаем анимации для производительности
    const animatedElements = document.querySelectorAll('[class*="animate-"]')
    animatedElements.forEach((el) => {
      ; (el as HTMLElement).style.animationPlayState = "paused"
    })
  }

  const closeGallery = () => {
    setGalleryOpen(false)
    setCurrentProject(null)
    setCurrentImageIndex(0)
    document.body.style.overflow = "unset"

    // Возобновляем анимации
    const animatedElements = document.querySelectorAll('[class*="animate-"]')
    animatedElements.forEach((el) => {
      ; (el as HTMLElement).style.animationPlayState = "running"
    })
  }

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev === currentProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? currentProject.images.length - 1 : prev - 1))
    }
  }

  const handleKeyPress = (e: KeyboardEvent) => {
    if (galleryOpen) {
      if (e.key === "Escape") closeGallery()
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [galleryOpen, currentProject])

  const ProjectSection = ({ project, index }: { project: any; index: number }) => {
    const isEven = index % 2 === 0
    const isFeatured = project.featured
    const projectNumber = String(index + 1).padStart(2, "0")
    const hasMultipleRepos = typeof project.githubUrl === "object"

    return (
      <div
        className={`project-card group relative transition-all duration-1000 transform rotate-1 group-hover:rotate-2 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Subtle Background Glow */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-30 rounded-3xl transform group-hover:scale-105 transition-all duration-500 group-hover:opacity-40`}
        />

        {/* Enhanced Hover Glow - More Subtle */}
        <div
          className={`absolute -inset-4 bg-gradient-to-r ${project.hoverColor} opacity-0 group-hover:opacity-20 rounded-3xl blur-2xl transition-all duration-700 group-hover:scale-110`}
        />

        {/* Refined Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          <div
            className={`absolute top-10 left-10 w-1.5 h-1.5 bg-${project.glowColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-6 group-hover:-translate-y-6 shadow-lg shadow-${project.glowColor}`}
          />
          <div
            className={`absolute top-20 right-20 w-1 h-1 bg-${project.glowColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:-translate-x-8 group-hover:translate-y-8 shadow-lg shadow-${project.glowColor}`}
          />
          <div
            className={`absolute bottom-20 left-20 w-2 h-2 bg-${project.glowColor} rounded-full opacity-0 group-hover:opacity-80 transition-all duration-600 group-hover:translate-x-10 group-hover:-translate-y-10 shadow-lg shadow-${project.glowColor}`}
          />
          <div
            className={`absolute bottom-10 right-10 w-1 h-1 bg-${project.glowColor} rounded-full opacity-0 group-hover:opacity-90 transition-all duration-800 group-hover:-translate-x-4 group-hover:-translate-y-4 shadow-lg shadow-${project.glowColor}`}
          />
        </div>

        {/* Subtle Border Glow */}
        <div
          className={`absolute inset-0 rounded-3xl border border-${project.glowColor} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
        />

        <div
          className={`relative grid lg:grid-cols-2 gap-12 items-center py-16 ${isEven ? "" : "lg:grid-flow-col-dense"}`}
        >
          {/* Image Section */}
          <div className={`relative ${isEven ? "" : "lg:col-start-2"}`}>
            {/* Project Number - More Visible */}
            <div className="absolute -top-8 -left-4 z-20">
              <div className="relative">
                <div
                  className={`text-8xl md:text-9xl font-black bg-gradient-to-br ${project.hoverColor} bg-clip-text text-transparent opacity-30 group-hover:opacity-70 transition-all duration-700 select-none group-hover:scale-110`}
                >
                  {projectNumber}
                </div>
                <div className="absolute inset-0 text-8xl md:text-9xl font-black text-white/8 group-hover:text-white/15 transition-all duration-700 transform translate-x-1 translate-y-1 select-none">
                  {projectNumber}
                </div>
              </div>
            </div>

            {/* Subtle Animated Border */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${project.hoverColor} rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm`}
            />

            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gray-800/60 backdrop-blur-sm border border-gray-700/40 group-hover:border-gray-600/60 group-hover:bg-gray-800/80">
              {/* Main Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-gray-800/90 to-gray-700/90">
                {/* Eye icon - simple element */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                  <svg
                    className="w-12 h-12 text-white/90 drop-shadow-lg"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>

                <img
                  src={project.images[0] || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-60 lg:h-76 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90 cursor-pointer hover:scale-125"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    console.log("Image clicked!", project.title)
                    openGallery(project, 0)
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-black/70 transition-all duration-500 pointer-events-none" />
              </div>

              {/* Enhanced Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-white/10 group-hover:border-white/20 pointer-events-none">
                <div className="grid grid-cols-2 gap-3 text-white">
                  <div className="text-center">
                    <p className="text-base font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {project.stats.type}
                    </p>
                    <p className="text-xs opacity-80">Development</p>
                  </div>
                  <div className="text-center">
                    <p className="text-base font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                      {project.stats.completion}
                    </p>
                    <p className="text-xs opacity-80">Complete</p>
                  </div>
                </div>
              </div>

              {/* Subtle Progress Indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div
                  className={`h-full bg-gradient-to-r ${project.hoverColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                />
              </div>
            </div>

            {/* Subtle Decorative Elements */}
            <div
              className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${project.hoverColor} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`}
            />
            <div
              className={`absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr ${project.hoverColor} rounded-full blur-2xl opacity-0 group-hover:opacity-15 transition-all duration-800`}
            />

            {/* Elegant Sparkle Effects */}
            <div className="absolute top-1/4 -right-2 opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-110">
              <Sparkles className={`w-4 h-4 text-${project.glowColor}`} />
            </div>
            <div className="absolute bottom-1/4 -left-2 opacity-0 group-hover:opacity-60 transition-all duration-600 group-hover:scale-110">
              <Zap className={`w-3 h-3 text-${project.glowColor}`} />
            </div>
          </div>

          {/* Content Section */}
          <div className={`space-y-8 ${isEven ? "" : "lg:col-start-1"}`}>
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge
                  variant="outline"
                  className="text-sm px-3 py-1 transition-all duration-300 group-hover:border-gray-500/60 group-hover:bg-gray-700/30 border-gray-600 text-gray-300 group-hover:text-gray-200"
                >
                  {project.year}
                </Badge>
                <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  <Calendar className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                  {project.duration}
                </div>
                {isFeatured && (
                  <Badge className="bg-gradient-to-r from-amber-600/90 to-orange-600/90 text-white border-0 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-amber-500/25">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Featured
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <h3
                  className={`text-3xl lg:text-4xl font-bold transition-all duration-300 group-hover:text-${project.accentColor}-300 text-white`}
                >
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed text-lg transition-colors duration-300 group-hover:text-gray-300">
                {project.description}
              </p>
            </div>

            {/* Technologies with Enhanced Animation */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold flex items-center text-white">
                <Code
                  className={`w-5 h-5 mr-2 transition-all duration-300 group-hover:text-${project.accentColor}-400 group-hover:rotate-12`}
                />
                Built With
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string, idx: number) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="px-3 py-1 transition-all duration-300 hover:scale-105 hover:bg-gray-700/40 hover:border-gray-500/40 cursor-default group-hover:translate-y-[-2px] bg-gray-800/50 border-gray-600 text-gray-300 hover:text-gray-200"
                    style={{
                      transitionDelay: `${idx * 50}ms`,
                    }}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                className={`group/btn hover:scale-105 transition-all duration-300 bg-gradient-to-r ${project.hoverColor} hover:shadow-lg text-white border-0`}
                onClick={() => window.open(project.liveUrl, "_blank")}
                tabIndex={0}
                role="link"
                aria-label="View live project"
              >
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
              </Button>

              {hasMultipleRepos ? (
                <div className="relative group/source">
                  <Button
                    variant="outline"
                    className="hover:scale-105 transition-all duration-300 bg-transparent group/btn hover:border-gray-500/50 hover:bg-gray-700/30 border-gray-600 text-gray-300 hover:text-gray-200 group-hover/source:w-40 overflow-hidden"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200 group-hover/source:opacity-0" />
                    <span className="group-hover/source:opacity-0 transition-opacity duration-200">Source Code</span>
                    <div className="absolute inset-0 flex opacity-0 group-hover/source:opacity-100 transition-opacity duration-200">
                      <a
                        href={project.githubUrl.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center hover:bg-gray-600/30 transition-colors duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Frontend
                      </a>
                      <div className="w-px bg-gray-500"></div>
                      <a
                        href={project.githubUrl.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center hover:bg-gray-600/30 transition-colors duration-200 text-sm font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Backend
                      </a>
                    </div>
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outline"
                  className="hover:scale-105 transition-all duration-300 bg-transparent group/btn hover:border-gray-500/50 hover:bg-gray-700/30 border-gray-600 text-gray-300 hover:text-gray-200"
                >
                  <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-200" />
                  Source Code
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="py-24 overflow-hidden relative min-h-screen">
      {/* Revolutionary Dynamic Background - Lighter */}
      <div className="absolute inset-0">
        {/* Base gradient - lighter */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-800" />

        {/* Interactive mouse-following gradient - brighter */}
        <div
          className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6,182,212,0.2), rgba(59,130,246,0.15) 40%, transparent 70%)`,
          }}
        />

        {/* Animated geometric shapes */}
        <div className="absolute inset-0">
          {/* Large rotating hexagons - brighter */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-8">
            <div
              className="w-full h-full border border-cyan-400/30 rotate-12 animate-spin-slow"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
          </div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 opacity-8">
            <div
              className="w-full h-full border border-blue-400/30 -rotate-12 animate-spin-reverse"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
            />
          </div>

          {/* Floating triangles - brighter */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`triangle-${i}`}
              className="absolute animate-float-triangle opacity-15"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`,
              }}
            >
              <div
                className="w-8 h-8 border border-cyan-400/40"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              />
            </div>
          ))}

          {/* Morphing blobs - brighter */}
          <div className="absolute top-1/3 right-1/5 w-64 h-64 bg-gradient-to-r from-cyan-500/15 to-blue-500/15 rounded-full animate-morph-blob blur-xl" />
          <div className="absolute bottom-1/3 left-1/5 w-48 h-48 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 rounded-full animate-morph-blob-reverse blur-xl" />
        </div>

        {/* Grid overlay - brighter */}
        <div className="absolute inset-0 opacity-8">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                   linear-gradient(rgba(6,182,212,0.15) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(6,182,212,0.15) 1px, transparent 1px)
                 `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative max-w-7xl">
        <div
          className={`text-center mb-20 transition-all duration-1000 px-4 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 relative">
            <span className="bg-gradient-to-r from-white via-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
              My Projects
            </span>
            {/* Animated underline */}
            <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-24 md:w-42 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full" />
          </h2>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col items-center lg:hidden space-y-8 px-4">
          <div className="w-full max-w-xl">
            {projects.map((project, index) => (
              <div key={project.title}>
                <ProjectSection project={project} index={index} />
                {index < projects.length - 1 && (
                  <div className="relative py-10">
                    {/* Mobile divider - simplified */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-md h-16">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 60" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`mobileWaveGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgba(6,182,212,0)" />
                              <stop offset="50%" stopColor="rgba(59,130,246,0.7)" />
                              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,30 Q100,15 200,30 T400,30"
                            stroke={`url(#mobileWaveGradient${index})`}
                            strokeWidth="2"
                            fill="none"
                            className="animate-wave-flow"
                          />
                        </svg>
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-3 h-3 bg-blue-400/90 rounded-full animate-pulse shadow-lg shadow-blue-400/30" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block px-8 xl:px-12">
          <div>
            {projects.map((project, index) => (
              <div key={project.title}>
                <ProjectSection project={project} index={index} />
                {index < projects.length - 1 && (
                  <div className="relative py-15">
                    {/* Revolutionary Wave Divider */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full max-w-4xl h-24">
                        {/* Animated wave path */}
                        <svg
                          className="absolute inset-0 w-full h-full"
                          viewBox="0 0 800 100"
                          preserveAspectRatio="none"
                        >
                          <defs>
                            <linearGradient id={`waveGradient${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="rgba(6,182,212,0)" />
                              <stop offset="25%" stopColor="rgba(6,182,212,0.5)" />
                              <stop offset="50%" stopColor="rgba(59,130,246,0.7)" />
                              <stop offset="75%" stopColor="rgba(99,102,241,0.5)" />
                              <stop offset="100%" stopColor="rgba(99,102,241,0)" />
                            </linearGradient>
                          </defs>
                          <path
                            d="M0,50 Q200,20 400,50 T800,50"
                            stroke={`url(#waveGradient${index})`}
                            strokeWidth="2"
                            fill="none"
                            className="animate-wave-flow"
                          />
                          <path
                            d="M0,50 Q200,80 400,50 T800,50"
                            stroke={`url(#waveGradient${index})`}
                            strokeWidth="1"
                            fill="none"
                            className="animate-wave-flow-reverse opacity-60"
                          />
                        </svg>

                        {/* Floating orbs along the wave */}
                        <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2">
                          <div className="w-3 h-3 bg-cyan-400/70 rounded-full animate-bounce-slow shadow-lg shadow-cyan-400/30" />
                        </div>
                        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-blue-400/90 rounded-full animate-pulse shadow-lg shadow-blue-400/30" />
                        </div>
                        <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2">
                          <div
                            className="w-3 h-3 bg-indigo-400/70 rounded-full animate-bounce-slow shadow-lg shadow-indigo-400/30"
                            style={{ animationDelay: "1s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery Modal */}
      {galleryOpen && currentProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-lg"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              closeGallery()
            }
          }}
        >
          <div
            className="relative max-w-4xl max-h-[80vh] w-full mx-6 animate-gallery-appear"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Navigation Buttons */}
            {currentProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/10"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-md border border-white/10"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Main Image */}
            <div
              className="relative bg-gradient-to-br from-gray-900/40 to-black/40 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  closeGallery()
                }
              }}
            >
              {/* Close Button - with background like navigation buttons */}
              <button
                onClick={closeGallery}
                className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-90 backdrop-blur-md border border-white/10"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full h-[60vh] bg-black flex items-center justify-center">
                <img
                  src={currentProject.images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>

            {/* Thumbnails */}
            {currentProject.images.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {currentProject.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${index === currentImageIndex
                      ? "ring-2 ring-cyan-400 scale-110 opacity-100"
                      : "opacity-50 hover:opacity-80 hover:scale-105"
                      }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes float-triangle {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.15;
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
            opacity: 0.4;
          }
          66% {
            transform: translateY(-10px) rotate(240deg);
            opacity: 0.25;
          }
        }
        
        @keyframes morph-blob {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          33% {
            transform: scale(1.2) rotate(120deg);
            border-radius: 60% 40% 30% 70%;
          }
          66% {
            transform: scale(0.8) rotate(240deg);
            border-radius: 30% 60% 70% 40%;
          }
        }
        
        @keyframes morph-blob-reverse {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            border-radius: 50%;
          }
          33% {
            transform: scale(0.8) rotate(-120deg);
            border-radius: 40% 60% 70% 30%;
          }
          66% {
            transform: scale(1.2) rotate(-240deg);
            border-radius: 70% 30% 40% 60%;
          }
        }
        
        @keyframes wave-flow {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 500 500;
            stroke-dashoffset: -250;
          }
          100% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: -1000;
          }
        }
        
        @keyframes wave-flow-reverse {
          0% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 500 500;
            stroke-dashoffset: 250;
          }
          100% {
            stroke-dasharray: 0 1000;
            stroke-dashoffset: 1000;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            transform: translateX(-50%) scaleX(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scaleX(1.2);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scan-line {
          0% {
            top: 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes gallery-appear {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 25s linear infinite;
        }
        
        .animate-float-triangle {
          animation: float-triangle 15s ease-in-out infinite;
        }
        
        .animate-morph-blob {
          animation: morph-blob 20s ease-in-out infinite;
        }
        
        .animate-morph-blob-reverse {
          animation: morph-blob-reverse 25s ease-in-out infinite;
        }
        
        .animate-wave-flow {
          animation: wave-flow 4s ease-in-out infinite;
        }
        
        .animate-wave-flow-reverse {
          animation: wave-flow-reverse 4s ease-in-out infinite 2s;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-scan-line {
          animation: scan-line 2s ease-in-out infinite;
        }

        .animate-gallery-appear {
          animation: gallery-appear 0.3s ease-out;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default Projects
