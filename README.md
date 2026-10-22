# Xsrazy Landing Page

The personal portfolio landing page of Rahmatul Usra: one lightweight page with a hero greeting, his personal tagline, and a projects showcase, serving as his public face and the entry point to his projects.

**Live: https://xsrazy.web.id**

## About

Xsrazy Landing Page is a single-page portfolio that keeps everything on one screen: a short hero introduction and a "View My Work" button that opens the project list in a modal, so visitors reach the work in one click instead of navigating sub-pages.

## Features

- Hero section with a "Welcome to my portfolio" greeting, the name Rahmatul Usra, and his personal tagline
- Projects modal: a grid of project cards (image, title, description, and a View Site link), showing six projects first, with a "Show More Projects" button for the rest
- Social and contact links in a header dropdown menu (GitHub, Instagram, Facebook, Twitter, Telegram)
- Light and dark theme through a theme provider
- Responsive layout with a mobile menu

## Architecture

- Next.js 15 (App Router) with React 19 and TypeScript
- Tailwind CSS styling, with shadcn/ui components (button, dialog, dropdown menu) and lucide-react icons
- No backend: no API routes, database, or user accounts; all content is static and rendered by Next.js

## Project Structure

```
app/         page.tsx and layout.tsx
components/  Page UI components
public/      Static assets
```

## Credits

Created by [Xsrazy](https://github.com/xsrazy).

## License

MIT License. See [LICENSE](LICENSE) for details.

<a href="https://www.buymeacoffee.com/xsrazy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
