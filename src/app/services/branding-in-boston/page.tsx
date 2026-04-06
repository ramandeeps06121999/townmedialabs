import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["boston"];

export const metadata: Metadata = {
  title: "Branding Agency in Boston",
  description: "TML offers expert Branding services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding boston", "branding agency boston", "branding company boston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-boston",
  },
  openGraph: {
    title: "Branding Agency in Boston",
    description: "TML offers expert Branding services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-boston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Boston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Boston",
    description: "TML offers expert Branding services in Boston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBostonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
