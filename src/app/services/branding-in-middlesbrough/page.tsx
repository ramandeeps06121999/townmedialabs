import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Branding Agency in Middlesbrough",
  description: "TML offers expert Branding services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding middlesbrough", "branding agency middlesbrough", "branding company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-middlesbrough",
  },
  openGraph: {
    title: "Branding Agency in Middlesbrough",
    description: "TML offers expert Branding services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Middlesbrough",
    description: "TML offers expert Branding services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
