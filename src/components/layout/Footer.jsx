import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black/60 backdrop-blur border-t border-white/10 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <div className="space-y-2 text-white/70">
            <p className="flex items-center gap-2"><Phone size={14}/> +91-6238206892</p>
            <p className="flex items-center gap-2"><Mail size={14}/> fazilraphi14@gmail.com</p>
            <p className="flex items-center gap-2"><Mail size={14}/> fazil.dev@outlook.com</p>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <p className="text-white/70 leading-relaxed">
            Developer focused on building clean user interfaces, modern web applications,
            and scalable systems.
          </p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow</h3>
          <div className="flex gap-4">
            <a href="https://github.com/fazilraphi" className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/fazil-p-raphi/" className="p-2 rounded-lg border border-white/10 hover:bg-white/10 transition"><Linkedin size={16} /></a>
            <div className="text-center text-xs text-white/40 py-4 border-t border-white/10">
  Contact me at{" "}
  <a
    href="mailto:fazilraphi14@email.com"
    className="text-white/70 hover:text-white underline"
  >
    fazilraphi14@email.com
  </a>
</div>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-white/40 py-4 border-t border-white/10">
        © 2026 Fazil. All rights reserved.
      </div>
    </footer>
  );
}
