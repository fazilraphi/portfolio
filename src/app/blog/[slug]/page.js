import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { posts } from "@/data/posts";

export default function BlogPostPage({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-2xl font-bold">Post not found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-3xl px-6 py-20">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-xl mb-8"
        />

        <p className="text-sm text-muted-foreground">{post.date}</p>
        <h1 className="text-4xl font-bold mt-2 mb-6">{post.title}</h1>

        <article className="prose max-w-none">
          {post.content.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </article>
      </main>

      <Footer />
    </>
  );
}
