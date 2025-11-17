import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/lib/language-context'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'شركة ابو زيد | قص وتخريم الخرسانة في السعودية',
  description: 'شركة ابو زيد متخصصة في قص وتخريم الخرسانة بأعلى معايير الجودة. خدمات احترافية للمشاريع الكبرى في مكة والسعودية.',
  keywords: 'قص الخرسانة، تخريم الخرسانة، أعمال خرسانية، شركة مقاولات، مكة، ، جدة، الطائف، المدينة المنورة، السعودية',
  alternates: {
    canonical: 'https://abozaid.com',
    languages: {
      'ar': 'https://abozaid.com/ar',
      'en': 'https://abozaid.com/en',
    },
  },
  openGraph: {
    title: 'شركة ابو زيد | قص وتخريم الخرسانة',
    description: 'متخصصون في قص وتخريم الخرسانة بأعلى معايير الجودة والدقة',
    type: 'website',
    locale: 'ar_SA',
    url: 'https://abozaid.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'شركة ابو زيد',
    description: 'قص وتخريم الخرسانة',
  },
  icons: "/logo.jpeg"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <style>{`html { direction: rtl; }`}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "شركة ابو زيد",
              "description": "متخصصة في قص وتخريم الخرسانة",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "مكة",
                "addressCountry": "SA"
              },
              "telephone": "+966",
              "email": "info@abozaid.com",
              "areaServed": "SA",
              "serviceType": ["قص الخرسانة", "تخريم الخرسانة"]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://abozaid.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Services",
                  "item": "https://abozaid.com#services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Projects",
                  "item": "https://abozaid.com#projects"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-background text-foreground`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
