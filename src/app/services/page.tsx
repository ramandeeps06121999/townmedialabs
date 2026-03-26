import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "Our Services | TML Agency — Full-Service Digital Marketing",
  description:
    "Explore TML Agency's full range of digital marketing services — Branding, SEO, Google Ads, Social Media, Web Development, AI Influencer Management, Lead Generation, and more.",
  keywords: [
    "digital marketing services",
    "branding services",
    "SEO services Chandigarh",
    "Google Ads management",
    "social media marketing services",
    "web development services",
    "lead generation services",
    "graphic design services",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | TML Agency — Full-Service Digital Marketing",
    description:
      "Explore TML Agency's full range of digital marketing services — Branding, SEO, Google Ads, Social Media, Web Development & more.",
    url: `${siteUrl}/services`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TML Agency Services - Full-Service Digital Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | TML Agency — Full-Service Digital Marketing",
    description:
      "Explore TML Agency's full range of digital marketing services — Branding, SEO, Google Ads, Social Media, Web Development & more.",
    images: ["/og-image.png"],
  },
};

const servicesCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Digital Marketing Services | TML Agency",
  description:
    "Explore TML Agency's complete range of digital marketing services including branding, SEO, Google Ads, social media marketing, web development, graphic design, lead generation, and more.",
  url: `${siteUrl}/services`,
  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "TML Agency",
    url: siteUrl,
  },
  provider: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "TML Agency",
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Branding", url: `${siteUrl}/services/branding` },
      { "@type": "ListItem", position: 2, name: "SEO", url: `${siteUrl}/services/seo` },
      { "@type": "ListItem", position: 3, name: "Google Ads", url: `${siteUrl}/services/google-ads` },
      { "@type": "ListItem", position: 4, name: "Social Media Marketing", url: `${siteUrl}/services/social-media` },
      { "@type": "ListItem", position: 5, name: "Website Development", url: `${siteUrl}/services/website-development` },
      { "@type": "ListItem", position: 6, name: "Graphic Design", url: `${siteUrl}/services/graphic-design` },
      { "@type": "ListItem", position: 7, name: "Lead Generation", url: `${siteUrl}/services/lead-generation` },
      { "@type": "ListItem", position: 8, name: "Branding & Packaging", url: `${siteUrl}/services/branding-packaging` },
      { "@type": "ListItem", position: 9, name: "Video Editing", url: `${siteUrl}/services/video-editing` },
      { "@type": "ListItem", position: 10, name: "AI Influencer Management", url: `${siteUrl}/services/ai-influencer-management` },
      { "@type": "ListItem", position: 11, name: "Music Release", url: `${siteUrl}/services/music-release` },
    ],
  },
};

const servicesBreadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Services", item: `${siteUrl}/services` },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesCollectionJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesBreadcrumbJsonLd),
        }}
      />
      <ServicesPageClient />
    </>
  );
}
