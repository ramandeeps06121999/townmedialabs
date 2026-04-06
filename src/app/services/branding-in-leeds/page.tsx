import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["leeds"];

export const metadata: Metadata = {
  title: "Branding Agency in Leeds",
  description: "TML offers expert Branding services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding leeds", "branding agency leeds", "branding company leeds"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-leeds",
  },
  openGraph: {
    title: "Branding Agency in Leeds",
    description: "TML offers expert Branding services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-leeds",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Leeds" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Leeds",
    description: "TML offers expert Branding services in Leeds. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLeedsPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
