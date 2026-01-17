"use client";

import Navbar from "@/components/layout/Navbar";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1f26] via-[#0f2f3a] to-[#0b1f26]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 py-20 pt-28 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Resume</h1>
            <p className="text-gray-400">
              View my resume below or download a copy.
            </p>
          </div>

          <a
            href="/FazilPRaphiResume.pdf"
            download
            className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-3 bg-cyan-500 text-black rounded-lg font-medium hover:bg-cyan-600 transition"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="w-full h-[80vh] bg-black/30 border border-white/10 rounded-xl overflow-hidden">
          <iframe
            src="/FazilPRaphiResume.pdf"
            className="w-full h-full"
            title="Resume Viewer"
          />
        </div>
      </main>
    </div>
  );
}
