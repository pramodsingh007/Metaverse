import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Metaverse',
  description: 'A modern Metaverse site by Pramod Thakur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className + " bg-slate-900"}>
        <Navbar/>
        <main className='w-full h-full'>
        {children}
        </main>
        <Footer/>
        
      </body>
    </html>
  )
}
