import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Branding Agency in Canberra | TML Agency",
  description: "TML offers expert branding services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding canberra", "branding agency canberra", "branding company canberra"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-canberra",
  },
  openGraph: {
    title: "Branding Agency in Canberra | TML Agency",
    description: "TML offers expert branding services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Canberra | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Canberra | TML Agency",
    description: "TML offers expert branding services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCanberraPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
