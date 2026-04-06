import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["richmond"];

export const metadata: Metadata = {
  title: "Branding Agency in Richmond",
  description: "TML offers expert Branding services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding richmond", "branding agency richmond", "branding company richmond"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-richmond",
  },
  openGraph: {
    title: "Branding Agency in Richmond",
    description: "TML offers expert Branding services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-richmond",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Richmond" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Richmond",
    description: "TML offers expert Branding services in Richmond. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInRichmondPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
