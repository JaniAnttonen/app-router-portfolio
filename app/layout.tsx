import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jani Anttonen – Software Engineer',
  description: 'Software Engineer hailing from Finland, specializing in React, Typescript and web3, with the dreams of a renaissance man.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* TODO: Add a footer with links to legacy sites */}
    </html>
  )
}
