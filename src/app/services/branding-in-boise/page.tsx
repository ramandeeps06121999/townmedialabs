import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["boise"];

export const metadata: Metadata = {
  title: "Branding Agency in Boise",
  description: "TML offers expert Branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding boise", "branding agency boise", "branding company boise"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-boise",
  },
  openGraph: {
    title: "Branding Agency in Boise",
    description: "TML offers expert Branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-boise",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Boise" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Boise",
    description: "TML offers expert Branding services in Boise. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBoisePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
