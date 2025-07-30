import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Little Lemon Restaurant",
  description: "Delicious food and great atmosphere at Little Lemon Restaurant",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <Navbar />
          <main>{children}</main>
          <Footer />
      </body>
    </html>
  )
}
