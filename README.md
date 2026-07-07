# GRMR Education Website

This repository contains the public GRMR Education website. It is a Next.js site hosted through Vercel and maintained from the GitHub repository owned by GRMR Education.

Primary organization contact: `education@grmruf.org`

## Current Ownership

- GitHub repository: `grmreducation/grmr-education-website`
- Production hosting: Vercel project connected to this GitHub repository
- Production branch: `main`
- Temporary Vercel domain: use the current Vercel project URL until a custom domain is connected
- Future custom domain: `grmreducation.org`
- Contact email used throughout the site: `education@grmruf.org`

The old personal GitHub repository has been archived. Future updates should be made through this repository only.

## What This Website Uses

- Next.js: website framework
- React: page/component library
- Tailwind CSS: styling
- Vercel: hosting and automatic deployments
- GitHub: source control
- Google Forms: student sign-up, tutor sign-up, weekly feedback, monthly feedback
- Google Slides / Google Drive: lesson decks and embedded lesson previews
- Airtable: mentor directory on the Our Mentors page
- Mailto links: FAQ contact form and email buttons open the user's email app

No Vercel environment variables are required for the current site.

## Important Accounts

The website is intended to be administered from accounts controlled by GRMR Education.

- GitHub: should be owned by the `grmreducation` GitHub organization or an account controlled by `education@grmruf.org`.
- Vercel: should be owned by the GRMR Education Vercel team/account.
- Airtable: currently external; eventually transfer or recreate it under GRMR Education control.
- Google Forms / Slides / Drive: any embedded forms or lesson decks should be owned by, shared with, or documented for future GRMR Education directors.
- Squarespace/domain registrar: needed later for `grmreducation.org`.

## Local Development

Install Node.js LTS from https://nodejs.org if it is not already installed.

Then run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

Useful commands:

```bash
npm run lint
npx tsc --noEmit
npm run build
npm audit
```

Before pushing important changes, run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment

Vercel is connected to the GitHub repository. Every push to `main` should trigger a new deployment automatically.

Typical update workflow:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

After pushing:

1. Open the Vercel project.
2. Confirm the deployment succeeded.
3. Open the live site and check the page you changed.

If a deployment fails, open the failed Vercel deployment log. Most issues will be syntax errors, missing imports, broken TypeScript, or invalid JSX.

## File Structure

Major folders:

- `app/`: pages and routes
- `components/`: reusable sections and UI
- `constants/`: navigation items and FAQ content
- `public/`: images, gallery photos, icons, PDFs, and static assets
- `lib/`: small utility functions
- `types/`: TypeScript type definitions

Next.js routes are folder-based. For example:

- `app/page.tsx` -> home page
- `app/faq/page.tsx` -> Help page
- `app/form/page.tsx` -> Feedback Form page
- `app/tutors/page.tsx` -> Our Mentors page
- `app/resources/page.tsx` -> Resources page
- `app/lessons/math/page.tsx` -> Math lessons page

## Common Website Updates

### Update Navigation Links

Edit:

```text
constants/index.ts
```

Look for:

```ts
export const navItems = [...]
```

Add, remove, or rename navigation items there.

### Update FAQ Questions

Edit:

```text
constants/index.ts
```

Look for:

```ts
export const faqData = [...]
```

Each FAQ item has:

- `id`
- `question`
- `answer`

Answers can be either a string or a list of strings.

### Update the Help Page Contact Form

Edit:

```text
components/faq/ContactSection.tsx
```

The form does not use a backend service. When someone submits it, the site opens a pre-filled email to:

```text
education@grmruf.org
```

If GRMR Education later wants an in-browser form submission system, add a service such as Formspree, EmailJS, or a custom API route. That will require additional account setup.

### Update Floating Contact Bubbles

Edit:

```text
components/home/FixedContactBubbles.tsx
```

This controls the fixed bottom-left contact buttons on the home page.

Current links:

- Email: `education@grmruf.org`
- Instagram: `https://www.instagram.com/grmruf/`
- Facebook: `https://www.facebook.com/UFGRMR/`
- Discord: `https://discord.gg/db4dJS7WX3`

### Update the Home Page

The home page is assembled in:

```text
app/page.tsx
```

The main sections live in:

```text
components/home/
```

Important files:

