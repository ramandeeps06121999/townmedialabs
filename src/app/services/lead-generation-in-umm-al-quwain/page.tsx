import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["umm_al_quwain"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Umm Al Quwain",
  description: "TML offers expert Lead Generation services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation umm al quwain", "lead generation agency umm al quwain", "lead generation company umm al quwain"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-umm-al-quwain",
  },
  openGraph: {
    title: "Lead Generation Agency in Umm Al Quwain",
    description: "TML offers expert Lead Generation services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-umm-al-quwain",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Umm Al Quwain" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Umm Al Quwain",
    description: "TML offers expert Lead Generation services in Umm Al Quwain. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInUmmAlQuwainPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
