import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Allegro Clone',
  description: 'Klon aplikacji Allegro, przygotowany przez grupę 1 Informatyki w SAN',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/allegro-icon.png",
        href: "/allegro-icon.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/allegro-icon.png",
        href: "/allegro-icon.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
