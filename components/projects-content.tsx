"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from 'next/image'

interface Project {
  name: string
  description: string
  status: "active" | "inactive"
  url: string
  imageUrl: string
}

const projects: Project[] = [
  {
    name: "Savedeck",
    description: "Unify and auto-sort your bookmarks",
    status: "active",
    url: "https://apps.apple.com/app/id6450510327",
    imageUrl: "/savedeck-img.png",
  },
  {
    name: "Meal Scope",
    description: "Stay fit by tracking your meals easily",
    status: "active",
    url: "https://www.mealscope.app/",
    imageUrl: "/mealscope-img.png",
  },
  {
    name: "Streakmap",
    description: "Visualise your habit progression",
    status: "active",
    url: "https://www.streakmap.com/",
    imageUrl: "streakmap-img2.png",
  },
  {
    name: "Memobase",
    description: "Learn anything fast with AI flashcards",
    status: "active",
    url: "https://apps.apple.com/app/id6502102605",
    imageUrl: "/memobase-img.png",
  },
  {
    name: "Nadebook",
    description: "Practice Tool for CS",
    status: "active",
    url: "https://www.nadebook.com/",
    imageUrl: "nadebook-img.png",
  },
  {
    name: "Mentisoft",
    description: "Software Outsourcing Agency",
    status: "inactive",
    url: "",
    imageUrl: "mentisoft-img.png",
  },
  {
    name: "EasyTO",
    description: "Telegram bot for calculating inspection costs",
    status: "inactive",
    url: "",
    imageUrl: "easyto-img.png",
  },
]

export function ProjectsContent() {
  const handleProjectClick = (project: Project) => {
    if (project.status === "active" && project.url) {
      window.open(project.url, '_blank')
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className="text-2xl font-bold col-span-full">Active</h2>
        {projects
          .filter((project) => project.status === "active")
          .map((project) => (
            <Card
              key={project.name}
              className={cn("cursor-pointer transition-all hover:shadow-md overflow-hidden")}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative w-full aspect-video bg-muted flex items-center justify-center">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  priority
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full h-[1px] bg-border" />
              <CardContent className="px-4 py-3 min-h-[3.5rem] flex items-center">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">{project.name}</span>
                  {" — "}
                  <span className="text-muted-foreground">{project.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className="text-2xl font-bold col-span-full">Inactive</h2>
        {projects
          .filter((project) => project.status === "inactive")
          .map((project) => (
            <Card
              key={project.name}
              className={cn("cursor-pointer transition-all hover:shadow-md overflow-hidden")}
            >
              <div className="relative w-full h-[120px] bg-muted flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent from-65% to-background z-10" />
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  priority
                  className="object-cover object-top p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="w-full h-[1px] bg-border" />
              <CardContent className="px-4 py-3 min-h-[3.5rem] flex items-center">
                <p className="text-sm leading-relaxed">
                  <span className="font-semibold">{project.name}</span>
                  {" — "}
                  <span className="text-muted-foreground">{project.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
} 