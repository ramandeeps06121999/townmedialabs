import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["panchkula"];

export const metadata: Metadata = {
  title: "Branding Agency in Panchkula",
  description: "TML offers expert Branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding panchkula", "branding agency panchkula", "branding company panchkula"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-panchkula",
  },
  openGraph: {
    title: "Branding Agency in Panchkula",
    description: "TML offers expert Branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-panchkula",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Panchkula" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Panchkula",
    description: "TML offers expert Branding services in Panchkula. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPanchkulaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
