import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["canberra"];

export const metadata: Metadata = {
  title: "Branding Agency in Canberra",
  description: "TML offers expert Branding services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding canberra", "branding agency canberra", "branding company canberra"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-canberra",
  },
  openGraph: {
    title: "Branding Agency in Canberra",
    description: "TML offers expert Branding services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-canberra",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Canberra" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Canberra",
    description: "TML offers expert Branding services in Canberra. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCanberraPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
