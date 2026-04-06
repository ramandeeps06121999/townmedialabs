import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Branding Agency in Ahmedabad",
  description: "TML offers expert Branding services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding ahmedabad", "branding agency ahmedabad", "branding company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-ahmedabad",
  },
  openGraph: {
    title: "Branding Agency in Ahmedabad",
    description: "TML offers expert Branding services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Ahmedabad",
    description: "TML offers expert Branding services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
