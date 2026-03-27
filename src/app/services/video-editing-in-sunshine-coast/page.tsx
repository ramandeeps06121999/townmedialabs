import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["sunshine_coast"];

export const metadata: Metadata = {
  robots: { index: false, follow: true },
  title: "Best Video Editing Agency in Sunshine Coast | TML Agency",
  description: "TML offers expert video editing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing sunshine coast", "video editing agency sunshine coast", "video editing company sunshine coast"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-sunshine-coast",
  },
  openGraph: {
    title: "Best Video Editing Agency in Sunshine Coast | TML Agency",
    description: "TML offers expert video editing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-sunshine-coast",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Sunshine Coast | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Sunshine Coast | TML Agency",
    description: "TML offers expert video editing services in Sunshine Coast. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInSunshineCoastPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
