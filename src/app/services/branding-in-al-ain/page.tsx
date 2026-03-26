import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["al_ain"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Al Ain | TML Agency",
  description: "TML offers expert branding services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding al ain", "branding agency al ain", "branding company al ain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-al-ain",
  },
  openGraph: {
    title: "Best Branding Agency in Al Ain | TML Agency",
    description: "TML offers expert branding services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-al-ain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Al Ain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Al Ain | TML Agency",
    description: "TML offers expert branding services in Al Ain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInAlAinPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
