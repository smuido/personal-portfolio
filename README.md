# Personal Portfolio

Personal portfolio site built with React and Vite to showcase projects, experience, and background in a clean, responsive interface.

## Live Site

This project is deployed on GitHub Pages.

## Goals of the Project

- Present experience and projects in a structured, easy-to-scan layout.
- Keep content updates simple by storing text/data separately from page components.
- Maintain a consistent visual style across all pages (cards, typography, spacing, and footer behavior).

## Tech Stack

- React
- Vite
- CSS (global styles + page/component styles)

## Project Structure

- `src/App.jsx`
	- Main app shell.
	- Handles lightweight client-side route switching.
	- Renders shared layout elements (navbar, page content, footer).

- `src/pages/`
	- Route-level page components:
		- Home
		- About
		- Experience
		- Projects
		- Project detail overlay/modal view

- `src/structs/`
	- Reusable UI pieces and data structures:
		- Navbar and footer components
		- Static content/data files (`home.js`, `about.js`, etc.)

- `src/assets/`
	- Icons and images used in cards, about section, and social links.

## How Features Were Implemented

- Routing/navigation:
	- Uses `window.location.pathname` with conditional rendering for route views.
	- Navigation updates the history stack and scroll position for smooth transitions.

- Data-driven content:
	- Sections like projects/experience are rendered by mapping over arrays from `src/structs/`.
	- This keeps components reusable and makes edits easy without rewriting JSX.

- Page composition:
	- Home page combines intro text, experience cards, project cards, and skill/tool sections.
	- About page uses a section-based layout with dedicated blocks for overview, career desires, and hobbies.
	- Experience and Projects pages reuse shared card patterns for visual consistency.

- Styling system:
	- `src/index.css` defines global typography/base styles.
	- `src/App.css` manages app-level transition/layout behavior.
	- Each page has its own stylesheet in `src/pages/` to keep styles modular.
	- Shared components in `src/structs/` have local CSS files.

- Responsive behavior:
	- CSS media queries adapt layouts to mobile (single-column stacking, tightened padding/gaps).
	- Images and section blocks are constrained with max-widths and aspect ratios for consistent rendering.

- Footer placement:
	- The app shell uses a flex-column layout with `min-height: 100svh` so the footer stays anchored at the bottom on shorter pages.

## Deployment (GitHub Pages)

This portfolio is deployed with GitHub Pages.

Typical deployment flow:

1. Build the production bundle.
2. Publish the build output to the GitHub Pages source branch/folder.
3. GitHub Pages serves the latest deployed version.
4. Custom domain is then connected

## Future Improvements

- Add real image optimization pipeline (compression + modern formats).
- Add automated deployment workflow (GitHub Actions).
- Add basic accessibility and performance checks as part of CI.