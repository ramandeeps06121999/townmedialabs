import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bendigo"];

export const metadata: Metadata = {
  title: "Branding Agency in Bendigo",
  description: "TML offers expert Branding services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding bendigo", "branding agency bendigo", "branding company bendigo"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-bendigo",
  },
  openGraph: {
    title: "Branding Agency in Bendigo",
    description: "TML offers expert Branding services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-bendigo",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Bendigo" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Bendigo",
    description: "TML offers expert Branding services in Bendigo. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBendigoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
