import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["kolkata"];

export const metadata: Metadata = {
  title: "Branding Agency in Kolkata",
  description: "TML offers expert Branding services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding kolkata", "branding agency kolkata", "branding company kolkata"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-kolkata",
  },
  openGraph: {
    title: "Branding Agency in Kolkata",
    description: "TML offers expert Branding services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-kolkata",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Kolkata",
    description: "TML offers expert Branding services in Kolkata. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInKolkataPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
