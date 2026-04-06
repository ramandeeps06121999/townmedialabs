import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ajman"];

export const metadata: Metadata = {
  title: "Branding Agency in Ajman",
  description: "TML offers expert Branding services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ajman", "branding agency ajman", "branding company ajman"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ajman",
  },
  openGraph: {
    title: "Branding Agency in Ajman",
    description: "TML offers expert Branding services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ajman",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ajman" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ajman",
    description: "TML offers expert Branding services in Ajman. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAjmanPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
