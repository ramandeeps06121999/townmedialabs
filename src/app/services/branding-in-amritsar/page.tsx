import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["amritsar"];

export const metadata: Metadata = {
  title: "Branding Agency in Amritsar",
  description: "TML offers expert Branding services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding amritsar", "branding agency amritsar", "branding company amritsar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-amritsar",
  },
  openGraph: {
    title: "Branding Agency in Amritsar",
    description: "TML offers expert Branding services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-amritsar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Amritsar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Amritsar",
    description: "TML offers expert Branding services in Amritsar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAmritsarPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
