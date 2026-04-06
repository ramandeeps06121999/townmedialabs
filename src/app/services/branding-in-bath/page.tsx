import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bath"];

export const metadata: Metadata = {
  title: "Branding Agency in Bath",
  description: "TML offers expert Branding services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bath", "branding agency bath", "branding company bath"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bath",
  },
  openGraph: {
    title: "Branding Agency in Bath",
    description: "TML offers expert Branding services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bath",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bath" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Bath",
    description: "TML offers expert Branding services in Bath. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBathPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
