import { Cpu, Code2, Network } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Skills() {
  const getCategoryIcon = (index) => {
    switch (index) {
      case 0:
        return Cpu
      case 1:
        return Code2
      case 2:
        return Network
      default:
        return Code2
    }
  }

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Keahlian Teknis
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Core Skills
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Tiga pilar keahlian praktis yang saya kuasai untuk mendukung kebutuhan teknologi dan operasional.
          </p>
        </div>

        {/* 3 Main Groups in Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skills.map((group, idx) => {
            const Icon = getCategoryIcon(idx)

            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {group.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.skillsList.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-300 text-xs font-medium border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
