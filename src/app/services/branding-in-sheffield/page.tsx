import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sheffield"];

export const metadata: Metadata = {
  title: "Branding Agency in Sheffield",
  description: "TML offers expert Branding services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sheffield", "branding agency sheffield", "branding company sheffield"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sheffield",
  },
  openGraph: {
    title: "Branding Agency in Sheffield",
    description: "TML offers expert Branding services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sheffield",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sheffield" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Sheffield",
    description: "TML offers expert Branding services in Sheffield. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSheffieldPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
