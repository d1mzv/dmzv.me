import { MeSection } from "@/components/sections/me-section"
import { ProjectsContent } from "@/components/projects-content"
import { CareerContent } from "@/components/career-content"
import { YoutubeContent } from "@/components/youtube-content"
import BlogPage from './blog/page'

export const dynamic = 'force-static'
export const revalidate = false

export default async function Page() {
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
        <BlogPage />
      </section>
    </div>
  )
}
