import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jaipur"];

export const metadata: Metadata = {
  title: "Branding Agency in Jaipur",
  description: "TML offers expert Branding services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding jaipur", "branding agency jaipur", "branding company jaipur"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-jaipur",
  },
  openGraph: {
    title: "Branding Agency in Jaipur",
    description: "TML offers expert Branding services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-jaipur",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Jaipur" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Jaipur",
    description: "TML offers expert Branding services in Jaipur. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInJaipurPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
