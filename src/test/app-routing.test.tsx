import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { PRACTICE_AREAS, getPracticeArea } from "@/lib/practice-areas";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("lists the five requested practice-area pages in the shared catalog", () => {
    expect(PRACTICE_AREAS.map((area) => area.slug)).toEqual([
      "appellate-proceedings",
      "writ-petitions",
      "matrimonial-family-disputes",
      "maintenance-proceedings",
      "custody-guardianship",
    ]);
  });

  it("resolves known slugs and leaves unknown practice areas unmatched", () => {
    expect(getPracticeArea("appellate-proceedings")?.shortTitle).toBe("Appellate proceedings");
    expect(getPracticeArea("unknown-area")).toBeUndefined();
  });

  it("routes each practice-area slug to its own detail page, not the overview", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    for (const { slug } of PRACTICE_AREAS) {
      const last = router.matchRoutes(`/practice-areas/${slug}`).at(-1);
      expect(last?.routeId).toBe("/practice-areas_/$slug");
      expect(last?.params).toEqual({ slug });
    }
    expect(router.matchRoutes("/practice-areas").at(-1)?.routeId).toBe("/practice-areas");
  });

  it("loads serializable data for known slugs and not-found for unknown ones", async () => {
    const { Route } = await import("@/routes/practice-areas_.$slug");
    const load = (slug: string) => (Route.options.loader as (c: { params: { slug: string } }) => unknown)({ params: { slug } });

    const data = load("writ-petitions");
    expect(JSON.parse(JSON.stringify(data))).toEqual(data);
    expect(() => load("unknown-area")).toThrow();
  });
});
