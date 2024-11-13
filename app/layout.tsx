import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dima's Personal Website",
  description: "Personal website and portfolio",
};

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
        <Suspense fallback={<div>Loading...</div>}>
          <MainNav variant="mobile" />
        </Suspense>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading app...</div>}>
            <div className="flex min-h-screen flex-col">
              <div className="fixed top-2 right-4 z-50 hidden md:block">
                <ThemeToggle />
              </div>
              <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container max-w-3xl mx-auto">
                  <div className="flex h-14 items-center">
                    {/* Mobile View */}
                    <div className="md:hidden w-full flex justify-between items-center px-4">
                      <MobileNav />
                      <ThemeToggle />
                    </div>
                    
                    {/* Desktop View */}
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
                      <Suspense fallback={<div>Loading navigation...</div>}>
                        <MainNav variant="desktop" />
                      </Suspense>
                    </div>
                  </div>
                </div>
              </header>
              <main className="flex-1">
                <div className="container max-w-3xl mx-auto py-6 px-4 md:px-6">
                  {children}
                </div>
              </main>
            </div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
