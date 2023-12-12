import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Navbar from '../components/navbar/Navbar'
import Login from '../components/modals/LoginModal'
import Register from '../components/modals/Register'
import getCurrentUser from '../actions/getCurrentUser'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WildRent',
  description: '我們是您戶外冒險的最佳夥伴！提供雙向租賃服務，專注於登山、露營等戶外用品。從帳篷到登山杖，從背包到營火用具，讓您的戶外體驗更加輕鬆便利。',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar currentUser={currentUser} />
        <Login />
        <Register />
        <div className="pb-20 pt-15">
          {children}
        </div>
      </body>
    </html>
  )
}
