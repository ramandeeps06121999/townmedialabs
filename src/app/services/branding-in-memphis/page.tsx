import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["memphis"];

export const metadata: Metadata = {
  title: "Branding Agency in Memphis",
  description: "TML offers expert Branding services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding memphis", "branding agency memphis", "branding company memphis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-memphis",
  },
  openGraph: {
    title: "Branding Agency in Memphis",
    description: "TML offers expert Branding services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-memphis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Memphis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Memphis",
    description: "TML offers expert Branding services in Memphis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInMemphisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
