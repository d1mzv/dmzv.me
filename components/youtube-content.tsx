"use client"

interface Video {
  title: string
  description: string
  embedId: string
}

const videos: Video[] = [
  {
    title: "Tyrol",
    description: "Winter 2022",
    embedId: "63mX8DBOgEM",
  },
  {
    title: "Meteroa & Rhodes",
    description: "Summer 2021",
    embedId: "BVakBAUZj0o",
  },
]

export function YoutubeContent() {
  return (
    <div className="space-y-6">
      {videos.map((video) => (
        <div 
          key={video.embedId}
          className="aspect-video w-full"
        >
          <iframe
            className="w-full h-full rounded-lg"
            src={`https://www.youtube.com/embed/${video.embedId}`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ))}
    </div>
  )
} 