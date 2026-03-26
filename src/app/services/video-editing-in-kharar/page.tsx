import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["kharar"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Kharar | TML Agency",
  description: "TML offers expert video editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing kharar", "video editing agency kharar", "video editing company kharar"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-kharar",
  },
  openGraph: {
    title: "Best Video Editing Agency in Kharar | TML Agency",
    description: "TML offers expert video editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-kharar",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Kharar | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Kharar | TML Agency",
    description: "TML offers expert video editing services in Kharar. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInKhararPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
