import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["cambridge"];

export const metadata: Metadata = {
  title: "Branding Agency in Cambridge",
  description: "TML offers expert Branding services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding cambridge", "branding agency cambridge", "branding company cambridge"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-cambridge",
  },
  openGraph: {
    title: "Branding Agency in Cambridge",
    description: "TML offers expert Branding services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-cambridge",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Cambridge" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Cambridge",
    description: "TML offers expert Branding services in Cambridge. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCambridgePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
