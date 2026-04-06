import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["coimbatore"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Coimbatore",
  description: "TML offers expert Social Media Marketing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing coimbatore", "social media marketing agency coimbatore", "social media marketing company coimbatore"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-coimbatore",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Coimbatore",
    description: "TML offers expert Social Media Marketing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-coimbatore",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Coimbatore" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Coimbatore",
    description: "TML offers expert Social Media Marketing services in Coimbatore. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialmediaInCoimbatorePage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
