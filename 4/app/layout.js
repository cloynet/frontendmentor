import { Work_Sans } from "next/font/google";
import "@/styles/globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ['400', '600', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
