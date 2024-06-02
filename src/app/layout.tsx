import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - ERSAS',
    default: 'ERSAS - Top-Rated Design and Web Development Agency Driving Business Success.',
  },
  description: 'ERSAS is a premier design and software development agency, offering high-end, best value, quality design, and software solutions.',
  keywords: 'ERSAS, design agency, software development, website development, high-end design, quality software solutions, ethiopian, black owned, graphic design agency, branding agency, best value, addis ababa',
  openGraph: {
    title: 'ERSAS - Top-Rated Design and Web Development Agency Driving Business Success.',
    description: 'Discover ERSAS, a leading design and software development agency. We provide high-end, best value, quality design and software solutions.',
    url: 'https://www.ersas.co',
    siteName: 'ERSAS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERSAS - Top-Rated Design and Web Development Agency Driving Business Success.',
    description: 'Discover ERSAS, a leading design and software development agency. We provide high-end, best value, quality design and software solutions.',
    site: '@ERSAS',
  },
};


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
