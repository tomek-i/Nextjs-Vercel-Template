import MillionLint from '@million/lint';
import withBundleAnalyzer from "@next/bundle-analyzer";
import withPlugins from "next-compose-plugins";
import path from "path";
import { env } from "./env/env.mjs";

/**
 * @type {import('next').NextConfig}
 */
const config = withPlugins([[withBundleAnalyzer({
  enabled: env.ANALYZE
})]], {
  reactStrictMode: true,
  experimental: {
    instrumentationHook: true
  },
  transpilePackages: ["@"],
  webpack: (config, _) => {
    config.resolve.alias["@"] = path.resolve(process.cwd(), "src");
    return config;
  },
  rewrites() {
    return [{
      source: "/healthz",
      destination: "/api/health"
    }, {
      source: "/api/healthz",
      destination: "/api/health"
    }, {
      source: "/health",
      destination: "/api/health"
    }, {
      source: "/ping",
      destination: "/api/health"
    }];
  }
});
export default MillionLint.next({
  rsc: true
})(config);