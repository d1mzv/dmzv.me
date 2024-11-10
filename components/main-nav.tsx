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
  { name: "📕 Contacts", value: "/contacts", sectionId: "contacts" },
]

export function MainNav() {
  const router = useRouter()
  const pathname = usePathname()

  const handleTabChange = (value: string) => {
    if (pathname === "/") {
      if (value === "/") {
        // For home tab, scroll to top of the page
        window.scrollTo({ top: 0, behavior: "smooth" })
      } else {
        // For other tabs, scroll to the section
        const tab = tabs.find(t => t.value === value)
        if (tab) {
          const element = document.getElementById(tab.sectionId)
          element?.scrollIntoView({ behavior: "smooth" })
        }
      }
    } else {
      // If we're on another page, navigate to the route
      router.push(value)
    }
  }

  useEffect(() => {
    // Handle initial scroll position based on hash
    const hash = window.location.hash.slice(1)
    if (hash) {
      const element = document.getElementById(hash)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <Tabs
      defaultValue={pathname}
      className="w-full"
      onValueChange={handleTabChange}
    >
      <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
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