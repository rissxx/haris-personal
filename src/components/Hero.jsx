import { useState } from 'react'
import { FileText, ArrowRight } from 'lucide-react'
import profileImage from '../assets/523_22523282_Muhammad Haris Rusnanda.png'
import { portfolioData } from '../data/portfolioData'

export default function Hero() {
  const { personal } = portfolioData
  const [imgError, setImgError] = useState(false)

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Subtle, soft ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Profile Avatar / Monogram */}
        <div className="relative mx-auto mb-7 w-28 h-28 sm:w-32 sm:h-32 rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-cyan-400 to-slate-700 shadow-[0_0_30px_rgba(59,130,246,0.25)] ring-4 ring-slate-900/80">
          {!imgError ? (
            <div className="overflow-hidden rounded-full w-full h-full bg-slate-900">
              <img
                src={profileImage}
                alt="Haris Rusnanda"
                onError={() => setImgError(true)}
                className="w-full h-full object-cover object-[center_22%] scale-[1.05]"
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-slate-900/90 flex flex-col items-center justify-center text-blue-400 font-bold">
              <span className="text-2xl font-mono">HR</span>
              <span className="text-[10px] text-slate-400 font-normal mt-0.5">S.Kom</span>
            </div>
          )}
        </div>

        {/* Subtitle / Greeting */}
        <p className="text-sm sm:text-base font-medium text-blue-400 mb-3 tracking-wide">
          Hello, I'm
        </p>

        {/* Main Name Focus */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4">
          {personal.name}
        </h1>

        {/* Degree & Education Line */}
        <p className="text-lg sm:text-xl font-medium text-slate-300 mb-4">
          {personal.degree}
        </p>

        {/* Role Focus Line */}
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs sm:text-sm text-blue-300 font-medium mb-8 shadow-sm">
          {personal.rolesLine}
        </div>

        {/* Short Professional Introduction */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
          {personal.heroIntro}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-600/20 active:scale-[0.98]"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-sm font-medium border border-slate-800 hover:border-slate-700 transition-all active:scale-[0.98]"
          >
            <FileText className="w-4 h-4 text-blue-400" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  )
}
