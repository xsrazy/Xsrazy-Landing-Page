"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Github, Mail, Instagram, Facebook, Twitter, Send, Menu } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm border-slate-200">
        <div className="container flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <img src="/logo.jpeg" alt="Rahmatul Usra" className="w-7 h-7 rounded-full object-cover" />
            <h1 className="text-lg font-bold">Rahmatul Usra</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium"></nav>
          <div className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Menu className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => window.open("https://github.com/xsrazy", "_blank")}>
                  <Github className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open("https://instagram.com/xsrazy", "_blank")}>
                  <Instagram className="mr-2 h-4 w-4" />
                  <span>Instagram</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open("https://facebook.com/xsrazy", "_blank")}>
                  <Facebook className="mr-2 h-4 w-4" />
                  <span>Facebook</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open("https://twitter.com/xsrazy", "_blank")}>
                  <Twitter className="mr-2 h-4 w-4" />
                  <span>Twitter</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open("https://t.me/xsrazy", "_blank")}>
                  <Send className="mr-2 h-4 w-4" />
                  <span>Telegram</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => window.open("mailto:email@xsrazy.web.id", "_self")}>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Email</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 max-w-7xl mx-auto py-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">Welcome to my portfolio</div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">Rahmatul Usra</h1>
            <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg leading-relaxed">
              {"I don't give a fuck about anyone!"}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="default"
              className="px-6 py-2"
              onClick={() => window.open("https://github.com/xsrazy?tab=repositories", "_blank")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="default"
              className="px-6 py-2 bg-transparent"
              onClick={() => window.open("https://iam.xsrazy.web.id", "_blank")}
            >
              Get Touch
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-4">
        <div className="container flex items-center justify-center h-12 px-4 max-w-7xl mx-auto">
          <p className="text-center text-sm text-slate-500 md:text-left">© 2018 Rahmatul Usra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
