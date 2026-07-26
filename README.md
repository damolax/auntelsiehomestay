# Aunt Elsie's Homestay Conversion Mockup

A dependency-free, multi-route static website mockup for Aunt Elsie's Homestays & Educational Services Agency.

## Preview locally

From this folder:

```bash
python -m http.server 4173
```

Open `http://localhost:4173`.

## Deploy

Push the folder to GitHub and import the repository into Vercel. The project has no install or build step. Vercel will serve the static files and use `vercel.json` for page routes.

## Important production notes

- The enquiry form opens a pre-addressed email to `info@elsiehomestay.com`. Connect a production form endpoint or CRM before launch if server-side lead capture is required.
- Images are currently loaded from the existing WordPress media library. Download and optimize approved originals into the repository before replacing the live WordPress site.
- Confirm the two public phone numbers, current institution relationships, testimonials, screening wording and all service terms before production launch.
- No unverified prices or statistics are displayed.
