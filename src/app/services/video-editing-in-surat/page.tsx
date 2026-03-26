import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Surat | TML Agency",
  description: "TML offers expert video editing services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing surat", "video editing agency surat", "video editing company surat"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-surat",
  },
  openGraph: {
    title: "Best Video Editing Agency in Surat | TML Agency",
    description: "TML offers expert video editing services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Surat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Surat | TML Agency",
    description: "TML offers expert video editing services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
