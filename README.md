# Nana Portfolio

This project is set up to be easy for a beginner to edit.

## Best place to start

Open `src/data/portfolio.js`.

That file contains almost all of the content for the site:

- your name
- headline
- about text
- skills
- projects
- section headings
- email and social links
- resume file path

## Other useful files

- `src/App.jsx`: page layout
- `src/components/`: reusable UI pieces
- `src/index.css`: shared styles
- `tailwind.config.js`: colors, fonts, and shadows
- `public/resume/Nana-Resume.pdf`: replace this with your real resume

## Run the project

If Node is not installed globally on your computer, use:

```bash
./dev-local.sh
```

To build the site:

```bash
./build-local.sh
```

## Deploy to GitHub Pages

This repo is set up to deploy to:

`https://github.com/Nanadwuma/nanaportfolio`

Run:

```bash
npm run deploy
```

If you are using the bundled local Node runtime on this machine, run:

```bash
PATH="$(pwd)/.local/node-v24.14.1-darwin-arm64/bin:$PATH" npm run deploy
```
