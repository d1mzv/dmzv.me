"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Job {
  company: string
  description: string
  period: string
  imageUrl?: string
}

const jobs: Job[] = [
  {
    company: "PlanRadar",
    description: "B2B, documentation and task management in construction",
    period: "Current",
  },
  {
    company: "Surprise",
    description: "Gamified platform for enhancing employee engagement and productivity through task-based incentives",
    period: "Previous",
  },
  {
    company: "EPAM",
    description: "Global software engineering and IT consulting services provider",
    period: "Previous",
  },
  {
    company: "SimCorp",
    description: "Investment management solutions provider",
    period: "Previous",
  },
  {
    company: "Raiffeisen Bank Aval",
    description: "Leading bank in Ukraine",
    period: "Previous",
  },
]

export function CareerPage() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <Card
          key={job.company}
          className={cn("cursor-pointer transition-all hover:shadow-md")}
          onClick={() => setExpandedJob(
            expandedJob === job.company ? null : job.company
          )}
        >
          <CardHeader>
            <CardTitle className="flex justify-between">
              <span>{job.company}</span>
              <span className="text-sm text-muted-foreground">{job.period}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{job.description}</p>
            {expandedJob === job.company && job.imageUrl && (
              <div className="mt-4">
                <img
                  src={job.imageUrl}
                  alt={job.company}
                  className="rounded-lg"
                />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

// Default export for route
export default function CareerRoute() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Career</h1>
      <CareerPage />
    </div>
  )
} 