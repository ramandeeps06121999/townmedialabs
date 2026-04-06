import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["noida"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Noida",
  description: "TML offers expert Video Editing services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing noida", "video editing agency noida", "video editing company noida"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-noida",
  },
  openGraph: {
    title: "Video Editing Agency in Noida",
    description: "TML offers expert Video Editing services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-noida",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Noida" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Noida",
    description: "TML offers expert Video Editing services in Noida. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInNoidaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
