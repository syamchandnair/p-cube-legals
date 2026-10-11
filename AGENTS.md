<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Architecture
- Keep public content in distinct TanStack file routes and use shared chambers chrome in the root; each page remains directly shareable with its own metadata.
- Keep entry consent in session storage and require explicit acceptance; consent is visit-scoped and is not client or case data.
- The consultation desk downloads an unsent draft until verified contact details and a delivery service are supplied; never imply a draft was submitted.
- Define the visual palette in global semantic CSS tokens; page elements must remain theme-adherent.
- Keep practice-area details in one shared catalog that drives overview links, dedicated pages, and the navigation submenu, so additions do not require repeated content edits.
- Keep advocate/partner profiles in one shared catalog (`src/lib/partners.ts`) that drives the chambers page, so adding or editing a partner does not require page markup changes.
