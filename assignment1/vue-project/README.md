# Campus Corner – a Vue static page

IN3288 Web Front-End Design, Assignment 1.

## Theme

**Campus Corner** is a fictional student café. The page is for students who want a quiet place to read, chat and take a break between classes. Its main message: *a calm, friendly place to stop between classes, with clear drinks, hours and location.*

The visual style is a café chalkboard: deep green boards, chalk-white text and a marigold accent.

## Page content (one page, no back end)

1. **Header and hero** – café name, short welcome message and a button that jumps to the hours and location.
2. **The space** – a short introduction and three highlights.
3. **Three drinks to start with** – each drink has the same rows (price, size, taste, caffeine, best for) so they are easy to compare.
4. **Look around** – three illustrated views of the café.
5. **Visit us** – opening hours (today is highlighted), location and contact details.

All café details, prices, address, e-mail and phone number are **sample information** and are labelled as such on the page.

## Where things are defined

| What | File |
| --- | --- |
| All page text, prices, hours and image references | `src/data/cafe.js` |
| Page layout (which sections appear, in which order) | `src/App.vue` |
| Section components with their own styles | `src/components/*.vue` |
| Colours, fonts, spacing and base styles | `src/assets/main.css` |
| Images (SVG illustrations) | `src/assets/*.svg` |

## Install and run

Requires Node.js 22.18 or newer (see `engines` in `package.json`).

```sh
npm install
npm run dev      # development server
npm run build    # production build into dist/
```

## How the agent helped

I used an AI assistant to create the project structure, write the first version of the components and styles, and generate the illustrations. See `PROMPTS.md` for the prompts, the revisions and the problems I ran into. I reviewed the result, checked the content and the display at desktop and mobile widths, and decided on the changes.
