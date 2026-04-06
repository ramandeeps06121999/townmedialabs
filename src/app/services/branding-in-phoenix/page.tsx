import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["phoenix"];

export const metadata: Metadata = {
  title: "Branding Agency in Phoenix",
  description: "TML offers expert Branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding phoenix", "branding agency phoenix", "branding company phoenix"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-phoenix",
  },
  openGraph: {
    title: "Branding Agency in Phoenix",
    description: "TML offers expert Branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-phoenix",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Phoenix" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Phoenix",
    description: "TML offers expert Branding services in Phoenix. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPhoenixPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
