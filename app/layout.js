import './globals.css'

export const metadata = {
  title: 'Vidya International School',
  description: 'Excellence in Education - Kindergarten, CBSE School, and IIT-JEE Coaching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
