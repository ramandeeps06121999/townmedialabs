import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dubai"];

export const metadata: Metadata = {
  title: "Branding Agency in Dubai",
  description: "TML offers expert Branding services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding dubai", "branding agency dubai", "branding company dubai"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-dubai",
  },
  openGraph: {
    title: "Branding Agency in Dubai",
    description: "TML offers expert Branding services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-dubai",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Dubai",
    description: "TML offers expert Branding services in Dubai. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDubaiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
