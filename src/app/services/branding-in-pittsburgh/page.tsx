import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["pittsburgh"];

export const metadata: Metadata = {
  title: "Branding Agency in Pittsburgh",
  description: "TML offers expert Branding services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding pittsburgh", "branding agency pittsburgh", "branding company pittsburgh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-pittsburgh",
  },
  openGraph: {
    title: "Branding Agency in Pittsburgh",
    description: "TML offers expert Branding services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-pittsburgh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Pittsburgh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Pittsburgh",
    description: "TML offers expert Branding services in Pittsburgh. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPittsburghPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
