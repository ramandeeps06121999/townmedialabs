import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "SEO Agency in Oklahoma City | TML Agency",
  description: "TML offers expert seo services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["seo oklahoma city", "seo agency oklahoma city", "seo company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/seo-in-oklahoma-city",
  },
  openGraph: {
    title: "SEO Agency in Oklahoma City | TML Agency",
    description: "TML offers expert seo services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/seo-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best SEO Agency in Oklahoma City | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "SEO Agency in Oklahoma City | TML Agency",
    description: "TML offers expert seo services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SeoInOklahomaCityPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="seo"
      serviceName="SEO"
    />
  );
}
