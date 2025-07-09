import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rahmatul Usra - Portfolio",
  description: "Personal portfolio of Rahmatul Usra - Full Stack Developer",
  generator: "xsrazy.web.id",
  keywords: ["Rahmatul Usra", "Portfolio", "Full Stack Developer", "Web Developer"],
  authors: [{ name: "Rahmatul Usra" }],
  creator: "Rahmatul Usra",
  publisher: "Rahmatul Usra",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://xsrazy.web.id",
    title: "Rahmatul Usra - Portfolio",
    description: "Personal portfolio of Rahmatul Usra - Full Stack Developer",
    siteName: "Rahmatul Usra Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Rahmatul Usra Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rahmatul Usra - Portfolio",
    description: "Personal portfolio of Rahmatul Usra - Full Stack Developer",
    creator: "@xsrazy",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
