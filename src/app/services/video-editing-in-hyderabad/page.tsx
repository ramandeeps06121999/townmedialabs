import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["hyderabad"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Hyderabad",
  description: "TML offers expert Video Editing services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing hyderabad", "video editing agency hyderabad", "video editing company hyderabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-hyderabad",
  },
  openGraph: {
    title: "Video Editing Agency in Hyderabad",
    description: "TML offers expert Video Editing services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-hyderabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Hyderabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Hyderabad",
    description: "TML offers expert Video Editing services in Hyderabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInHyderabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
