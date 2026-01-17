"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
    <div className="min-h-screen bg-gradient-to-br from-[#0b1f26] via-[#0f2f3a] to-[#0b1f26]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20 pt-28 text-white">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-gray-400 mb-12">
          Feel free to reach out for collaboration, freelance work, or
          opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300">
              <Phone className="text-cyan-400" size={20} />
              <span>+91 6238206892</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <Mail className="text-cyan-400" size={20} />
              <span>fazilraphi14@gmail.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <MapPin className="text-cyan-400" size={20} />
              <span>Kerala, India</span>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <GraduationCap className="text-cyan-400" size={20} />
              <a href="https://www.cek.ac.in/" target="_blank" className="hover:underline">
                <span>College Of Engineering Kalloopara</span>
              </a>
            </div>
          </div>

          {/* Right: Socials */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Find me online</h2>

            <div className="flex gap-6">
              <a
                href="https://github.com/fazilraphi"
                target="_blank"
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
              >
                <Github className="text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/fazil-p-raphi/"
                target="_blank"
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
              >
                <Linkedin className="text-white" />
              </a>

              <a
                href="https://instagram.com/_faz_i_z_w"
                target="_blank"
                className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition"
              >
                <Instagram className="text-white" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
