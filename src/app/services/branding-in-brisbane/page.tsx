import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["brisbane"];

export const metadata: Metadata = {
  title: "Branding Agency in Brisbane",
  description: "TML offers expert Branding services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding brisbane", "branding agency brisbane", "branding company brisbane"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-brisbane",
  },
  openGraph: {
    title: "Branding Agency in Brisbane",
    description: "TML offers expert Branding services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-brisbane",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Brisbane" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Brisbane",
    description: "TML offers expert Branding services in Brisbane. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInBrisbanePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
