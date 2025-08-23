# 3rd Street Boxing Gym — Full-Stack (Next.js + Prisma + Tailwind)

Modern, accessible, and localized website for **3rd Street Boxing Gym** in San Francisco (Dogpatch).

## Tech
- Next.js 14 (App Router, TypeScript)
- Tailwind CSS
- Prisma (SQLite) for classes, sessions, bookings, testimonials, newsletter
- API routes: `/api/schedule`, `/api/booking`, `/api/newsletter`

## Development
```bash
pnpm i   # or npm i / yarn
cp .env.example .env
npx prisma db push
pnpm prisma:seed
pnpm dev
```

Visit http://localhost:3000

## Notes
- Replace `public/videos/hero.mp4` and images under `/public/images` with real assets.
- Header includes keyboard-visible focus states and skip link.
- Footer contains credits: **Made by Ammar Alkheder**.
- WCAG 2.1 AA targets: high contrast, ARIA roles, labels, and proper semantics.
