import { Hanken_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const hankenGrotesk = Hanken_Grotesk({
  weight: ['500', '700', '800'],
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body 
      style={{ backgroundColor: 'var(--background)' }}
      className={`${hankenGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
