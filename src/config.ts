export const mobileBreakPoint = 768; //px

type Env = "production" | "development";
function env (e?: string): Env | null {
  if (e !== "production" && e !== "development") {
    return null;
  }
  return e;
}

const useEnv: "production" | "development" = env(process.env.BUILD_ENVIRONMENT)
  || env(process.env.NEXT_PUBLIC_BUILD_ENVIRONMENT)
  || 'development';
const host = process.env.VERCEL_URL
  || process.env.NEXT_PUBLIC_VERCEL_URL
  || 'localhost:3000';
const protocol = host.startsWith("localhost")
  ? "http"
  : "https";

interface EnvironmentConfig {
  URL: string,
  API_ENDPOINT: string
}

export const config = {
  all: {
    development: {
      URL: `${protocol}://${host}`,
      API_ENDPOINT: `${protocol}://${host}/api`,
    } as EnvironmentConfig,
    production: {
      // Hardcode so it uses the nice domain
      //URL: `https://example.com`,
      URL: `${protocol}://${host}`,
      // NOTE: The below requires CORS setup on the endpoints to work
      API_ENDPOINT: `${protocol}://${host}/api`,
    } as EnvironmentConfig
  },
  // The enviroment this build is running on
  builtName: useEnv,
  built: null as any as EnvironmentConfig,
};
config.built = config.all[useEnv];

// Only for deubgging...
//const g = typeof global === 'undefined' ? window : global;
//g.config = config;
