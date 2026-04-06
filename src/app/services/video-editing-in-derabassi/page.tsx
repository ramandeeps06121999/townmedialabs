import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["derabassi"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Derabassi",
  description: "TML offers expert Video Editing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing derabassi", "video editing agency derabassi", "video editing company derabassi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-derabassi",
  },
  openGraph: {
    title: "Video Editing Agency in Derabassi",
    description: "TML offers expert Video Editing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-derabassi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Derabassi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Derabassi",
    description: "TML offers expert Video Editing services in Derabassi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInDerabassiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
