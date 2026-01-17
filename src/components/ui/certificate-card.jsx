import { ExternalLink } from "lucide-react";

export default function CertificateCard({ certificate }) {
  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">

      {/* Image */}
      {certificate.image && (
        <div className="bg-black/20 p-3">
          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-auto max-h-60 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">
          {certificate.title}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Issued by {certificate.issuer || "Unknown"}
        </p>

        {certificate.certificate_url && (
          <a
            href={certificate.certificate_url}
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
          >
            View Certificate
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
