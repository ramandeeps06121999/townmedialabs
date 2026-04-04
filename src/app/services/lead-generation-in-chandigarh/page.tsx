import type { Metadata } from "next";
import { locations } from "@/data/locations";
import { getCityServiceContent } from "@/data/cityServiceContent";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chandigarh"];
const enrichment = getCityServiceContent("lead-generation", "chandigarh");

export const metadata: Metadata = {
  title: enrichment?.metaTitle || "Best Lead Generation Agency in Chandigarh | TML Agency",
  description: enrichment?.metaDescription || "TML offers expert Lead Generation services in Chandigarh. Proven results for 500+ businesses.",
  keywords: enrichment?.keywords || ["lead-generation chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/lead-generation-in-chandigarh",
  },
  openGraph: {
    title: enrichment?.metaTitle || "Best Lead Generation Agency in Chandigarh | TML Agency",
    description: enrichment?.metaDescription || "TML offers expert Lead Generation services in Chandigarh. Proven results for 500+ businesses.",
    url: "https://townmedialabs.ca/services/lead-generation-in-chandigarh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Chandigarh | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: enrichment?.metaTitle || "Best Lead Generation Agency in Chandigarh | TML Agency",
    description: enrichment?.metaDescription || "TML offers expert Lead Generation services in Chandigarh. Proven results for 500+ businesses.",
    images: ["/og-image.png"],
  },
};

export default function UleadUgenerationUinUchandigarhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
