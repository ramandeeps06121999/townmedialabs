import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Ras Al Khaimah | TML Agency",
  description: "TML offers expert branding services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ras al khaimah", "branding agency ras al khaimah", "branding company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Best Branding Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert branding services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ras Al Khaimah | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Ras Al Khaimah | TML Agency",
    description: "TML offers expert branding services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInRasAlKhaimahPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
