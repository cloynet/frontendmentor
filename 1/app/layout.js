import "@/styles/globals.css";
import { Outfit, Young_Serif } from 'next/font/google'
import Footer from '@/components/footer'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-outfit',
})

const youngSerif = Young_Serif({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-young-serif',
})

export const metadata = {
  title: 'Tarif Sayfası',
  description: 'Frontend Mentor projesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${youngSerif.variable}`}>
      <body className={`${outfit.className} bg-orange-100`}>
        {children}
        <Footer/>
        </body>
      
    </html>
  )
}