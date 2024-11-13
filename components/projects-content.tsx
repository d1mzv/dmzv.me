"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from 'next/image'

interface Project {
  name: string
  description: string
  status: "active" | "inactive"
  url?: string
  imageUrl: string
}

const projects: Project[] = [
  {
    name: "Savedeck",
    description: "Unify and auto-sort your bookmarks",
    status: "active",
    imageUrl: "/projects/savedeck.png",
  },
  {
    name: "Memobase",
    description: "Learn anything fast with AI flashcards",
    status: "active",
    imageUrl: "/projects/memobase.png",
  },
  {
    name: "Streakmap",
    description: "Visualise your habit progression",
    status: "active",
    imageUrl: "/projects/streakmap.png",
  },
  {
    name: "Nadebook",
    description: "Practice Tool for CS",
    status: "active",
    imageUrl: "/projects/nadebook.png",
  },
  {
    name: "Mentisoft",
    description: "Software Outsourcing Agency",
    status: "inactive",
    imageUrl: "/projects/mentisoft.png",
  },
  {
    name: "EasyTO",
    description: "Telegram bot for calculating inspection costs",
    status: "inactive",
    imageUrl: "/projects/easyto.png",
  },
]

export function ProjectsContent() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

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
              onClick={() => setExpandedProject(
                expandedProject === project.name ? null : project.name
              )}
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <div className="relative w-full aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">{project.description}</p>
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
              className={cn(
                "cursor-pointer transition-all hover:shadow-md opacity-70 overflow-hidden"
              )}
              onClick={() => setExpandedProject(
                expandedProject === project.name ? null : project.name
              )}
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <div className="relative w-full aspect-video">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
} 