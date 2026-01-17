"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background stays intact */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Text */}
        <div className="text-white space-y-6">
          <p className="text-sm uppercase tracking-widest text-gray-300">
            Full Stack Developer
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-cyan-400">Fazil</span>  
            <br /> I build modern web applications.
          </h1>

          <p className="text-gray-300 max-w-xl">
            I specialize in building clean user interfaces, scalable backend systems, 
            and full-stack applications using React, Next.js, and Supabase.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-medium rounded-lg transition"
            >
              View Projects
            </Link>

            <Link
              href="/certificates"
              className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg transition"
            >
              Certificates
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white rounded-lg transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30" />
            <img
              src="/imu.jpg" // replace with your image path
              alt="Profile"
              className="relative w-72 h-72 object-cover rounded-full border border-white/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
