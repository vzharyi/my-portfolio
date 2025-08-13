"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Code,
  Coffee,
  Trophy,
  Heart,
  Zap,
  Sparkles,
  Brain,
  Calendar,
  Book,
  User,
  Smile,
  Target,
  Star,
  Rocket,
} from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTimeline, setActiveTimeline] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [shouldSwitch, setShouldSwitch] = useState(false)
  const [pauseTimeoutId, setPauseTimeoutId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
      if (pauseTimeoutId) {
        clearTimeout(pauseTimeoutId)
      }
    }
  }, [pauseTimeoutId])

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / 30 // 3000ms / 100ms = 30 steps
        if (newProgress >= 100) {
          setShouldSwitch(true)
          return 0
        }
        return newProgress
      })
    }, 100) // Update every 100ms for smooth animation

    return () => clearInterval(interval)
  }, [isPaused])

  // Handle timeline switching
  useEffect(() => {
    if (shouldSwitch && !isPaused) {
      setActiveTimeline((prev) => (prev + 1) % 5)
      setShouldSwitch(false)
    }
  }, [shouldSwitch, isPaused])

  const handleTimelineClick = (index: number) => {
    setActiveTimeline(index)
    setProgress(0) // Reset progress when manually selecting
    setIsPaused(true) // Pause auto-switching

    // Clear existing timeout if any
    if (pauseTimeoutId) {
      clearTimeout(pauseTimeoutId)
    }

    // Resume auto-switching after 10 seconds
    const newTimeoutId = setTimeout(() => {
      setIsPaused(false)
      setPauseTimeoutId(null)
    }, 10000)

    setPauseTimeoutId(newTimeoutId)
  }

  const stats = [
    {
      number: "3+",
      label: "Years",
      sublabel: "Coding",
      icon: Code,
      color: "from-amber-600 to-orange-600",
    },
    {
      number: "6+",
      label: "Projects",
      sublabel: "Built",
      icon: Trophy,
      color: "from-orange-600 to-red-600",
    },
    {
      number: "15+",
      label: "Tech",
      sublabel: "Stack",
      icon: Zap,
      color: "from-orange-700 to-amber-600",
    },
  ]

  const timeline = [
    {
      year: "2022",
      month: "September",
      title: "University Enrollment",
      mobileTitle: "University Enrollment",
      description:
        "Enrolled at the NTU 'KhPI', in Ukraine, where I study software engineering at the Faculty of Computer Science and Information Technology.",
      icon: GraduationCap,
      color: "from-orange-600 to-red-600",
    },
    {
      year: "2022-2024",
      month: "Sept-July",
      title: "Programming Languages",
      mobileTitle: "Programming Languages",
      description: "Got into C++, C, Java, JavaScript, and other languages and technologies, diving deep into coding.",
      icon: Brain,
      color: "from-amber-600 to-orange-600",
    },
    {
      year: "2024",
      month: "November",
      title: "First Full-Stack Project",
      mobileTitle: "First Full-Stack Project",
      description:
        "Built a full-stack web application using Node.js for the backend and JavaScript for the frontend. The application combines server-side functionality with a dynamic, client-side user interface.",
      icon: Code,
      color: "from-yellow-600 to-amber-600",
    },
    {
      year: "2025",
      month: "March",
      title: "Frontend Developer",
      mobileTitle: "Frontend Developer",
      description:
        "Worked as a frontend developer, creating full functionality with React and TypeScript, integrating it with a backend API, and contributing to a project using the Next.js framework.",
      icon: Sparkles,
      color: "from-green-600 to-yellow-600",
    },
    {
      year: "Now",
      month: "",
      title: "Full-Stack | Backend Focus",
      mobileTitle: "Full-Stack | Backend Focus",
      description:
        "Progressing toward full-stack developer, now focusing on backend — mastering server-side architecture, NestJS, and Prisma ORM to build scalable solutions.",
      icon: Rocket,
      color: "from-blue-600 to-green-600",
    },
  ]

  const TimelineIcon = timeline[activeTimeline].icon
  const TimelineColor = timeline[activeTimeline].color

  return (
    <section id="about" className="py-8 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/10 via-transparent to-blue-900/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Coffee, Heart, Book, User, Smile, Target, Brain, Sparkles, Star].map((Icon, i) => (
          <div
            key={`floating-${i}`}
            className="absolute text-white/5 animate-float-gentle"
            style={{
              left: `${5 + i * 11}%`,
              top: `${10 + (i % 3) * 30}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${20 + Math.random() * 10}s`,
            }}
          >
            <Icon className="w-8 h-8" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Elegant Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 relative">
              <span className="bg-gradient-to-r from-white via-amber-200 to-white bg-clip-text text-transparent">
                About Me
              </span>
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-24 md:w-42 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent rounded-full" />
            </h2>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center lg:hidden space-y-8 px-4">
            {/* Story Card - Mobile */}
            <div className="relative group w-full max-w-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden">
                {/* Header - Mobile */}
                <div className="flex flex-col space-y-4 mb-6">
                  <div className="flex justify-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 flex-shrink-0">
                      <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <h3 className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                        My Story
                      </h3>
                      <p className="text-white/60 font-medium text-sm sm:text-base">The journey so far</p>
                    </div>
                  </div>

                  {/* Stats - Mobile */}
                  <div className="relative group/stats w-full">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover/stats:opacity-50 transition duration-500"></div>
                    <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 overflow-hidden">
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between sm:justify-start sm:space-x-6">
                          {stats.map((stat, index) => (
                            <div key={index} className="flex items-center space-x-1 sm:space-x-2 group/stat min-w-0">
                              <div
                                className={`w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300 flex-shrink-0`}
                              >
                                <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                              </div>
                              <div className="min-w-0">
                                <span
                                  className={`text-xs sm:text-base font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mr-1`}
                                >
                                  {stat.number}
                                </span>
                                <span className="text-xs sm:text-sm text-white/70">{stat.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Story Content - Mobile */}
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base leading-relaxed text-left">
                  <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    Hi! I'm{" "}
                    <span className="font-black text-lg sm:text-xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                      Vadym Zharyi
                    </span>
                    , a 20-year-old software engineering student who loves building web applications and solving
                    problems through code.
                  </p>
                  <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    I enjoy working on both
                    <span className="font-bold text-amber-500"> frontend and backend</span>, but currently I'm diving
                    deeper into
                    <span className="font-bold text-orange-500"> backend development</span> to become a more
                    well-rounded developer.
                  </p>
                  <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                    I work well <span className="font-bold text-amber-500">both alone and with others</span>, and I'm
                    always ready to learn something new. For me, coding is about building
                    <span className="font-bold text-orange-500"> useful things</span> that actually work.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline - Mobile */}
            <div className="relative group w-full max-w-xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center min-w-0 flex-1">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mr-3 flex-shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold text-white">Journey</h3>
                  </div>
                  <div className="flex items-center space-x-2 flex-shrink-0">
                    <div
                      className={`w-2 h-2 rounded-full ${isPaused ? "bg-orange-400" : "bg-pink-400 animate-pulse"}`}
                    ></div>
                    <span className="text-xs text-white/60">{isPaused ? "Paused" : "Auto"}</span>
                  </div>
                </div>

                {/* Progress bar - Mobile */}
                <div className="mb-6">
                  <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r rounded-full transition-all duration-100 ease-linear ${
                        isPaused ? "from-orange-400 to-amber-400" : "from-pink-400 to-purple-400"
                      }`}
                      style={{
                        width: `${progress}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-xs text-white/50 mt-2 text-center">
                    {isPaused ? "Auto-play paused for 10s" : "Tap any item to explore"}
                  </p>
                </div>

                {/* Current Timeline Item - Mobile */}
                <div className="mb-6">
                  <div className="flex space-x-4 items-start mb-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${TimelineColor} flex items-center justify-center shadow-lg transition-all duration-500 flex-shrink-0`}
                    >
                      <TimelineIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <Badge
                        className={`bg-gradient-to-r ${TimelineColor} text-white border-0 px-3 py-1 text-sm font-bold mb-1 transition-all duration-500`}
                      >
                        {timeline[activeTimeline].month} {timeline[activeTimeline].year}
                      </Badge>
                      <h3 className="text-2sm sm:text-2xl font-black bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent transition-all duration-300 leading-tight">
                        <span className="sm:hidden">{timeline[activeTimeline].mobileTitle}</span>
                        <span className="hidden sm:inline">{timeline[activeTimeline].title}</span>
                      </h3>
                    </div>
                  </div>
                  {/* Fixed height container for description to prevent layout jumps */}
                  <div className="relative min-h-[115px]  overflow-hidden flex items-center justify-center">
                    <p className="text-white/80 text-sm sm:text-base leading-relaxed transition-all duration-500 opacity-100 w-full">
                      {timeline[activeTimeline].description}
                    </p>
                  </div>
                </div>

                {/* Timeline Items - Mobile */}
                <div className="space-y-3">
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative p-4 rounded-xl border transition-all duration-500 cursor-pointer group/item overflow-hidden ${
                        activeTimeline === index
                          ? "bg-white/10 border-white/20 scale-102 shadow-lg"
                          : "bg-white/5 border-white/10 hover:bg-white/8"
                      }`}
                      onClick={() => handleTimelineClick(index)}
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 ${
                            activeTimeline === index ? "scale-110 shadow-xl" : "group-hover/item:scale-105"
                          } transition-all duration-300`}
                        >
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1 flex-wrap">
                            <Badge
                              className={`bg-gradient-to-r ${item.color} text-white border-0 px-2 py-0.5 text-xs font-bold flex-shrink-0`}
                            >
                              {item.month} {item.year}
                            </Badge>
                            {activeTimeline === index && (
                              <span className="text-xs text-pink-400 font-medium flex-shrink-0">● Active</span>
                            )}
                          </div>
                          <h4 className="font-bold text-sm text-white group-hover/item:text-pink-300 transition-colors duration-300 break-words">
                            <span className="sm:hidden">{item.mobileTitle}</span>
                            <span className="hidden sm:inline">{item.title}</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8 px-8 xl:px-12">
            {/* Left Column - Story + Timeline Description */}
            <div className="lg:col-span-2 space-y-8">
              {/* Story Card with embedded Stats */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 xl:p-8 border border-white/10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 xl:w-16 xl:h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                        <Heart className="w-6 h-6 xl:w-8 xl:h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl xl:text-3xl font-black bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                          My Story
                        </h3>
                        <p className="text-white/60 font-medium">The journey so far</p>
                      </div>
                    </div>

                    {/* Stats positioned to the right of My Story */}
                    <div className="relative group/stats">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur opacity-30 group-hover/stats:opacity-50 transition duration-500"></div>
                      <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-2xl p-3 xl:p-4 border border-white/20">
                        <div className="flex items-center space-x-4 xl:space-x-6">
                          {stats.map((stat, index) => (
                            <div key={index} className="flex items-center space-x-2 group/stat">
                              <div
                                className={`w-7 h-7 xl:w-8 xl:h-8 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center shadow-lg group-hover/stat:scale-110 transition-transform duration-300`}
                              >
                                <stat.icon className="w-3 h-3 xl:w-4 xl:h-4 text-white" />
                              </div>
                              <div>
                                <span
                                  className={`text-base xl:text-lg font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mr-1`}
                                >
                                  {stat.number}
                                </span>
                                <span className="text-xs xl:text-sm text-white/70">{stat.label}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 xl:space-y-6 text-sm xl:text-base leading-relaxed">
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                      Hi! I'm{" "}
                      <span className="font-black text-lg xl:text-xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                        Vadym Zharyi
                      </span>
                      , a 20-year-old software engineering student who loves building web applications and solving
                      problems through code.
                    </p>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                      I enjoy working on both
                      <span className="font-bold text-amber-500"> frontend and backend</span>, but currently I'm diving
                      deeper into
                      <span className="font-bold text-orange-500"> backend development</span> to become a more
                      well-rounded developer.
                    </p>
                    <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">
                      I work well <span className="font-bold text-amber-500">both alone and with others</span>, and I'm
                      always ready to learn something new. For me, coding is about building
                      <span className="font-bold text-orange-500"> useful things</span> that actually work.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline Description */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-6 xl:p-8 border border-white/10">
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-gradient-to-br ${TimelineColor} flex items-center justify-center shadow-lg mr-4 transition-all duration-500`}
                    >
                      <TimelineIcon className="w-5 h-5 xl:w-6 xl:h-6 text-white" />
                    </div>
                    <div>
                      <Badge
                        className={`bg-gradient-to-r ${TimelineColor} text-white border-0 px-3 py-1 text-sm font-bold mb-0 transition-all duration-500`}
                      >
                        {timeline[activeTimeline].month} {timeline[activeTimeline].year}
                      </Badge>
                      <h3 className="text-xl xl:text-2xl font-black bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent transition-all duration-300">
                        {timeline[activeTimeline].title}
                      </h3>
                    </div>
                  </div>
                  <div className="relative min-h-[5rem] xl:min-h-[6rem] overflow-hidden">
                    <p className="absolute inset-0 text-white/80 text-base xl:text-lg leading-relaxed transition-all duration-500 opacity-100">
                      {timeline[activeTimeline].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="lg:col-span-1">
              <div className="relative group h-full">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-4 xl:p-6 border border-white/10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4 xl:mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 xl:w-6 xl:h-6 text-pink-400 mr-3" />
                      <h3 className="text-lg xl:text-xl font-bold text-white">Journey</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-2 h-2 rounded-full ${isPaused ? "bg-orange-400" : "bg-pink-400 animate-pulse"}`}
                      ></div>
                      <span className="text-xs text-white/60">{isPaused ? "Paused" : "Auto"}</span>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r rounded-full transition-all duration-100 ease-linear ${
                          isPaused ? "from-orange-400 to-amber-400" : "from-pink-400 to-purple-400"
                        }`}
                        style={{
                          width: `${progress}%`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-white/50 mt-1 text-center">
                      {isPaused ? "Auto-play paused for 10s" : "Click any item to explore"}
                    </p>
                  </div>

                  <div className="space-y-3 xl:space-y-4 flex-1">
                    {timeline.map((item, index) => (
                      <div
                        key={index}
                        className={`relative p-3 rounded-xl border transition-all duration-500 cursor-pointer group/item ${
                          activeTimeline === index
                            ? "bg-white/10 border-white/20 scale-105 shadow-lg"
                            : "bg-white/5 border-white/10 hover:bg-white/8 hover:scale-102"
                        }`}
                        onClick={() => handleTimelineClick(index)}
                      >
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0 ${
                              activeTimeline === index ? "scale-110 shadow-xl" : "group-hover/item:scale-105"
                            } transition-all duration-300`}
                          >
                            <item.icon className="w-3 h-3 xl:w-4 xl:h-4 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-1">
                              <Badge
                                className={`bg-gradient-to-r ${item.color} text-white border-0 px-2 py-0.5 text-xs font-bold`}
                              >
                                {item.month} {item.year}
                              </Badge>
                              {activeTimeline === index && (
                                <span className="text-xs text-pink-400 font-medium">● Active</span>
                              )}
                            </div>
                            <h4 className="font-bold text-xs xl:text-sm text-white mb-1 group-hover/item:text-pink-300 transition-colors duration-300">
                              {item.title}
                            </h4>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom section */}
                  <div className="mt-4 xl:mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-white/60">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="w-3 h-3" />
                        <span>Interactive Timeline</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{timeline.length}</span>
                        <span>milestones</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-15px) translateX(8px) rotate(5deg);
            opacity: 0.5;
          }
          66% {
            transform: translateY(-8px) translateX(-5px) rotate(-3deg);
            opacity: 0.4;
          }
        }

        .animate-float-gentle {
          animation: float-gentle 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default About
