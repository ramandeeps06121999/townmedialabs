import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ipswich"];

export const metadata: Metadata = {
  title: "Branding Agency in Ipswich",
  description: "TML offers expert Branding services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ipswich", "branding agency ipswich", "branding company ipswich"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ipswich",
  },
  openGraph: {
    title: "Branding Agency in Ipswich",
    description: "TML offers expert Branding services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ipswich",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ipswich" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ipswich",
    description: "TML offers expert Branding services in Ipswich. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInIpswichPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
