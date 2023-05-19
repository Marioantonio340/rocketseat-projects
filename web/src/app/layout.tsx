import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { Copyright } from '@/components/Copyright'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJanjuree
} from 'next/font/google'
import { cookies } from 'next/headers'

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

  const isAuthenticated = cookies().has('token')
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJanjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        

        <main className="grid grid-cols-2 min-h-screen ">

    <div className="flex flex-col items-start justify-between overflow-hidden px-28 py-16 border-r border-white/10  bg-[url(../assets/bg-stars.svg)] bg-cover  relative">

      <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 bg-purple-700 opacity-50 rounded-full blur-full" />

      <div className="absolute bottom-0 right-2 -top-0 w-2 bg-stripes " />

      {isAuthenticated ? <Profile /> : <SignIn />}
      <Hero/>
      <Copyright />

    </div>

    <div className="flex flex-col p-16 bg-[url(../assets/bg-stars.svg)] bg-cover">
    {children}
    </div>

  </main>
        </body>
    </html>
  )
}
