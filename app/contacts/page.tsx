import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

interface SocialLink {
  platform: string
  username: string
  url: string
  icon: React.ComponentType<{ className?: string }>
}

const socialLinks: SocialLink[] = [
  {
    platform: "GitHub",
    username: "dimamzv",
    url: "https://github.com/dimamzv",
    icon: Github,
  },
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
    username: "dimamzv@gmail.com",
    url: "mailto:dimamzv@gmail.com",
    icon: Mail,
  },
]

export function ContactsPage() {
  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Get in touch</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{link.platform}</span>
                <span className="text-muted-foreground">{link.username}</span>
              </a>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

// Default export for route
export default function ContactsRoute() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Contacts</h1>
      <ContactsPage />
    </div>
  )
} 