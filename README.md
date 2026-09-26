# Nomo Online — نمو أونلاين

Marketing website for Nomo Online, a growth partner for hospitality properties.
Built with Next.js (App Router) and Tailwind CSS. Supports Arabic, English,
Hindi and Urdu with a language switcher in the header (choice is remembered
per visitor).

## Pages

- `/` — Home
- `/services` — Services
- `/about` — About
- `/contact` — Contact + lead form

## Local development

```
npm install
npm run dev
```

## Content

All page text lives in `lib/dictionaries.js`, one object per language
(`HOME`, `SERVICES`, `ABOUT`, `CONTACT`). Edit the strings there to change
site copy — no other file needs to change.

## Environment variables

The contact form needs a Supabase project with a `leads` table (see
`.env.local.example` for the two variables required, and copy it to
`.env.local` for local development). The same two variables must be
added in the Vercel project's Environment Variables settings for the
live site.

## Status

- [x] Static pages, 4 languages
- [x] Contact form saves to Supabase (`leads` table)
- [x] WhatsApp notification on new lead (via CallMeBot, unreliable free service)
- [x] Email notification on new lead (via Resend, see `.env.local.example`)
- [ ] Analytics (GA4 / Meta Pixel) not yet added
- [ ] Custom domain not yet connected (nomoonline.com purchased, not yet linked)
- [ ] Official email not yet set up
