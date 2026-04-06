import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServicePage from "@/components/templates/LocationServicePage";

const location = locations["milton_keynes"];

export const metadata: Metadata = {
  title: "Website Development Agency in Milton Keynes",
  description: "TML offers expert Website Development services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["website development milton keynes", "website development agency milton keynes", "website development company milton keynes"],
  alternates: {
    canonical: "https://townmedialabs.com/services/website-development-in-milton-keynes",
  },
  openGraph: {
    title: "Website Development Agency in Milton Keynes",
    description: "TML offers expert Website Development services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.com/services/website-development-in-milton-keynes",
    siteName: "TML Agency",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Website Development Agency in Milton Keynes" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Website Development Agency in Milton Keynes",
    description: "TML offers expert Website Development services in Milton Keynes. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function WebsiteDevelopmentInMiltonKeynesPage() {
  return (
    <LocationServicePage
      location={location}
      serviceSlug="website-development"
      serviceName="Website Development"
    />
  );
}
