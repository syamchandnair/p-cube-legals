// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static GitHub Pages build: `GITHUB_PAGES=true bun run build` (see .github/workflows/pages.yml).
// Normal builds (Lovable, Cloudflare) are unchanged. BASE_PATH is "/" for a custom domain
// or "/<repo>/" for a project site.
const githubPages = process.env["GITHUB_PAGES"] === "true";

export default defineConfig({
  ...(githubPages && {
    nitro: false,
    vite: { base: process.env["BASE_PATH"] ?? "/" },
  }),
  tanstackStart: {
    ...(githubPages && { prerender: { enabled: true, crawlLinks: true } }),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
