import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["baltimore"];

export const metadata: Metadata = {
  title: "Branding Agency in Baltimore",
  description: "TML offers expert Branding services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding baltimore", "branding agency baltimore", "branding company baltimore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-baltimore",
  },
  openGraph: {
    title: "Branding Agency in Baltimore",
    description: "TML offers expert Branding services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-baltimore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Baltimore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Baltimore",
    description: "TML offers expert Branding services in Baltimore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBaltimorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
