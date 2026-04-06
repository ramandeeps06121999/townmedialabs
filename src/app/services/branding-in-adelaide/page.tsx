import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["adelaide"];

export const metadata: Metadata = {
  title: "Branding Agency in Adelaide",
  description: "TML offers expert Branding services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding adelaide", "branding agency adelaide", "branding company adelaide"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-adelaide",
  },
  openGraph: {
    title: "Branding Agency in Adelaide",
    description: "TML offers expert Branding services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-adelaide",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Adelaide" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Adelaide",
    description: "TML offers expert Branding services in Adelaide. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAdelaidePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
