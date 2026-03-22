import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import StickyMobileCTA from "@/components/ui/StickyMobileCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: {
    default: "TML Agency | Full-Service Branding & Digital Marketing",
    template: "%s | TML Agency",
  },
  description:
    "TML is a full-service branding and digital marketing agency with 15+ years of experience. We specialize in branding, web development, SEO, Google Ads, social media marketing, and performance marketing. 500+ brands scaled, 98% client retention.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "branding agency",
    "digital marketing agency",
    "web development",
    "SEO services",
    "Google Ads management",
    "social media marketing",
    "content marketing",
    "performance marketing",
    "brand strategy",
    "TML Agency",
    "full-service marketing agency",
    "graphic design",
    "online advertising",
  ],
  authors: [{ name: "TML Agency", url: siteUrl }],
  creator: "TML Agency",
  publisher: "TML Agency",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "",
  },
  openGraph: {
    title: "TML Agency | Full-Service Branding & Digital Marketing",
    description:
      "Full-service branding and digital marketing agency with 15+ years of experience. 500+ brands scaled, 98% client retention. Branding, web development, SEO, Google Ads & more.",
    url: siteUrl,
    siteName: "TML Agency",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency - Full-Service Branding & Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TML Agency | Full-Service Branding & Digital Marketing",
    description:
      "Full-service branding and digital marketing agency with 15+ years of experience. 500+ brands scaled, 98% client retention.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TML Agency",
  alternateName: "TML Branding & Digital Marketing Agency",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: "info@townmedialabs.com",
  description:
    "Full-service branding and digital marketing agency for ambitious businesses. 15+ years of experience, 500+ brands scaled, 98% client retention.",
  sameAs: [
    "https://www.facebook.com/Town.media.labs",
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "TML Agency",
  url: siteUrl,
  email: "info@townmedialabs.com",
  image: `${siteUrl}/logo.png`,
  description:
    "Full-service branding and digital marketing agency for ambitious businesses.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
  knowsAbout: [
    "Branding",
    "Web Development",
    "Search Engine Optimization",
    "Google Ads",
    "Social Media Marketing",
    "Content Marketing",
    "Performance Marketing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Branding & Brand Strategy" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Web Development & Design" },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Search Engine Optimization (SEO)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Management",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Social Media Marketing",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Content Marketing" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Performance Marketing" },
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`${inter.variable} ${syne.variable} antialiased`}>
        <GoogleAnalytics />
        <MicrosoftClarity />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
        <WhatsAppFloat />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
