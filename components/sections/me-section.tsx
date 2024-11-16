"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";

interface SocialLink {
  platform: string;
  username: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

const socialLinks: SocialLink[] = [
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
    username: "dmitry.maznev@gmail.com",
    url: "dmitry.maznev@gmail.com",
    icon: Mail,
  },
];

export function MeSection() {
  const [imageError, setImageError] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("dmitry.maznev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section id="me" className="pt-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden bg-muted">
                {!imageError ? (
                  <Image
                    src="/ava.png"
                    alt="Dima"
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                    DM
                  </div>
                )}
              </div>
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">Hello, I&apos;m Dima</h1>
                <p className="text-muted-foreground">
                  I build and manage products. Let&apos;s&nbsp;connect&nbsp;and&nbsp;share&nbsp;ideas!
                </p>
                <div className="flex justify-center space-x-4 pt-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return link.platform === "Email" ? (
                      <button
                        key={link.platform}
                        onClick={handleEmailClick}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        title={link.platform}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{link.platform}</span>
                      </button>
                    ) : (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        title={link.platform}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{link.platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Email address</DialogTitle>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <p className="text-sm text-muted-foreground">
                dmitry.maznev@gmail.com
              </p>
            </div>
            <Button
              type="button"
              size="icon"
              onClick={copyEmail}
              className="h-8 w-8"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              <span className="sr-only">Copy email</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
