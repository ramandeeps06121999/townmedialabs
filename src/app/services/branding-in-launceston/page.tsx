import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Branding Agency in Launceston",
  description: "TML offers expert Branding services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding launceston", "branding agency launceston", "branding company launceston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-launceston",
  },
  openGraph: {
    title: "Branding Agency in Launceston",
    description: "TML offers expert Branding services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-launceston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Launceston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Launceston",
    description: "TML offers expert Branding services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLauncestonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
