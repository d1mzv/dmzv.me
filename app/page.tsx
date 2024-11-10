import { MeSection } from "@/components/sections/me-section"
import { ProjectsPage } from "@/app/projects/page"
import { CareerPage } from "@/app/career/page"
import { YoutubePage } from "@/app/youtube/page"
import { BlogPage } from "@/app/blog/page"
import { ContactsPage } from "@/app/contacts/page"
import { Suspense } from "react"

export default function Home() {
  return (
    <div className="space-y-16">
      <MeSection />
      
      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <ProjectsPage />
      </section>
      
      <section id="career" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Career</h2>
        <CareerPage />
      </section>
      
      <section id="youtube" className="py-16">
        <h2 className="text-3xl font-bold mb-8">YouTube</h2>
        <YoutubePage />
      </section>
      
      <section id="blog" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Blog</h2>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogPage />
        </Suspense>
      </section>
      
      <section id="contacts" className="py-16">
        <h2 className="text-3xl font-bold mb-8">Contacts</h2>
        <ContactsPage />
      </section>
    </div>
  )
}
