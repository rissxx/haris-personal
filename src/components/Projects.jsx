import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const { projects } = portfolioData

  const featuredProject = projects.find((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Portofolio Proyek
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            Karya nyata yang mencerminkan integrasi mikrokontroler IoT, keandalan jaringan IT, dan perangkat lunak modern.
          </p>
        </div>

        {/* Featured Project Showcase Card (Automatic Chili Irrigation System) */}
        {featuredProject && (
          <div className="mb-8 p-7 sm:p-9 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-900/50 border border-blue-500/30 shadow-lg shadow-blue-500/5">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-emerald-400 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50">
                  ★ Featured Project
                </span>
                <span className="text-xs font-medium text-blue-400 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50">
                  {featuredProject.category}
                </span>
              </div>
              <span className="text-xs text-slate-400">
                Role: {featuredProject.myRole}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
              {featuredProject.title}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-3xl">
              {featuredProject.shortDescription}
            </p>

            {/* Tech Stack Chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {featuredProject.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-200 text-xs font-medium border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
              <button
                type="button"
                onClick={() => setSelectedProject(featuredProject)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium transition-colors"
              >
                <span>Lihat Detail Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {featuredProject.github && (
                <a
                  href={featuredProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  title="GitHub Repository"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="mb-3">
                  <span className="text-[11px] font-medium text-slate-400 px-2 py-0.5 rounded bg-slate-800 border border-slate-700/50">
                    {project.category}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 leading-snug">
                  {project.title}
                </h4>

                <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[11px] bg-slate-850 text-slate-400 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] bg-slate-850 text-slate-500 border border-slate-800">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/70 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-medium text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 transition-colors"
                >
                  <span>Detail Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}
