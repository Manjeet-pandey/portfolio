import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Manjeet Pandey',
  description: 'Manjeet Pandey Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-green-500 font-mono">{children}</body>
    </html>
  )
}