- `HeroSection.tsx`: top hero section and primary call-to-action buttons
- `About.tsx`: about text and rotating images
- `DeliveryMethods.tsx`: virtual/in-person tutoring cards
- `SubjectsSection.tsx`: subject cards
- `ToolsSection.tsx`: learning tools/resources section
- `StudentStories.tsx`: student story carousel
- `CTASection.tsx`: purple "Ready to get involved?" section
- `FixedContactBubbles.tsx`: fixed contact buttons

### Update the Footer

Edit:

```text
app/layout.tsx
```

The footer currently displays:

```text
GRMR Education
```

### Update Student or Tutor Sign-Up Forms

Student sign-up:

```text
app/become-a-student/page.tsx
```

Tutor sign-up:

```text
app/become-a-tutor/page.tsx
```

Each page embeds a Google Form in an iframe. To replace a form:

1. Open the Google Form.
2. Click Send.
3. Copy the form link or embed link.
4. Replace the `src="..."` value in the corresponding page.
5. Test the page locally and on Vercel.

### Update Weekly or Monthly Feedback Forms

Edit:

```text
app/form/page.tsx
```

Current embedded forms:

- Weekly Feedback Form
- Monthly Feedback Form

Replace the `iframe` `src` URL if the form changes.

### Update Our Mentors / Airtable

Edit:

```text
app/tutors/page.tsx
```

This page embeds Airtable:

```text
https://airtable.com/embed/app3o2f0OSKx9zDcI/shrJV0QOMXLMgm22k?viewControls=on
```

If Airtable is transferred, duplicated, or reset each semester, Airtable may generate a new share URL. Replace the iframe `src` with the new embed URL.

If the mentor directory takes time to appear, that is usually Airtable loading its external embed and data. The page includes a loading overlay so visitors know it is working.

### Update Resources

Main Resources page:

```text
app/resources/page.tsx
```

Resource panels:

```text
components/resources/AccessibilityPanel.tsx
components/resources/TemplatesPanel.tsx
components/resources/DiagnosticPanel.tsx
```

The current Resources page opens directly to Accessibility Tools. Diagnostic Tests are not shown in the Resources filter.

To add a new resource category:

1. Create or update a panel in `components/resources/`.
2. Add the category to `FILTERS` in `app/resources/page.tsx`.
3. Add render logic for the new active filter.

### Update Lessons

Lesson pages:

```text
app/lessons/math/page.tsx
app/lessons/english/page.tsx
app/lessons/science/page.tsx
app/lessons/health/page.tsx
app/lessons/adults/page.tsx
```

Each lesson page stores lesson data near the top of the file. Most lessons are arrays of objects with fields such as:

- `title`
- `desc` or `description`
- `category`
- `url`
- `powerpointUrl`
- `powerpointEmbedUrl`
- `fileId`

For Google Slides:

- Use a public/shared Google Slides link.
- Make sure the file is accessible to anyone with the link.
- Test the preview and open/download button after changing a URL.

English lessons also use local PDFs and preview images:

```text
public/lessons/english-pdfs/
public/lessons/english-previews/
```

If adding an English PDF lesson:

1. Add the PDF to `public/lessons/english-pdfs/`.
2. Add the preview image to `public/lessons/english-previews/`.
3. Add a lesson object in `app/lessons/english/page.tsx`.
4. Confirm the `fileId` matches the file name without `.pdf` or `.png`.

### Update Gallery Photos

Gallery data:

```text
components/gallery/galleryData.ts
```

Gallery image folders:

```text
public/gallery/inperson/
public/gallery/virtual/
```

To add a photo:

1. Put the image file in the correct folder under `public/gallery/`.
2. Add a new object to `galleryImages` in `components/gallery/galleryData.ts`.
3. Use a unique `id`.
4. Use a clear `alt`, `title`, `caption`, `category`, and `date`.

Common categories:

- `vtutoring`
- `itutoring`

Keep image file sizes reasonable. Very large images slow the site down.

### Update Service Pages

Main services page:

```text
app/services/page.tsx
```

Virtual tutoring page:

```text
app/services/virtualtutoring/page.tsx
```

In-person tutoring page:

```text
app/services/inpersontutoring/page.tsx
```

These pages contain text, images, and program descriptions. Update the text directly in these files.

### Update Site Metadata

Edit:

```text
app/layout.tsx
```

Look for:

```ts
export const metadata
```

