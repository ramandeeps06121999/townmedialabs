import type { Metadata } from "next";
import { locations } from "@/data/locations";
import { getCityServiceContent } from "@/data/cityServiceContent";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];
const enrichment = getCityServiceContent("website-development", "chandigarh");

export const metadata: Metadata = {
  title: enrichment?.metaTitle || "Best Website Development Agency in Chandigarh",
  description: enrichment?.metaDescription || "TML offers expert Website Development services in Chandigarh. Proven results for 500+ businesses.",
  keywords: enrichment?.keywords || ["website-development chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-chandigarh",
  },
  openGraph: {
    title: enrichment?.metaTitle || "Best Website Development Agency in Chandigarh",
    description: enrichment?.metaDescription || "TML offers expert Website Development services in Chandigarh. Proven results for 500+ businesses.",
    url: "https://townmedialabs.com/services/website-development-in-chandigarh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: enrichment?.metaTitle || "Best Website Development Agency in Chandigarh",
    description: enrichment?.metaDescription || "TML offers expert Website Development services in Chandigarh. Proven results for 500+ businesses.",
    images: ["/og-image.png"],
  },
};

export default function UwebsiteUdevelopmentUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
