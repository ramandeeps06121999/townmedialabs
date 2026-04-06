import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["oklahoma_city"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Oklahoma City",
  description: "TML offers expert Social Media Marketing services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing oklahoma city", "social media marketing agency oklahoma city", "social media marketing company oklahoma city"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-oklahoma-city",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Oklahoma City",
    description: "TML offers expert Social Media Marketing services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-oklahoma-city",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Oklahoma City" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Oklahoma City",
    description: "TML offers expert Social Media Marketing services in Oklahoma City. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInOklahomaCityPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
