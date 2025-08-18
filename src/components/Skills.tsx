"use client"

import { useEffect } from "react"

import { useState } from "react"

import { CardContent } from "@/components/ui/card"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Search,
  Sparkles,
  Globe,
  Server,
  Settings,
  HardDrive,
  Wrench,
  Zap,
  ImageIcon,
  FileText,
  Calendar,
} from "lucide-react"

// React Icons
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiExpress,
  SiGit,
  SiVercel,
  SiNestjs,
  SiReactrouter,
  SiShadcnui,
  SiZod,
  SiAxios,
  SiPrisma,
  SiJsonwebtokens,
  SiSocketdotio,
  SiEslint,
  SiSwagger,
  SiMui,
  SiGoogle,
  SiUnsplash,
  SiKonva,
  SiLucide,
} from "react-icons/si"
import { TbBrandVite } from "react-icons/tb"

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

  const SKILL_TYPE_ORDER: Record<string, number> = {
    "Full-Stack": 0,
    Frontend: 1,
    Backend: 2,
    Database: 3,
    API: 4,
    DevOps: 5,
    Tools: 6,
  }

  const skillsData = [
    {
      name: "React",
      icon: SiReact,
      color: "text-cyan-400",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "text-blue-500",
      categories: ["Frontend", "Backend"],
      type: "Full-Stack",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "text-white",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "text-green-500",
      categories: ["Backend"],
      type: "Backend",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-cyan-400",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
      categories: ["Frontend", "Backend"],
      type: "Full-Stack",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "text-orange-500",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "CSS3",
      icon: SiCss3,
      color: "text-blue-500",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "text-blue-600",
      categories: ["Database"],
      type: "Database",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      color: "text-gray-400",
      categories: ["Backend"],
      type: "Backend",
    },
    {
      name: "Git",
      icon: SiGit,
      color: "text-orange-500",
      categories: ["Tools"],
      type: "Tools",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "text-white",
      categories: ["DevOps"],
      type: "DevOps",
    },
    {
      name: "Vite",
      icon: TbBrandVite,
      color: "text-purple-500",
      categories: ["Tools"],
      type: "Tools",
    },
    {
      name: "NestJS",
      icon: SiNestjs,
      color: "text-red-500",
      categories: ["Backend"],
      type: "Backend",
    },
    {
      name: "React Router",
      icon: SiReactrouter,
      color: "text-red-500",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "Shadcn UI",
      icon: SiShadcnui,
      color: "text-white",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "Zod",
      icon: SiZod,
      color: "text-blue-600",
      categories: ["Full-Stack"],
      type: "Full-Stack",
    },
    {
      name: "Axios",
      icon: SiAxios,
      color: "text-purple-500",
      categories: ["Full-Stack"],
      type: "Full-Stack",
    },
    {
      name: "Prisma",
      icon: SiPrisma,
      color: "text-indigo-500",
      categories: ["Backend"],
      type: "Backend",
    },
    {
      name: "JWT",
      icon: SiJsonwebtokens,
      color: "text-pink-500",
      categories: ["Backend"],
      type: "Backend",
    },
    {
      name: "Socket.io",
      icon: SiSocketdotio,
      color: "text-white",
      categories: ["Backend"],
      type: "Backend",
    },
    {
      name: "ESLint",
      icon: SiEslint,
      color: "text-purple-600",
      categories: ["Tools"],
      type: "Tools",
    },
    {
      name: "Swagger",
      icon: SiSwagger,
      color: "text-green-500",
      categories: ["Tools"],
      type: "Tools",
    },
    // {
    //   name: "Zustand",
    //   icon: SiZustand,
    //   color: "text-orange-500",
    //   categories: ["Frontend"],
    //   type: "Frontend",
    // },
    {
      name: "Material UI",
      icon: SiMui,
      color: "text-blue-500",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "Google APIs",
      icon: SiGoogle,
      color: "text-red-500",
      categories: ["API"],
      type: "API",
    },
    {
      name: "Unsplash",
      icon: SiUnsplash,
      color: "text-white",
      categories: ["API"],
      type: "API",
    },
    {
      name: "Remove.bg",
      icon: ImageIcon,
      color: "text-green-400",
      categories: ["API"],
      type: "API",
    },
    {
      name: "PixaBay",
      icon: Globe,
      color: "text-yellow-500",
      categories: ["API"],
      type: "API",
    },
    {
      name: "Pollinations.ai",
      icon: Zap,
      color: "text-purple-400",
      categories: ["API"],
      type: "API",
    },
    {
      name: "ImgBB",
      icon: Globe,
      color: "text-blue-400",
      categories: ["API"],
      type: "API",
    },
    {
      name: "jsPDF",
      icon: FileText,
      color: "text-red-500",
      categories: ["Tools"],
      type: "Tools",
    },
    {
      name: "FullCalendar",
      icon: Calendar,
      color: "text-orange-500",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "Faker.js",
      icon: Wrench,
      color: "text-green-500",
      categories: ["Tools"],
      type: "Tools",
    },
    {
      name: "KonvaJS",
      icon: SiKonva,
      color: "text-blue-500",
      categories: ["Frontend"],
      type: "Frontend",
    },
    {
      name: "Lucide Icons",
      icon: SiLucide,
      color: "text-indigo-400",
      categories: ["Frontend"],
      type: "Frontend",
    },
  ].sort((a, b) => {
    const orderA = SKILL_TYPE_ORDER[a.type]
    const orderB = SKILL_TYPE_ORDER[b.type]
    return orderA - orderB
  })

  const categories = [
    {
      name: "All",
      count: skillsData.length,
      color: "from-blue-500 to-indigo-500",
      icon: Sparkles,
      borderColorClass: "border-blue-400",
    },
    {
      name: "Frontend",
      count: skillsData.filter((s) => s.categories.includes("Frontend")).length,
      color: "from-cyan-500 to-blue-600",
      icon: Globe,
      borderColorClass: "border-cyan-400",
    },
    {
      name: "Backend",
      count: skillsData.filter((s) => s.categories.includes("Backend")).length,
      color: "from-green-500 to-emerald-600",
      icon: Server,
      borderColorClass: "border-green-400",
    },
    {
      name: "Database",
      count: skillsData.filter((s) => s.categories.includes("Database")).length,
      color: "from-purple-500 to-violet-600",
      icon: HardDrive,
      borderColorClass: "border-purple-400",
    },
    {
      name: "API",
      count: skillsData.filter((s) => s.categories.includes("API")).length,
      color: "from-yellow-500 to-orange-500",
      icon: Zap,
      borderColorClass: "border-yellow-400",
    },
    {
      name: "DevOps",
      count: skillsData.filter((s) => s.categories.includes("DevOps")).length,
      color: "from-red-500 to-pink-500",
      icon: Settings,
      borderColorClass: "border-red-400",
    },
    {
      name: "Tools",
      count: skillsData.filter((s) => s.categories.includes("Tools")).length,
      color: "from-gray-500 to-slate-600",
      icon: Wrench,
      borderColorClass: "border-gray-400",
    },
  ]

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory = activeCategory === "All" || skill.categories.includes(activeCategory)
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Frontend":
        return "text-cyan-400 bg-cyan-500/20"
      case "Backend":
        return "text-green-400 bg-green-500/20"
      case "Full-Stack":
        return "text-purple-400 bg-purple-500/20"
      case "Database":
        return "text-indigo-400 bg-indigo-500/20"
      case "API":
        return "text-yellow-400 bg-yellow-500/20"
      case "DevOps":
        return "text-red-400 bg-red-500/20"
      case "Tools":
        return "text-gray-400 bg-gray-500/20"
      default:
        return "text-gray-400 bg-gray-500/20"
    }
  }

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
        {[Globe, Server, HardDrive, Wrench, Settings, Zap].map((Icon, i) => (
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
                Skills & Technologies
              </span>
              <div className="absolute -bottom-2 md:-bottom-4 left-1/2 transform -translate-x-1/2 w-24 md:w-42 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            </h2>
          </div>

          {/* Mobile Layout */}
          <div className="flex flex-col items-center lg:hidden space-y-8 px-4">
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
                      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group text-xs border ${
                        activeCategory === category.name
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25 ${category.borderColorClass}`
                          : "hover:bg-white/10 text-white/80 border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <category.icon className="w-3 h-3" />
                        <span>{category.name}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid - Mobile */}
            <div className="w-full max-w-xl">
              <div
                className={`grid gap-3 ${
                  searchTerm
                    ? "grid-cols-[repeat(auto-fill,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))]"
                    : "grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(160px,1fr))]"
                }`}
              >
                {filteredSkills.map((skill, index) => (
                  <Card
                    key={skill.name}
                    className="h-16 group cursor-pointer border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 min-w-0"
                    style={{ animationDelay: `${index * 30}ms` }}
                  >
                    <CardContent className="p-2.5 h-full w-full flex items-center justify-start">
                      <div className="flex items-center gap-2.5 w-full justify-start">
                        <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <skill.icon className={`w-3.5 h-3.5 ${skill.color}`} />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <h4 className="font-semibold text-white text-xs mb-1 group-hover:text-blue-300 transition-colors duration-300 leading-tight truncate">
                            {skill.name}
                          </h4>
                          <Badge className={`text-xs px-1.5 py-0.5 ${getTypeColor(skill.type)} border-0 w-fit`}>
                            {skill.type}
                          </Badge>
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
            {/* Search and Filter Section - Desktop */}
            <div className="mb-8">
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
                      className={`relative overflow-hidden transition-all duration-300 hover:scale-105 group border ${
                        activeCategory === category.name
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25 ${category.borderColorClass}`
                          : "hover:bg-white/10 text-white/80 border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <category.icon className="w-4 h-4" />
                        <span>{category.name}</span>
                      </div>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Grid - Desktop */}
            <div
              className={`grid gap-4 ${
                searchTerm
                  ? "grid-cols-[repeat(auto-fill,minmax(180px,1fr))]"
                  : "grid-cols-[repeat(auto-fit,minmax(180px,1fr))]"
              }`}
            >
              {filteredSkills.map((skill, index) => (
                <Card
                  key={skill.name}
                  className="h-16 group cursor-pointer border-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10"
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  <CardContent className="p-3 h-full w-full flex items-center justify-start">
                    <div className="flex items-center gap-3 w-full justify-start">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <skill.icon className={`w-4 h-4 ${skill.color}`} />
                      </div>
                      <div className="flex-1 flex flex-col justify-center">
                        <h4 className="font-semibold text-white text-sm mb-1 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                          {skill.name}
                        </h4>
                        <Badge className={`text-xs px-1.5 py-0.5 ${getTypeColor(skill.type)} border-0 w-fit`}>
                          {skill.type}
                        </Badge>
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
