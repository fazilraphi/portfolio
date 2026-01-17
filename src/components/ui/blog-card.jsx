import Link from "next/link";
import { GlowCard } from "@/components/ui/spotlight-card";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <GlowCard customSize className="p-0 overflow-hidden">
        <div className="bg-white/80 backdrop-blur border rounded-xl overflow-hidden text-black">
          <img
            src={post.image}
            alt={post.title}
            className="h-48 w-full object-cover"
          />

          <div className="p-4">
            <p className="text-xs text-muted-foreground">{post.date}</p>
            <h3 className="font-semibold text-lg mt-1">{post.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">
              {post.excerpt}
            </p>
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}
