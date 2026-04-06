import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["minneapolis"];

export const metadata: Metadata = {
  title: "Branding Agency in Minneapolis",
  description: "TML offers expert Branding services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding minneapolis", "branding agency minneapolis", "branding company minneapolis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-minneapolis",
  },
  openGraph: {
    title: "Branding Agency in Minneapolis",
    description: "TML offers expert Branding services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-minneapolis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Minneapolis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Minneapolis",
    description: "TML offers expert Branding services in Minneapolis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMinneapolisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
