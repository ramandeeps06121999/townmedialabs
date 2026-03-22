import type { Metadata } from "next";
import ChandigarhPageClient from "./ChandigarhPageClient";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency in Chandigarh | TML Agency",
  description:
    "TML is the leading digital marketing agency in Chandigarh offering branding, SEO, Google Ads, social media marketing, web development, and more. 500+ brands served, 15+ years of experience.",
  keywords: [
    "digital marketing agency chandigarh",
    "best digital marketing company chandigarh",
    "seo company chandigarh",
    "branding agency chandigarh",
    "social media marketing chandigarh",
    "google ads chandigarh",
    "web development chandigarh",
  ],
};

export default function ChandigarhPage() {
  return <ChandigarhPageClient />;
}
