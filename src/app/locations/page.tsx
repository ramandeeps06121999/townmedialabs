import type { Metadata } from "next";
import LocationsIndexClient from "./LocationsIndexClient";
import { locations, serviceList } from "@/data/locations";

/* ── Server-side grouping (keeps 1,230-line locations file out of client JS) ── */

function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const countrySlugMap: Record<string, string> = {
  India: "india",
  Canada: "canada",
  USA: "united-states",
  UK: "united-kingdom",
  Australia: "australia",
  "New Zealand": "new-zealand",
  UAE: "uae",
};

const countryOrder = ["India", "Canada", "USA", "UK", "Australia", "New Zealand", "UAE"];

function buildGroups() {
  const grouped: Record<string, Record<string, { slug: string; name: string; description: string }[]>> = {};

  for (const loc of Object.values(locations)) {
    if (!grouped[loc.country]) grouped[loc.country] = {};
    if (!grouped[loc.country][loc.state]) grouped[loc.country][loc.state] = [];
    grouped[loc.country][loc.state].push({
      slug: loc.slug,
      name: loc.name,
      description: loc.description,
    });
  }

  return countryOrder
    .filter((c) => grouped[c])
    .map((country) => {
      const states = grouped[country];
      let cityCount = 0;
      for (const s of Object.values(states)) cityCount += s.length;
      return {
        country,
        countrySlug: countrySlugMap[country] ?? slugify(country),
        states,
        cityCount,
      };
    });
}

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "TML Agency serves businesses globally across 250+ cities in 7 countries. Explore our digital marketing services in India, Canada, USA, UK, Australia, New Zealand, and UAE.",
  keywords: [
    "digital marketing locations",
    "TML Agency locations",
    "global digital marketing agency",
    "marketing services worldwide",
    "TML Agency cities",
  ],
  openGraph: {
    title: "Our Locations",
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
    title: "Our Locations",
    description:
      "Serving businesses globally across 250+ cities in 7 countries with tailored digital marketing strategies.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://townmedialabs.com/locations",
  },
};

export default function LocationsPage() {
  const groups = buildGroups();
  const totalCities = Object.keys(locations).length;
  const totalCountries = groups.length;
  const svcList = serviceList.map((s) => ({ slug: s.slug, name: s.name }));

  return (
    <LocationsIndexClient
      groups={groups}
      totalCities={totalCities}
      totalCountries={totalCountries}
      serviceList={svcList}
    />
  );
}
