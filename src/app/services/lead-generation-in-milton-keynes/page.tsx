import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Lead Generation Agency in Milton Keynes",
  description: "TML offers expert Lead Generation services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["lead generation milton keynes", "lead generation agency milton keynes", "lead generation company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/lead-generation-in-milton-keynes",
  },
  openGraph: {
    title: "Lead Generation Agency in Milton Keynes",
    description: "TML offers expert Lead Generation services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/lead-generation-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Lead Generation Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Lead Generation Agency in Milton Keynes",
    description: "TML offers expert Lead Generation services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function LeadGenerationInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="lead-generation"
      serviceName="Lead Generation"
    />
  );
}
