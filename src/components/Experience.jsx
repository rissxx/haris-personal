import { Briefcase, GraduationCap } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

export default function Experience() {
  const { education, experience } = portfolioData.experienceAndEducation

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Riwayat
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Experience & Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Latar belakang akademis dan rekam jejak pengalaman teknis yang saya bangun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-4 h-4 text-blue-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Pengalaman & Proyek
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-semibold text-white">
                      {item.role}
                    </h4>
                    <span className="text-xs font-medium text-blue-400">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-3">
                    {item.company}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="w-4 h-4 text-blue-400" />
              <h3 className="text-base font-bold text-white uppercase tracking-wider">
                Pendidikan
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-medium text-blue-400 px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">
                      Gelar Sarjana
                    </span>
                    <span className="text-xs text-slate-400">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-slate-400 mb-4">
                    {edu.institution}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
