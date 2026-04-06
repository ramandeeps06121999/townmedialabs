/**
 * Server component wrapper for LocationServiceTemplate.
 *
 * Prepares data on the server so the heavy data modules (locations, servicePages,
 * blogArticles, industries, serviceSeoContent, etc.) are NOT bundled into client JS.
 * The client component only receives the small pre-computed slice it needs.
 */

import { prepareLocationServiceData } from "@/lib/locationServiceData";
import type { LocationInfo } from "@/data/locations";
import LocationServiceTemplate from "./LocationServiceTemplate";

interface Props {
  location: LocationInfo;
  serviceSlug: string;
  serviceName: string;
}

export default function LocationServicePage({ location, serviceSlug, serviceName }: Props) {
  const preparedData = prepareLocationServiceData(serviceSlug, location.slug);

  return (
    <LocationServiceTemplate
      location={location}
      serviceSlug={serviceSlug}
      serviceName={serviceName}
      preparedData={preparedData}
    />
  );
}
