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
