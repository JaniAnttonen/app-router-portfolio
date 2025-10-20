import './globals.css'

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
      <body>{children}</body>
      {/* TODO: Add a footer with links to legacy sites */}
    </html>
  )
}
