"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-white font-bold text-lg tracking-wide">
          <span className="text-cyan-400"></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>

          <Link href="/projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>

          <Link href="/certificates" className="text-gray-300 hover:text-white transition">
            Certificates
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-white transition">
            Contact
          </Link>

          <Link
            href="/resume"
            className="ml-2 px-4 py-2 bg-cyan-500 text-black rounded-lg text-sm font-medium hover:bg-cyan-600 transition"
          >
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          <div className="space-y-1">
            <span className={`block w-6 h-0.5 bg-white transition ${open && "rotate-45 translate-y-1.5"}`} />
            <span className={`block w-6 h-0.5 bg-white transition ${open && "opacity-0"}`} />
            <span className={`block w-6 h-0.5 bg-white transition ${open && "-rotate-45 -translate-y-1.5"}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-5 text-sm">

            <Link onClick={() => setOpen(false)} href="/" className="text-gray-300 hover:text-white">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} href="/projects" className="text-gray-300 hover:text-white">
              Projects
            </Link>

            <Link onClick={() => setOpen(false)} href="/certificates" className="text-gray-300 hover:text-white">
              Certificates
            </Link>

            <Link onClick={() => setOpen(false)} href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>

            <Link
              onClick={() => setOpen(false)}
              href="/resume"
              className="mt-2 inline-block w-fit px-4 py-2 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-600"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
