"use client";

import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* New background with more depth */}
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(56,189,248,0.25),transparent_45%),radial-gradient(900px_circle_at_80%_10%,rgba(217,70,239,0.22),transparent_50%),radial-gradient(800px_circle_at_50%_90%,rgba(99,102,241,0.20),transparent_55%),linear-gradient(180deg,#070A12_0%,#050813_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.7)_1px,transparent_1px)] [background-size:26px_26px]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 md:gap-12 items-center pt-24 md:pt-28 pb-16">
        
        {/* Left: Text */}
        <div className="text-white space-y-6">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/70">
            Full Stack Developer
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              Fazil
            </span>
            <br /> I build modern web applications.
          </h1>

          <p className="text-white/70 max-w-xl leading-relaxed">
            I specialize in building clean user interfaces, scalable backend systems, 
            and full-stack applications using React, Next.js, and Supabase.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl font-semibold text-black transition shadow-lg shadow-fuchsia-500/10 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 hover:opacity-95"
            >
              View Projects
            </Link>

            <Link
              href="/certificates"
              className="px-6 py-3 rounded-xl text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Certificates
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/25 to-indigo-500/25 blur-3xl" />
            <img
              src="/imu.jpg" // replace with your image path
              alt="Profile"
              className="relative w-64 h-64 sm:w-72 sm:h-72 object-cover rounded-full border border-white/15 shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
