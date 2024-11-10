import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dima's Personal Website",
  description: "Personal website and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-muted">
              <div className="relative mx-auto flex h-14 items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="absolute left-4 lg:hidden">
                  <MobileNav />
                </div>
                <div className="hidden lg:block w-full max-w-[50%]">
                  <MainNav variant="desktop" />
                </div>
                <div className="absolute right-4">
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">
              <div className="mx-auto w-full lg:max-w-[50%] px-4 sm:px-6 lg:px-8 pt-4">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function MobileNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[200px]">
        <MainNav variant="mobile" />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
