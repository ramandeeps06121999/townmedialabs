import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Branding Agency in Jalandhar",
  description: "TML offers expert Branding services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding jalandhar", "branding agency jalandhar", "branding company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-jalandhar",
  },
  openGraph: {
    title: "Branding Agency in Jalandhar",
    description: "TML offers expert Branding services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Jalandhar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Jalandhar",
    description: "TML offers expert Branding services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInJalandharPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
