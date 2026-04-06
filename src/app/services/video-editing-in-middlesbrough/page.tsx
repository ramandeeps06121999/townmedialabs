import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["middlesbrough"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Middlesbrough",
  description: "TML offers expert Video Editing services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing middlesbrough", "video editing agency middlesbrough", "video editing company middlesbrough"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-middlesbrough",
  },
  openGraph: {
    title: "Video Editing Agency in Middlesbrough",
    description: "TML offers expert Video Editing services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-middlesbrough",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Middlesbrough" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Middlesbrough",
    description: "TML offers expert Video Editing services in Middlesbrough. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInMiddlesbroughPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
