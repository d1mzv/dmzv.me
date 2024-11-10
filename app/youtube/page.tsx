"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Video {
  title: string
  description: string
  embedId: string
}

const videos: Video[] = [
  {
    title: "Video Title 1",
    description: "Video description goes here",
    embedId: "your-youtube-video-id-1",
  },
  // Add more videos as needed
]

export default function YoutubePage() {
  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <Card key={video.embedId}>
          <CardHeader>
            <CardTitle>{video.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{video.description}</p>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${video.embedId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 