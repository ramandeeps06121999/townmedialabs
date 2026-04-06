import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["detroit"];

export const metadata: Metadata = {
  title: "Branding Agency in Detroit",
  description: "TML offers expert Branding services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding detroit", "branding agency detroit", "branding company detroit"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-detroit",
  },
  openGraph: {
    title: "Branding Agency in Detroit",
    description: "TML offers expert Branding services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-detroit",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Detroit" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Detroit",
    description: "TML offers expert Branding services in Detroit. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDetroitPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
