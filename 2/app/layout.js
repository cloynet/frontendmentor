import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter'
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}
      style={{ backgroundColor: 'var(--background)' }}>
        <main className="flex-grow flex items-center justify-center px-4">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
