import type { Metadata } from "next";
import CareersPageClient from "./CareersPageClient";

const siteUrl = "https://townmedialabs.ca";

export const metadata: Metadata = {
  title: "Careers at TML Agency | Join Our Creative Team",
  description:
    "Join TML Agency — Chandigarh's leading digital marketing & branding agency. We're hiring AI developers, video editors, graphic designers, social media managers & more. Apply now!",
  keywords: [
    "careers at tml agency",
    "digital marketing jobs chandigarh",
    "creative agency jobs",
    "ai developer jobs",
    "video editor jobs chandigarh",
    "graphic designer jobs",
    "social media jobs chandigarh",
    "tml agency careers",
    "marketing agency hiring",
  ],
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at TML Agency | Join Our Creative Team",
    description:
      "We're hiring! Join Chandigarh's top digital marketing agency. Open roles in AI, video, design, social media & more.",
    url: `${siteUrl}/careers`,
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at TML Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Careers at TML Agency | Join Our Creative Team",
    description:
      "We're hiring! Join Chandigarh's top digital marketing agency. Open roles in AI, video, design, social media & more.",
    images: ["/og-image.png"],
  },
};

const careerJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Careers at TML Agency",
  description:
    "Explore open positions at TML Agency — a leading digital marketing and branding agency in Chandigarh, India.",
  url: `${siteUrl}/careers`,
  mainEntity: {
    "@type": "Organization",
    name: "TML Agency",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
  },
};

export default function CareersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(careerJsonLd),
        }}
      />
      <CareersPageClient />
    </>
  );
}
