import { describe, expect, it } from 'vitest';
import { hasAcceptedDisclaimer } from '../lib/disclaimer';
describe('Informational entry consent', () => {
  it('requires explicit acceptance before dismissing the entry disclaimer', () => {
    expect(hasAcceptedDisclaimer(null)).toBe(false);
    expect(hasAcceptedDisclaimer('declined')).toBe(false);
    expect(hasAcceptedDisclaimer('accepted')).toBe(true);
  });
});
