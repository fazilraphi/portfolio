"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

import { useToast } from "@/lib/use-toast";
import ToastContainer from "@/components/ui/toast-container";
import ProjectCard from "@/components/ui/project-card";
import Footer from "@/components/layout/Footer";
import PageShell from "@/components/layout/PageShell";

export default function ProjectsPage() {
  const { toast, showToast, clearToast } = useToast();
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
   <>
     <PageShell>
       <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-white">
         Projects
       </h1>

       {loading && <p className="text-gray-400">Loading projects...</p>}

       {!loading && projects.length === 0 && (
         <p className="text-gray-400">No projects added yet.</p>
       )}

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
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
     </PageShell>

     <ToastContainer toast={toast} clearToast={clearToast} />
     <Footer />
   </>
 );

}
