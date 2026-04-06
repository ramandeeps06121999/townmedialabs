import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bathinda"];

export const metadata: Metadata = {
  title: "Branding Agency in Bathinda",
  description: "TML offers expert Branding services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bathinda", "branding agency bathinda", "branding company bathinda"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bathinda",
  },
  openGraph: {
    title: "Branding Agency in Bathinda",
    description: "TML offers expert Branding services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bathinda",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bathinda" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Bathinda",
    description: "TML offers expert Branding services in Bathinda. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBathindaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
