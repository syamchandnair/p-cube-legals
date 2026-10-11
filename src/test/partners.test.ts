import { describe, expect, it } from "vitest";

import { PARTNERS, getPartnerPhoto } from "@/lib/partners";

describe("Partners catalog", () => {
  it("lists the three placeholder partners with unique ids and complete fields", () => {
    expect(PARTNERS).toHaveLength(3);
    expect(new Set(PARTNERS.map((partner) => partner.id)).size).toBe(PARTNERS.length);
    for (const partner of PARTNERS) {
      expect(partner.name.trim()).not.toBe("");
      expect(partner.title.trim()).not.toBe("");
      expect(partner.description.trim()).not.toBe("");
    }
  });

  it("returns no photo when none is set or the file is unknown", () => {
    expect(getPartnerPhoto()).toBeUndefined();
    expect(getPartnerPhoto("does-not-exist.jpg")).toBeUndefined();
  });
});
