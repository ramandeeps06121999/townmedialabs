import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["philadelphia"];

export const metadata: Metadata = {
  title: "Branding Agency in Philadelphia",
  description: "TML offers expert Branding services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding philadelphia", "branding agency philadelphia", "branding company philadelphia"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-philadelphia",
  },
  openGraph: {
    title: "Branding Agency in Philadelphia",
    description: "TML offers expert Branding services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-philadelphia",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Philadelphia" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Philadelphia",
    description: "TML offers expert Branding services in Philadelphia. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPhiladelphiaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
