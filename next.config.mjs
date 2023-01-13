import { z } from "zod";

const parseResult = z
  .object({
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1)
  })
  .safeParse(process.env);

if (!parseResult.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...Object.entries(parseResult.error.format())
      .map(([name, value]) => {
        if (value && "_errors" in value) {
          return `${name}: ${value._errors.join(", ")}\n`;
        }
      })
      .filter(Boolean)
  );
  throw new Error("Invalid environment variables");
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US"
  }
};

export default nextConfig;
