export const DISCLAIMER_KEY = "pcube-disclaimer-v1";
export function hasAcceptedDisclaimer(value: string | null) {
  return value === "accepted";
}
