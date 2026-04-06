import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["fort_worth"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Video Editing Agency in Fort Worth",
  description: "TML offers expert Video Editing services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing fort worth", "video editing agency fort worth", "video editing company fort worth"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-fort-worth",
  },
  openGraph: {
    title: "Video Editing Agency in Fort Worth",
    description: "TML offers expert Video Editing services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-fort-worth",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Fort Worth" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Fort Worth",
    description: "TML offers expert Video Editing services in Fort Worth. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInFortWorthPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
