import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["houston"];

export const metadata: Metadata = {
  title: "Branding Agency in Houston",
  description: "TML offers expert Branding services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding houston", "branding agency houston", "branding company houston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-houston",
  },
  openGraph: {
    title: "Branding Agency in Houston",
    description: "TML offers expert Branding services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-houston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Houston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Houston",
    description: "TML offers expert Branding services in Houston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInHoustonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
