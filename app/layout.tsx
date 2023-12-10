import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WildRent',
  description: '我們是您戶外冒險的最佳夥伴！提供雙向租賃服務，專注於登山、露營等戶外用品。從帳篷到登山杖，從背包到營火用具，讓您的戶外體驗更加輕鬆便利。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
