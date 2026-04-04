import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["edmonton"];

export const metadata: Metadata = {
  title: "Branding Agency in Edmonton | TML Agency",
  description: "TML offers expert branding services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding edmonton", "branding agency edmonton"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-edmonton",
  },
  openGraph: {
    title: "Branding Agency in Edmonton | TML Agency",
    description: "TML offers expert branding services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-edmonton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Edmonton | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Edmonton | TML Agency",
    description: "TML offers expert branding services in Edmonton, Alberta. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
