"use client"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"

const tabs = [
  { name: "🏠 Home", value: "/", sectionId: "me" },
  { name: "🚀 Projects", value: "/projects", sectionId: "projects" },
  { name: "💼 Career", value: "/career", sectionId: "career" },
  { name: "📺 Videos", value: "/youtube", sectionId: "youtube" },
  { name: "📝 Blog", value: "/blog", sectionId: "blog" },
]

export function MainNav() {
  const router = useRouter()
  const pathname = usePathname()

  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      const headerOffset = 60
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleTabChange = (value: string) => {
    if (pathname === "/") {
      if (value === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        const tab = tabs.find(t => t.value === value)
        if (tab) {
          scrollToSection(tab.sectionId)
        }
      }
    } else {
      router.push(value)
    }
  }

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      scrollToSection(hash)
    }
  }, [])

  return (
    <Tabs
      defaultValue={pathname}
      className="w-full"
      onValueChange={handleTabChange}
    >
      <TabsList className="grid w-full grid-cols-5">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn("text-sm font-medium transition-all")}
          >
            {tab.name}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
} 