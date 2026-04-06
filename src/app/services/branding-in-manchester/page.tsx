import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["manchester"];

export const metadata: Metadata = {
  title: "Branding Agency in Manchester",
  description: "TML offers expert Branding services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding manchester", "branding agency manchester", "branding company manchester"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-manchester",
  },
  openGraph: {
    title: "Branding Agency in Manchester",
    description: "TML offers expert Branding services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-manchester",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Manchester" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Manchester",
    description: "TML offers expert Branding services in Manchester. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInManchesterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
