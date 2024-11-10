"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

export function MeSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="me" className="py-16">
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted">
              {!imageError ? (
                <Image
                  src="/ava.png"
                  alt="Dima"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                  DM
                </div>
              )}
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
    </section>
  )
} 