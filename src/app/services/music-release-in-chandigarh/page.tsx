import type { Metadata } from "next";
import { locations } from "@/data/locations";
import { getCityServiceContent } from "@/data/cityServiceContent";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["chandigarh"];
const enrichment = getCityServiceContent("music-release", "chandigarh");

export const metadata: Metadata = {
  title: enrichment?.metaTitle || "Best Music Release & Promotion Agency in Chandigarh",
  description: enrichment?.metaDescription || "TML offers expert Music Release & Promotion services in Chandigarh. Proven results for 500+ businesses.",
  keywords: enrichment?.keywords || ["music-release chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/music-release-in-chandigarh",
  },
  openGraph: {
    title: enrichment?.metaTitle || "Best Music Release & Promotion Agency in Chandigarh",
    description: enrichment?.metaDescription || "TML offers expert Music Release & Promotion services in Chandigarh. Proven results for 500+ businesses.",
    url: "https://townmedialabs.com/services/music-release-in-chandigarh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Music Release & Promotion Agency in Chandigarh" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: enrichment?.metaTitle || "Best Music Release & Promotion Agency in Chandigarh",
    description: enrichment?.metaDescription || "TML offers expert Music Release & Promotion services in Chandigarh. Proven results for 500+ businesses.",
    images: ["/og-image.png"],
  },
};

export default function UmusicUreleaseUinUchandigarhPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="music-release"
      serviceName="Music Release & Promotion"
    />
  );
}
