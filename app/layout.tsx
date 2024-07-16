import type { Metadata } from 'next'
import { Bonbon, Lexend } from 'next/font/google'
import './globals.css'
import { cn } from './utils'

const lexend = Lexend({
  subsets: ['latin'],
  weight: '300',
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: 'Karolina Albrzykowska',
  description: 'My portfolio!',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'flex min-h-screen flex-col items-center bg-background px-1 text-foreground antialiased',
          lexend.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
