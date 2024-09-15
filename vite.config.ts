import { vitePlugin as remix } from "@remix-run/dev"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import tsconfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    process.env.VITEST
      ? react()
      : remix({
          ssr: false,
          future: {
            v3_fetcherPersist: true,
            v3_relativeSplatPath: true,
            v3_throwAbortReason: true,
          },
        }),
    tsconfigPaths(),
  ],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
    env: loadEnv("test", process.cwd(), ""),
    include: ["./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: [".*\\/node_modules\\/.*", ".*\\/build\\/.*", ".*\\/postgres-data\\/.*"],
  },
})
