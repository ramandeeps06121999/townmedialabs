import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  title: "Branding Agency in Sunshine Coast",
  description: "TML offers expert Branding services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sunshine coast", "branding agency sunshine coast", "branding company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sunshine-coast",
  },
  openGraph: {
    title: "Branding Agency in Sunshine Coast",
    description: "TML offers expert Branding services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sunshine Coast" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Sunshine Coast",
    description: "TML offers expert Branding services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSunshineCoastPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
