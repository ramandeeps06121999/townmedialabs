import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brighton"];

export const metadata: Metadata = {
  title: "Branding Agency in Brighton",
  description: "TML offers expert Branding services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding brighton", "branding agency brighton", "branding company brighton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-brighton",
  },
  openGraph: {
    title: "Branding Agency in Brighton",
    description: "TML offers expert Branding services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-brighton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Brighton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Brighton",
    description: "TML offers expert Branding services in Brighton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBrightonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
