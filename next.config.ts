import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  async redirects() {
    return [
      {
        source: "/carrer",
        destination: "/careers",
        permanent: true,
      },
      // Fix broken service URLs that may be indexed or linked externally
      {
        source: "/services/digital-marketing",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/services/social-media-marketing",
        destination: "/services/social-media",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/services/local-seo",
        destination: "/services/seo",
        permanent: true,
      },
      // Old root-level Chandigarh pages that may still have Google rankings
      {
        source: "/instagram-marketing-agency-in-chandigarh",
        destination: "/services/social-media-in-chandigarh",
        permanent: true,
      },
      {
        source: "/seo-agency-in-chandigarh",
        destination: "/services/seo-in-chandigarh",
        permanent: true,
      },
      {
        source: "/social-media-marketing-agency-in-chandigarh",
        destination: "/services/social-media-marketing-in-chandigarh",
        permanent: true,
      },
      {
        source: "/web-design-agency-in-chandigarh",
        destination: "/services/website-development-in-chandigarh",
        permanent: true,
      },
      {
        source: "/google-ads-agency-in-chandigarh",
        destination: "/services/google-ads-in-chandigarh",
        permanent: true,
      },
      {
        source: "/branding-agency-in-chandigarh",
        destination: "/services/branding-in-chandigarh",
        permanent: true,
      },
      {
        source: "/graphic-design-agency-in-chandigarh",
        destination: "/services/graphic-design-in-chandigarh",
        permanent: true,
      },
      {
        source: "/lead-generation-agency-in-chandigarh",
        destination: "/services/lead-generation-in-chandigarh",
        permanent: true,
      },
      {
        source: "/website-development-agency-in-chandigarh",
        destination: "/services/website-development-in-chandigarh",
        permanent: true,
      },
      {
        source: "/ppc-agency-in-chandigarh",
        destination: "/services/google-ads-in-chandigarh",
        permanent: true,
      },
      {
        source: "/content-marketing-agency-in-chandigarh",
        destination: "/services/content-marketing",
        permanent: true,
      },
      {
        source: "/email-marketing-agency-in-chandigarh",
        destination: "/services/email-marketing",
        permanent: true,
      },
    ];
  },
  poweredByHeader: false,
  crossOrigin: "anonymous",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Robots-Tag",
            value: "all",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; media-src 'self'; connect-src 'self' https://www.google-analytics.com https://www.clarity.ms https://region1.google-analytics.com; frame-src 'self'; frame-ancestors 'self'; base-uri 'self'; form-action 'self';",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*\\.(?:ico|png|jpg|jpeg|gif|svg|webp|avif)$)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*\\.(?:woff|woff2|ttf|otf|eot)$)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/(.*\\.(?:js|css)$)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
