import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { NextSeo } from "next-seo"

export const metadata: Metadata = {
  title: "3rd Street Boxing Gym | Dogpatch's Fight Factory Since 2005",
  description: "Authentic Boxing in San Francisco's Dogpatch. Classes for all levels, Academy, Bootcamp, Personal Training, Youth programs, and Open Gym.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body className="font-muni antialiased">
        <NextSeo
          title="3rd Street Boxing Gym | Dogpatch's Fight Factory Since 2005"
          openGraph={{ type:"website", locale:"en_US", siteName:"3rd Street Boxing Gym" }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
