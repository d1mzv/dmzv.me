import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dima Maznev | Personal Website",
  description: "Let's connect!",
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
          <Suspense fallback={<div>Loading app...</div>}>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-40 w-full border-b bg-gray-100 dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-gray-100/80 dark:supports-[backdrop-filter]:bg-gray-900/80">
                <div className="container max-w-3xl mx-auto">
                  <div className="flex h-14 items-center justify-center">
                    <Suspense fallback={<div>Loading navigation...</div>}>
                      <MainNav variant="desktop" />
                    </Suspense>
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
