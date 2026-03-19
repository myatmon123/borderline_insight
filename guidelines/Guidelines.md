# Borderline Insight — Project Guidelines

## General

* Use **TypeScript** for all source files (`.tsx` / `.ts`).
* Prefer responsive layouts with **Flexbox** and **CSS Grid**. Only use absolute positioning when truly necessary.
* Keep component files small and focused — extract helpers, hooks, and sub-components into their own files.
* Use the `@/*` path alias (mapped to `src/`) for imports instead of long relative paths.
* Do not add `import React from "react"` — the project uses `"jsx": "react-jsx"` (automatic runtime).

## Tech Stack

| Layer          | Technology                          |
| -------------- | ----------------------------------- |
| Framework      | React 18                            |
| Language       | TypeScript                          |
| Build Tool     | Vite 6                              |
| Styling        | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| UI Primitives  | Radix UI                            |
| Icons          | Lucide React                        |
| Utilities      | clsx, tailwind-merge, class-variance-authority |

## Project Structure

```
src/
├── app/
│   ├── App.tsx              # Root component — assembles all sections
│   └── components/
│       ├── Navbar.tsx        # Fixed top navigation bar
│       ├── Hero.tsx          # Hero / landing section
│       ├── Services.tsx      # Services grid
│       ├── About.tsx         # About us section
│       ├── Partners.tsx      # Partners & testimonials
│       ├── Contact.tsx       # Contact form
│       ├── Footer.tsx        # Site footer
│       ├── figma/            # Figma-related utilities
│       └── ui/               # Reusable UI primitives (shadcn/Radix)
├── assets/                   # Static assets (images, logos)
├── styles/
│   ├── index.css             # Entry CSS — imports fonts, tailwind, theme
│   ├── tailwind.css          # Tailwind config & source directives
│   ├── theme.css             # Design tokens (CSS custom properties)
│   └── fonts.css             # Font-face declarations
├── images.d.ts               # TypeScript module declaration for image imports
└── main.tsx                  # App entry point
```

## Design System

### Brand Colours

| Token              | Value       | Usage                        |
| ------------------ | ----------- | ---------------------------- |
| Primary dark       | `#0a2e42`   | Headings, dark backgrounds   |
| Primary medium     | `#1a5f7a`   | Nav text, secondary accents  |
| Primary accent     | `#1094c4`   | Buttons, links, highlights   |
| Accent hover       | `#0d7fa8`   | Button hover states          |
| Light accent       | `#7dd3f0`   | Hero highlights, icon tints  |
| Light background   | `#f4f8fb`   | Section alternate backgrounds|
| Icon background    | `#e8f4fb`   | Icon container backgrounds   |
| Footer background  | `#071e2b`   | Footer dark background       |

### Typography

* Base font size: **16px** (set via `--font-size` in `theme.css`).
* Headings use `clamp()` for fluid responsive sizing.
* Font weights: `400` (normal body), `500` (medium / UI elements), `600`–`700` (headings / emphasis).

### Spacing & Layout

* Max content width: `max-w-7xl` (80rem).
* Horizontal padding: `px-6` on all sections.
* Section vertical padding: `py-24`.
* Cards use `rounded-2xl` with `shadow-sm` and `hover:shadow-md`.
* Border radius token: `--radius: 0.625rem`.

### Buttons

* **Primary** — `bg-[#1094c4] text-white rounded-full` with `hover:bg-[#0d7fa8]`.
* **Outline** — `border border-white/50 text-white rounded-full` with `hover:bg-white/10`.
* Always use `rounded-full` for call-to-action buttons.
* Include `transition-colors duration-200` for smooth state changes.

### Cards

* Background: `bg-white`.
* Border: `border border-gray-100`.
* Border radius: `rounded-2xl`.
* Padding: `p-8`.
* Hover: `hover:shadow-md hover:-translate-y-1` with `transition-all duration-300`.

## Coding Conventions

* Components are exported as **named exports** (`export function ComponentName`).
* Use `lucide-react` for all iconography — do not mix icon libraries.
* Smooth-scroll navigation uses `element.scrollIntoView({ behavior: "smooth" })`.
* Each page section must have an `id` attribute matching the nav items: `hero`, `services`, `about`, `partners`, `contact`.
* Static image assets go in `src/assets/` and are imported via ES modules.
* Shared UI primitives live in `src/app/components/ui/` (shadcn-style).
