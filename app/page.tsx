"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { X, ExternalLink, Github, Mail, Instagram, Facebook, Twitter, Send, Menu } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React and Node.js, featuring user authentication and payment integration.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application built with Next.js and real-time updates using WebSocket.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with interactive charts and location-based forecasts using React and APIs.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description:
      "Analytics dashboard for social media metrics with data visualization and automated reporting features.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing projects and skills with smooth animations and transitions.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 6,
    title: "Blog Platform",
    description:
      "A content management system for bloggers with markdown support, SEO optimization, and comment system.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 7,
    title: "Real Estate App",
    description: "Property listing application with advanced search filters, virtual tours, and mortgage calculator.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 8,
    title: "Fitness Tracker",
    description: "Mobile-first fitness tracking app with workout plans, progress monitoring, and social features.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 9,
    title: "Recipe Finder",
    description: "Culinary app with recipe search, meal planning, shopping lists, and nutritional information.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 10,
    title: "Learning Management System",
    description: "Educational platform with course creation, student progress tracking, and interactive assessments.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 11,
    title: "Cryptocurrency Tracker",
    description: "Real-time crypto price monitoring with portfolio management and market analysis tools.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 12,
    title: "Event Management System",
    description: "Complete event planning solution with booking, ticketing, and attendee management features.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 13,
    title: "Music Streaming App",
    description: "Audio streaming platform with playlist creation, music discovery, and social sharing capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 14,
    title: "Travel Booking Platform",
    description: "Comprehensive travel booking system with flight, hotel, and activity reservations in one place.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
  {
    id: 15,
    title: "AI Chat Assistant",
    description: "Intelligent chatbot application with natural language processing and machine learning capabilities.",
    image: "/placeholder.svg?height=200&width=300",
    link: "https://example.com",
  },
]

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm border-slate-200">
        <div className="container flex h-14 items-center justify-between px-4 max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <img src="/favicon.png" alt="Rahmatul Usra" className="w-7 h-7 rounded-full object-cover" />
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
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button size="default" className="px-6 py-2">
                  View My Work
                </Button>
              </DialogTrigger>

              <DialogContent
                className="max-w-6xl w-full max-h-[90vh] p-0 overflow-hidden bg-white rounded-2xl shadow-2xl"
                onInteractOutside={(e) => e.preventDefault()}
                onEscapeKeyDown={(e) => e.preventDefault()}
              >
                <div className="relative">
                  {/* Header */}
                  <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-800">My Projects</h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                    >
                      <X className="w-5 h-5 text-slate-600" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayedProjects.map((project) => (
                        <div
                          key={project.id}
                          className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-200 group"
                        >
                          {/* Project Image */}
                          <div className="aspect-video bg-slate-200 relative overflow-hidden">
                            <img
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>

                          {/* Project Content */}
                          <div className="p-5 space-y-3">
                            <h3 className="text-xl font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                              {project.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{project.description}</p>
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 group/link"
                            >
                              View Site
                              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Show More Button */}
                    {!showAllProjects && (
                      <div className="flex justify-center mt-8">
                        <Button
                          onClick={() => setShowAllProjects(true)}
                          variant="outline"
                          className="px-8 py-2 bg-transparent border-slate-300 hover:bg-slate-50"
                        >
                          Show More Projects
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              variant="outline"
              size="default"
              className="px-6 py-2 bg-transparent"
              onClick={() => window.open("https://xsrazy.web.id", "_blank")}
            >
              Get in Touch
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
