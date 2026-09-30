import { X, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from './Icons'

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-[#0b1120] border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/80 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-medium text-blue-400 px-2.5 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-medium text-emerald-400 px-2.5 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/40">
                Featured Project
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            {project.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300">
            <span className="text-slate-400">My Role: </span>
            <strong className="text-white font-medium">{project.myRole}</strong>
          </p>
        </div>

        {/* Overview */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Overview
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <h4 className="text-xs font-semibold text-rose-400 uppercase tracking-wider mb-1.5">
              Problem
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1.5">
              Solution
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Key Features
          </h3>
          <ul className="space-y-2">
            {project.keyFeatures.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-8 pt-4 border-t border-slate-800">
          <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Technologies & Hardware
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md bg-slate-800/70 text-slate-200 text-xs font-medium border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          ) : (
            <span className="text-xs text-slate-500">Internal / Research Project</span>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-300 text-xs font-medium transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  )
}
