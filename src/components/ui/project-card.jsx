import { ExternalLink } from "lucide-react";

export default function CertificateCard({ certificate }) {
  const image = certificate.image || certificate.image_url;
  const title = certificate.title || "Untitled Certificate";
  const issuer = certificate.issuer || certificate.issued_by || "Unknown";
  const url = certificate.certificate_url || certificate.url;

  return (
    <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">

      {/* Image */}
      {image && (
        <div className="bg-black/20 p-3">
          <img
            src={image}
            alt={title}
            className="w-full h-auto max-h-60 object-contain rounded-lg"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-1">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Issued by {issuer}
        </p>

        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
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
