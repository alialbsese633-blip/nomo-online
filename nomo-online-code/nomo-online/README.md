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

## Status

- [x] Static pages, 4 languages
- [ ] Contact form is not yet connected to a database (see the TODO in
      `app/api/contact/route.js`) — submissions are currently only logged,
      not stored
- [ ] Analytics (GA4 / Meta Pixel) not yet added
