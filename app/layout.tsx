import type { Metadata } from 'next';
import { Providers } from './providers';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'ScaleCraft Studio™ | Strategic Experience Engineering for SaaS',
  description: 'Elite UI/UX design and product strategy for funded SaaS companies. Improve activation, retention, and conversion.',
  keywords: 'SaaS design, product strategy, UI/UX, conversion optimization, growth design',
  openGraph: {
    title: 'ScaleCraft Studio™',
    description: 'Strategic Experience Engineering for Growth-Stage SaaS',
    url: 'https://scalecraftstudio.com',
    type: 'website',
    images: [
      {
        url: '/assets/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ScaleCraft Studio™',
    description: 'Strategic Experience Engineering for Growth-Stage SaaS',
    images: ['/assets/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ScaleCraft Studio™',
              url: 'https://scalecraftstudio.com',
              description: 'Strategic Experience Engineering for Growth-Stage SaaS',
              logo: 'https://scalecraftstudio.com/logo.svg',
              sameAs: [
                'https://twitter.com/scalecraftstudio',
                'https://linkedin.com/company/scalecraft-studio',
              ],
            }),
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}