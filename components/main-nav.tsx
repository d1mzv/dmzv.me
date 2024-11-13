"use client"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

const tabs = [
  { name: "🏠 Home", value: "/", sectionId: "me" },
  { name: "🚀 Projects", value: "/#projects", sectionId: "projects" },
  { name: "💼 Career", value: "/#career", sectionId: "career" },
  { name: "📺 Videos", value: "/#youtube", sectionId: "youtube" },
  { name: "📝 Blog", value: "/#blog", sectionId: "blog" },
]

interface MainNavProps {
  variant: "mobile" | "desktop"
}

export function MainNav({ variant }: MainNavProps) {
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

  if (variant === "mobile") {
    return (
      <>
        {tabs.map((tab) => (
          <DropdownMenuItem
            key={tab.value}
            onClick={() => handleNavigation(tab.value)}
          >
            {tab.name}
          </DropdownMenuItem>
        ))}
      </>
    )
  }

  return (
    <Tabs
      defaultValue={pathname === "/" ? "/" : `/#${pathname.slice(1)}`}
      className="w-full"
      onValueChange={handleNavigation}
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