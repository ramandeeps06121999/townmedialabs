import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Branding Agency in Dehradun | TML Agency",
  description: "TML offers expert branding services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding dehradun", "branding agency dehradun", "branding company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/branding-in-dehradun",
  },
  openGraph: {
    title: "Branding Agency in Dehradun | TML Agency",
    description: "TML offers expert branding services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/branding-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Dehradun | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Dehradun | TML Agency",
    description: "TML offers expert branding services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInDehradunPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
