import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Lucknow",
  description: "TML offers expert Video Editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing lucknow", "video editing agency lucknow", "video editing company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-lucknow",
  },
  openGraph: {
    title: "Video Editing Agency in Lucknow",
    description: "TML offers expert Video Editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Lucknow" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Lucknow",
    description: "TML offers expert Video Editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInLucknowPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
