import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["glasgow"];

export const metadata: Metadata = {
  title: "Branding Agency in Glasgow",
  description: "TML offers expert Branding services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding glasgow", "branding agency glasgow", "branding company glasgow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-glasgow",
  },
  openGraph: {
    title: "Branding Agency in Glasgow",
    description: "TML offers expert Branding services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-glasgow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Glasgow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Glasgow",
    description: "TML offers expert Branding services in Glasgow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInGlasgowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
