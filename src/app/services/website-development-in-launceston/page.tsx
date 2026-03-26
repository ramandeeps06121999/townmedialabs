import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["launceston"];

export const metadata: Metadata = {
  title: "Best Website Development Agency in Launceston | TML Agency",
  description: "TML offers expert website development services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development launceston", "website development agency launceston", "website development company launceston"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-launceston",
  },
  openGraph: {
    title: "Best Website Development Agency in Launceston | TML Agency",
    description: "TML offers expert website development services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-launceston",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Launceston | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Best Website Development Agency in Launceston | TML Agency",
    description: "TML offers expert website development services in Launceston. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInLauncestonPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
