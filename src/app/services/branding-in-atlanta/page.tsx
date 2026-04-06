import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["atlanta"];

export const metadata: Metadata = {
  title: "Branding Agency in Atlanta",
  description: "TML offers expert Branding services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding atlanta", "branding agency atlanta", "branding company atlanta"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-atlanta",
  },
  openGraph: {
    title: "Branding Agency in Atlanta",
    description: "TML offers expert Branding services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-atlanta",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Atlanta" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Atlanta",
    description: "TML offers expert Branding services in Atlanta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAtlantaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
