import './globals.css'

import Navigation from './components/Navigation'


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js App</title>
      </head>
      <body>
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
