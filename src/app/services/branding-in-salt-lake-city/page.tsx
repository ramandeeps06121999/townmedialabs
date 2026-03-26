import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["salt_lake_city"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Salt Lake City | TML Agency",
  description: "TML offers expert branding services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding salt lake city", "branding agency salt lake city", "branding company salt lake city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-salt-lake-city",
  },
  openGraph: {
    title: "Best Branding Agency in Salt Lake City | TML Agency",
    description: "TML offers expert branding services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-salt-lake-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Salt Lake City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Salt Lake City | TML Agency",
    description: "TML offers expert branding services in Salt Lake City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSaltLakeCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
