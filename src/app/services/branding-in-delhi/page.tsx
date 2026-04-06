import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["delhi"];

export const metadata: Metadata = {
  title: "Branding Agency in Delhi",
  description: "TML offers expert Branding services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding delhi", "branding agency delhi", "branding company delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-delhi",
  },
  openGraph: {
    title: "Branding Agency in Delhi",
    description: "TML offers expert Branding services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Delhi",
    description: "TML offers expert Branding services in Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
