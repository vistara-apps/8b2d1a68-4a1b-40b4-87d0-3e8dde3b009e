import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Monad Vibe Trader',
  description: 'Automate crypto trading on Astar with AI agents influenced by real-time market sentiment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
