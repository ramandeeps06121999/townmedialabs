import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["queenstown"];

export const metadata: Metadata = {
  title: "Branding Agency in Queenstown",
  description: "TML offers expert Branding services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
  keywords: ["branding queenstown", "branding agency queenstown", "branding queenstown nz"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-queenstown",
  },
  openGraph: {
    title: "Branding Agency in Queenstown",
    description: "TML offers expert Branding services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-queenstown",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Queenstown" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Queenstown",
    description: "TML offers expert Branding services in Queenstown, New Zealand. Proven results for businesses across NZ. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInQueenstownPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
