"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Project {
  name: string
  description: string
  status: "active" | "inactive"
  url?: string
  imageUrl?: string
}

const projects: Project[] = [
  {
    name: "Savedeck",
    description: "Unify and auto-sort your bookmarks",
    status: "active",
  },
  {
    name: "Memobase",
    description: "Learn anything fast with AI flashcards",
    status: "active",
  },
  {
    name: "Streakmap",
    description: "Visualise your habit progression",
    status: "active",
  },
  {
    name: "Timelogbox",
    description: "Initiate flow state on command",
    status: "active",
  },
  {
    name: "Nadebook",
    description: "Practice Tool for CS",
    status: "active",
  },
  {
    name: "Mentisoft",
    description: "Software Outsourcing Agency",
    status: "inactive",
  },
  {
    name: "EasyTO",
    description: "Telegram bot for calculating inspection costs",
    status: "inactive",
  },
]

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Active Projects</h2>
        {projects
          .filter((project) => project.status === "active")
          .map((project) => (
            <Card
              key={project.name}
              className={cn("cursor-pointer transition-all hover:shadow-md")}
              onClick={() => setExpandedProject(
                expandedProject === project.name ? null : project.name
              )}
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                {expandedProject === project.name && project.imageUrl && (
                  <div className="mt-4">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Inactive Projects</h2>
        {projects
          .filter((project) => project.status === "inactive")
          .map((project) => (
            <Card
              key={project.name}
              className={cn(
                "cursor-pointer transition-all hover:shadow-md opacity-70"
              )}
              onClick={() => setExpandedProject(
                expandedProject === project.name ? null : project.name
              )}
            >
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
                {expandedProject === project.name && project.imageUrl && (
                  <div className="mt-4">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  )
} 