This controls the browser title and description.

## Custom Domain Setup

This is currently paused until GRMR Education is ready to pay for and manage:

```text
grmreducation.org
```

When ready:

1. Buy or manage the domain through Squarespace.
2. In Vercel, open the project.
3. Go to Settings -> Domains.
4. Add `grmreducation.org`.
5. Add `www.grmreducation.org`.
6. Vercel will show DNS records.
7. Add those records in Squarespace DNS.
8. Wait for DNS verification.
9. Confirm both domain versions open the website.

Do not guess DNS records. Use exactly what Vercel provides at the time of setup.

## Airtable Handoff

The Airtable mentor directory still needs to be transferred or recreated under a GRMR Education-controlled account.

When access is available:

1. Ask the current Airtable owner to transfer ownership or share full admin access.
2. Make sure `education@grmruf.org` has owner/admin access.
3. Confirm future directors can add/remove mentors.
4. If the public share/embed link changes, update `app/tutors/page.tsx`.
5. Redeploy through GitHub/Vercel.

Semester restart checklist:

- Archive or clear old mentor entries as needed.
- Add new mentors.
- Confirm public fields are safe to display.
- Check the Our Mentors page after updating Airtable.

## Google Forms Handoff

The website embeds several Google Forms. Future directors should know who owns each form and should keep access under GRMR Education control.

Forms currently embedded:

- Become a Student: `app/become-a-student/page.tsx`
- Become a Tutor: `app/become-a-tutor/page.tsx`
- Weekly Feedback: `app/form/page.tsx`
- Monthly Feedback: `app/form/page.tsx`

Recommended practice:

- Forms should be owned by `education@grmruf.org` or a shared GRMR Education Google Drive.
- Responses should go to a Google Sheet owned by GRMR Education.
- If a form is duplicated each semester, update the iframe URL on the website.

## Social Links

Current social links appear in the home CTA, Help page, and fixed home contact bubbles.

- Instagram: `https://www.instagram.com/grmruf/`
- Facebook: `https://www.facebook.com/UFGRMR/`
- Discord: `https://discord.gg/db4dJS7WX3`
- Email: `education@grmruf.org`

Files to update if these change:

```text
components/home/CTASection.tsx
components/home/FixedContactBubbles.tsx
components/faq/ContactSection.tsx
```

## Styling and Animation

Global styles:

```text
app/globals.css
```

Shared page transition:

```text
components/LayoutWrapper.tsx
```

Many page sections use GSAP or Framer Motion for reveal animations. Keep animation durations consistent; the current standard reveal speed is around `0.65s`.

Avoid adding heavy animations or large media files without testing performance.

## Things Not to Commit

Do not commit:

- `node_modules/`
- `.next/`
- `.env`
- local logs
- local tool downloads
- personal credentials

These are ignored in `.gitignore`.

If Git warns about very large files, stop and check before pushing.

## Troubleshooting

### The site works locally but Vercel fails

Run:

```bash
npm run build
```

Fix any errors shown locally, commit, and push again.

### A Google Form or lesson does not load

Check:

- Is the Google Form/Slides/Drive file shared publicly or with anyone who has the link?
- Is the iframe URL still valid?
- Did the file owner delete or move it?

### The mentor directory loads slowly

This is usually Airtable. The website embeds Airtable as an external iframe, so Airtable controls much of the load time.

### The contact form does not send automatically

That is expected. It opens an email draft in the user's email app. If the visitor has no email app configured, they can still use the displayed email address directly:

```text
education@grmruf.org
```

### Localhost shows an Internal Server Error after running a production build

Stop the dev server, delete `.next`, and restart:

```bash
npm run dev
```

The `.next` folder is a generated cache and can be safely deleted.

## Recommended Director Workflow

For simple text/link updates:

1. Open the repository in VS Code.
2. Find the file listed in this README.
3. Make the edit.
4. Run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

5. Commit and push:

```bash
git add .
git commit -m "Update website content"
git push
```

6. Check Vercel deployment.
7. Check the live page.

## Final Notes for Future Directors

This website is intentionally set up to be simple:

- No database is required.
- No server is required beyond Vercel.
- No environment variables are currently required.
- Most updates are made by editing text, arrays, iframe links, or image files.

When in doubt, make one small change at a time, test locally, and let Vercel confirm the deployment before making more changes.
