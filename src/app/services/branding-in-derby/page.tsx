import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["derby"];

export const metadata: Metadata = {
  title: "Branding Agency in Derby",
  description: "TML offers expert Branding services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding derby", "branding agency derby", "branding company derby"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-derby",
  },
  openGraph: {
    title: "Branding Agency in Derby",
    description: "TML offers expert Branding services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-derby",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Derby" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Derby",
    description: "TML offers expert Branding services in Derby. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDerbyPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
