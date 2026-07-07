# GRMR Education Website Handoff

This site should be owned and operated through GRMR Education-controlled accounts tied to `education@grmruf.org`.

## GitHub

- Create a GitHub account or organization for `grmreducation` using `education@grmruf.org`.
- Create a new repository for this website.
- Push this codebase to the new repository.
- Update local `origin` to the new repository URL.
- After the new repository is verified, archive or delete the old personal repository.

## Vercel

- Create a Vercel account or team using `education@grmruf.org`.
- Import the new `grmreducation` GitHub repository.
- Set the production branch to `main`.
- No environment variables are required for the current site.

## Domain

- Use `grmreducation.org` as the production domain.
- In Vercel, add `grmreducation.org` and `www.grmreducation.org` to the project.
- In Squarespace DNS, point the domain records to Vercel using the values Vercel provides.
- Make one version canonical, preferably `grmreducation.org`.

## Contact Form

- The FAQ contact form opens a pre-filled email to `education@grmruf.org`.
- No third-party contact form service is required.

## Airtable

- The Our Mentors page currently embeds Airtable.
- When Airtable access is available, transfer ownership or recreate the base under an account controlled by `education@grmruf.org`.
- After transfer, update the embed URL in `app/tutors/page.tsx` if Airtable generates a new share link.
