import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["darwin"];

export const metadata: Metadata = {
  title: "Branding Agency in Darwin",
  description: "TML offers expert Branding services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding darwin", "branding agency darwin", "branding company darwin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-darwin",
  },
  openGraph: {
    title: "Branding Agency in Darwin",
    description: "TML offers expert Branding services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-darwin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Darwin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Darwin",
    description: "TML offers expert Branding services in Darwin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDarwinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
