import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["luton_uk"];

export const metadata: Metadata = {
  title: "Branding Agency in Luton",
  description: "TML offers expert Branding services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding luton", "branding agency luton", "branding company luton"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-luton-uk",
  },
  openGraph: {
    title: "Branding Agency in Luton",
    description: "TML offers expert Branding services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-luton-uk",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Luton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Luton",
    description: "TML offers expert Branding services in Luton. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLutonUkPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
