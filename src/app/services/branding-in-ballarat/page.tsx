import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ballarat"];

export const metadata: Metadata = {
  title: "Branding Agency in Ballarat",
  description: "TML offers expert Branding services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ballarat", "branding agency ballarat", "branding company ballarat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ballarat",
  },
  openGraph: {
    title: "Branding Agency in Ballarat",
    description: "TML offers expert Branding services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ballarat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ballarat" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ballarat",
    description: "TML offers expert Branding services in Ballarat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBallaratPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
