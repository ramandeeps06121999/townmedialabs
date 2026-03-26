import type { Metadata } from "next";
import { locations } from "@/data/locations";
import { getCityServiceContent } from "@/data/cityServiceContent";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["chandigarh"];
const enrichment = getCityServiceContent("video-editing", "chandigarh");

export const metadata: Metadata = {
  title: enrichment?.metaTitle || "Best Video Editing Agency in Chandigarh | TML Agency",
  description: enrichment?.metaDescription || "TML offers expert Video Editing services in Chandigarh. Proven results for 500+ businesses.",
  keywords: enrichment?.keywords || ["video-editing chandigarh"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-chandigarh",
  },
  openGraph: {
    title: enrichment?.metaTitle || "Best Video Editing Agency in Chandigarh | TML Agency",
    description: enrichment?.metaDescription || "TML offers expert Video Editing services in Chandigarh. Proven results for 500+ businesses.",
    url: "https://townmedialabs.com/services/video-editing-in-chandigarh",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Chandigarh | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: enrichment?.metaTitle || "Best Video Editing Agency in Chandigarh | TML Agency",
    description: enrichment?.metaDescription || "TML offers expert Video Editing services in Chandigarh. Proven results for 500+ businesses.",
    images: ["/og-image.png"],
  },
};

export default function UvideoUeditingUinUchandigarhPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
