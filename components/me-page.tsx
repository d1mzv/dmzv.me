import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function MePage() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/your-photo.jpg"
              alt="Dima"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Hello, I&apos;m Dima</h1>
            <p className="text-muted-foreground">
              I enjoy building stuff and bringing ideas to life through code.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 