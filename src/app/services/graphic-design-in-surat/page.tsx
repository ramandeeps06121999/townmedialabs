import type { Metadata } from "next";
import { locations } from "@/data/locations";
import LocationServiceTemplate from "@/components/templates/LocationServiceTemplate";

const location = locations["surat"];

export const metadata: Metadata = {
  title: "Graphic Design Agency in Surat | TML Agency",
  description: "TML offers expert graphic design services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
  keywords: ["graphic design surat", "graphic design agency surat", "graphic design company surat"],
  alternates: {
    canonical: "https://townmedialabs.ca/services/graphic-design-in-surat",
  },
  openGraph: {
    title: "Graphic Design Agency in Surat | TML Agency",
    description: "TML offers expert graphic design services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    url: "https://townmedialabs.ca/services/graphic-design-in-surat",
    siteName: "TML Agency",
    type: "website",
    locale: "en_CA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Best Graphic Design Agency in Surat | TML Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Graphic Design Agency in Surat | TML Agency",
    description: "TML offers expert graphic design services in Surat. Proven results for 500+ businesses. Get a free consultation today.",
    images: ["/og-image.png"],
  },
};

export default function GraphicdesignInSuratPage() {
  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug="graphic-design"
      serviceName="Graphic Design"
    />
  );
}
