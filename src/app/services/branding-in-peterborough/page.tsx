import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["peterborough"];

export const metadata: Metadata = {
  title: "Branding Agency in Peterborough",
  description: "TML offers expert Branding services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding peterborough", "branding agency peterborough", "branding company peterborough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-peterborough",
  },
  openGraph: {
    title: "Branding Agency in Peterborough",
    description: "TML offers expert Branding services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-peterborough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Peterborough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Peterborough",
    description: "TML offers expert Branding services in Peterborough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInPeterboroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
