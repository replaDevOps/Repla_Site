# REPLA Technologies

Official marketing website for REPLA Technologies Pvt. Ltd. — AI-first IT services, bilingual English / Arabic.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- next-intl (`/en`, `/ar`)
- Framer Motion

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — locale routing sends you to `/en`.

## Contact form

The form validates on the client and posts to `/api/contact`. Submissions are saved to Brevo when `BREVO_API_KEY` and `BREVO_CONTACT_LIST_ID` are set. Optional email notifications are sent when `RESEND_API_KEY` is set. Without either integration, the UI states that delivery is not configured and points to `hr.replatech@gmail.com`.

See `.env.example`.

## Content policy

Public pages do not invent clients, case studies, testimonials, team biographies, or awards. Portfolio and team routes exist as honest empty states until materials can be published.
