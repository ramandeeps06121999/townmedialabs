import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Branding Agency in Oklahoma City",
  description: "TML offers expert Branding services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["branding oklahoma city", "branding agency oklahoma city", "branding company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/branding-in-oklahoma-city",
  },
  openGraph: {
    title: "Branding Agency in Oklahoma City",
    description: "TML offers expert Branding services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/branding-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Branding Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Branding Agency in Oklahoma City",
    description: "TML offers expert Branding services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function BrandingInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="branding"
      serviceName="Branding"
    />
  );
}
