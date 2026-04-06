import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Branding & Packaging Agency in Jalandhar",
  description: "TML offers expert Branding and Packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding and packaging jalandhar", "branding and packaging agency jalandhar", "branding and packaging company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-packaging-in-jalandhar",
  },
  openGraph: {
    title: "Branding & Packaging Agency in Jalandhar",
    description: "TML offers expert Branding and Packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-packaging-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding & Packaging Agency in Jalandhar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding & Packaging Agency in Jalandhar",
    description: "TML offers expert Branding and Packaging services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingpackagingInJalandharPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding-packaging"
      serviceName="Branding & Packaging"
    />
  );
}
