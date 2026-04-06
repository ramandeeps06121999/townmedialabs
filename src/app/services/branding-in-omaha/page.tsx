import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["omaha"];

export const metadata: Metadata = {
  title: "Branding Agency in Omaha",
  description: "TML offers expert Branding services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding omaha", "branding agency omaha", "branding company omaha"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-omaha",
  },
  openGraph: {
    title: "Branding Agency in Omaha",
    description: "TML offers expert Branding services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-omaha",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Omaha" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Omaha",
    description: "TML offers expert Branding services in Omaha. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInOmahaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
