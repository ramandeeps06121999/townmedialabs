import type { Metadata } from "next";
import LocationsIndexClient from "./LocationsIndexClient";

export const metadata: Metadata = {
  title: "Our Locations | Town Media Labs",
  description:
    "Town Media Labs serves businesses globally across 250+ cities in 7 countries. Explore our digital marketing services in India, Canada, USA, UK, Australia, New Zealand, and UAE.",
  keywords: [
    "digital marketing locations",
    "TML Agency locations",
    "global digital marketing agency",
    "marketing services worldwide",
    "Town Media Labs cities",
  ],
  openGraph: {
    title: "Our Locations | Town Media Labs",
    description:
      "Serving businesses globally across 250+ cities in 7 countries with tailored digital marketing strategies.",
    url: "https://townmedialabs.com/locations",
    siteName: "TML Agency",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TML Agency Locations - Global Digital Marketing" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tmlagency",
    title: "Our Locations | Town Media Labs",
    description:
      "Serving businesses globally across 250+ cities in 7 countries with tailored digital marketing strategies.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.com/locations",
  },
};

export default function LocationsPage() {
  return <LocationsIndexClient />;
}
