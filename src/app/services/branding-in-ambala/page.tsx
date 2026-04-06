import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ambala"];

export const metadata: Metadata = {
  title: "Branding Agency in Ambala",
  description: "TML offers expert Branding services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ambala", "branding agency ambala", "branding company ambala"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ambala",
  },
  openGraph: {
    title: "Branding Agency in Ambala",
    description: "TML offers expert Branding services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ambala",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ambala" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ambala",
    description: "TML offers expert Branding services in Ambala. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAmbalaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
