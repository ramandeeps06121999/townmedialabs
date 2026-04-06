import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["dehradun"];

export const metadata: Metadata = {
  title: "Website Development Agency in Dehradun",
  description: "TML offers expert Website Development services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development dehradun", "website development agency dehradun", "website development company dehradun"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-dehradun",
  },
  openGraph: {
    title: "Website Development Agency in Dehradun",
    description: "TML offers expert Website Development services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-dehradun",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Dehradun" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Dehradun",
    description: "TML offers expert Website Development services in Dehradun. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsitedevelopmentInDehradunPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
