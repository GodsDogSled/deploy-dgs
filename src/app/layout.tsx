import "./globals.scss"
import type { Metadata } from 'next'
import React from "react"
import { Inter } from 'next/font/google'
import { Container, SSRProvider } from "../components/bootstrap"
import NavBar from './NavBar';
import Footer from './Footer';
import Script from 'next/script';
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DGS Cleaning Service | Greater Vancouver',
  description: 'Discover the epitome of cleanliness with our Greater Vancouver based home cleaning services. Elevate your living spaces with our meticulous and professional touch. From sparkling kitchens to spotless bathrooms, trust us to transform your home into a haven of freshness. Schedule your appointment today for a cleaner, healthier, and happier living environment!',
  openGraph: {
    title: 'DGS Cleaning | Greater Vancouver',
    description: 'Discover the epitome of cleanliness with our Greater Vancouver based home cleaning services. Elevate your living spaces with our meticulous and professional touch. From sparkling kitchens to spotless bathrooms, trust us to transform your home into a haven of freshness. Schedule your appointment today for a cleaner, healthier, and happier living environment!',
    url: 'https://www.dgscleaningservices.ca/',
    siteName: 'DGS Cleaning',
    images: [
      {
        url: '/bathroom.jpg', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {




  return (
    <html lang="en" >
      <Head>
        <title>
          DGS Cleaning Services | Greater Vancouver Area
        </title>
        <meta
          name="dgs cleaning vancouver"
          content="Your local cleaning solution for every mess "
          key="desc"
        />

      </Head>

      <link rel='icon' href='/favicon.ico' />


      <body className={`${inter.className}  `}>
        {/* <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LGD53FM97F"></Script>
        <Script id="google-analytics">
          {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-LGD53FM97F');
    `}
        </Script> */}

        <NavBar />
        <main  >
          <Container >
            {children}
          </Container>
        </main>
        <Footer />

      </body>
    </html>
  )
}
