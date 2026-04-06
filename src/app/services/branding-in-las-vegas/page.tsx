import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Branding Agency in Las Vegas",
  description: "TML offers expert Branding services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding las vegas", "branding agency las vegas", "branding company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-las-vegas",
  },
  openGraph: {
    title: "Branding Agency in Las Vegas",
    description: "TML offers expert Branding services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Las Vegas" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Las Vegas",
    description: "TML offers expert Branding services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInLasVegasPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
