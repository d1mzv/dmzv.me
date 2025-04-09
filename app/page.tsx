'use client'

import { Suspense } from 'react'
import { MeSection } from "@/components/sections/me-section"
import { ProjectsContent } from "@/components/projects-content"
import { CareerContent } from "@/components/career-content"
import { YoutubeContent } from "@/components/youtube-content"
import { BlogContent } from "@/components/blog-content"

export default function Page() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<div>Loading intro...</div>}>
        <MeSection />
      </Suspense>
      
      <Suspense fallback={<div>Loading projects...</div>}>
        <section id="projects" className="pt-4">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <ProjectsContent />
        </section>
      </Suspense>
      
      <Suspense fallback={<div>Loading career...</div>}>
        <section id="career" className="pt-4">
          <h2 className="text-3xl font-bold mb-4">Career</h2>
          <CareerContent />
        </section>
      </Suspense>
      
      <Suspense fallback={<div>Loading videos...</div>}>
        <section id="youtube" className="pt-4">
          <h2 className="text-3xl font-bold mb-4">Videos</h2>
          <YoutubeContent />
        </section>
      </Suspense>

      <Suspense fallback={<div>Loading blog...</div>}>
        <section id="blog" className="pt-4">
          <h2 className="text-3xl font-bold mb-4">Blog</h2>
          <BlogContent />
        </section>
      </Suspense>

      <footer className="text-center text-sm text-muted-foreground pt-4 pb-4">
        © 2025
      </footer>
    </div>
  )
}
