import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bhopal"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bhopal",
  description: "TML offers expert Video Editing services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bhopal", "video editing agency bhopal", "video editing company bhopal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-bhopal",
  },
  openGraph: {
    title: "Video Editing Agency in Bhopal",
    description: "TML offers expert Video Editing services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-bhopal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bhopal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bhopal",
    description: "TML offers expert Video Editing services in Bhopal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInBhopalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
