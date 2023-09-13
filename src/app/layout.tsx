import "./globals.scss"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Container, SSRProvider } from "../components/bootstrap"
import NavBar from './NavBar';
import Footer from './Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DGS Cleaning',
  description: 'Cleaning Servive Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en">
      <head>
        <title>DGS Cleaning - Cleaning Services | Greater Vancouver Area</title>
        <meta name="description" content="Greater Vancouver's most reliable cleaning service." />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${inter.className}  `}>

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
