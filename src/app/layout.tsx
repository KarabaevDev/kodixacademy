import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Kodix Academy - Master Modern Web Development',
  description: 'Learn HTML, CSS, JavaScript, React, Next.js and more with our comprehensive courses. Start your coding journey today.',
  keywords: ['web development', 'coding', 'programming', 'React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'online courses'],
  authors: [{ name: 'Kodix Academy' }],
  openGraph: {
    title: 'Kodix Academy - Master Modern Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, Next.js and more with our comprehensive courses.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Kodix Academy',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kodix Academy - Master Modern Web Development',
    description: 'Learn HTML, CSS, JavaScript, React, Next.js and more with our comprehensive courses.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-zinc-950 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
