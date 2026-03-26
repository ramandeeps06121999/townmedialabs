import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Best Social Media Marketing Agency in Umm Al Quwain | TML Agency",
  description: "TML offers expert social media marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["social media marketing umm al quwain", "social media marketing agency umm al quwain", "social media marketing company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/social-media-marketing-in-umm-al-quwain",
  },
  openGraph: {
    title: "Best Social Media Marketing Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert social media marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/social-media-marketing-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Social Media Marketing Agency in Umm Al Quwain | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Social Media Marketing Agency in Umm Al Quwain | TML Agency",
    description: "TML offers expert social media marketing services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function SocialMediaInUmmAlQuwainPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="social-media"
      serviceName="Social Media Marketing"
    />
  );
}
