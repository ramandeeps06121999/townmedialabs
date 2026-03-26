import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import MicrosoftClarity from "@/components/analytics/MicrosoftClarity";
import { DeferredSmoothScroll } from "@/components/providers/DeferredSmoothScroll";
import LayoutExtras from "@/components/layout/LayoutExtras";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
  adjustFontFallback: true,
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "Segoe UI", "sans-serif"],
  adjustFontFallback: true,
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
    locale: "en_IN",
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
    site: "@tmlagency",
    creator: "@tmlagency",
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
  alternateName: ["Town Media Labs", "TML Digital Marketing Agency", "TML Branding & Digital Marketing Agency"],
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
    "Full-service digital marketing and branding agency based in Chandigarh, India. Specialising in branding, web development, SEO, Google Ads, social media marketing, and performance marketing. 500+ brands scaled, 15+ years of experience.",
  foundingDate: "2010",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 70,
    maxValue: 100,
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7281",
    longitude: "76.7726",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-98726-48209",
      contactType: "customer service",
      email: "info@townmedialabs.com",
      availableLanguage: ["English", "Hindi"],
      areaServed: ["IN", "US", "GB", "CA", "AU", "NZ", "AE"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/Town.media.labs",
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
    "https://x.com/tmlagency",
    "https://www.youtube.com/@tmlagency",
  ],
  knowsAbout: [
    "Digital Marketing",
    "Branding",
    "Web Development",
    "Search Engine Optimization",
    "Google Ads",
    "Social Media Marketing",
    "Performance Marketing",
    "Content Marketing",
    "Graphic Design",
    "Lead Generation",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#localbusiness`,
  name: "TML Agency",
  url: siteUrl,
  telephone: "+91-98726-48209",
  email: "info@townmedialabs.com",
  image: `${siteUrl}/logo.png`,
  description:
    "Full-service branding and digital marketing agency based in Chandigarh, India. 500+ brands scaled, 15+ years of experience.",
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
  hasMap: "https://maps.google.com/?cid=TML+Agency+Chandigarh",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "New Zealand" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
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
    reviewCount: "3",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Sarah Mitchell" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "TML completely transformed our digital presence. Within 90 days we saw a 3x return on our ad spend and our brand finally felt like us.",
      publisher: { "@type": "Organization", name: "Luxe Interiors" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "James Carter" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "Their team feels like an extension of ours. No hand-holding needed — they just get it and deliver, every single time.",
      publisher: { "@type": "Organization", name: "CB Builders" },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Priya Sharma" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      reviewBody: "We went from zero online presence to ranking on page one for 12 keywords in under 6 months. The ROI speaks for itself.",
      publisher: { "@type": "Organization", name: "TechVault" },
    },
  ],
  sameAs: [
    "https://www.facebook.com/Town.media.labs",
    "https://www.instagram.com/townmedialabs/",
    "https://in.linkedin.com/company/townmedialabs",
    "https://x.com/tmlagency",
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
    "TML Agency is Chandigarh's top digital marketing agency offering SEO, Google Ads, branding, web development and social media marketing services. 500+ brands scaled.",
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
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.clarity.ms" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
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
        {children}
        <DeferredSmoothScroll />
        <LayoutExtras />
      </body>
    </html>
  );
}
