import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import classNames from 'classnames'
import Header from '@/components/page/header'
import { Providers } from './providers'
import { ToastContainer } from 'react-toastify'
import Toast from '@/components/Toast'
import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brc-20 Tokens',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, "bg-black w-screen h-auto flex")}>
        <div className='w-full mx-auto container text-[#a1a1aa] py-4'>
          <Providers>
            <Header />
            <Toast />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  )
}
