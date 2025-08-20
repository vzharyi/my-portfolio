import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, FileText } from "lucide-react"

const CV = () => {
  const handleBackToPortfolio = () => {
    window.location.href = '/'
  }

  // Автоматически скроллим вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center">
      <div className="text-center space-y-8 p-8">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full flex items-center justify-center">
            <FileText className="w-12 h-12 text-cyan-400" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-xl sm:text-2xl text-white/70">
            Page under development
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <p className="text-white/60 text-lg leading-relaxed">
            Here will be my complete resume with information about work experience, skills and projects.
          </p>
        </div>

        <Button
          onClick={handleBackToPortfolio}
          variant="ghost"
          className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-3 text-lg"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Portfolio
        </Button>
      </div>
    </div>
  )
}

export default CV
