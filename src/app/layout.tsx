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
  title: 'DGS Cleaning | Greater Vancouver',
  description: 'Cleaning Servive Website',
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
