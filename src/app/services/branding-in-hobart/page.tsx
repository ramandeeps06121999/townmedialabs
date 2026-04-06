import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hobart"];

export const metadata: Metadata = {
  title: "Branding Agency in Hobart",
  description: "TML offers expert Branding services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding hobart", "branding agency hobart", "branding company hobart"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-hobart",
  },
  openGraph: {
    title: "Branding Agency in Hobart",
    description: "TML offers expert Branding services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-hobart",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Hobart" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Hobart",
    description: "TML offers expert Branding services in Hobart. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHobartPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
