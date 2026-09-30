import { ArrowUp } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-slate-800/60 py-10 bg-[#080d1a]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div>
          <span className="text-white font-medium">{portfolioData.personal.name}</span>
          <span className="mx-2">•</span>
          <span>{portfolioData.personal.rolesLine}</span>
        </div>

        <div className="flex items-center gap-6">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
