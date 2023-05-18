import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJanjuree
} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto'
})

const baiJanjuree = BaiJanjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-janjuree'
})
export const metadata = {
  title: 'NLW Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.js, TailwindCSS e TypeScript.',	
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJanjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        {children}
        </body>
    </html>
  )
}
