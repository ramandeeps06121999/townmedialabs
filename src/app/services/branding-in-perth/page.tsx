import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["perth"];

export const metadata: Metadata = {
  title: "Branding Agency in Perth",
  description: "TML offers expert Branding services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding perth", "branding agency perth", "branding company perth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-perth",
  },
  openGraph: {
    title: "Branding Agency in Perth",
    description: "TML offers expert Branding services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-perth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Perth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Perth",
    description: "TML offers expert Branding services in Perth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPerthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
