import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello Next.js App',
  description: 'A simple Next.js app that says hello',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}