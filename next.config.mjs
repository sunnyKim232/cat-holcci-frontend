/** @type {import('next').NextConfig} */
import { i18n } from "next-i18next";

const nextConfig = {
  i18n,
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
};
export default nextConfig;
