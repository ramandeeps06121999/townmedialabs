import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["preston"];

export const metadata: Metadata = {
  title: "Branding Agency in Preston",
  description: "TML offers expert Branding services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding preston", "branding agency preston", "branding company preston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-preston",
  },
  openGraph: {
    title: "Branding Agency in Preston",
    description: "TML offers expert Branding services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-preston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Preston" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Preston",
    description: "TML offers expert Branding services in Preston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPrestonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
