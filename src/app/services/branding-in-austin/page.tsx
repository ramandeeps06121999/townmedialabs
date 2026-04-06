import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["austin"];

export const metadata: Metadata = {
  title: "Branding Agency in Austin",
  description: "TML offers expert Branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding austin", "branding agency austin", "branding company austin"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-austin",
  },
  openGraph: {
    title: "Branding Agency in Austin",
    description: "TML offers expert Branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-austin",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Austin" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Austin",
    description: "TML offers expert Branding services in Austin. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAustinPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
