import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["punjab"];

export const metadata: Metadata = {
  title: "Branding Agency in Punjab",
  description: "TML offers expert Branding services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding punjab", "branding agency punjab", "branding company punjab"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-punjab",
  },
  openGraph: {
    title: "Branding Agency in Punjab",
    description: "TML offers expert Branding services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-punjab",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Punjab" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Punjab",
    description: "TML offers expert Branding services in Punjab. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPunjabPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
