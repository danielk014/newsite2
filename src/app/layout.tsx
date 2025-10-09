import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { analyticsConfig } from "@/config/analytics";
import { Navigation } from "@/components/layout/navigation";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "content creation",
    "viral content",
    "creator economy",
    "online course",
    "social media marketing",
    "influencer marketing",
  ],
  authors: [
    {
      name: "Creator Camp Academy",
      url: siteConfig.url,
    },
  ],
  creator: "Creator Camp Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@creatorcamp",
  },
  icons: {
    icon: "/skool-logo.svg",
    shortcut: "/skool-logo.svg",
    apple: "/skool-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#FF6B35" />
        {analyticsConfig.metaPixel.enabled && (
          <MetaPixel pixelId={analyticsConfig.metaPixel.pixelId} />
        )}
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
        {analyticsConfig.vercelAnalytics.enabled && <Analytics />}
      </body>
    </html>
  );
}
