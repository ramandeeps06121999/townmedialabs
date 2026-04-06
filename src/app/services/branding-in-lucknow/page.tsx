import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Branding Agency in Lucknow",
  description: "TML offers expert Branding services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding lucknow", "branding agency lucknow", "branding company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-lucknow",
  },
  openGraph: {
    title: "Branding Agency in Lucknow",
    description: "TML offers expert Branding services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Lucknow",
    description: "TML offers expert Branding services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
