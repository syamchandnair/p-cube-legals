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
});
