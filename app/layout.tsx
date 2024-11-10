import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

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
                <div className="w-full max-w-[50%]">
                  <MainNav />
                </div>
                <div className="absolute right-4 sm:right-6 lg:right-8">
                  <ThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">
              <div className="mx-auto w-full max-w-[50%] px-4 sm:px-6 lg:px-8 py-6">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
