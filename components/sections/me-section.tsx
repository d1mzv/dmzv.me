"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

interface SocialLink {
  platform: string
  username: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

const socialLinks: SocialLink[] = [
  // {
  //   platform: "GitHub",
  //   username: "dimamzv",
  //   url: "https://github.com/dimamzv",
  //   icon: Github,
  // },
  {
    platform: "Twitter",
    username: "dimamzv",
    url: "https://twitter.com/dimamzv",
    icon: Twitter,
  },
  {
    platform: "LinkedIn",
    username: "dimamzv",
    url: "https://linkedin.com/in/dimamzv",
    icon: Linkedin,
  },
  {
    platform: "Email",
    username: "dmitry.maznev@gmail.com",
    url: "mailto:dmitry.maznev@gmail.com",
    icon: Mail,
  },
]

export function MeSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section id="me" className="pt-4">
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
                I like building stuff
              </p>
              <p className="text-sm text-muted-foreground">@dimamzv</p>
              <div className="flex justify-center space-x-4 pt-2">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title={link.platform}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{link.platform}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 