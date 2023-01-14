declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    // This will default to `VERCEL_URL` on deployment. Not needed in production.
    NEXTAUTH_URL: string;
    // Must be set when running in production. Automatically generated during development.
    NEXTAUTH_SECRET?: string;
    // Set by vercel during deployment.
    VERCEL_URL?: string;
  }
}
