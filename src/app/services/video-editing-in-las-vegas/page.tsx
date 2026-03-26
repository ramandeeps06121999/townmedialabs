import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["las_vegas"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Las Vegas | TML Agency",
  description: "TML offers expert video editing services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing las vegas", "video editing agency las vegas", "video editing company las vegas"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-las-vegas",
  },
  openGraph: {
    title: "Best Video Editing Agency in Las Vegas | TML Agency",
    description: "TML offers expert video editing services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-las-vegas",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Las Vegas | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Las Vegas | TML Agency",
    description: "TML offers expert video editing services in Las Vegas. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoEditingInLasVegasPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
