import { describe, expect, it } from 'vitest';
import { DISCLAIMER_TEXT, hasAcceptedDisclaimer } from '../lib/disclaimer';
describe('Informational entry consent', () => {
  it('requires explicit acceptance before dismissing the entry disclaimer', () => {
    expect(hasAcceptedDisclaimer(null)).toBe(false);
    expect(hasAcceptedDisclaimer('declined')).toBe(false);
    expect(hasAcceptedDisclaimer('accepted')).toBe(true);
  });
  it('keeps the Bar Council of India disclaimer wording shared by the entry modal and footer', () => {
    expect(DISCLAIMER_TEXT).toBe(
      'The rules of the Bar Council of India prohibit advocates from advertising or soliciting work. This website provides information about P Cube Legals only at your request.',
    );
  });
});
