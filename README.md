# Assessment List Exercise

A Vite + React + TypeScript implementation of the assessment dashboard exercise.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Build

```bash
npm run build
npm run preview
```

## Implementation approach

I built the page as a small set of reusable React components so the repeated UI stays clean and easy to maintain. The app loads assessment data from a mocked service that returns a static JSON file after a short timeout, which lets the skeleton loading state feel realistic. Repeated pieces such as the search field, select field, assessment card, progress metric, and progress bar are split into separate components, with each component keeping its own CSS file for better organization.

For the design, I followed the provided screenshot closely: a compact header, rounded bordered cards, right-aligned meta details, slim progress bars, and pill-shaped monitor buttons. The loading skeletons use a shimmer animation, the loaded content fades in, and each progress bar animates smoothly to its final width. Accessibility was handled with semantic headings, list structure, clear button labels, progressbar roles, and keyboard-visible focus styles.
