import type { Metadata } from "next";
import { servicePages } from "@/data/servicePages";
import ServicePageTemplate from "@/components/templates/ServicePageTemplate";
import { ServicePageSchema } from "@/components/schema/ServicePageSchema";

const data = servicePages["link-building"];

export const metadata: Metadata = {
  title: `${data.title} Services | TML Agency`,
  description: data.description,
};

export default function LinkBuildingPage() {
  return <ServicePageTemplate data={data} />;
}
