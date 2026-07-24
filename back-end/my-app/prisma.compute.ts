import { defineComputeConfig } from "@prisma/compute-sdk/config";

export default defineComputeConfig({
  app: {
    name: "my-app",
    framework: "hono",
    httpPort: 8080,
    env: ".env",
  },
});
