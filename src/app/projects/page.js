"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { useToast } from "@/lib/use-toast";
import ToastContainer from "@/components/ui/toast-container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/ui/project-card";

export default function ProjectsPage() {
  const { toast, showToast, clearToast } = useToast();
console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error);
      } else {
        setProjects(data || []);
      }

      setLoading(false);
    }

    fetchProjects();
  }, []);
    
 return (
   <div className="min-h-screen bg-gradient-to-br from-[#0b1f26] via-[#0f2f3a] to-[#0b1f26]">
     <Navbar />

     <main className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20 pt-24">
       <h1 className="text-4xl font-bold mb-10 text-white">Projects</h1>

       {loading && <p className="text-gray-400">Loading projects...</p>}

       {!loading && projects.length === 0 && (
         <p className="text-gray-400">No projects added yet.</p>
       )}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {projects.map((project) => (
           <ProjectCard
             key={project.id}
             project={project}
             onAction={(type) => {
               if (type === "live")
                 showToast("Opening live project", "success");
               if (type === "github") showToast("Opening GitHub repo", "info");
             }}
           />
         ))}
       </div>
     </main>

     <ToastContainer toast={toast} clearToast={clearToast} />
   </div>
 );

}
