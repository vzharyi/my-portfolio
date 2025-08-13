"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Code,
  Database,
  Wrench,
  Globe,
  Server,
  Palette,
  GitBranch,
  Cloud,
  TestTube,
  Star,
  TrendingUp,
  Search,
  Award,
  Target,
  Sparkles,
  BarChart3,
  Settings,
  HardDrive,
} from "lucide-react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillsData = [
    {
      name: "React",
      icon: Code,
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-blue-600/20",
      categories: ["Frontend"],
      level: 5,
      experience: "3 years",
      featured: true,
    },
    {
      name: "TypeScript",
      icon: Code,
      color: "text-blue-500",
      bgColor: "from-blue-600/20 to-indigo-600/20",
      categories: ["Frontend", "Backend"],
      level: 4,
      experience: "2 years",
      featured: true,
    },
    {
      name: "Next.js",
      icon: Globe,
      color: "text-white",
      bgColor: "from-gray-600/20 to-slate-600/20",
      categories: ["Frontend"],
      level: 4,
      experience: "2 years",
      featured: true,
    },
    {
      name: "Node.js",
      icon: Server,
      color: "text-green-500",
      bgColor: "from-green-500/20 to-emerald-600/20",
      categories: ["Backend"],
      level: 4,
      experience: "2 years",
      featured: true,
    },
    {
      name: "Tailwind CSS",
      icon: Palette,
      color: "text-blue-300",
      bgColor: "from-cyan-500/20 to-blue-500/20",
      categories: ["Frontend"],
      level: 5,
      experience: "2 years",
    },
    {
      name: "Vue.js",
      icon: Code,
      color: "text-teal-400",
      bgColor: "from-teal-500/20 to-green-500/20",
      categories: ["Frontend"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "JavaScript",
      icon: Code,
      color: "text-yellow-400",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      categories: ["Frontend", "Backend"],
      level: 5,
      experience: "3 years",
    },
    {
      name: "HTML5",
      icon: Globe,
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-red-500/20",
      categories: ["Frontend"],
      level: 5,
      experience: "3 years",
    },
    {
      name: "CSS3",
      icon: Palette,
      color: "text-blue-400",
      bgColor: "from-blue-500/20 to-purple-500/20",
      categories: ["Frontend"],
      level: 5,
      experience: "3 years",
    },
    {
      name: "Python",
      icon: Code,
      color: "text-yellow-500",
      bgColor: "from-yellow-600/20 to-blue-600/20",
      categories: ["Backend"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "PostgreSQL",
      icon: Database,
      color: "text-blue-600",
      bgColor: "from-blue-600/20 to-indigo-700/20",
      categories: ["Database"],
      level: 4,
      experience: "2 years",
    },
    {
      name: "MongoDB",
      icon: Database,
      color: "text-green-600",
      bgColor: "from-green-600/20 to-teal-600/20",
      categories: ["Database"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "GraphQL",
      icon: Server,
      color: "text-pink-400",
      bgColor: "from-pink-500/20 to-purple-500/20",
      categories: ["Backend"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "Express.js",
      icon: Server,
      color: "text-gray-400",
      bgColor: "from-gray-500/20 to-slate-600/20",
      categories: ["Backend"],
      level: 4,
      experience: "2 years",
    },
    {
      name: "FastAPI",
      icon: Server,
      color: "text-teal-400",
      bgColor: "from-teal-500/20 to-cyan-500/20",
      categories: ["Backend"],
      level: 2,
      experience: "6 months",
    },
    {
      name: "Redis",
      icon: HardDrive,
      color: "text-red-400",
      bgColor: "from-red-500/20 to-orange-500/20",
      categories: ["Database"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "Git",
      icon: GitBranch,
      color: "text-orange-500",
      bgColor: "from-orange-500/20 to-red-500/20",
      categories: ["Tools"],
      level: 5,
      experience: "3 years",
    },
    {
      name: "Docker",
      icon: Cloud,
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      categories: ["DevOps"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "AWS",
      icon: Cloud,
      color: "text-orange-400",
      bgColor: "from-orange-500/20 to-yellow-500/20",
      categories: ["DevOps"],
      level: 2,
      experience: "6 months",
    },
    {
      name: "Figma",
      icon: Palette,
      color: "text-purple-400",
      bgColor: "from-purple-500/20 to-pink-500/20",
      categories: ["Tools"],
      level: 4,
      experience: "2 years",
    },
    {
      name: "Jest",
      icon: TestTube,
      color: "text-red-500",
      bgColor: "from-red-500/20 to-pink-500/20",
      categories: ["Tools"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "Webpack",
      icon: Wrench,
      color: "text-blue-600",
      bgColor: "from-blue-600/20 to-indigo-600/20",
      categories: ["Tools"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "Vite",
      icon: Wrench,
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-violet-500/20",
      categories: ["Tools"],
      level: 4,
      experience: "2 years",
    },
    {
      name: "VS Code",
      icon: Code,
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-indigo-500/20",
      categories: ["Tools"],
      level: 5,
      experience: "3 years",
    },
    {
      name: "Nginx",
      icon: Server,
      color: "text-green-400",
      bgColor: "from-green-500/20 to-emerald-500/20",
      categories: ["DevOps"],
      level: 3,
      experience: "1 year",
    },
    {
      name: "MySQL",
      icon: Database,
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      categories: ["Database"],
      level: 3,
      experience: "1 year",
    },
  ]

  const categories = [
    {
      name: "All",
      count: skillsData.length,
      color: "from-blue-500 to-indigo-500",
      icon: Sparkles,
    },
    {
      name: "Frontend",
      count: skillsData.filter((s) => s.categories.includes("Frontend")).length,
      color: "from-blue-500 to-blue-600",
      icon: Globe,
    },
    {
      name: "Backend",
      count: skillsData.filter((s) => s.categories.includes("Backend")).length,
      color: "from-green-500 to-emerald-600",
      icon: Server,
    },
    {
      name: "Database",
      count: skillsData.filter((s) => s.categories.includes("Database")).length,
      color: "from-purple-500 to-violet-600",
      icon: HardDrive,
    },
    {
      name: "DevOps",
      count: skillsData.filter((s) => s.categories.includes("DevOps")).length,
      color: "from-orange-500 to-red-500",
      icon: Settings,
    },
    {
      name: "Tools",
      count: skillsData.filter((s) => s.categories.includes("Tools")).length,
      color: "from-gray-500 to-slate-600",
      icon: Wrench,
    },
  ]

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "All" || skill.categories.includes(activeCategory)
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredSkills = skillsData.filter((skill) => skill.featured)

  const renderStars = (level: number, size: "sm" | "md" = "md") => {
    const starSize = size === "sm" ? "w-3 h-3" : "w-3.5 h-3.5"
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`${starSize} ${i < level ? "text-yellow-400 fill-yellow-400" : "text-gray-600"}`} />
    ))
  }

  const avgProficiency = Math.round(
    (filteredSkills.reduce((acc, skill) => acc + skill.level, 0) / filteredSkills.length) * 20,
  )
  const expertSkills = filteredSkills.filter((skill) => skill.level === 5).length
  const advancedSkills = filteredSkills.filter((skill) => skill.level >= 4).length

  return (
    <section id="skills" className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/20 via-transparent to-slate-800/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[Code, Database, Server, Wrench, Globe, Palette].map((Icon, i) => (
          <div
            key={`bg-icon-${i}`}
            className="absolute text-white/5 animate-float-tech"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            <Icon className="w-8 h-8 md:w-12 md:h-12" />
          </div>
        ))}

        {/* Floating particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Header */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16 relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-4 md:mb-6 relative">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Skills & Expertise
              </span>
              <div className="absolute -bottom-1 md:-bottom-2 left-1/2 transform -translate-x-1/2 w-20 md:w-32 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              Technologies I work with and my proficiency levels across different domains
            </p>

            {/* Enhanced Stats Dashboard */}
            <div className="flex flex-col items-center lg:hidden px-4">
              <div className="w-full max-w-xl">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                          {filteredSkills.length}
                        </div>
                        <div className="text-xs sm:text-sm text-white/60">Technologies</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{expertSkills}</div>
                        <div className="text-xs sm:text-sm text-white/60">Expert Level</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{avgProficiency}%</div>
                        <div className="text-xs sm:text-sm text-white/60">Avg Proficiency</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                      </div>
                      <div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{advancedSkills}</div>
                        <div className="text-xs sm:text-sm text-white/60">Advanced+</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Stats */}
            <div className="hidden lg:flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 md:mb-8 px-4">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{filteredSkills.length}</div>
                    <div className="text-xs sm:text-sm text-white/60">Technologies</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{expertSkills}</div>
                    <div className="text-xs sm:text-sm text-white/60">Expert Level</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{avgProficiency}%</div>
                    <div className="text-xs sm:text-sm text-white/60">Avg Proficiency</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 hover:bg-white/8 transition-all duration-300 group">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">{advancedSkills}</div>
                    <div className="text-xs sm:text-sm text-white/60">Advanced+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center lg:hidden space-y-8 px-4">
            {/* Featured Skills Section - Mobile */}
            <div className="w-full max-w-xl">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Featured Skills</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
                {featuredSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="h-16 group cursor-pointer border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 min-w-0"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-3 -mt-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <skill.icon className={`w-5 h-5 ${skill.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300 truncate">
                            {skill.name}
                          </h4>
                          <div className="flex space-x-0.5">{renderStars(skill.level, "sm")}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Search and Filter Section - Mobile */}
            <div className="w-full max-w-xl">
              <div className="flex flex-col gap-4 items-center">
                {/* Search */}
                <div className="relative w-full max-w-sm">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
                  <Input
                    placeholder="Search technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50 focus:bg-white/10 text-sm h-10"
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={activeCategory === category.name ? "default" : "ghost"}
                      onClick={() => setActiveCategory(category.name)}
                      size="sm"
                      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group text-xs ${
                        activeCategory === category.name
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                          : "hover:bg-white/10 text-white/80 border border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <category.icon className="w-3 h-3" />
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs px-1.5 py-0.5 bg-white/20 text-white/80">
                          {category.count}
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid - Mobile */}
            <div className="w-full max-w-xl">
              <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
                {filteredSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="h-15 group cursor-pointer border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 min-w-0"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <CardContent className="p-3 -mt-6.5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <skill.icon className={`w-4 h-4 ${skill.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight truncate">
                            {skill.name}
                          </h4>
                          <div className="flex space-x-0.5">{renderStars(skill.level, "sm")}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block px-8 xl:px-12">
            {/* Featured Skills Section - Desktop */}
            <div className="mb-8 md:mb-12 lg:mb-16">
              <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                  <Star className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Featured Skills</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/50 to-transparent"></div>
              </div>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
                {featuredSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="h-19 group cursor-pointer border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-4 -mt-6.5">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <skill.icon className={`w-6 h-6 ${skill.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <div className="flex space-x-0.5">{renderStars(skill.level)}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Search and Filter Section - Desktop */}
            <div className="mb-8 md:mb-12">
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                {/* Search */}
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                  <Input
                    placeholder="Search technologies..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-400/50 focus:bg-white/10"
                  />
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant={activeCategory === category.name ? "default" : "ghost"}
                      onClick={() => setActiveCategory(category.name)}
                      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group ${
                        activeCategory === category.name
                          ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/25"
                          : "hover:bg-white/10 text-white/80 border border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        <span>{category.name}</span>
                        <Badge variant="secondary" className="text-xs px-2 py-0.5 bg-white/20 text-white/80">
                          {category.count}
                        </Badge>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid - Desktop */}
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
              {filteredSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="h-19 group cursor-pointer border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <CardContent className="p-4 -mt-6.5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <skill.icon className={`w-5 h-5 ${skill.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                          {skill.name}
                        </h4>
                        <div className="flex space-x-0.5">{renderStars(skill.level)}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* No Results */}
          {filteredSkills.length === 0 && (
            <div className="text-center py-8 md:py-12 px-4">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                <Search className="w-6 h-6 md:w-8 md:h-8 text-white/40" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">No skills found</h3>
              <p className="text-sm md:text-base text-white/60">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float-tech {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
            opacity: 0.3;
          }
          33% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.6;
          }
          66% {
            transform: translateY(-10px) translateX(-8px) rotate(-3deg);
            opacity: 0.4;
          }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-15px) translateX(-10px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-35px) translateX(-20px);
            opacity: 0.8;
          }
        }

        .animate-float-tech {
          animation: float-tech 15s ease-in-out infinite;
        }

        .animate-float-particle {
          animation: float-particle 12s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

export default Skills
