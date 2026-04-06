import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["toowoomba"];

export const metadata: Metadata = {
  title: "Website Development Agency in Toowoomba",
  description: "TML offers expert Website Development services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development toowoomba", "website development agency toowoomba", "website development company toowoomba"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-toowoomba",
  },
  openGraph: {
    title: "Website Development Agency in Toowoomba",
    description: "TML offers expert Website Development services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-toowoomba",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Toowoomba" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Toowoomba",
    description: "TML offers expert Website Development services in Toowoomba. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInToowoombaPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
