import type { Metadata } from "next";
import ChandigarhPageClient from "./ChandigarhPageClient";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Chandigarh | TML Agency",
  description:
    "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served, 15+ years of experience.",
  keywords: [
    "digital marketing agency chandigarh",
    "best digital marketing company chandigarh",
    "seo company chandigarh",
    "branding agency chandigarh",
    "social media marketing chandigarh",
    "google ads chandigarh",
    "web development chandigarh",
  ],
  openGraph: {
    title: "Digital Marketing Agency in Chandigarh | TML Agency",
    description:
      "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served.",
    url: "https://townmedialabs.ca/digital-marketing-agency-chandigarh",
    siteName: "TML Agency",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Digital Marketing Agency in Chandigarh - TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Digital Marketing Agency in Chandigarh | TML Agency",
    description:
      "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "/digital-marketing-agency-chandigarh",
  },
};

export default function ChandigarhPage() {
  return <ChandigarhPageClient />;
}
