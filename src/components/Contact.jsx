import { useState } from 'react'
import { Mail, MessageSquare, Copy, Check, ArrowUpRight, Send } from 'lucide-react'
import { LinkedinIcon, GithubIcon } from './Icons'
import { portfolioData } from '../data/portfolioData'

export default function Contact() {
  const { personal } = portfolioData
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
      `Inquiry via Portfolio: ${formState.name}`
    )}&body=${encodeURIComponent(
      `Halo Haris,\n\nNama: ${formState.name}\nEmail: ${formState.email}\n\nPesan:\n${formState.message}`
    )}`
    window.location.href = mailtoUrl
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Heading with CTA title */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Hubungi Saya
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Tertarik untuk merekrut, berkolaborasi, atau sekadar berdiskusi seputar teknologi? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* Email */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Email</span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  {personal.email}
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={copyEmail}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Salin Email"
            >
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* WhatsApp */}
          <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">WhatsApp</span>
                <a
                  href={personal.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  {personal.phone}
                </a>
              </div>
            </div>
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 rounded-lg hover:bg-slate-800 transition-colors"
              title="Buka WhatsApp"
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <LinkedinIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">LinkedIn</span>
                <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  Haris Rusnanda
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>

          {/* GitHub */}
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                <GithubIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">GitHub</span>
                <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  github.com/harisrusnanda
                </span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Simple Message Form */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/40 border border-slate-800">
          <h3 className="text-base font-bold text-white mb-4">
            Kirim Pesan Cepat
          </h3>

          {sent && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs">
              Email client Anda telah terbuka untuk mengirim pesan ini. Terima kasih!
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Nama Anda
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama atau Perusahaan"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1.5">
                  Email Anda
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@contoh.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Pesan
              </label>
              <textarea
                rows={3}
                required
                placeholder="Tuliskan pesan atau peluang kerja sama..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesan</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
