import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Branding Agency in Hyderabad",
  description: "TML offers expert Branding services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding hyderabad", "branding agency hyderabad", "branding company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-hyderabad",
  },
  openGraph: {
    title: "Branding Agency in Hyderabad",
    description: "TML offers expert Branding services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Hyderabad",
    description: "TML offers expert Branding services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHyderabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
