"use client";

import dynamic from "next/dynamic";

// These components are non-critical UI overlays. Loading them client-side only
// with ssr:false removes their JS from the initial server-rendered bundle,
// reducing Total Blocking Time and improving PageSpeed.
const WhatsAppFloat = dynamic(() => import("@/components/ui/WhatsAppFloat"), {
  ssr: false,
});
const StickyMobileCTA = dynamic(
  () => import("@/components/ui/StickyMobileCTA"),
  { ssr: false }
);

export default function LayoutExtras() {
  return (
    <>
      <WhatsAppFloat />
      <StickyMobileCTA />
    </>
  );
}
