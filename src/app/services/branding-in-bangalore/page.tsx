import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bangalore"];

export const metadata: Metadata = {
  title: "Branding Agency in Bangalore",
  description: "TML offers expert Branding services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bangalore", "branding agency bangalore", "branding company bangalore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bangalore",
  },
  openGraph: {
    title: "Branding Agency in Bangalore",
    description: "TML offers expert Branding services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bangalore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bangalore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Bangalore",
    description: "TML offers expert Branding services in Bangalore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBangalorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
