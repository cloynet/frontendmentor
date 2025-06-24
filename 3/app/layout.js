import { Figtree } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer"

const figtree = Figtree({
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      style={{ backgroundColor: 'var(--background)' }}
      className={`${figtree.className} min-h-screen flex flex-col`}>
        <main className="flex-1 flex items-center justify-center md-block md:py-20 md:px-4">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
