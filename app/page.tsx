import { MeSection } from "@/components/sections/me-section"
import { ProjectsPage } from "@/app/projects/page"
import { CareerPage } from "@/app/career/page"
import { YoutubePage } from "@/app/youtube/page"
import { Suspense } from "react"
import BlogPage from './blog/page'

export default function Home() {
  return (
    <div className="space-y-8">
      <MeSection />
      
      <section id="projects" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ProjectsPage />
      </section>
      
      <section id="career" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">Career</h2>
        <CareerPage />
      </section>
      
      <section id="youtube" className="pt-8">
        <h2 className="text-3xl font-bold mb-4">YouTube</h2>
        <YoutubePage />
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
