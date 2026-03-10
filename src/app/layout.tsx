import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "DKM Corp — Growth & Operations Partner",
  description:
    "DKM Corp is a private growth and operations partner working across India, Australia, United States, and Dubai. We design, market, and operate.",
  keywords: [
    "growth partner",
    "operations management",
    "digital marketing",
    "AI automation",
    "business strategy",
    "DKM Corp",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "DKM Corp — Growth & Operations Partner",
    description:
      "We identify performance bottlenecks and install structured systems to solve them. Execution-first.",
    type: "website",
    url: "https://dkmcorp.in",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DKM Corp — Growth & Operations Partner",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DKM Corp",
              url: "https://dkmcorp.in",
              description:
                "Private growth and operations partner. We design, market, and operate.",
              foundingDate: "2024",
              founder: {
                "@type": "Person",
                name: "Dheeraj Kumar Miryala",
              },
              areaServed: [
                "India",
                "Australia",
                "United States",
                "Dubai",
              ],
              serviceType: [
                "Digital Infrastructure & Web Systems",
                "AI & Intelligent Automation",
                "Growth Marketing Systems",
                "Business Operations & Performance Management",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@dkmcorp.in",
                contactType: "customer service",
              },
            }),
          }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
