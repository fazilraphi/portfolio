"use client";

import { Download } from "lucide-react";
import PageShell from "@/components/layout/PageShell";
import Footer from "@/components/layout/Footer";

export default function ResumePage() {
  return (
    <>
      <PageShell>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 text-white">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">Resume</h1>
            <p className="text-white/65">
              View my resume below or download a copy.
            </p>
          </div>

          <a
            href="/FazilPRaphiResume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-black transition shadow-lg shadow-fuchsia-500/10 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 hover:opacity-95"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        <div className="w-full h-[72vh] md:h-[78vh] rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <iframe
            src="/FazilPRaphiResume.pdf"
            className="w-full h-full"
            title="Resume Viewer"
          />
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
