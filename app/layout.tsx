import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Shippori_Mincho, Zen_Kaku_Gothic_New } from 'next/font/google'
import './globals.css'

const shipporiMincho = Shippori_Mincho({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-serif',
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '黒 ｜ 初縁鑑定 お申し込み',
  description:
    'ここまで来てくれてありがとう。あなたのお悩みを丁寧に視させていただきます。占い師「黒」の無料 初縁鑑定 お申し込みフォーム。',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0710',
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={`dark bg-background ${shipporiMincho.variable} ${zenKaku.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
