import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sacramento"];

export const metadata: Metadata = {
  title: "Branding Agency in Sacramento",
  description: "TML offers expert Branding services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding sacramento", "branding agency sacramento", "branding company sacramento"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-sacramento",
  },
  openGraph: {
    title: "Branding Agency in Sacramento",
    description: "TML offers expert Branding services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-sacramento",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Sacramento" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Sacramento",
    description: "TML offers expert Branding services in Sacramento. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInSacramentoPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
