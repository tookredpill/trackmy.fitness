import { z } from "zod";

const { success, error } = z
  .object({
    DATABASE_URL: z.string().url(),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string() : z.string().url()
    ),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional()
  })
  .safeParse(process.env);

if (!success) {
  console.error(
    "❌ Invalid environment variables:\n",
    ...Object.entries(error.format())
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
