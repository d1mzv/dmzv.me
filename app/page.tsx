import { MeSection } from "@/components/sections/me-section"
import { ProjectsContent } from "@/components/projects-content"
import { CareerContent } from "@/components/career-content"
import { YoutubeContent } from "@/components/youtube-content"
import { Suspense } from "react"
import BlogPage from './blog/page'

export default function Home() {
  return (
    <div className="space-y-8">
      <MeSection />
      
      <section id="projects" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ProjectsContent />
      </section>
      
      <section id="career" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">Career</h2>
        <CareerContent />
      </section>
      
      <section id="youtube" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">Videos</h2>
        <YoutubeContent />
      </section>
      
      <section id="blog" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">Blog</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogPage />
        </Suspense>
      </section>
    </div>
  )
}
