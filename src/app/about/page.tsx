import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

const siteUrl = "https://townmedialabs.com";

export const metadata: Metadata = {
  title: "About TML Agency | Leading Digital Marketing Agency in Chandigarh",
  description:
    "Discover TML Agency — Chandigarh's top digital marketing, branding & web development agency. 500+ clients, 50+ experts, 8+ years delivering SEO, social media & creative solutions.",
  keywords: [
    "about tml",
    "digital marketing agency chandigarh",
    "creative agency chandigarh",
    "branding agency india",
    "seo agency chandigarh",
    "social media marketing chandigarh",
    "web development agency",
    "tml agency about",
    "best digital marketing agency chandigarh",
    "performance marketing agency",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About TML Agency | Leading Digital Marketing Agency in Chandigarh",
    description:
      "Chandigarh's leading digital marketing agency — 500+ clients, 50+ team members, 8+ years of branding, SEO, web development & social media marketing excellence.",
    url: `${siteUrl}/about`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About TML Agency - Digital Marketing Agency in Chandigarh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About TML Agency | Leading Digital Marketing Agency in Chandigarh",
    description:
      "Chandigarh's leading digital marketing agency — 500+ clients, 50+ team members, 8+ years of branding, SEO & web development excellence.",
    images: ["/og-image.png"],
  },
};

const aboutPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About TML Agency",
  description:
    "TML Agency is a leading digital marketing and branding agency based in Chandigarh, India. With 8+ years of experience, 50+ team members, and 500+ clients served, we deliver measurable results through creative digital strategies including SEO, social media marketing, web development, and performance marketing.",
  url: `${siteUrl}/about`,
  mainEntity: {
    "@type": "Organization",
    name: "TML Agency",
    alternateName: "TML Digital Marketing Agency",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description:
      "Full-service digital marketing and branding agency in Chandigarh, India. Specialising in branding, web development, SEO, Google Ads, social media marketing, and performance marketing.",
    foundingDate: "2016",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      unitText: "employees",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Chandigarh",
      addressCountry: "IN",
    },
    email: "info@townmedialabs.com",
    sameAs: [
      "https://www.facebook.com/tmlagency",
      "https://www.instagram.com/tmlagency",
      "https://www.linkedin.com/company/tmlagency",
      "https://twitter.com/tmlagency",
      "https://www.youtube.com/@tmlagency",
    ],
    knowsAbout: [
      "Digital Marketing",
      "Branding",
      "Web Development",
      "Search Engine Optimization",
      "Social Media Marketing",
      "Google Ads",
      "Performance Marketing",
      "Content Marketing",
      "Graphic Design",
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageJsonLd),
        }}
      />
      <AboutPageClient />
    </>
  );
}
