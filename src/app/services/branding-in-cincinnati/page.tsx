import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cincinnati"];

export const metadata: Metadata = {
  title: "Branding Agency in Cincinnati",
  description: "TML offers expert Branding services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cincinnati", "branding agency cincinnati", "branding company cincinnati"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-cincinnati",
  },
  openGraph: {
    title: "Branding Agency in Cincinnati",
    description: "TML offers expert Branding services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-cincinnati",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cincinnati" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Cincinnati",
    description: "TML offers expert Branding services in Cincinnati. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCincinnatiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
