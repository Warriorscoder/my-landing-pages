import type { Metadata } from "next";
import Link from 'next/link';
import "./globals.css";

export const metadata: Metadata = {
  title: "Contentful Page Builder",
  description: "A landing page builder using Contentful and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{
          padding: '1rem',
          borderBottom: '1px solid #eaeaea',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 10
        }}>
          <nav style={{
            display: 'flex',
            gap: '1.5rem',
            maxWidth: '1200px',
            margin: '0 auto',
            fontWeight: 500
          }}>
            <Link href="/landing/page-1">Page 1</Link>
            <Link href="/landing/page-2">Page 2</Link>
            <Link href="/">Home</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}