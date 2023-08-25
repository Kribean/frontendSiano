import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Siano - Connectez les Entreprises Caribéennes',
  description: "Plateforme collaborative pour valoriser, promouvoir et connecter les entreprises caribéennes. Boosteur de l'économie locale antillo-guyannaise",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
