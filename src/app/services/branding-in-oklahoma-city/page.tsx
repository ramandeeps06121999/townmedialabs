import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Best Branding Agency in Oklahoma City | TML Agency",
  description: "TML offers expert branding services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding oklahoma city", "branding agency oklahoma city", "branding company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-oklahoma-city",
  },
  openGraph: {
    title: "Best Branding Agency in Oklahoma City | TML Agency",
    description: "TML offers expert branding services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Oklahoma City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Branding Agency in Oklahoma City | TML Agency",
    description: "TML offers expert branding services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
