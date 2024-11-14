"use client"

import { useState } from "react"
import { Card, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import Image from 'next/image'

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
    imageUrl: "/company-logos/planradar_logo.jpeg"
  },
  {
    company: "Surprise",
    description: "Gamified platform for enhancing employee engagement and productivity through task-based incentives",
    period: "Previous",
    imageUrl: "/company-logos/surprise_hr_logo.jpeg"
  },
  {
    company: "EPAM",
    description: "Global software engineering and IT consulting services provider",
    period: "Previous",
    imageUrl: "/company-logos/epam_systems_logo.jpeg"
  },
  {
    company: "SimCorp",
    description: "Investment management solutions provider",
    period: "Previous",
    imageUrl: "/company-logos/simcorp_logo.jpeg"
  },
]

export function CareerContent() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null)

  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <Card
          key={job.company}
          className={cn("cursor-pointer transition-all hover:shadow-md h-[92px]")}
          onClick={() => setExpandedJob(
            expandedJob === job.company ? null : job.company
          )}
        >
          <div className="flex h-full">
            <div className="flex-shrink-0 w-16 bg-muted flex items-center justify-center">
              {job.imageUrl && (
                <div className="relative w-12 h-12">
                  <Image
                    src={job.imageUrl}
                    alt={`${job.company} logo`}
                    fill
                    className="object-contain"
                    sizes="48px"
                  />
                </div>
              )}
            </div>
            <div className="flex-1 flex flex-col py-3">
              <CardTitle className="flex justify-between items-center text-base px-4">
                <span className="truncate">{job.company}</span>
                <span className="text-sm text-muted-foreground shrink-0 ml-2">{job.period}</span>
              </CardTitle>
              <div className="flex-1 flex items-center">
                <p className="text-sm text-muted-foreground line-clamp-2 leading-[1.35] px-4">
                  {job.description}
                </p>
              </div>
              {expandedJob === job.company && job.imageUrl && (
                <div className="mt-4">
                  <Image 
                    src={job.imageUrl}
                    alt={job.company}
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 