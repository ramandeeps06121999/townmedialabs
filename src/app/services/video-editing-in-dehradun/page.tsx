import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Video Editing Agency in Dehradun",
  description: "TML offers expert Video Editing services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["video editing dehradun", "video editing agency dehradun", "video editing company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.com/services/video-editing-in-dehradun",
  },
  openGraph: {
    title: "Video Editing Agency in Dehradun",
    description: "TML offers expert Video Editing services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/video-editing-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Video Editing Agency in Dehradun" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Video Editing Agency in Dehradun",
    description: "TML offers expert Video Editing services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function VideoeditingInDehradunPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="video-editing"
      serviceName="Video Editing"
    />
  );
}
