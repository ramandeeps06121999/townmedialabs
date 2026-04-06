import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["st_louis"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in St. Louis",
  description: "TML offers expert Video Editing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing st. louis", "video editing agency st. louis", "video editing company st. louis"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-st-louis",
  },
  openGraph: {
    title: "Video Editing Agency in St. Louis",
    description: "TML offers expert Video Editing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-st-louis",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in St. Louis" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in St. Louis",
    description: "TML offers expert Video Editing services in St. Louis. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInStLouisPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
