import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["karnal"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Karnal",
  description: "TML offers expert Video Editing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing karnal", "video editing agency karnal", "video editing company karnal"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-karnal",
  },
  openGraph: {
    title: "Video Editing Agency in Karnal",
    description: "TML offers expert Video Editing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-karnal",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Karnal" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Karnal",
    description: "TML offers expert Video Editing services in Karnal. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInKarnalPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
