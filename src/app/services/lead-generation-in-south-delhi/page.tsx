import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["south_delhi"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in South Delhi",
  description: "TML offers expert Lead Generation services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation south delhi", "lead generation agency south delhi", "lead generation company south delhi"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-south-delhi",
  },
  openGraph: {
    title: "Lead Generation Agency in South Delhi",
    description: "TML offers expert Lead Generation services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-south-delhi",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in South Delhi" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in South Delhi",
    description: "TML offers expert Lead Generation services in South Delhi. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadgenerationInSouthDelhiPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
