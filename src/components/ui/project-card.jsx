import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, onAction }) {
  const image = project?.image;
  const title = project?.title || "Untitled Project";
  const description = project?.description || "No description provided.";
  const liveUrl = project?.live_url;
  const githubUrl = project?.github_url;

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
        <h3 className="text-lg font-semibold text-white mb-2">
          {title}
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onAction?.("live")}
              className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onAction?.("github")}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition"
            >
              GitHub
              <Github size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
