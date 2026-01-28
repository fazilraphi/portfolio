"use client";

import Footer from "@/components/layout/Footer";
import PageShell from "@/components/layout/PageShell";
import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
} from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageShell>
        <div className="flex flex-col gap-3 mb-8 sm:mb-10 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold">Contact</h1>
          <p className="text-white/65 max-w-2xl">
            Let’s build something bold. Reach out for collaborations, freelance work, or opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left: Contact Info */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-7 space-y-5 text-white">
            <div className="flex items-center gap-3 text-white/80">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                <Phone size={18} className="text-cyan-200" />
              </span>
              <span className="text-sm sm:text-base">+91 6238206892</span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                <Mail size={18} className="text-fuchsia-200" />
              </span>
              <span className="text-sm sm:text-base">fazilraphi14@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                <MapPin size={18} className="text-indigo-200" />
              </span>
              <span className="text-sm sm:text-base">Kerala, India</span>
            </div>

            <div className="flex items-center gap-3 text-white/80">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-white/5 border border-white/10">
                <GraduationCap size={18} className="text-cyan-200" />
              </span>
              <a
                href="https://www.cek.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base hover:underline underline-offset-4"
              >
                College Of Engineering Kalloopara
              </a>
            </div>
          </div>

          {/* Right: Socials */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 sm:p-7 text-white">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Find me online
            </h2>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/fazilraphi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Github size={18} className="group-hover:text-cyan-200" />
                <span className="text-sm text-white/80 group-hover:text-white">
                  GitHub
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/fazil-p-raphi/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Linkedin size={18} className="group-hover:text-fuchsia-200" />
                <span className="text-sm text-white/80 group-hover:text-white">
                  LinkedIn
                </span>
              </a>

              <a
                href="https://instagram.com/_faz_i_z_w"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <Instagram size={18} className="group-hover:text-indigo-200" />
                <span className="text-sm text-white/80 group-hover:text-white">
                  Instagram
                </span>
              </a>
            </div>
          </div>
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
