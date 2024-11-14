"use client"

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
    description: "Documentation and task management in construction",
    period: "",
    imageUrl: "/company-logos/planradar_logo.jpeg"
  },
  {
    company: "Surprise",
    description: "Employee engagement and productivity",
    period: "",
    imageUrl: "/company-logos/surprise_hr_logo.jpeg"
  },
  {
    company: "EPAM",
    description: "Risk reporting",
    period: "",
    imageUrl: "/company-logos/epam_systems_logo.jpeg"
  },
  {
    company: "SimCorp",
    description: "Investment management",
    period: "",
    imageUrl: "/company-logos/simcorp_logo.jpeg"
  },
]

export function CareerContent() {
  return (
    <div className="space-y-6">
      {jobs.map((job) => (
        <Card
          key={job.company}
          className={cn("cursor-pointer transition-all hover:shadow-md h-[92px]")}
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
              </CardTitle>
              <div className="flex-1 flex items-center">
                <p className="text-sm text-muted-foreground line-clamp-2 leading-[1.35] px-4">
                  {job.description}
                </p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
} 