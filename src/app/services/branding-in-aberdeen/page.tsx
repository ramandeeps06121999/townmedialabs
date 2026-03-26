import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["aberdeen"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Aberdeen | TML Agency",
  description: "TML offers expert branding services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding aberdeen", "branding agency aberdeen", "branding company aberdeen"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-aberdeen",
  },
  openGraph: {
    title: "Best Branding Agency in Aberdeen | TML Agency",
    description: "TML offers expert branding services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-aberdeen",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Aberdeen | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Aberdeen | TML Agency",
    description: "TML offers expert branding services in Aberdeen. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAberdeenPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
