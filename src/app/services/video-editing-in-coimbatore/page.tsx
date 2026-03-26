import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Best Video Editing Agency in Coimbatore | TML Agency",
  description: "TML offers expert video editing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing coimbatore", "video editing agency coimbatore", "video editing company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-coimbatore",
  },
  openGraph: {
    title: "Best Video Editing Agency in Coimbatore | TML Agency",
    description: "TML offers expert video editing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Coimbatore | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Video Editing Agency in Coimbatore | TML Agency",
    description: "TML offers expert video editing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInCoimbatorePage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
