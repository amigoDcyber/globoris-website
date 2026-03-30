import './layout.css'

export const metadata = {
  title: 'Globoris Technologies - Building Africa\'s Digital Infrastructure',
  description: 'Enterprise-grade fintech, govtech, and AI-powered platforms transforming industries across Africa',
  keywords: 'Fintech, GovTech, AI Solutions, School Management, Rental Platform, Cybersecurity, Africa Technology',
  authors: [{ name: 'Globoris Technologies' }],
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#0A2540" />
        <meta property="og:title" content="Globoris Technologies" />
        <meta property="og:description" content="Building Africa's Digital Infrastructure" />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
