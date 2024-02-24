import type { Metadata } from 'next'
import './globals.scss'
import { Layout } from '@/components/Layout/Layout'

export const metadata: Metadata = {
  title: 'RuTube 2.0',
  description: 'RuTube 2.0',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <Layout>
            {children}
        </Layout>
      </body>
    </html>
  )
}
