import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["abu_dhabi"];

export const metadata: Metadata = {
  title: "Branding Agency in Abu Dhabi",
  description: "TML offers expert Branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding abu dhabi", "branding agency abu dhabi", "branding company abu dhabi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-abu-dhabi",
  },
  openGraph: {
    title: "Branding Agency in Abu Dhabi",
    description: "TML offers expert Branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-abu-dhabi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Abu Dhabi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Abu Dhabi",
    description: "TML offers expert Branding services in Abu Dhabi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAbuDhabiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
