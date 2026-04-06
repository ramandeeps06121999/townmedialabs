import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ahmedabad"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Ahmedabad",
  description: "TML offers expert Video Editing services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing ahmedabad", "video editing agency ahmedabad", "video editing company ahmedabad"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-ahmedabad",
  },
  openGraph: {
    title: "Video Editing Agency in Ahmedabad",
    description: "TML offers expert Video Editing services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-ahmedabad",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Ahmedabad" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Ahmedabad",
    description: "TML offers expert Video Editing services in Ahmedabad. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInAhmedabadPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
