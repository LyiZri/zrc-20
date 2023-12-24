"use client";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RainbowContext from '@/context/rainbowContext'
import classNames from 'classnames'
import Header from '@/components/page/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zrc-20 Tokens',
  description: 'Generated by create next app',
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
          <RainbowContext>
            <Header />
            {children}
          </RainbowContext>
        </div>
      </body>
    </html>
  )
}
