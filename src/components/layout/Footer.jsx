import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Futuristic footer backdrop (distinct scheme from pages) */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(800px_circle_at_80%_0%,rgba(244,114,182,0.16),transparent_55%),linear-gradient(180deg,rgba(3,7,18,0.88)_0%,rgba(3,7,18,0.98)_100%)]" />
      <div className="absolute inset-0 border-t border-white/10" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

          {/* Brand */}
          <div className="space-y-3">
            <div className="text-base font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
                Fazil
              </span>
              <span className="text-white/60"> / portfolio</span>
            </div>
            <p className="text-white/65 leading-relaxed max-w-sm">
              Building clean interfaces, scalable systems, and full‑stack products.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
              Available for freelance & collaborations
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-3 text-white/90">Contact</h3>
            <div className="space-y-2 text-white/70">
              <p className="flex items-center gap-2">
                <Phone size={14} /> +91-6238206892
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} /> fazilraphi14@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} /> fazil.dev@outlook.com
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-3 text-white/90">Connect</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/fazilraphi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Github size={16} className="group-hover:text-cyan-200" />
              </a>
              <a
                href="https://www.linkedin.com/in/fazil-p-raphi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Linkedin size={16} className="group-hover:text-fuchsia-200" />
              </a>
              <a
                href="mailto:fazilraphi14@email.com"
                aria-label="Email"
                className="group p-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
              >
                <Mail size={16} className="group-hover:text-indigo-200" />
              </a>
            </div>
            <p className="mt-4 text-white/60 leading-relaxed">
              Prefer email?{" "}
              <a
                href="mailto:fazilraphi14@email.com"
                className="text-white/80 hover:text-white underline underline-offset-4"
              >
                fazilraphi14@email.com
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <div>© 2026 Fazil. All rights reserved.</div>
          <div className="text-white/45">
            Crafted with Next.js + Supabase
          </div>
        </div>
      </div>
    </footer>
  );
}
