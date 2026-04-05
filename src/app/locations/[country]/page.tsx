import type { Metadata } from "next";
import { locations, serviceList } from "@/data/locations";
import type { LocationInfo } from "@/data/locations";
import { generateBreadcrumbSchema, generateLocalBusinessSchema } from "@/lib/schema";
import CountryPageClient from "./CountryPageClient";

/* ── Country config ─────────────────────────────────────────────────────────── */

interface CountryConfig {
  slug: string;
  name: string;
  dataKey: string; // value stored in locations[x].country
  description: string;
  countryCode: string; // ISO country code for schema
}

const countryConfigs: CountryConfig[] = [
  { slug: "india", name: "India", dataKey: "India", countryCode: "IN", description: "Explore TML Agency's digital marketing services across 40+ cities in India. From Delhi and Mumbai to Chandigarh and Bangalore, we help Indian businesses grow online." },
  { slug: "canada", name: "Canada", dataKey: "Canada", countryCode: "CA", description: "TML Agency delivers digital marketing services across Canada including Edmonton, Calgary, Toronto, Vancouver, and 40+ Canadian cities." },
  { slug: "united-states", name: "United States", dataKey: "USA", countryCode: "US", description: "Digital marketing services across 50+ US cities. TML Agency helps American businesses from New York to San Francisco grow their online presence." },
  { slug: "united-kingdom", name: "United Kingdom", dataKey: "UK", countryCode: "GB", description: "TML Agency provides digital marketing services across 30+ UK cities including London, Manchester, Birmingham, and Edinburgh." },
  { slug: "australia", name: "Australia", dataKey: "Australia", countryCode: "AU", description: "Digital marketing services across 20+ Australian cities. TML Agency helps businesses in Sydney, Melbourne, Brisbane, Perth, and beyond." },
  { slug: "new-zealand", name: "New Zealand", dataKey: "New Zealand", countryCode: "NZ", description: "TML Agency delivers tailored digital marketing across New Zealand including Auckland, Wellington, Christchurch, and more." },
  { slug: "uae", name: "United Arab Emirates", dataKey: "UAE", countryCode: "AE", description: "Digital marketing services across the UAE including Dubai, Abu Dhabi, Sharjah, and all seven emirates. TML Agency helps UAE businesses thrive online." },
];

const configBySlug: Record<string, CountryConfig> = {};
for (const c of countryConfigs) configBySlug[c.slug] = c;

function getCitiesForCountry(dataKey: string): Record<string, LocationInfo[]> {
  const grouped: Record<string, LocationInfo[]> = {};
  for (const loc of Object.values(locations)) {
    if (loc.country === dataKey) {
      if (!grouped[loc.state]) grouped[loc.state] = [];
      grouped[loc.state].push(loc);
    }
  }
  return grouped;
}

/* ── Static params ──────────────────────────────────────────────────────────── */

interface PageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return countryConfigs.map((c) => ({ country: c.slug }));
}

/* ── Metadata ───────────────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country } = await params;
  const config = configBySlug[country];

  if (!config) {
    return { title: "Location Not Found" };
  }

  const cities = getCitiesForCountry(config.dataKey);
  const cityCount = Object.values(cities).reduce((sum, arr) => sum + arr.length, 0);

  return {
    title: `Best Digital Marketing Agency in ${config.name}`,
    description: config.description,
    keywords: [
      `digital marketing ${config.name.toLowerCase()}`,
      `SEO ${config.name.toLowerCase()}`,
      `marketing agency ${config.name.toLowerCase()}`,
      `TML Agency ${config.name.toLowerCase()}`,
    ],
    openGraph: {
      title: `Best Digital Marketing Agency in ${config.name}`,
      description: config.description,
      url: `https://townmedialabs.com/locations/${config.slug}`,
      siteName: "TML Agency",
      type: "website",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `Best Digital Marketing Agency in ${config.name} - TML Agency` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@tmlagency",
      title: `Best Digital Marketing Agency in ${config.name}`,
      description: config.description,
      images: ["/og-image.png"],
    },
    alternates: {
      canonical: `https://townmedialabs.com/locations/${config.slug}`,
    },
  };
}

/* ── Page ────────────────────────────────────────────────────────────────────── */

export default async function CountryPage({ params }: PageProps) {
  const { country } = await params;
  const config = configBySlug[country];

  if (!config) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex items-center justify-center">
        <p>Country not found.</p>
      </div>
    );
  }

  const stateGroups = getCitiesForCountry(config.dataKey);
  const cityCount = Object.values(stateGroups).reduce((sum, arr) => sum + arr.length, 0);

  // Collect all city names for areaServed
  const allCities = Object.values(stateGroups).flat();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://townmedialabs.com" },
    { name: "Locations", url: "https://townmedialabs.com/locations" },
    { name: config.name, url: `https://townmedialabs.com/locations/${config.slug}` },
  ]);

  const professionalServiceSchema = generateLocalBusinessSchema({
    name: `TML Agency - Digital Marketing in ${config.name}`,
    description: config.description,
    url: `https://townmedialabs.com/locations/${config.slug}`,
    city: "Chandigarh",
    state: "Chandigarh",
    country: config.countryCode,
    services: serviceList.map((s) => s.name),
    areaServed: allCities.map((loc) => ({
      type: "City" as const,
      name: loc.name,
    })),
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <CountryPageClient
        countryName={config.name}
        countrySlug={config.slug}
        stateGroups={stateGroups}
        cityCount={cityCount}
        services={serviceList}
      />
    </>
  );
}
