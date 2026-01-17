"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CertificateCard from "@/components/ui/certificate-card";

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCertificates() {
      const { data, error } = await supabase
        .from("certificates")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setCertificates(data || []);
      setLoading(false);
    }

    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b1f26] via-[#0f2f3a] to-[#0b1f26]">
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 py-12 pt-24">
        <h1 className="text-4xl font-bold mb-10 text-white">Certificates</h1>

        {loading && <p className="text-gray-400">Loading...</p>}

        {!loading && certificates.length === 0 && (
          <p className="text-gray-400">No certificates added yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </main>
    </div>
  );
}
