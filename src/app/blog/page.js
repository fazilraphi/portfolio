"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BlogCard from "@/components/ui/blog-card";

import { posts } from "@/data/posts";
import dynamic from "next/dynamic";

const SearchComponent = dynamic(
  () => import("@/components/ui/animated-glowing-search-bar"),
  { ssr: false }
);

export default function BlogPage() {
  const [query, setQuery] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">

        <h1 className="text-4xl font-bold mb-6">Blog</h1>

        <div className="mb-10 flex justify-center">
          <div className="w-full max-w-md">
            <SearchComponent value={query} onChange={setQuery} />
          </div>
        </div>

        {filteredPosts.length === 0 ? (
          <p className="text-center text-muted-foreground">No posts found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
