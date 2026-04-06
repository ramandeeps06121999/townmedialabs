import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hamilton"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Hamilton",
  description: "TML offers expert Video Editing services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
  keywords: ["video editing hamilton", "video editing agency hamilton", "video editing hamilton ontario"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-hamilton",
  },
  openGraph: {
    title: "Video Editing Agency in Hamilton",
    description: "TML offers expert Video Editing services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-hamilton",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Hamilton" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Hamilton",
    description: "TML offers expert Video Editing services in Hamilton, Ontario. Proven results for businesses across Canada. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInHamiltonPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
