"use client"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const tabs = [
  { name: "🏠 Home", emoji: "🏠", value: "/", sectionId: "me" },
  { name: "🚀 Projects", emoji: "🚀", value: "/#projects", sectionId: "projects" },
  { name: "💼 Career", emoji: "💼", value: "/#career", sectionId: "career" },
  { name: "📺 Videos", emoji: "📺", value: "/#youtube", sectionId: "youtube" },
  { name: "📝 Blog", emoji: "📝", value: "/#blog", sectionId: "blog" },
]

interface MainNavProps {
  variant: "mobile" | "desktop"
}

export function MainNav({}: MainNavProps) {
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

  const handleNavigation = (value: string) => {
    if (value === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const sectionId = value.replace("/#", "")
      scrollToSection(sectionId)
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
      defaultValue={pathname === "/" ? "/" : `/#${pathname.slice(1)}`}
      className="w-full"
      onValueChange={handleNavigation}
    >
      <TabsList className="grid w-full grid-cols-5 bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className={cn(
              "text-sm font-medium transition-all data-[state=active]:bg-transparent",
              "data-[state=active]:text-foreground data-[state=active]:shadow-none"
            )}
          >
            <span className="md:hidden">{tab.emoji}</span>
            <span className="hidden md:inline">{tab.name}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  )
} 