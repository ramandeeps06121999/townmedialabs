import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["exeter"];

export const metadata: Metadata = {
  title: "Website Development Agency in Exeter",
  description: "TML offers expert Website Development services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development exeter", "website development agency exeter", "website development company exeter"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-exeter",
  },
  openGraph: {
    title: "Website Development Agency in Exeter",
    description: "TML offers expert Website Development services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-exeter",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Exeter" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Exeter",
    description: "TML offers expert Website Development services in Exeter. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInExeterPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
