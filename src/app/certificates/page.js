"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import CertificateCard from "@/components/ui/certificate-card";
import PageShell from "@/components/layout/PageShell";
import Footer from "@/components/layout/Footer";


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
    <>
      <PageShell>
        <div className="flex flex-col gap-3 mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Certificates
          </h1>
          <p className="text-white/65 max-w-2xl">
            Verified achievements, credentials, and milestones.
          </p>
        </div>

        {loading && <p className="text-gray-400">Loading...</p>}

        {!loading && certificates.length === 0 && (
          <p className="text-gray-400">No certificates added yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </PageShell>
      <Footer />
    </>
  );
}
