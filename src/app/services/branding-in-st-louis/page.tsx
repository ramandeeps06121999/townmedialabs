import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  title: "Branding Agency in St. Louis",
  description: "TML offers expert Branding services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding st. louis", "branding agency st. louis", "branding company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-st-louis",
  },
  openGraph: {
    title: "Branding Agency in St. Louis",
    description: "TML offers expert Branding services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in St. Louis",
    description: "TML offers expert Branding services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
