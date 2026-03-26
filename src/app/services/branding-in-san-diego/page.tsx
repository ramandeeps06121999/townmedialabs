import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["san_diego"];

export const metadata: Metadata = {
  title: "Best Branding Agency in San Diego | TML Agency",
  description: "TML offers expert branding services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding san diego", "branding agency san diego", "branding company san diego"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-san-diego",
  },
  openGraph: {
    title: "Best Branding Agency in San Diego | TML Agency",
    description: "TML offers expert branding services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-san-diego",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in San Diego | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in San Diego | TML Agency",
    description: "TML offers expert branding services in San Diego. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSanDiegoPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
