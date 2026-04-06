import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["bristol"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Bristol",
  description: "TML offers expert Video Editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing bristol", "video editing agency bristol", "video editing company bristol"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-bristol",
  },
  openGraph: {
    title: "Video Editing Agency in Bristol",
    description: "TML offers expert Video Editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-bristol",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Bristol" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Bristol",
    description: "TML offers expert Video Editing services in Bristol. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
  robots: { index: false, follow: true },
};

export default function VideoEditingInBristolPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
