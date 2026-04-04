import type { Metadata } from "next";
import { locations } from "@/data/locations";
import { getCityServiceContent } from "@/data/cityServiceContent";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chandigarh"];
const enrichment = getCityServiceContent("google-ads", "chandigarh");

export const metadata: Metadata = {
  title: enrichment?.metaTitle || "Best Google Ads Agency in Chandigarh | TML Agency",
  description: enrichment?.metaDescription || "TML offers expert Google Ads services in Chandigarh. Proven results for 500+ businesses.",
  keywords: enrichment?.keywords || ["google-ads chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/google-ads-in-chandigarh",
  },
  openGraph: {
    title: enrichment?.metaTitle || "Best Google Ads Agency in Chandigarh | TML Agency",
    description: enrichment?.metaDescription || "TML offers expert Google Ads services in Chandigarh. Proven results for 500+ businesses.",
    url: "https://townmedialabs.ca/services/google-ads-in-chandigarh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Google Ads Agency in Chandigarh | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: enrichment?.metaTitle || "Best Google Ads Agency in Chandigarh | TML Agency",
    description: enrichment?.metaDescription || "TML offers expert Google Ads services in Chandigarh. Proven results for 500+ businesses.",
    images: ["/og-image.png"],
  },
};

export default function UgoogleUadsUinUchandigarhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="google-ads"
      serviceName="Google Ads"
    />
  );
}
