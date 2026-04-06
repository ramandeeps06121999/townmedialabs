import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["jalandhar"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Jalandhar",
  description: "TML offers expert Video Editing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing jalandhar", "video editing agency jalandhar", "video editing company jalandhar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-jalandhar",
  },
  openGraph: {
    title: "Video Editing Agency in Jalandhar",
    description: "TML offers expert Video Editing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-jalandhar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Jalandhar" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Jalandhar",
    description: "TML offers expert Video Editing services in Jalandhar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInJalandharPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
