import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sitio de perritos',
  description: 'Practicando NextJS en el curso',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className='contenedor'>
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
