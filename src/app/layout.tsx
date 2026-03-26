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
    "digital marketing agency",
    "branding agency",
    "web development company",
    "SEO services",
    "Google Ads management",
    "social media marketing agency",
    "lead generation agency",
    "website development",
    "brand strategy",
    "TML Agency",
    "full-service marketing agency",
    "graphic design services",
    "digital marketing agency Chandigarh",
    "web design agency",
    "performance marketing",
    "content marketing agency",
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
  "@id": `${siteUrl}/#organization`,
  name: "TML Agency",
  alternateName: ["Town Media Labs", "TML Branding & Digital Marketing Agency"],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/logo.png`,
    width: 512,
    height: 512,
  },
  email: "info@townmedialabs.com",
  telephone: "+91-98726-48209",
  description:
    "Full-service branding and digital marketing agency for ambitious businesses. 15+ years of experience, 500+ brands scaled, 98% client retention.",
  foundingDate: "2016",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 70,
    unitText: "employees",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "CO 112, Basement, Sector 34A",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160022",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-98726-48209",
    contactType: "customer service",
    email: "info@townmedialabs.com",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [
    "https://www.facebook.com/Town.media.labs",
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
    "https://twitter.com/tmlagency",
    "https://www.youtube.com/@tmlagency",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "TML Agency",
  url: siteUrl,
  telephone: "+91-98726-48209",
  email: "info@townmedialabs.com",
  image: `${siteUrl}/logo.png`,
  description:
    "Full-service branding and digital marketing agency for ambitious businesses.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "CO 112, Basement, Sector 34A",
    addressLocality: "Chandigarh",
    addressRegion: "Chandigarh",
    postalCode: "160022",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7281",
    longitude: "76.7726",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/Town.media.labs",
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
    "https://twitter.com/tmlagency",
    "https://www.youtube.com/@tmlagency",
  ],
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

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "TML Agency",
  url: siteUrl,
  description:
    "Full-service branding and digital marketing agency with 15+ years of experience. 500+ brands scaled, 98% client retention.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
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
