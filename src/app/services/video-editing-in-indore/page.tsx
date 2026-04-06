import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["indore"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Indore",
  description: "TML offers expert Video Editing services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing indore", "video editing agency indore", "video editing company indore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-indore",
  },
  openGraph: {
    title: "Video Editing Agency in Indore",
    description: "TML offers expert Video Editing services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-indore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Indore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Indore",
    description: "TML offers expert Video Editing services in Indore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInIndorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
