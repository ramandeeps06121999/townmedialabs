import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["ras_al_khaimah"];

export const metadata: Metadata = {
  title: "Website Development Agency in Ras Al Khaimah",
  description: "TML offers expert Website Development services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development ras al khaimah", "website development agency ras al khaimah", "website development company ras al khaimah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-ras-al-khaimah",
  },
  openGraph: {
    title: "Website Development Agency in Ras Al Khaimah",
    description: "TML offers expert Website Development services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-ras-al-khaimah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Ras Al Khaimah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Ras Al Khaimah",
    description: "TML offers expert Website Development services in Ras Al Khaimah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInRasAlKhaimahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
