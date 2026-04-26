# Lateef Kassim Portfolio

Professional portfolio website showcasing full-stack, mobile, and blockchain development work.

## Live Links

- Portfolio: [https://lateefk.github.io/React-Portfolio](https://lateefk.github.io/React-Portfolio)
- LinkedIn: [https://linkedin.com/in/abdullateef-kassim-4a4b83263](https://linkedin.com/in/abdullateef-kassim-4a4b83263)
- GitHub: [https://github.com/Lateefk](https://github.com/Lateefk)

## Featured Case Studies

### Nixven (Private Repository)

Lead capture and qualification platform for visa and study-abroad consultants.

- Structured intake for destination, budget, documentation, and timeline
- Unified lead pipeline across website, agent links, and email
- Built to reduce unqualified enquiries and improve consult booking conversion
- Early-access usage includes 1,000+ inquiry records and cross-country agency adoption

### Latbridge (Private Repository)

AI-powered real estate intelligence platform for faster property discovery and agent matching.

- AI search and recommendation workflows for relevant property discovery
- Verified listings and direct buyer-agent communication flows
- Market insight features for better decision support
- Platform positioning includes 10,000+ listings, 5,000+ users, and 500+ verified agents

> Private repositories: architecture walkthrough and selected code samples are available on request.

## Tech Stack

- React
- React Icons
- Swiper
- CSS3

## Local Development

The downloadable CV is a single file: **`public/assets/lateefcv.pdf`**. Replace that file to update the “Download CV” button (no code changes required).

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Lint (ESLint + Next rules)

Next.js 16 no longer ships a `next lint` CLI; this repo uses ESLint directly:

```bash
npm run lint
```

## Contact Flow Security

This portfolio uses a `mailto:` based contact flow to avoid exposing third-party service keys in client-side code.

For production-grade contact processing, route submissions through a backend endpoint with server-side validation and rate limiting.

## Next Steps Roadmap

The project now runs on Next.js (export mode for GitHub Pages). Planned upgrades:

1. Add dedicated project detail routes and richer case-study sections.
2. Add unit/integration tests for key components.
3. Add CI checks (lint + build + tests) with GitHub Actions.
4. Add backend contact endpoint with validation and rate-limiting.
5. Introduce analytics and performance budgets for ongoing optimization.

## License

This project is for personal portfolio use.
