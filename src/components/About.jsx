import profileImage from '../assets/523_22523282_Muhammad Haris Rusnanda.png'
import { portfolioData } from '../data/portfolioData'

export default function About() {
  const { personal } = portfolioData
  const { about } = personal

  return (
    <section id="about" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Tentang Saya
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Photo & Profile Card (5 cols) */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="p-3 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 shadow-2xl shadow-blue-500/5">
              {/* Photo Frame */}
              <div className="relative overflow-hidden rounded-xl aspect-[4/5] bg-slate-950 ring-1 ring-white/10 group">
                <img
                  src={profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />

                {/* Degree Tag on Photo */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-900/85 backdrop-blur-md border border-slate-700/70 text-[11px] font-mono font-medium text-blue-300 shadow-md">
                  S.Kom
                </div>

                {/* Subtle bottom edge gradient for smooth transition */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
              </div>

              {/* Identity Details below photo */}
              <div className="pt-4 px-2 pb-1">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {personal.name}, S.Kom
                </h3>
                <p className="text-xs text-blue-400 font-medium mt-0.5">
                  {personal.rolesLine}
                </p>

                {/* Status Badge */}
                <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 text-emerald-400 font-medium">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    {personal.status}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Story & Highlights (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Story Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {about.paragraphs.map((para, idx) => (
                <p key={idx} className="text-slate-300">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick Highlights Grid */}
            <div className="pt-6 border-t border-slate-800/80">
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Highlights Utama
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {about.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-colors"
                  >
                    <span className="text-xs text-slate-400 block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
