import './globals.css'

export const metadata = {
  title: 'Vidya International School',
  description: 'Excellence in Education - Kindergarten, CBSE School, and IIT-JEE Coaching',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
