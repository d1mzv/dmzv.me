"use client"

import { cn } from "@/lib/utils"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"

const tabs = [
  { name: "Me", value: "/" },
  { name: "Projects", value: "/projects" },
  { name: "Career", value: "/career" },
  { name: "YouTube", value: "/youtube" },
  { name: "Blog", value: "/blog" },
  { name: "Contacts", value: "/contacts" },
]

export function MainNav() {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Tabs
      defaultValue={pathname}
      className="w-full"
      onValueChange={(value: string) => router.push(value)}
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