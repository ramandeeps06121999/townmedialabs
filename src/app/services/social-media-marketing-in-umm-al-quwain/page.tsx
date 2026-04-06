import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Social Media Marketing Agency in Umm Al Quwain",
  description: "TML offers expert Social Media Marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing umm al quwain", "social media marketing agency umm al quwain", "social media marketing company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-umm-al-quwain",
  },
  openGraph: {
    title: "Social Media Marketing Agency in Umm Al Quwain",
    description: "TML offers expert Social Media Marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Social Media Marketing Agency in Umm Al Quwain",
    description: "TML offers expert Social Media Marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
