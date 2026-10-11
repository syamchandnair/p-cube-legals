# Practice-area navigation and dedicated pages

## Build
- Add a Practice Areas submenu to the shared desktop and mobile navigation, with links to the overview and all five detailed areas: appellate proceedings, writ petitions, matrimonial/family disputes, maintenance, and custody/guardianship.
- Keep `/practice-areas` as the overview and give every listed area its own shareable page, using the existing chambers styling and only the scope already described on the site.
- Put each area’s title, URL slug, description, and page content in one central catalog. Build the submenu, overview links, and detail pages from that catalog so a future area can be added by adding one catalog entry rather than duplicating content across pages.
- Preserve the entry disclaimer and existing consultation/contact flow. Give each area page unique metadata and a not-found state for unknown slugs.

## Technical details
- Use a dynamic TanStack file route for `/practice-areas/$slug`, with route metadata derived from the catalog; keep the catalog in a browser-safe shared module.
- Replace repeated practice-area summaries on the homepage with catalog-driven links where appropriate, and update the shared header for desktop dropdown and mobile expansion.
- Add focused tests for catalog-to-route lookup and missing-slug handling, then verify generated routes and the desktop/mobile navigation.
