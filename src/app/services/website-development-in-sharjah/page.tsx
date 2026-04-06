import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["sharjah"];

export const metadata: Metadata = {
  title: "Website Development Agency in Sharjah",
  description: "TML offers expert Website Development services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development sharjah", "website development agency sharjah", "website development company sharjah"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-sharjah",
  },
  openGraph: {
    title: "Website Development Agency in Sharjah",
    description: "TML offers expert Website Development services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-sharjah",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Sharjah" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Sharjah",
    description: "TML offers expert Website Development services in Sharjah. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInSharjahPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
