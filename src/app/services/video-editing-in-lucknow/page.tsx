import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["lucknow"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Lucknow | TML Agency",
  description: "TML offers expert video editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing lucknow", "video editing agency lucknow", "video editing company lucknow"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/video-editing-in-lucknow",
  },
  openGraph: {
    title: "Video Editing Agency in Lucknow | TML Agency",
    description: "TML offers expert video editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/video-editing-in-lucknow",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Lucknow | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Lucknow | TML Agency",
    description: "TML offers expert video editing services in Lucknow. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInLucknowPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
