import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["swansea"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Swansea",
  description: "TML offers expert Video Editing services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing swansea", "video editing agency swansea", "video editing company swansea"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-swansea",
  },
  openGraph: {
    title: "Video Editing Agency in Swansea",
    description: "TML offers expert Video Editing services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-swansea",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Swansea" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Swansea",
    description: "TML offers expert Video Editing services in Swansea. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInSwanseaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
