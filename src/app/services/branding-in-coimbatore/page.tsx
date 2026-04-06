import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Branding Agency in Coimbatore",
  description: "TML offers expert Branding services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding coimbatore", "branding agency coimbatore", "branding company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-coimbatore",
  },
  openGraph: {
    title: "Branding Agency in Coimbatore",
    description: "TML offers expert Branding services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Coimbatore",
    description: "TML offers expert Branding services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
